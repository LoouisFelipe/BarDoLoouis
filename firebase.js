import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// As variáveis de ambiente do seu arquivo .env.local são carregadas aqui.
// O prefixo NEXT_PUBLIC_ as torna acessíveis no lado do cliente (navegador).
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicializa o Firebase, mas evita a reinicialização se já houver uma instância.
// Isso é importante para o Hot Module Replacement (HMR) do Next.js.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa e exporta os serviços do Firebase que você usará no projeto.
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };