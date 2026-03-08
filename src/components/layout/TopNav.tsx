'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  ClipboardList,
  Landmark,
  Gamepad2,
  Box,
  Users,
  Truck,
  UserCog,
  Settings,
} from 'lucide-react';

const navItems = [
    { href: '/', icon: <LayoutGrid className="h-4 w-4" />, label: 'B.I. Cockpit' },
    { href: '/daily-control', icon: <ClipboardList className="h-4 w-4" />, label: 'Controle Diário', badge: 3 },
    { href: '/financials', icon: <Landmark className="h-4 w-4" />, label: 'Financeiro' },
    { href: '/gaming', icon: <Gamepad2 className="h-4 w-4" />, label: 'Banca Jogos' },
    { href: '/products', icon: <Box className="h-4 w-4" />, label: 'Produtos', badge: 2 },
    { href: '/customers', icon: <Users className="h-4 w-4" />, label: 'Clientes', badge: 3 },
    { href: '/suppliers', icon: <Truck className="h-4 w-4" />, label: 'Fornecedores' },
    { href: '/users', icon: <UserCog className="h-4 w-4" />, label: 'Usuários' },
    { href: '/settings', icon: <Settings className="h-4 w-4" />, label: 'Ajustes' },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <div className="bg-card border-b border-border shadow-sm">
      <nav className="px-8">
        <ul className="flex items-center h-14 space-x-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-md transition-colors text-sm font-semibold',
                  pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                )}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-2 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
