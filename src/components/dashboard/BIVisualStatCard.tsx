
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface BIVisualStatCardProps {
  title: string;
  value: string;
  percentage: number;
  isPositive: boolean;
  color: 'green' | 'blue' | 'red';
}

const colorClasses = {
  green: {
    border: 'border-green-500',
    text: 'text-green-500',
  },
  blue: {
    border: 'border-blue-500',
    text: 'text-blue-500',
  },
  red: {
    border: 'border-red-500',
    text: 'text-red-500',
  },
};

export const BIVisualStatCard: React.FC<BIVisualStatCardProps> = ({
  title,
  value,
  percentage,
  isPositive,
  color,
}) => {
  const classes = colorClasses[color];
  const percentageColor = isPositive ? 'text-green-400' : 'text-red-400';
  const Icon = isPositive ? ArrowUp : ArrowDown;

  return (
    <div className={cn('bg-card p-6 rounded-lg shadow-lg border-l-4', classes.border)}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-muted-foreground uppercase">{title}</h3>
        {/* Icon can be placed here if needed */}
      </div>
      <div className="mt-2">
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className="flex items-center text-xs mt-1">
        <div className={cn('flex items-center', percentageColor)}>
          <Icon className="h-4 w-4" />
          <span className="font-semibold">{percentage.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};
