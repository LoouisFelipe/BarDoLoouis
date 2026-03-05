'use client';

import React from 'react';
import { FirebaseUser, UserProfile } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { LogOut, User as UserIcon, Beer, ShieldCheck } from 'lucide-react';

interface DashboardHeaderProps {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  logout: () => Promise<void>;
  isAuthReady: boolean;
  isLoadingProfile: boolean;
  profileError: Error | null;
}

export function DashboardHeader({
  user,
  userProfile,
  logout,
  isAuthReady,
  isLoadingProfile,
  profileError,
}: DashboardHeaderProps) {
  const displayName = userProfile?.name || user?.email || 'Luis Felipe';
  const role = userProfile?.role || 'admin';

  return (
    <header className="flex items-center justify-between p-4 sm:px-8 border-b bg-slate-950/50 backdrop-blur-md sticky top-0 z-50 border-white/5">
      <div className="flex items-center gap-3">
        <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 border border-primary/20">
            <Beer className="h-6 w-6 text-white" />
        </div>
        <div>
            <h1 className="text-xl font-black tracking-tight leading-none text-white uppercase">Bar do Luis</h1>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-0.5 flex items-center gap-1.5">
                <ShieldCheck size={10} className="text-primary" /> Tavares Bastos
            </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {isLoadingProfile ? (
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-24 rounded-full bg-white/5" />
            <Skeleton className="h-10 w-10 rounded-full bg-white/5" />
          </div>
        ) : profileError ? (
          <span className="text-[10px] font-bold text-destructive uppercase" title={profileError.message}>
            Erro Perfil
          </span>
        ) : (
          <>
            <div className="flex items-center gap-3 pr-4 border-r border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black truncate max-w-[120px] text-white uppercase">{displayName}</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{role}</p>
              </div>
              <Avatar className="border-2 border-primary/20 h-10 w-10 shadow-lg">
                <AvatarImage src={user?.photoURL || undefined} alt={displayName} />
                <AvatarFallback className="bg-primary/10">
                  <UserIcon className="h-5 w-5 text-primary" />
                </AvatarFallback>
              </Avatar>
            </div>
            <Button variant="ghost" size="icon" onClick={logout} title="Sair do Sistema" className="h-10 w-10 hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-all">
              <LogOut className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
