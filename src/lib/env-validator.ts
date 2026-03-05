const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

export function validateEnv() {
  const missing = requiredEnvVars.filter(key => {
    const val = process.env[key]?.replace(/['"]+/g, '').trim();
    return !val || val === 'undefined' || val === 'null';
  });
  
  if (missing.length > 0) {
    const errorMsg = `🚨 ERRO CRÍTICO DE CONFIGURAÇÃO: As seguintes chaves do Firebase estão faltando no ambiente: ${missing.join(', ')}. Verifique seu arquivo .env ou as configurações de Deploy.`;
    
    if (typeof window !== 'undefined') {
      console.error(errorMsg);
    }

    if (process.env.NODE_ENV === 'production') {
      throw new Error(errorMsg);
    }
  }

  // CFO: Garante que não estamos tentando rodar produção com ID de projeto errado
  const currentProject = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.replace(/['"]+/g, '').trim();
  if (currentProject && currentProject !== "bardoluis") {
    console.warn(`⚠️ Atenção: Você está conectado ao projeto ${currentProject} e não ao 'bardoluis'.`);
  }
}