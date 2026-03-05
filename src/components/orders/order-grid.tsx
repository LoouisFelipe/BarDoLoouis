'use client';

import React, { useState } from 'react';
import { useOpenOrders } from '@/hooks/use-open-orders';
import { OrderCard, OrderCardSkeleton } from './OrderCard';
import { OrderManagementModal } from './order-management-modal';
import { NewOrderModal } from './new-order-modal';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Order } from '@/lib/schemas';

/**
 * @fileOverview Grid responsivo de comandas abertas.
 * CTO: Implementa o layout Mobile First e gestão de estados de modais.
 */
export const OrderGrid = () => {
  const { openOrders, loading, error, updateOrder, deleteOrder } = useOpenOrders();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // CDO: Filtragem simples para busca rápida no balcão
  const filteredOrders = openOrders.filter(order => 
    order.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="p-8 text-center text-destructive font-black uppercase tracking-widest border-2 border-destructive/20 rounded-3xl bg-destructive/5">
        Erro ao sincronizar comandas. Verifique a conexão.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Barra de Ações: Mobile First (Stack no mobile, Row no desktop) */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between px-1">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="BUSCAR COMANDA..." 
            className="pl-12 h-14 bg-card border-2 font-bold uppercase text-xs tracking-widest rounded-2xl focus-visible:ring-primary/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={() => setIsNewOrderModalOpen(true)}
          className="w-full sm:w-auto h-14 px-8 font-black uppercase tracking-[0.15em] text-xs gap-3 shadow-xl shadow-primary/10 rounded-2xl active:scale-95 transition-all"
        >
          <PlusCircle size={20} />
          Nova Comanda
        </Button>
      </div>

      {/* Grid Responsivo: 1 col (mobile) -> 2 (sm) -> 3 (lg) -> 4 (xl) -> 5 (2xl) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {loading ? (
          // CTO: Skeletons obrigatórios para evitar layout shift
          Array.from({ length: 10 }).map((_, i) => (
            <OrderCardSkeleton key={i} />
          ))
        ) : filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              displayName={order.displayName}
              onClick={() => setSelectedOrder(order)}
            />
          ))
        ) : (
          <div className="col-span-full py-24 text-center border-2 border-dashed rounded-[40px] border-muted/40 bg-muted/5">
            <p className="text-muted-foreground font-black uppercase tracking-[0.2em] text-[10px]">
              {searchTerm ? 'Nenhuma comanda encontrada' : 'Nenhuma comanda aberta'}
            </p>
          </div>
        )}
      </div>

      {/* Modais de Gestão Desacoplados */}
      {selectedOrder && (
        <OrderManagementModal
          open={!!selectedOrder}
          onOpenChange={(open) => !open && setSelectedOrder(null)}
          existingOrder={selectedOrder}
          onUpdateOrder={updateOrder}
          onDeleteOrder={deleteOrder}
        />
      )}

      <NewOrderModal 
        open={isNewOrderModalOpen}
        onOpenChange={setIsNewOrderModalOpen}
        onSuccess={(order) => {
          setSelectedOrder(order);
          setIsNewOrderModalOpen(false);
        }}
      />
    </div>
  );
};