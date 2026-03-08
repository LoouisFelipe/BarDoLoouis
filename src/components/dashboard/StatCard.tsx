import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta?: number;
  deltaText?: string;
}

export function StatCard({ icon, label, value, delta, deltaText = 'vs anterior' }: StatCardProps) {
  const isPositive = delta !== undefined ? delta >= 0 : true;

  return (
    <Card className="bg-card border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {delta !== undefined && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Badge
              className={cn(
                'text-[10px] font-semibold mr-2',
                isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              )}
            >
              {isPositive ? '+' : ''}{delta.toFixed(1)}%
            </Badge>
            <span>{deltaText}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
