'use server';

/**
 * @fileOverview A Genkit flow for summarizing the content of a saved web link.
 *
 * - summarizeSavedLink - A function that fetches content from a URL and generates a concise summary using AI.
 * - SummarizeSavedLinkInput - The input type for the summarizeSavedLink function.
 * - SummarizeSavedLinkOutput - The return type for the summarizeSavedLink function.
 */

import { z } from 'genkit';
import { ai } from '@/ai/genkit';

const SummarizeSavedLinkInputSchema = z.object({
  url: z.string().url().describe('The URL of the webpage to summarize.'),
});
export type SummarizeSavedLinkInput = z.infer<typeof SummarizeSavedLinkInputSchema>;

const SummarizeSavedLinkOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the webpage content, highlighting key information and purpose.'),
});
export type SummarizeSavedLinkOutput = z.infer<typeof SummarizeSavedLinkOutputSchema>;

const summarizeLinkPrompt = ai.definePrompt({
  name: 'summarizeLinkPrompt',
  input: {
    schema: z.object({
      content: z.string().describe('The raw text content of the webpage to be summarized.'),
      url: z.string().url().describe('The original URL for context.'),
    }),
  },
  output: {
    schema: SummarizeSavedLinkOutputSchema,
    format: 'json',
  },
  prompt: `Você é um assistente de IA especializado em resumir o conteúdo de páginas web.
  Leia o seguinte conteúdo bruto de uma página web (URL: {{{url}}}) e forneça um resumo conciso, destacando as informações chave e o propósito principal da página.
  O resumo deve ter no máximo 3-5 frases. Se o conteúdo for irrelevante ou não puder ser processado, retorne um resumo indicando isso.

  Conteúdo:
  {{{content}}}`,
});

const summarizeSavedLinkFlow = ai.defineFlow(
  {
    name: 'summarizeSavedLinkFlow',
    inputSchema: SummarizeSavedLinkInputSchema,
    outputSchema: SummarizeSavedLinkOutputSchema,
  },
  async (input) => {
    const { url } = input;
    let fetchedContent: string;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || (!contentType.includes('text/html') && !contentType.includes('text/plain'))) {
        throw new Error('URL does not point to text/html or text/plain content.');
      }

      fetchedContent = await response.text();

      // Truncate content to avoid exceeding token limits (e.g., first 100,000 characters)
      const MAX_CONTENT_LENGTH = 100000;
      if (fetchedContent.length > MAX_CONTENT_LENGTH) {
        fetchedContent = fetchedContent.substring(0, MAX_CONTENT_LENGTH) + '\n... (conteúdo truncado)';
      }

    } catch (error: any) {
      console.error(`Error fetching or processing URL ${url}:`, error.message);
      return { summary: `Não foi possível acessar ou resumir o conteúdo do link: ${url}. Erro: ${error.message}` };
    }

    const { output } = await summarizeLinkPrompt({ content: fetchedContent, url: url });

    if (!output) {
      throw new Error("Genkit did not return a valid summary from the prompt.");
    }

    return output;
  }
);

export async function summarizeSavedLink(input: SummarizeSavedLinkInput): Promise<SummarizeSavedLinkOutput> {
  return summarizeSavedLinkFlow(input);
}
