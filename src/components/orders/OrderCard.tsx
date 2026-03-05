'use client';

import React from 'react';
import { Order } from '@/lib/schemas';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingBasket, Clock } from 'lucide-react';

interface OrderCardProps {
  order?: Order;
  displayName: string;
  onClick: () => void;
  isLoading?: boolean;
}

/**
 * @fileOverview Componente de Card de Comanda.
 * CTO: Consolidado com o Skeleton central para evitar erros de import.
 */
export const OrderCard: React.FC<OrderCardProps> = ({ order, displayName, onClick, isLoading }) => {
  if (isLoading) return <OrderCardSkeleton />;

  const isOccupied = !!order && order.items.length > 0;
  const total = order?.total ?? 0;
  const isHighValue = total > 300;

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md border-2 relative overflow-hidden min-h-[130px] active:scale-[0.98] select-none',
        isOccupied 
          ? (isHighValue ? 'border-amber-500/50 bg-amber-500/5 shadow-amber-500/10' : 'border-primary/50 bg-primary/5 shadow-primary/10')
          : 'border-muted hover:border-accent bg-card'
      )}
    >
      <CardHeader className="p-3 pb-2">
        <CardTitle className="text-base truncate flex items-center justify-between">
            {displayName}
            {isOccupied && <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-3 pt-0">
        <div className={cn(
            "text-xl font-bold tracking-tight",
            isOccupied ? "text-foreground" : "text-muted-foreground opacity-50"
        )}>
          {isOccupied ? `R$ ${total.toFixed(2)}` : 'Livre'}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
         <div className="flex items-center gap-1 text-muted-foreground">
            <ShoppingBasket size={12} />
            {isOccupied ? `${order.items.length} itens` : '0 itens'}
         </div>
         {isOccupied && (
            <div className="flex items-center gap-1 text-primary">
                <Clock size={12} />
                Ativa
            </div>
         )}
      </CardFooter>
      <div className={cn("absolute left-0 top-0 bottom-0 w-1", isOccupied ? "bg-green-500" : "bg-transparent")} />
    </Card>
  );
};

export const OrderCardSkeleton = () => {
  return (
    <Card className="flex flex-col justify-between border-2 border-muted bg-card min-h-[130px]">
      <CardHeader className="p-3 pb-2">
        <Skeleton className="h-5 w-3/4" />
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <Skeleton className="h-8 w-1/2" />
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-1/4" />
      </CardFooter>
    </Card>
  );
};
