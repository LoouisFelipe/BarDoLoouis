'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, LinkSchema } from '@/lib/schemas';
import { useData } from '@/contexts/data-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';
import { Sparkles, Tag, Plus, X, Globe, KeyRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LinkFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  link?: Link;
}

export function LinkFormModal({ open, onOpenChange, link }: LinkFormModalProps) {
  const { saveLink, generateSummary } = useData();
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const form = useForm<Omit<Link, 'id'>>({
    resolver: zodResolver(LinkSchema.omit({ id: true })),
    defaultValues: {
      url: '',
      title: '',
      description: '',
      summary: '',
      category: 'Geral',
      tags: [],
    },
  });

  const { reset, watch, setValue, handleSubmit, formState: { isSubmitting } } = form;
  const currentTags = watch('tags') || [];
  const currentUrl = watch('url');

  useEffect(() => {
    if (open) {
      if (link) {
        reset({
          url: link.url,
          title: link.title,
          description: link.description || '',
          summary: link.summary || '',
          category: link.category,
          tags: link.tags || [],
        });
      } else {
        reset({
          url: '',
          title: '',
          description: '',
          summary: '',
          category: 'Geral',
          tags: [],
        });
      }
    }
  }, [open, link, reset]);

  const handleAddTag = () => {
    if (tagInput.trim() && !currentTags.includes(tagInput.trim().toLowerCase())) {
      setValue('tags', [...currentTags, tagInput.trim().toLowerCase()]);
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setValue('tags', currentTags.filter(t => t !== tag));
  };

  const handleGenerateSummary = async () => {
    if (!currentUrl) return;
    setIsSummarizing(true);
    try {
      const summary = await generateSummary(currentUrl);
      setValue('summary', summary);
    } finally {
      setIsSummarizing(false);
    }
  };

  const onSubmit = async (data: Omit<Link, 'id'>) => {
    try {
      await saveLink(data, link?.id);
      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-none shadow-2xl rounded-3xl">
        <DialogHeader className="p-2">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <KeyRound size={24} />
            </div>
            <div>
              <DialogTitle className="text-2xl font-black uppercase tracking-tight">
                {link ? 'Editar Recurso' : 'Novo Recurso'}
              </DialogTitle>
              <DialogDescription className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                Configure os detalhes do seu atalho digital
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4 px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">URL do Recurso</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="https://exemplo.com" {...field} className="pl-10 h-12 bg-muted/30 border-2 rounded-xl font-bold" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Título Amigável</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Meu Drive de Projetos" {...field} className="h-12 bg-muted/30 border-2 rounded-xl font-bold" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Categoria</FormLabel>
                      <FormControl>
                        <Input placeholder="Trabalho, Lazer, Estudos..." {...field} className="h-12 bg-muted/30 border-2 rounded-xl font-bold" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Descrição (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Para que serve este link?" {...field} value={field.value ?? ''} rows={4} className="bg-muted/30 border-2 rounded-xl font-medium" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
                  <FormLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Tag size={12} /> Tags de Filtragem
                  </FormLabel>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Adicionar tag..." 
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      className="h-10 bg-muted/30 border-2 rounded-xl font-bold"
                    />
                    <Button type="button" variant="outline" size="icon" onClick={handleAddTag} className="h-10 w-10 shrink-0 rounded-xl">
                      <Plus size={18} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentTags.map(tag => (
                      <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-2 py-1 flex items-center gap-1 font-bold text-[9px] uppercase">
                        {tag} <X size={10} className="cursor-pointer" onClick={() => removeTag(tag)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-muted">
              <div className="bg-accent/5 border-2 border-dashed border-accent/20 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-accent h-5 w-5" fill="currentColor" />
                    <h4 className="text-xs font-black uppercase tracking-widest text-accent-foreground">Resumo Inteligente (GenAI)</h4>
                  </div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    onClick={handleGenerateSummary}
                    disabled={isSummarizing || !currentUrl}
                    className="h-8 text-[10px] font-black uppercase tracking-tight border-accent/40 text-accent hover:bg-accent/10"
                  >
                    {isSummarizing ? <Spinner size="h-3 w-3" /> : 'Gerar Resumo'}
                  </Button>
                </div>
                
                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="A IA escreverá aqui um resumo do conteúdo deste link após você clicar em 'Gerar Resumo'." 
                          {...field} 
                          value={field.value ?? ''}
                          rows={3} 
                          className="bg-white/50 border-none shadow-inner text-xs font-medium italic"
                        />
                      </FormControl>
                      <FormDescription className="text-[10px] mt-2">
                        💡 Utilize esta função para extrair automaticamente o propósito da página.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter className="gap-3 sm:gap-0">
              <Button type="button" variant="ghost" onClick={() => onOpenChange(false)} className="h-12 font-black uppercase text-[10px] tracking-widest">
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting} className="h-12 px-8 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-primary/20">
                {isSubmitting ? <Spinner size="h-4 w-4" /> : (link ? 'Gravar Alterações' : 'Adicionar Link')}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
