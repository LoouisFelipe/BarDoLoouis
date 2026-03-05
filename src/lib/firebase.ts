import { initializeFirebase } from "@/firebase";

/**
 * @fileOverview Ponto de acesso simplificado para instâncias Firebase.
 * CTO: Consolidado para usar a inicialização mestre do projeto, 
 * garantindo que não existam instâncias duplicadas ou conflitos de banco.
 */

const { auth: firebaseAuth, firestore: firebaseDb } = initializeFirebase();

export const auth = firebaseAuth;
export const db = firebaseDb;

export default firebaseDb;
