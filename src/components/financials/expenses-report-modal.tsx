'use client';
import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { TrendingDown, PieChart, History, X } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { Transaction } from '@/lib/schemas';
import { TransactionDetailModal } from './transaction-detail-modal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ExpensesChart = dynamic(() => import('../dashboard/charts/sales-by-payment-method-chart').then(mod => mod.SalesByPaymentMethodChart), { ssr: false, loading: () => <div className="h-full w-full flex items-center justify-center"><Spinner/></div> });

interface ExpensesReportModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    reportData: any;
    date: DateRange | undefined;
}

export const ExpensesReportModal: React.FC<ExpensesReportModalProps> = ({
    open,
    onOpenChange,
    reportData,
    date,
}) => {
    // RULES OF HOOKS: All hooks must be at the top level
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get all expense transactions
    const allTransactions = useMemo(() => {
        return (reportData?.expenseTransactions || []);
    }, [reportData]);

    const filteredTransactions = useMemo(() => {
        let txs = allTransactions;
        if (selectedCategory) {
            txs = txs.filter((t: Transaction) => (t.expenseCategory || 'Geral') === selectedCategory);
        }
        return txs;
    }, [allTransactions, selectedCategory]);

    const formattedPeriod = useMemo(() => {
        if (!date?.from) return 'Período Indefinido';
        const from = date.from;
        const to = date.to || from;
        return `${format(from, 'dd/MM/yyyy')} - ${format(to, 'dd/MM/yyyy')}`;
    }, [date]);

    if (!reportData) return null;

    const toggleCategoryFilter = (category: string) => {
        setSelectedCategory(prev => prev === category ? null : category);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-4xl h-[95vh] md:h-[90vh] flex flex-col p-0 overflow-hidden bg-background border-border/40 shadow-2xl">
                    <DialogHeader className="p-6 border-b bg-card shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-destructive/10 rounded-xl text-destructive border border-destructive/20 shadow-lg shadow-destructive/10">
                                <TrendingDown size={28} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <DialogTitle className="text-2xl font-black uppercase tracking-tight">Relatório de Despesas</DialogTitle>
                                <DialogDescription className="text-[10px] font-bold uppercase text-muted-foreground tracking-[0.2em] mt-1 flex items-center gap-2">
                                    <History size={10} className="text-destructive" /> Análise de Custos e Gastos
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                    
                    <div className="flex-1 overflow-hidden relative">
                        <ScrollArea className="h-full w-full">
                            <div className="p-6 space-y-6 pb-20">
                                {/* Header Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card className="border-l-4 border-l-destructive bg-destructive/5 shadow-sm overflow-hidden">
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Total de Despesas</CardTitle>
                                            <TrendingDown className="h-4 w-4 text-destructive animate-pulse" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-3xl font-black text-destructive tabular-nums">R$ {reportData.totalExpenses.toFixed(2)}</div>
                                            <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1">Impacto direto no lucro líquido do período.</p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-primary bg-primary/5 shadow-sm overflow-hidden">
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Filtro por Categoria</CardTitle>
                                            <PieChart className="h-4 w-4 text-primary" />
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <ScrollArea className="h-[80px] w-full px-6 pb-2">
                                                <div className="flex flex-wrap gap-2 pt-1">
                                                    {reportData.expensesByCategoryForChart.map((item: any) => (
                                                        <Badge 
                                                            key={item.name} 
                                                            variant="outline"
                                                            onClick={() => toggleCategoryFilter(item.name)}
                                                            className={cn(
                                                                "cursor-pointer text-[9px] font-black uppercase transition-all hover:bg-destructive/20 hover:text-destructive hover:border-destructive/30",
                                                                selectedCategory === item.name 
                                                                    ? "bg-destructive text-destructive-foreground border-destructive shadow-sm" 
                                                                    : "bg-background/50 text-muted-foreground border-border/50"
                                                            )}
                                                        >
                                                            {item.name}: R$ {item.value.toFixed(0)}
                                                            {selectedCategory === item.name && <X size={10} className="ml-1" />}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </ScrollArea>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Transaction List */}
                                    <div className="lg:col-span-2 space-y-4">
                                        <Card className="border border-border/40 shadow-xl overflow-hidden bg-card/30 h-full flex flex-col">
                                            <CardHeader className="border-b bg-muted/10 py-4 shrink-0">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <History size={16} className="text-primary" />
                                                        <CardTitle className="text-xs font-black uppercase tracking-widest">
                                                            {selectedCategory ? `Gastos em: ${selectedCategory}` : 'Listagem Geral de Saídas'}
                                                        </CardTitle>
                                                    </div>
                                                    <Badge variant="outline" className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground bg-background/50">
                                                        {formattedPeriod}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="p-0 flex-1 min-h-[300px]">
                                                <div className="overflow-auto max-h-[400px]">
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow className="bg-muted/30 border-b-2 border-border/10 sticky top-0 z-10">
                                                                <TableHead className="text-[9px] font-black uppercase px-4 text-muted-foreground w-[80px]">Data</TableHead>
                                                                <TableHead className="text-[9px] font-black uppercase px-4 text-muted-foreground">Descrição</TableHead>
                                                                <TableHead className="text-[9px] font-black uppercase px-4 text-muted-foreground w-[100px]">Categoria</TableHead>
                                                                <TableHead className="text-right text-[9px] font-black uppercase px-4 text-muted-foreground w-[100px]">Valor</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            {filteredTransactions.length > 0 ? (
                                                                filteredTransactions.map((t: Transaction) => {
                                                                    const date = t.timestamp instanceof Date ? t.timestamp : (t.timestamp as any)?.toDate?.() || new Date();
                                                                    return (
                                                                        <TableRow 
                                                                            key={t.id} 
                                                                            className="cursor-pointer hover:bg-destructive/5 border-b border-border/50 transition-colors group"
                                                                            onClick={() => setSelectedTransaction(t)}
                                                                        >
                                                                            <TableCell className="text-[10px] font-bold px-4 py-3 whitespace-nowrap opacity-60 tabular-nums">
                                                                                {format(date, 'dd/MM')}
                                                                            </TableCell>
                                                                            <TableCell className="px-4 py-3">
                                                                                <p className="text-[11px] font-black uppercase truncate max-w-[180px] text-foreground/90 group-hover:text-destructive transition-colors">{t.description}</p>
                                                                                {t.status === 'pending' && <span className="text-[8px] font-bold text-orange-500 uppercase flex items-center gap-1 mt-0.5 animate-pulse">Pendente</span>}
                                                                            </TableCell>
                                                                            <TableCell className="px-4 py-3">
                                                                                <Badge variant="secondary" className="text-[8px] font-black uppercase bg-muted text-muted-foreground border border-border/50">
                                                                                    {t.expenseCategory || 'Geral'}
                                                                                </Badge>
                                                                            </TableCell>
                                                                            <TableCell className="text-right px-4 py-3 font-black text-destructive text-sm tabular-nums">
                                                                                R$ {t.total.toFixed(2)}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    );
                                                                })
                                                            ) : (
                                                                <TableRow>
                                                                    <TableCell colSpan={4} className="text-center py-20">
                                                                        <div className="flex flex-col items-center gap-3 opacity-20">
                                                                            <div className="p-4 bg-muted rounded-full">
                                                                                <History size={32} />
                                                                            </div>
                                                                            <p className="text-[10px] font-bold uppercase tracking-widest">Nenhum registro encontrado</p>
                                                                        </div>
                                                                    </TableCell>
                                                                </TableRow>
                                                            )}
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Chart */}
                                    <div className="lg:col-span-1">
                                        <Card className="border border-border/40 shadow-lg bg-card/50 h-full">
                                            <CardHeader className="border-b bg-muted/10 py-4">
                                                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                                    <PieChart size={14} className="text-primary" /> Distribuição
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-4 flex items-center justify-center min-h-[300px]">
                                                <div className="w-full aspect-square">
                                                    <ExpensesChart data={reportData.expensesByCategoryForChart} />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="p-4 border-t bg-card/50 flex justify-end shrink-0">
                        <Button variant="ghost" onClick={() => onOpenChange(false)} className="font-black uppercase text-[10px] h-10 tracking-widest">Fechar Relatório</Button>
                    </div>
                </DialogContent>
            </Dialog>

            {selectedTransaction && (
                <TransactionDetailModal 
                    transaction={selectedTransaction} 
                    open={!!selectedTransaction} 
                    onOpenChange={() => setSelectedTransaction(null)} 
                />
            )}
        </>
    );
};
