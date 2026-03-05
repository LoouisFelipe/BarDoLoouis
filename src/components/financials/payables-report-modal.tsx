
'use client';

import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, History, AlertCircle, TrendingDown, LayoutList, Edit, Banknote, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Transaction } from '@/lib/schemas';
import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';

interface PayablesReportModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    transactions: Transaction[];
    onMarkAsPaid: (id: string) => Promise<void>;
    onEdit?: (transaction: Transaction) => void;
}

/**
 * @fileOverview Relatório de Contas a Pagar Global (Visão CFO).
 * CFO: Auditoria de passivos sem trava temporal para segurança financeira.
 * CEO: Agora com ação de editar para correções de última hora e dashboard de dívida.
 */
export const PayablesReportModal: React.FC<PayablesReportModalProps> = ({
    open,
    onOpenChange,
    transactions,
    onMarkAsPaid,
    onEdit
}) => {
    const [processingId, setProcessingId] = useState<string | null>(null);

    const pendingExpenses = useMemo(() => {
        return (transactions || [])
            .filter(t => t.type === 'expense' && t.status === 'pending')
            .sort((a, b) => {
                const dateA = a.timestamp instanceof Date ? a.timestamp : (a.timestamp as any)?.toDate?.() || new Date();
                const dateB = b.timestamp instanceof Date ? b.timestamp : (b.timestamp as any)?.toDate?.() || new Date();
                return dateA.getTime() - dateB.getTime(); // Ordem cronológica (mais antigas primeiro - regra de sobrevivência CFO)
            });
    }, [transactions]);

    const totalPayable = useMemo(() => 
        pendingExpenses.reduce((sum, t) => sum + (t.total || 0), 0), 
    [pendingExpenses]);

    const handleLiquidar = async (id: string) => {
        setProcessingId(id);
        try {
            await onMarkAsPaid(id);
        } finally {
            setProcessingId(null);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl h-[95vh] md:h-[90vh] flex flex-col p-0 overflow-hidden bg-background border-border/40 shadow-2xl">
                <DialogHeader className="p-6 border-b bg-card shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 border border-orange-500/20 shadow-lg shadow-orange-500/10">
                            <Banknote size={28} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Central de Passivos (A Pagar)</DialogTitle>
                            <DialogDescription className="text-[10px] font-bold uppercase text-muted-foreground tracking-[0.2em] mt-1 flex items-center gap-2">
                                <Clock size={10} className="text-orange-500" /> Auditoria Geral de Compromissos Financeiros
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-hidden relative">
                    <ScrollArea className="h-full w-full">
                        <div className="p-6 space-y-6 pb-20">
                            {/* Dashboard CFO Snapshot */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className="border-l-4 border-l-orange-500 bg-orange-500/5 shadow-sm overflow-hidden group">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Total Pendente Acumulado</CardTitle>
                                        <TrendingDown className="h-4 w-4 text-orange-500 animate-pulse" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-black text-orange-400 tabular-nums">R$ {totalPayable.toFixed(2)}</div>
                                        <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1">Soma de boletos, vales e insumos a liquidar.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-l-4 border-l-primary bg-primary/5 shadow-sm">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Compromissos em Aberto</CardTitle>
                                        <LayoutList className="h-4 w-4 text-primary" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-black text-primary tabular-nums">{pendingExpenses.length} Lançamentos</div>
                                        <p className="text-[9px] font-bold text-muted-foreground uppercase mt-1">Quantidade de notas fiscais aguardando baixa.</p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Tabela de Auditoria */}
                            <Card className="border border-border/40 shadow-xl overflow-hidden bg-card/30">
                                <CardHeader className="border-b bg-muted/10 py-4">
                                    <div className="flex items-center gap-2">
                                        <History size={16} className="text-primary" />
                                        <CardTitle className="text-xs font-black uppercase tracking-widest">Cronograma de Pagamentos</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-muted/30 border-b-2 border-border/10">
                                                    <TableHead className="text-[9px] font-black uppercase px-6 text-muted-foreground">Data Ref.</TableHead>
                                                    <TableHead className="text-[9px] font-black uppercase px-6 text-muted-foreground">Descrição do Gasto</TableHead>
                                                    <TableHead className="text-[9px] font-black uppercase px-6 text-muted-foreground">Categoria</TableHead>
                                                    <TableHead className="text-right text-[9px] font-black uppercase px-6 text-muted-foreground">Valor Devido</TableHead>
                                                    <TableHead className="w-[140px] text-center text-[9px] font-black uppercase px-6 text-muted-foreground">Ações</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {pendingExpenses.length > 0 ? (
                                                    pendingExpenses.map((t) => {
                                                        const date = t.timestamp instanceof Date ? t.timestamp : (t.timestamp as any)?.toDate?.() || new Date();
                                                        return (
                                                            <TableRow key={t.id} className="hover:bg-orange-500/[0.03] border-b border-border/50 group transition-colors">
                                                                <TableCell className="text-[10px] font-bold px-6 whitespace-nowrap opacity-60 tabular-nums">
                                                                    <div className="flex items-center gap-2">
                                                                        <Calendar size={12} className="text-muted-foreground" />
                                                                        {format(date, 'dd/MM/yyyy')}
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell className="px-6">
                                                                    <p className="text-[11px] font-black uppercase truncate max-w-[200px] text-slate-200">{t.description}</p>
                                                                    {t.recurringExpenseId && (
                                                                        <span className="text-[8px] font-bold text-muted-foreground uppercase flex items-center gap-1 mt-0.5">
                                                                           <History size={8} /> Recorrente
                                                                        </span>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell className="px-6">
                                                                    <Badge variant="outline" className="text-[8px] font-black uppercase bg-slate-900 text-slate-400 border-border/40">
                                                                        {t.expenseCategory || 'Geral'}
                                                                    </Badge>
                                                                </TableCell>
                                                                <TableCell className="text-right px-6 font-black text-orange-400 text-sm tabular-nums">
                                                                    R$ {t.total.toFixed(2)}
                                                                </TableCell>
                                                                <TableCell className="text-center px-6">
                                                                    <div className="flex items-center justify-center gap-1.5">
                                                                        <Button 
                                                                            size="icon" 
                                                                            variant="ghost" 
                                                                            className="h-9 w-9 text-primary hover:bg-primary/10 rounded-xl transition-all"
                                                                            onClick={() => {
                                                                                if (onEdit) onEdit(t);
                                                                            }}
                                                                            title="Editar Registro"
                                                                        >
                                                                            <Edit size={16} />
                                                                        </Button>
                                                                        <Button 
                                                                            size="icon" 
                                                                            variant="ghost" 
                                                                            className="h-9 w-9 text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all shadow-sm active:scale-95"
                                                                            onClick={() => handleLiquidar(t.id!)}
                                                                            disabled={processingId === t.id}
                                                                            title="Marcar como Pago (Liquidar)"
                                                                        >
                                                                            {processingId === t.id ? <Spinner size="h-4 w-4" /> : <CheckCircle2 size={20} />}
                                                                        </Button>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                        );
                                                    })
                                                ) : (
                                                    <TableRow>
                                                        <TableCell colSpan={5} className="text-center py-24">
                                                            <div className="flex flex-col items-center gap-4 opacity-20">
                                                                <div className="p-6 bg-emerald-500/10 rounded-full">
                                                                    <CheckCircle2 size={64} className="text-emerald-500" />
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <p className="text-sm font-black uppercase tracking-[0.2em]">Fluxo Limpo, CEO!</p>
                                                                    <p className="text-[10px] font-bold uppercase">Nenhum passivo pendente no sistema.</p>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="p-5 bg-primary/5 border border-dashed border-primary/20 rounded-2xl flex gap-4 items-start shadow-inner">
                                <div className="p-2 bg-primary/10 rounded-xl shrink-0 text-primary">
                                    <AlertCircle size={20} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase text-primary tracking-widest">Protocolo da Controladoria (CFO)</p>
                                    <p className="text-[11px] text-muted-foreground font-medium leading-relaxed max-w-2xl">
                                        As contas pendentes listadas acima representam o seu passivo imediato. O lucro líquido só será impactado no momento da liquidação real. Utilize o botão de editar para corrigir valores de notas fiscais antes de confirmar a saída de caixa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
                <div className="p-4 border-t bg-card/50 flex justify-end shrink-0">
                    <Button variant="ghost" onClick={() => onOpenChange(false)} className="font-black uppercase text-[10px] h-10 tracking-widest">Fechar Central</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
