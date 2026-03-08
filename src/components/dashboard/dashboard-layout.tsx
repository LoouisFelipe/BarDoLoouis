
'use client';

import React from 'react';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { BIVisualStatCard } from './BIVisualStatCard';
import { SalesChart } from './charts/SalesChart';
import { ProfitabilityChart } from './charts/ProfitabilityChart';
import { BIHeader } from './BIHeader';
import { AIBusinessAnalyst } from './ai-business-analyst';

const placeholderReportData = {
    totalSalesRevenue: 555.00,
    totalCashInflow: 750.00,
    netProfit: 36.27,
    totalExpenses: 0.00,
    deltas: {
        revenue: -60.0,
        cashInflow: -41.2,
        netProfit: 100.0,
        expenses: 100.0,
    },
    topProducts: [
        { name: 'Original (600 ML)', quantity: 6 },
        { name: 'Seleta Ouro (Doses)', quantity: 5 },
    ],
    outOfStockProducts: 2,
    finalGoal: 1000,
    goalProgress: 55.5,
};


export function DashboardLayout() {
  const [date, setDate] = React.useState<any>({
    from: new Date(2026, 2, 1),
    to: new Date(2026, 2, 7),
  });

  return (
    <div className="animate-in fade-in duration-500">
      <BIHeader />

      <div className="border-t border-border pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                B.I. COCKPIT
                <span className="text-sm font-normal text-muted-foreground ml-2">FORTALEZA PRIVADA • UNIDADE TAVARES BASTOS</span>
            </h2>
            <DateRangePicker date={date} onDateChange={setDate} />
        </div>

        {/* Grid de KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <BIVisualStatCard
                    title="RECEITA BRUTA"
                    value={`R$ ${placeholderReportData.totalSalesRevenue.toFixed(2)}`}
                    percentage={placeholderReportData.deltas.revenue}
                    isPositive={false}
                    color="green"
                />
                <BIVisualStatCard
                    title="CAIXA REAL"
                    value={`R$ ${placeholderReportData.totalCashInflow.toFixed(2)}`}
                    percentage={placeholderReportData.deltas.cashInflow}
                    isPositive={false}
                    color="blue"
                />
                <BIVisualStatCard
                    title="LUCRO LÍQUIDO"
                    value={`R$ ${placeholderReportData.netProfit.toFixed(2)}`}
                    percentage={placeholderReportData.deltas.netProfit}
                    isPositive={true}
                    color="blue"
                />
                <BIVisualStatCard
                    title="DESPESAS"
                    value={`R$ ${placeholderReportData.totalExpenses.toFixed(2)}`}
                    percentage={placeholderReportData.deltas.expenses}
                    isPositive={true}
                    color="red"
                />
            </div>
            <div className="lg:col-span-1">
                 <AIBusinessAnalyst reportData={placeholderReportData} />
            </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SalesChart />
            <ProfitabilityChart />
        </div>
      </div>
    </div>
  );
}
