'use server';

/**
 * @fileOverview Fluxo de IA centralizado para análise de performance.
 * CTO: Implementação global para estabilidade do servidor Next.js.
 * Prompt atualizado para a versão 2.0 (Visão do Conselho C-Level).
 */

import { z } from 'genkit';
import { ai } from '@/ai/genkit'; 

// 1. Schemas de Dados
const BusinessAnalysisInputSchema = z.object({
  revenue: z.number(),
  expenses: z.number(),
  netProfit: z.number(),
  topProducts: z.array(z.object({ name: z.string(), quantity: z.number() })),
  lowStockCount: z.number(),
  periodGoal: z.number(),
  goalProgress: z.number(),
});

export type BusinessAnalysisInput = z.infer<typeof BusinessAnalysisInputSchema>;

const BusinessAnalysisOutputSchema = z.object({
  summary: z.string().describe('Resumo executivo da performance do período.'),
  insights: z.array(z.string()).describe('Lista de 3 a 4 insights acionáveis.'),
  mood: z.enum(['good', 'warning', 'critical']).describe('Sentimento geral da operação.'),
  recommendation: z.string().describe('A principal recomendação do CEO/IA para o próximo período.'),
});

export type BusinessAnalysisOutput = z.infer<typeof BusinessAnalysisOutputSchema>;

// 2. Definição do Prompt (Escopo Global)
const analysisPrompt = ai.definePrompt({
  name: 'businessAnalysisPrompt',
  input: { schema: BusinessAnalysisInputSchema },
  output: { 
    format: 'json', // CTO: Trava de segurança para garantir o retorno estruturado
    schema: BusinessAnalysisOutputSchema 
  },
  prompt: `Assuma sua posição no conselho reportando diretamente ao CEO do Bar do Luis, na Tavares Bastos.
  Sintetize as análises financeiras (CFO), operacionais (COO) e de receita (CRO) no seguinte cenário:
  
  RECEITA: R$ {{revenue}}
  DESPESAS: R$ {{expenses}}
  LUCRO LÍQUIDO: R$ {{netProfit}}
  PROGRESSO DA META: {{goalProgress}}% (Alvo: R$ {{periodGoal}})
  PRODUTOS COM ESTOQUE BAIXO: {{lowStockCount}} itens críticos
  TOP PRODUTOS (MIX):
  {{#each topProducts}} * {{name}}: {{quantity}} unidades
  {{/each}}
  
  DIRETRIZES DE RESPOSTA:
  1. Entregue um 'Resumo Executivo' (summary) de no máximo 3 frases com o diagnóstico atual da empresa.
  2. Forneça 3 a 4 'Insights Acionáveis' (insights) imediatos focados em eficiência e lucro.
  3. Defina o 'Sentimento Geral' (mood) estritamente como 'good', 'warning' ou 'critical'.
  4. Dê a recomendação final (recommendation) de mais alto impacto para o crescimento do negócio.`,
}); // CTO: AQUI ESTÁ O FECHAMENTO QUE ESTAVA FALTANDO! ✅

// 3. Definição do Flow (Escopo Global)
const businessAnalysisFlow = ai.defineFlow(
  {
    name: 'businessAnalysisFlow',
    inputSchema: BusinessAnalysisInputSchema,
    outputSchema: BusinessAnalysisOutputSchema,
  },
  async (input) => {
    const { output } = await analysisPrompt(input);
    
    // CTO: Tratamento de erro caso a API falhe na resposta
    if (!output) {
      throw new Error("Falha na API: O Genkit não retornou uma análise válida.");
    }
    
    return output;
  }
);

// 4. Função Principal (Wrapper)
export async function analyzeBusinessPerformance(input: BusinessAnalysisInput): Promise<BusinessAnalysisOutput> {
  return businessAnalysisFlow(input);
}