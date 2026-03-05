import { useState, useEffect } from 'react';

/**
 * Hook para monitorar a conexão do dispositivo.
 * CPO: Essencial para dar feedback visual ao garçom em áreas de sombra de Wi-Fi.
 */
export const useConnectionStatus = () => {
  // CTO: Iniciamos como true para evitar divergências na hidratação (SSR)
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Verificação de segurança para o ambiente do navegador (Next.js/SSR)
    if (typeof window === 'undefined') return;

    // Sincroniza o estado real assim que o componente monta no cliente
    const updateStatus = () => setIsOnline(navigator.onLine);
    updateStatus();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};