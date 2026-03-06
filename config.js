/**
 * @fileOverview Configuração e inicialização do Firebase Client SDK para Next.js.
 * @see /home/louisfelipecabral/GEMINI.md
 *
 * @description
 * CTO: Este é o ponto central para a configuração do Firebase no lado do cliente (browser).
 * Ele lê as chaves do arquivo .env.local, garantindo que nenhum segredo seja exposto
 * no código-fonte. A verificação `getApps()` previne a reinicialização do app em
 * ambientes de desenvolvimento com Fast Refresh (HMR), que é uma prática essencial.
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// As variáveis de ambiente são carregadas pelo Next.js a partir do arquivo .env.local
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // Opcional: Adicione esta variável ao seu .env.local se for usar o Google Analytics
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Validação para garantir que as variáveis de ambiente foram carregadas.
// Isso evita erros silenciosos e facilita a depuração.
if (!firebaseConfig.apiKey) {
  throw new Error("Firebase config is missing. Make sure to set up your .env.local file.");
}

// Inicializa o Firebase de forma segura, evitando duplicação
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Exporta as instâncias para serem usadas em outras partes da aplicação
export { app, db, auth, storage };