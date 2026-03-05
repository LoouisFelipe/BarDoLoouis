import { genkit } from 'genkit';
// CTO: Nova importação exigida pela atualização do Google!
import { googleAI } from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  // Agora usamos a string do modelo ao invés de variáveis, conforme a nova regra
  model: 'googleai/gemini-1.5-pro', 
});