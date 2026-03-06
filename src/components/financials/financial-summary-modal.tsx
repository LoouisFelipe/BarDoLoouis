
'use client';
import React, { useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { DollarSign, ArrowDown, ArrowUp, ShoppingCart, TrendingUp, TrendingDown } from 'lucide-react';

interface FinancialSummaryReportModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    reportData: any;
    date: DateRange | undefined;
}

export const FinancialSummaryReportModal: React.FC<FinancialSummaryReportModalProps> = ({
    open,
    onOpenChange,
    reportData,
    date,
}) => {

    const formattedPeriod = useMemo(() => {
        if (!date?.from) return 'Período Indefinido';
        return `${format(date.from, 'dd/MM/yyyy')} ${date.to ? `- ${format(date.to, 'dd/MM/yyyy')}` : ''}`;
    }, [date]);

    if (!reportData) return null;

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-2xl h-[95vh] md:h-[90vh] flex flex-col p-0 overflow-hidden bg-background">
                    <DialogHeader className="p-4 sm:p-6 border-b bg-card shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-400/10 rounded-lg text-blue-400 shrink-0">
                                <DollarSign size={24} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <DialogTitle className="text-lg sm:text-xl font-bold truncate">Resumo Financeiro</DialogTitle>
                                <DialogDescription className="text-[10px] sm:text-xs truncate">
                                    Visão geral dos indicadores financeiros do período.
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                    
                    <div className="flex-1 overflow-hidden relative">
                        <ScrollArea className="h-full w-full">
                            <div className="p-3 sm:p-6 space-y-4 sm:space-y-6 pb-12">
                                <Card className="bg-muted/20 border-dashed">
                                    <CardHeader className="py-2 px-3 sm:py-3 sm:px-4">
                                        <CardTitle className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Período Analisado</CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-3 pb-3 sm:px-4 sm:pb-4">
                                        <p className="text-base sm:text-lg font-bold">{formattedPeriod}</p>
                                    </CardContent>
                                </Card>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                                            <CardTitle className="text-[10px] font-bold uppercase text-muted-foreground">Receita de Vendas</CardTitle>
                                            <TrendingUp className="h-4 w-4 text-green-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-black text-green-400">R$ {reportData.salesRevenue?.toFixed(2) || '0.00'}</div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                                            <CardTitle className="text-[10px] font-bold uppercase text-muted-foreground">Entrada de Caixa</CardTitle>
                                            <ArrowDown className="h-4 w-4 text-sky-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-black text-sky-400">R$ {reportData.cashInflow?.toFixed(2) || '0.00'}</div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                                            <CardTitle className="text-[10px] font-bold uppercase text-muted-foreground">Compras</CardTitle>
                                            <ShoppingCart className="h-4 w-4 text-orange-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-black text-orange-400">R$ {reportData.purchases?.toFixed(2) || '0.00'}</div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                                            <CardTitle className="text-[10px] font-bold uppercase text-muted-foreground">Despesas</CardTitle>
                                            <TrendingDown className="h-4 w-4 text-red-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-black text-red-400">R$ {reportData.expenses?.toFixed(2) || '0.00'}</div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                                            <CardTitle className="text-[10px] font-bold uppercase text-muted-foreground">Contas a Pagar</CardTitle>
                                            <ArrowUp className="h-4 w-4 text-yellow-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-black text-yellow-400">R$ {reportData.payables?.toFixed(2) || '0.00'}</div>
                                        </CardContent>
                                    </Card>
                                    <Card className="col-span-2 sm:col-span-1">
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                                            <CardTitle className="text-[10px] font-bold uppercase text-muted-foreground">Lucro</CardTitle>
                                            <DollarSign className="h-4 w-4 text-purple-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xl sm:text-2xl font-black text-purple-400">R$ {reportData.profit?.toFixed(2) || '0.00'}</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
