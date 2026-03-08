
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export const BIHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Visão Geral</h1>
        <p className="text-muted-foreground mt-1">
          Acompanhe as métricas e o estoque do balcão em tempo real.
        </p>
      </div>
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
        <Sparkles className="mr-2 h-4 w-4" />
        Gerar Insight com IA
      </Button>
    </div>
  );
};
