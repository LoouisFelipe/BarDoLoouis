'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { DataProvider } from '@/contexts/data-context';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { TopNav } from '@/components/layout/TopNav';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { Spinner } from '@/components/ui/spinner';
import { Skeleton } from '@/components/ui/skeleton';

function DashboardSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-background p-4 sm:p-8">
      <div className="flex items-center justify-between h-16 border-b pb-4 mb-8">
        <Skeleton className="h-10 w-48" /> 
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-32 rounded-lg" /> 
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  );
}

export default function RootPage() {
  const { user, userProfile, logout, isAuthReady, isLoadingAuth, authError, isLoadingProfile, profileError } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthReady && !user && !isLoadingAuth) {
      router.push('/login');
    }
  }, [isAuthReady, user, router, isLoadingAuth]);

  if (isLoadingAuth || !isAuthReady) {
    return <DashboardSkeleton />;
  }

  if (authError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-destructive p-4">
        <p className="text-lg font-semibold mb-4">Erro de Autenticação:</p>
        <p className="text-sm text-center mb-6">{authError.message}</p>
        <button 
          onClick={() => router.replace('/login')} 
          className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/80 transition-colors"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <DataProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <DashboardHeader
          user={user}
          userProfile={userProfile}
          logout={logout}
          isAuthReady={isAuthReady}
          isLoadingProfile={isLoadingProfile}
          profileError={profileError}
        />
        <TopNav />
        <main className="flex-grow p-4 sm:p-8">
          {isLoadingProfile ? (
            <div className="flex items-center justify-center h-full">
              <Spinner size="h-12 w-12" />
            </div>
          ) : profileError ? (
            <div className="flex flex-col items-center justify-center h-full text-destructive p-4">
              <p className="text-lg font-semibold">Erro ao carregar o perfil:</p>
              <p className="text-sm text-center opacity-70">{profileError.message}</p>
            </div>
          ) : (
            <DashboardLayout />
          )}
        </main>
      </div>
    </DataProvider>
  );
}
