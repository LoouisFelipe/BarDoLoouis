    <CustomersDebtReportModal open={activeReport === 'debt'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} customers={customers} onNavigateToCustomers={() => {}} />
      <InventoryReportModal open={activeReport === 'inventory'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} products={products} onNavigateToProducts={() => {}} />
      <GoalReportModal open={activeReport === 'goal'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} date={date} />
      <PayablesReportModal open={activeReport === 'payables'} onOpenChange={(o) => !o && setActiveReport(null)} transactions={transactions} onMarkAsPaid={markExpenseAsPaid} />
    </div>
  );
}
';
import { cn } from '@/lib/utils';

// Modais de Relatório
import { SalesRevenueReportModal } from '@/components/financials/sales-revenue-report-modal';
import { SalesVolumeReportModal } from '@/components/financials/sales-volume-report-modal';
import { CashInflowReportModal } from '@/components/financials/cash-inflow-report-modal';
import { ExpensesReportModal } from '@/components/financials/expenses-report-modal';
import { PurchasesReportModal } from '@/components/financials/purchases-report-modal';
import { ProfitReportModal } from '@/components/financials/profit-report-modal';
import { CustomersDebtReportModal } from '@/components/customers/customers-debt-report-modal';
import { InventoryReportModal } from '@/components/products/inventory-report-modal';
import { GoalReportModal } from '@/components/financials/goal-report-modal';
import { PayablesReportModal } from '@/components/financials/payables-report-modal';
import { AIBusinessAnalyst } from './ai-business-analyst';

/**
 * @fileOverview Cockpit de Comando Bar do Luis (Layout Unificado).
 * CEO: Visão 360º da operação Tavares Bastos.
 * CTO: Gestão de estados de modais e reatividade de KPIs.
 */

