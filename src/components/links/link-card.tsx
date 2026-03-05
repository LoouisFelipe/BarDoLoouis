'use client';

import React, { useState } from 'react';
import { Link } from '@/lib/schemas';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Edit2, Trash2, Globe, Sparkles, Tag, Folder, Clock } from 'lucide-react';
import { useData } from '@/contexts/data-context';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface LinkCardProps {
  link: Link;
  viewMode: 'grid' | 'list';
  onEdit: () => void;
}

export function LinkCard({ link, viewMode, onEdit }: LinkCardProps) {
  const { deleteLink } = useData();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Tem certeza que deseja excluir este link?')) {
      setIsDeleting(true);
      await deleteLink(link.id!);
      setIsDeleting(false);
    }
  };

  const linkDate = link.createdAt ? (link.createdAt.toDate ? link.createdAt.toDate() : new Date(link.createdAt)) : new Date();

  const hostname = new URL(link.url).hostname;

  if (viewMode === 'list') {
    return (
      <Card className="hover:border-primary/40 transition-all group overflow-hidden bg-white shadow-sm border-2">
        <CardContent className="p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-grow min-w-0">
            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
              <Globe size={24} />
            </div>
            <div className="min-w-0 flex-grow">
              <div className="flex items-center gap-2">
                <h3 className="font-black uppercase tracking-tight text-sm truncate">{link.title}</h3>
                <Badge variant="outline" className="text-[8px] font-black uppercase bg-primary/5 border-primary/20 text-primary">
                  {link.category}
                </Badge>
              </div>
              <p className="text-[10px] text-muted-foreground truncate font-medium">{link.url}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-primary/10 text-primary" onClick={onEdit}>
              <Edit2 size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-destructive/10 text-destructive" onClick={handleDelete} disabled={isDeleting}>
              <Trash2 size={16} />
            </Button>
            <Button asChild className="h-10 px-4 gap-2 rounded-lg font-black uppercase text-[10px]">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Acessar <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:border-primary/40 transition-all group overflow-hidden bg-white shadow-sm border-2 flex flex-col h-full active:scale-[0.98]">
      <CardHeader className="p-5 pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
            <Globe size={20} />
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" onClick={onEdit}>
              <Edit2 size={14} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={handleDelete} disabled={isDeleting}>
              <Trash2 size={14} />
            </Button>
          </div>
        </div>
        <CardTitle className="text-base font-black uppercase tracking-tight line-clamp-1">{link.title}</CardTitle>
        <p className="text-[10px] font-bold text-muted-foreground truncate uppercase tracking-widest">{hostname}</p>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-grow space-y-4">
        {link.summary ? (
          <div className="bg-primary/5 rounded-xl p-3 border border-primary/10 relative overflow-hidden group/summary">
            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase text-primary mb-1.5 tracking-widest">
              <Sparkles size={10} fill="currentColor" /> Resumo AI
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed italic line-clamp-3">
              "{link.summary}"
            </p>
          </div>
        ) : (
          <p className="text-[11px] text-muted-foreground/80 leading-relaxed line-clamp-3">
            {link.description || 'Nenhuma descrição fornecida.'}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {link.tags?.map(tag => (
            <Badge key={tag} variant="secondary" className="text-[8px] font-black uppercase bg-muted/50 text-muted-foreground border-none px-2">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-2 pt-0 bg-muted/5 mt-auto">
        <div className="w-full flex items-center justify-between px-3 py-2 border-t border-muted">
          <div className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground uppercase">
            <Folder size={10} className="text-primary" /> {link.category}
          </div>
          <Button variant="link" asChild className="h-auto p-0 text-[10px] font-black uppercase text-primary tracking-widest gap-1">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              Abrir <ExternalLink size={10} />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
