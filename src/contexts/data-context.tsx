'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useAuth } from './auth-context';
import { db } from '@/lib/firebase';
import { 
  collection, 
  query, 
  onSnapshot, 
  doc, 
  addDoc,
  updateDoc, 
  deleteDoc, 
  serverTimestamp, 
  orderBy 
} from 'firebase/firestore';
import { useToast } from '@/components/ui/use-toast';
import { Order, Product, Customer, Supplier, GameModality, Transaction, RecurringExpense, PurchaseItem } from '@/types';

interface DataContextType {
  products: Product[];
  orders: Order[];
  customers: Customer[];
  suppliers: Supplier[];
  gameModalities: GameModality[];
  transactions: Transaction[];
  recurringExpenses: RecurringExpense[];
  purchaseItems: PurchaseItem[];
  loading: boolean;
  addProduct: (data: Partial<Product>) => Promise<void>;
  updateProduct: (id: string, data: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const { toast } = useToast();

  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [gameModalities, setGameModalities] = useState<GameModality[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recurringExpenses, setRecurringExpenses] = useState<RecurringExpense[]>([]);
  const [purchaseItems, setPurchaseItems] = useState<PurchaseItem[]>([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubs: (() => void)[] = [];

    // Função auxiliar para assinar coleções
    const subscribe = (collectionName: string, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
      // Tenta ordenar por createdAt se possível, senão pega a coleção padrão
      const q = query(collection(db, collectionName)); 
      
      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setter(data);
      }, (error) => {
        console.error(`Erro ao sincronizar ${collectionName}:`, error);
      });
      unsubs.push(unsub);
    };

    subscribe('products', setProducts);
    subscribe('orders', setOrders);
    subscribe('customers', setCustomers);
    subscribe('suppliers', setSuppliers);
    subscribe('game_modalities', setGameModalities);
    subscribe('transactions', setTransactions);
    subscribe('recurring_expenses', setRecurringExpenses);
    subscribe('purchase_items', setPurchaseItems);

    setLoading(false);

    return () => {
      unsubs.forEach(unsub => unsub());
    };
  }, [user]);

  // Exemplo de funções CRUD para Produtos
  const addProduct = async (data: Partial<Product>) => {
    try {
      await addDoc(collection(db, 'products'), { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      toast({ title: "Produto adicionado com sucesso!" });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Erro", description: "Falha ao adicionar produto." });
      throw error;
    }
  };

  const updateProduct = async (id: string, data: Partial<Product>) => {
    try {
      await updateDoc(doc(db, 'products', id), { ...data, updatedAt: serverTimestamp() });
      toast({ title: "Produto atualizado!" });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Erro", description: "Falha ao atualizar produto." });
      throw error;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      toast({ title: "Produto removido!" });
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Erro", description: "Falha ao remover produto." });
      throw error;
    }
  };

  return (
    <DataContext.Provider value={{
      products, orders, customers, suppliers, gameModalities, transactions, recurringExpenses, purchaseItems,
      loading, addProduct, updateProduct, deleteProduct
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};