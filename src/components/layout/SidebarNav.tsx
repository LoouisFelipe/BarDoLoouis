'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
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
  { href: '/', icon: <Home className="h-5 w-5" />, label: 'Tela Inicial' },
  { href: '/cockpit', icon: <LayoutGrid className="h-5 w-5" />, label: 'Cockpit' },
  { href: '/daily-control', icon: <ClipboardList className="h-5 w-5" />, label: 'Controle Diário' },
  { href: '/financials', icon: <Landmark className="h-5 w-5" />, label: 'Financeiro' },
  { href: '/gaming', icon: <Gamepad2 className="h-5 w-5" />, label: 'Banca de Jogos' },
  { href: '/products', icon: <Box className="h-5 w-5" />, label: 'Produtos' },
  { href: '/customers', icon: <Users className="h-5 w-5" />, label: 'Clientes' },
  { href: '/suppliers', icon: <Truck className="h-5 w-5" />, label: 'Fornecedores' },
  { href: '/users', icon: <UserCog className="h-5 w-5" />, label: 'Usuários' },
  { href: '/settings', icon: <Settings className="h-5 w-5" />, label: 'Ajustes' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full bg-card border-r border-border p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">BAR DO LUIS</h1>
        <p className="text-xs text-muted-foreground">TAVARES BASTOS</p>
      </div>
      <ul className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-4 py-2 rounded-md transition-colors',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary/80'
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
