'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  FirestoreError,
  query,
  where,
  runTransaction,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';
import { Order, OrderItem, Customer, OrderSchema, OrderItemSchema } from '@/lib/schemas';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useMemoFirebase } from '@/hooks/use-memo-firebase';

/**
 * @fileOverview Gestão de comandas ativas no PDV.
 * CTO: Blinda o acesso à instância de banco "bardoluis" e garante performance mobile.
 */

export interface UseOpenOrdersResult {
  openOrders: Order[];
  loading: boolean;
  error: FirestoreError | null;
  createOrder: (data: { displayName: string; customerId?: string | null }) => Promise<Order>;
  createOrderForNewCustomer: (customerName: string) => Promise<Order>;
  updateOrder: (orderId: string, items: OrderItem[]) => Promise<void>;
  updateOrderCustomer: (orderId: string, customerId: string, displayName: string) => Promise<void>;
  deleteOrder: (orderId: string) => Promise<void>;
}

export const useOpenOrders = (): UseOpenOrdersResult => {
  const db = useFirestore();
  const [openOrders, setOpenOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  // CTO: Uso do hook especializado para evitar loops infinitos em listeners
  const ordersCol = useMemoFirebase(() => db ? collection(db, 'open_orders') : null, [db]);

  useEffect(() => {
    if (!db || !ordersCol) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    const q = query(ordersCol, where('status', '==', 'open'));

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        const orders: Order[] = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: (data.createdAt?.toDate ? data.createdAt.toDate() : new Date()),
            closedAt: (data.closedAt?.toDate ? data.closedAt.toDate() : null),
          } as Order;
        });
        setOpenOrders(orders);
        setError(null);
        setLoading(false);
      },
      (err: FirestoreError) => {
        const contextualError = new FirestorePermissionError({
            operation: 'list',
            path: 'open_orders'
        });
        errorEmitter.emit('permission-error', contextualError);
        setError(err);
        setLoading(false);
        // CTO: Se não temos permissão, paramos de escutar para evitar loops de erro.
        unsubscribe();
      }
    );

    return () => unsubscribe();
  }, [db, ordersCol]);

  const createOrder = useCallback(async (data: { displayName: string; customerId?: string | null }): Promise<Order> => {
    if (!db) throw new Error("Firestore não sincronizado.");
    
    try {
      const orderRef = doc(collection(db, 'open_orders'));
      const newOrder: Order = {
          id: orderRef.id,
          displayName: data.displayName.trim(),
          customerId: data.customerId ?? null,
          items: [],
          total: 0,
          status: 'open',
          createdAt: new Date(),
          closedAt: null,
      };
      
      // CTO: Escrita atômica com timestamp do servidor
      await setDoc(orderRef, {
          ...newOrder,
          createdAt: serverTimestamp(),
      });
      return newOrder;
    } catch (err) {
      console.error("Erro ao criar comanda:", err);
      throw err;
    }
  }, [db]);

  const createOrderForNewCustomer = useCallback(async (customerName: string): Promise<Order> => {
    if (!db) throw new Error("Database offline.");

    try {
      return await runTransaction(db, async (transaction) => {
        const customerRef = doc(collection(db, 'customers'));
        const orderRef = doc(collection(db, 'open_orders'));

        const newCustomer: Omit<Customer, 'id'> = {
          name: customerName.trim(),
          contact: '',
          balance: 0,
          creditLimit: null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        };

        const newOrder: Order = {
          id: orderRef.id,
          displayName: customerName.trim(),
          customerId: customerRef.id,
          items: [],
          total: 0,
          status: 'open',
          createdAt: new Date(),
          closedAt: null,
        };

        transaction.set(customerRef, newCustomer);
        transaction.set(orderRef, { ...newOrder, createdAt: serverTimestamp() });
        
        return newOrder;
      });
    } catch (err) {
      console.error("Erro na transação de novo cliente + comanda:", err);
      throw err;
    }
  }, [db]);


  const updateOrder = useCallback(async (orderId: string, items: OrderItem[]) => {
    if (!db) return;
    
    try {
      const orderRef = doc(db, 'open_orders', orderId);
      
      // CFO: Garantindo que o cálculo do total seja preciso e baseado em números válidos
      const total = items.reduce((sum, item) => sum + (Number(item.unitPrice) || 0) * (Number(item.quantity) || 0), 0);
      
      // CTO: Sanitização explícita para evitar 'undefined' no Firestore
      const sanitizedItems = items.map(item => ({
        productId: item.productId ?? null,
        name: item.name ?? 'Produto Indefinido',
        quantity: Number(item.quantity) || 0,
        unitPrice: Number(item.unitPrice) || 0,
        category: item.category ?? null,
        observation: item.observation ?? null,
        addedAt: item.addedAt ?? new Date().toISOString()
      }));
      
      return await updateDoc(orderRef, {
          items: sanitizedItems,
          total: total,
          updatedAt: serverTimestamp()
      });
    } catch (err) {
      console.error("Erro ao atualizar itens da comanda:", err);
      throw err;
    }
  }, [db]);

  const updateOrderCustomer = useCallback(async (orderId: string, customerId: string, displayName: string) => {
    if (!db) return;
    const orderRef = doc(db, 'open_orders', orderId);
    return updateDoc(orderRef, {
        customerId,
        displayName,
        updatedAt: serverTimestamp()
    });
  }, [db]);

  const deleteOrder = useCallback(async (orderId: string) => {
    if (!db) return;
    const orderRef = doc(db, 'open_orders', orderId);
    return deleteDoc(orderRef);
  }, [db]);

  return { 
    openOrders, 
    loading, 
    error, 
    createOrder, 
    createOrderForNewCustomer, 
    updateOrder, 
    updateOrderCustomer,
    deleteOrder 
  };
};