export function DashboardLayout() {
  const { transactions, products, gameModalities, customers, markExpenseAsPaid } = useData();
  
  // 1. Estados de Filtro Temporal
  const [date, setDate] = useState<DateRange | undefined>({
    from: startOfDay(new Date()),
    to: endOfDay(new Date()),
  });

  // 2. Estados de Modais
  const [activeReport, setActiveReport] = useState<string | null>(null);

  // 3. Processamento de Inteligência (CFO Hook)
  const reportData = useReportData({
    transactions,
    products,
    gameModalities,
    customers,
    date,
    periodGoal: 0, // CFO: Pode ser customizado via UI futuramente
  });

  const kpis = useMemo(() => {
    if (!reportData) return [];
    return [
      { 
        id: 'sales', 
        label: 'Vendas', 
        value: `R$ ${reportData.totalSalesRevenue.toFixed(2)}`, 
        delta: reportData.deltas.revenue, 
        icon: <Receipt className="text-accent" />, 
        color: 'border-l-accent' 
      },
      { 
        id: 'cash', 
        label: 'Caixa Real', 
        value: `R$ ${reportData.totalCashInflow.toFixed(2)}`, 
        delta: reportData.deltas.cashInflow, 
        icon: <HandCoins className="text-sky-400" />, 
        color: 'border-l-sky-400' 
      },
      { 
        id: 'expenses', 
        label: 'Despesas', 
        value: `R$ ${reportData.totalExpenses.toFixed(2)}`, 
        delta: reportData.deltas.expenses, 
        icon: <TrendingDown className="text-destructive" />, 
        color: 'border-l-destructive' 
      },
      { 
        id: 'profit', 
        label: 'Lucro Líquido', 
        value: `R$ ${reportData.netProfit.toFixed(2)}`, 
        delta: reportData.deltas.netProfit, 
        icon: <Scale className="text-primary" />, 
        color: 'border-l-primary' 
      },
    ];
  }, [reportData]);

  const alerts = useMemo(() => {
    if (!reportData) return [];
    const items = [];
    if (reportData.outOfStockProducts > 0) {
      items.push({ id: 'inventory', label: 'Estoque Esgotado', value: reportData.outOfStockProducts, icon: <AlertTriangle size={14}/>, color: 'text-destructive bg-destructive/10' });
    }
    if (reportData.customersWithDebt > 0) {
      items.push({ id: 'debt', label: 'Devedores Ativos', value: reportData.customersWithDebt, icon: <Users size={14}/>, color: 'text-yellow-500 bg-yellow-500/10' });
    }
    if (reportData.totalPendingExpenses > 0) {
      items.push({ id: 'payables', label: 'Contas a Pagar', value: `R$ ${reportData.totalPendingExpenses.toFixed(0)}`, icon: <Calendar size={14}/>, color: 'text-orange-500 bg-orange-500/10' });
    }
    return items;
  }, [reportData]);

  if (!reportData) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header do Dashboard */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-foreground tracking-tight flex items-center gap-3">
            Cockpit Tavares Bastos
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-primary/30 text-primary">v3.0 PRO</Badge>
          </h2>
          <p className="text-muted-foreground mt-1 font-medium">Gestão tática e estratégica em tempo real.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 items-center bg-slate-900/40 p-2 rounded-2xl border border-white/5 shadow-xl">
            <div className="flex items-center gap-2 px-3">
                <Calendar size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Período:</span>
            </div>
            <DateRangePicker date={date} onDateChange={setDate} className="border-none bg-transparent" />
        </div>
      </div>

      {/* Grid de KPIs Financeiros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card 
            key={kpi.id} 
            className={cn(
              "cursor-pointer hover:translate-y-[-4px] transition-all duration-300 border-l-4 shadow-lg group relative overflow-hidden",
              kpi.color,
              "bg-slate-900/40 border border-white/5"
            )}
            onClick={() => setActiveReport(kpi.id)}
          >
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{kpi.label}</CardTitle>
              <div className="p-2 bg-slate-950 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">{kpi.icon}</div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-black tracking-tight text-white">{kpi.value}</div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <Badge variant={kpi.delta >= 0 ? "outline" : "destructive"} className={cn(
                    "text-[8px] font-black uppercase h-5 border-none",
                    kpi.delta >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-destructive/10 text-destructive"
                )}>
                  {kpi.delta >= 0 ? '+' : ''}{kpi.delta.toFixed(1)}%
                </Badge>
                <span className="text-[8px] font-bold text-muted-foreground uppercase opacity-40 italic">vs anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cockpit Principal: Alertas e Análise IA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            {/* Alertas Operacionais Críticos */}
            {alerts.length > 0 && (
                <div className="flex flex-wrap gap-3">
                    {alerts.map(alert => (
                        <button 
                            key={alert.id}
                            onClick={() => setActiveReport(alert.id)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2.5 rounded-2xl font-black uppercase text-[9px] tracking-widest border transition-all active:scale-95 shadow-lg",
                                alert.color,
                                "border-white/5"
                            )}
                        >
                            {alert.icon}
                            {alert.label}: <span className="text-xs ml-1">{alert.value}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Grid de Atendimento (Comandas) */}
            <div className="bg-slate-900/20 rounded-[40px] p-6 border border-white/5 shadow-inner">
                <div className="flex items-center justify-between mb-6 px-2">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                        <Zap size={14} className="text-primary" /> Atendimentos Ativos
                    </h3>
                    <div className="h-1 flex-1 mx-6 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-full" />
                </div>
                <OrderGrid />
            </div>
        </div>

        <div className="space-y-6">
            {/* Analista de IA Contextual */}
            <AIBusinessAnalyst reportData={reportData} />

            {/* Acesso Rápido a Auditoria Financeira */}
            <Card className="bg-slate-950 border-primary/10 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="pb-3 border-b border-white/5 bg-slate-900/40">
                    <CardTitle className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                        <Scale size={14} className="text-primary" /> Central de Auditoria
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 grid gap-2">
                    {[
                        { id: 'volume', label: 'Fluxo & Horários', icon: <Receipt size={14}/> },
                        { id: 'profit', label: 'Eficiência & COGS', icon: <Target size={14}/> },
                        { id: 'purchases', label: 'Reposição & Insumos', icon: <ShoppingCart size={14}/> },
                        { id: 'goal', label: 'Meta & Break-Even', icon: <Target size={14} className="text-primary"/> }
                    ].map(btn => (
                        <button 
                            key={btn.id}
                            onClick={() => setActiveReport(btn.id)}
                            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/40 hover:bg-primary/10 hover:text-primary border border-white/5 transition-all group font-bold uppercase text-[10px] tracking-widest"
                        >
                            <span className="flex items-center gap-3">{btn.icon} {btn.label}</span>
                            <TrendingUp size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>

      {/* Renderização Dinâmica de Modais de Relatório */}
      <SalesRevenueReportModal open={activeReport === 'sales'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} periodGoal={reportData.finalGoal} date={date} />
      <SalesVolumeReportModal open={activeReport === 'volume'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} date={date} />
      <CashInflowReportModal open={activeReport === 'cash'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} date={date} />
      <ExpensesReportModal open={activeReport === 'expenses'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} date={date} />
      <PurchasesReportModal open={activeReport === 'purchases'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} date={date} />
      <ProfitReportModal open={activeReport === 'profit'} onOpenChange={(o) => !o && setActiveReport(null)} reportData={reportData} date={date} />
  