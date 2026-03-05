"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * @fileOverview Componente de Progresso (Lightweight).
 * CTO: Removida dependência do Radix UI para evitar erros de build e acelerar o carregamento.
 * Implementado com Tailwind puro para máxima performance e estabilidade na Tavares Bastos.
 */

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all duration-500 ease-in-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }
