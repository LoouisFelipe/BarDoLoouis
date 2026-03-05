'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Calendar } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

interface GoalReportModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    reportData: any;
    date: DateRange | undefined;
}

/**
 * @fileOverview Relatório de Metas Dinâmicas (Break-Even Point).
 * CFO: Calcula o ponto de equilíbrio diário baseado nas despesas fixas e variáveis.
 * CEO: Visão clara de quanto precisa faturar hoje para não ter prejuízo.
 */
export const GoalReportModal: React.FC<GoalReportModalProps> = ({
    open,
    onOpenChange,
    reportData,
    date,
}) => {
    if (!reportData) return null;

    const { 
        totalSalesRevenue, 
        totalMonthlyExpenses, 
        daysInPeriod, 
        dailyGoal, 
        goalProgress 
    } = reportData;

    // Cálculo da projeção
    const currentDailyAverage = totalSalesRevenue / (daysInPeriod || 1);
    const projectedRevenue = currentDailyAverage * 30; 
    const breakEvenStatus = totalSalesRevenue >= totalMonthlyExpenses ? 'profit' : 'loss';

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl bg-background border-border/40 shadow-2xl">
                <DialogHeader className="pb-4 border-b">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
                            <Target size={28} />
                        </div>
                        <div>
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Meta & Break-Even</DialogTitle>
                            <DialogDescription className="text-[10px] font-bold uppercase text-muted-foreground tracking-[0.2em] mt-1">
                                Análise de Ponto de Equilíbrio Operacional
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                    <Card className="bg-blue-500/5 border-blue-500/20 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Calendar size={64} />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Meta Diária Dinâmica</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black text-blue-500 tabular-nums">
                                R$ {dailyGoal.toFixed(2)}
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground mt-2 leading-relaxed">
                                Valor necessário por dia para cobrir os custos fixos e variáveis deste mês (R$ {totalMonthlyExpenses.toFixed(2)}).
                            </p>
                        </CardContent>
                    </Card>

                    <Card className={cn(
                        "border-l-4 shadow-sm",
                        breakEvenStatus === 'profit' ? "border-l-emerald-500 bg-emerald-500/5" : "border-l-orange-500 bg-orange-500/5"
                    )}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Status do Mês</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className={cn(
                                "text-4xl font-black tabular-nums",
                                breakEvenStatus === 'profit' ? "text-emerald-500" : "text-orange-500"
                            )}>
                                {breakEvenStatus === 'profit' ? 'LUCRO' : 'CUSTEIO'}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <Progress value={Math.min(goalProgress, 100)} className="h-2 flex-1" />
                                <span className="text-xs font-bold">{goalProgress.toFixed(0)}%</span>
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground mt-2">
                                {breakEvenStatus === 'profit' 
                                    ? "Custos operacionais cobertos! Tudo agora é lucro." 
                                    : `Faltam R$ ${(totalMonthlyExpenses - totalSalesRevenue).toFixed(2)} para o zero-a-zero.`}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="border border-border/40 bg-card/50">
                    <CardHeader className="py-3 border-b bg-muted/10">
                        <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <TrendingUp size={14} /> Projeção de Fechamento
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="grid grid-cols-3 divide-x divide-border/40">
                            <div className="p-4 text-center">
                                <p className="text-[9px] font-black uppercase text-muted-foreground mb-1">Média Diária Atual</p>
                                <p className="text-lg font-black text-foreground">R$ {currentDailyAverage.toFixed(2)}</p>
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-[9px] font-black uppercase text-muted-foreground mb-1">Projeção (30 dias)</p>
                                <p className="text-lg font-black text-blue-500">R$ {projectedRevenue.toFixed(2)}</p>
                            </div>
                            <div className="p-4 text-center bg-blue-500/5">
                                <p className="text-[9px] font-black uppercase text-blue-600 mb-1">Resultado Projetado</p>
                                <p className={cn(
                                    "text-lg font-black",
                                    (projectedRevenue - totalMonthlyExpenses) > 0 ? "text-emerald-500" : "text-red-500"
                                )}>
                                    {(projectedRevenue - totalMonthlyExpenses) > 0 ? '+' : ''} 
                                    R$ {(projectedRevenue - totalMonthlyExpenses).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end pt-4">
                    <button onClick={() => onOpenChange(false)} className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                        Fechar Análise
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
