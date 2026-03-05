'use client';

import React from 'react';
import { useConnectionStatus } from '../hooks/useConnectionStatus';

/**
 * Componente de Feedback de Conexão.
 * CPO: Minimalista, aparece apenas quando necessário para não poluir a UI.
 */
export const ConnectionBanner: React.FC = () => {
  const isOnline = useConnectionStatus();

  if (isOnline) return null;

  return (
    <div className="bg-destructive text-destructive-foreground text-center py-2 px-4 text-sm font-bold animate-in fade-in slide-in-from-top-1">
      ⚠️ Você está offline. Os pedidos serão sincronizados automaticamente ao voltar a rede.
    </div>
  );
};