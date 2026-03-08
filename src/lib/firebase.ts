import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config'; // Importando a configuração correta

// Se estiver usando o Data Connect, descomente a linha abaixo
// import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect';

// Inicialização segura para evitar recriação no Next.js (HMR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);
// const dc = getDataConnect(app); // Exemplo para Data Connect

// Em ambiente de desenvolvimento, você pode querer conectar aos emuladores
// if (process.env.NODE_ENV === 'development') {
//   connectDataConnectEmulator(dc, 'localhost', 9399);
// }

// Exporte as instâncias para serem usadas no resto da aplicação
export { app, auth, firestore as db /*, dc */ };
