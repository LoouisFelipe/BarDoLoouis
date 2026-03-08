'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

/**
 * @fileOverview Inicialização centralizada dos SDKs Firebase.
 * CTO: Garante que todas as chamadas utilizem o banco de dados "bardoluis".
 */

let emulatorsConnected = false;

export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      firebaseApp = initializeApp();
    } catch (e) {
      if (process.env.NODE_ENV === "production") {
        console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
      }
      firebaseApp = initializeApp(firebaseConfig);
    }

    return getSdks(firebaseApp);
  }

  return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp, "bardoluis");

  if (process.env.NODE_ENV === 'development' && !emulatorsConnected) {
    // connectFirestoreEmulator(firestore, 'localhost', 8080);
    // connectAuthEmulator(auth, 'http://localhost:9099');
    emulatorsConnected = true;
  }

  return {
    firebaseApp,
    auth,
    // CEO: Explicitamente apontando para a instância de banco "bardoluis" conforme console
    firestore
  };
}

export * from './provider';
export * from './client-provider';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
