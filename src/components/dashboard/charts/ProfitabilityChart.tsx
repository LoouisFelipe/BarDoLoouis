
'use client';

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Original (600 ML)', value: 45.00, color: '#3b82f6' },
  { name: 'Skol (Litro)', value: 18.00, color: '#3b82f6' },
  { name: 'Original (300 ML)', value: 10.00, color: '#3b82f6' },
  { name: 'Budweiser', value: 8.00, color: '#3b82f6' },
  { name: 'Heineken', value: 7.50, color: '#3b82f6' },
];

export const ProfitabilityChart: React.FC = () => {
  return (
    <Card className="bg-card shadow-lg border-none">
      <CardHeader>
        <CardTitle className="text-base font-bold text-foreground">TOP 10 PRODUTOS (LUCRATIVIDADE)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={120}
            />
            <Tooltip
              formatter={(value: number) => `R$ ${value.toFixed(2)}`}
              cursor={{ fill: 'rgba(0,0,0,0.1)' }}
              contentStyle={{
                background: 'rgba(20,20,20,0.8)',
                border: 'none',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="value" barSize={20} radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
