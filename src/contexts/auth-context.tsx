'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  signInWithEmailAndPassword, 
  signOut, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { doc, onSnapshot, setDoc, serverTimestamp, DocumentData, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export type FirebaseUser = User;

const CEO_UID = "o0FzqC1oYoYYwjgJXbbgL4QoCe42";
const ADMIN_EMAIL = "louisfelipecabral@gmail.com";

export interface UserProfile extends DocumentData {
  uid: string;
  name?: string;
  email?: string;
  role?: 'admin' | 'cashier' | 'waiter';
  createdAt?: any;
}

interface AuthContextType {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  isLoadingAuth: boolean;
  authError: Error | null;
  isLoadingProfile: boolean;
  profileError: Error | null;
  isAuthReady: boolean;
  isAdmin: boolean;
  isCaixaOrAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState<Error | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [profileError, setProfileError] = useState<Error | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const isAdmin = user?.uid === CEO_UID || userProfile?.role === 'admin';
  const isCaixaOrAdmin = isAdmin || userProfile?.role === 'cashier';

  useEffect(() => {
    if (!auth) return;

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoadingAuth(false);
      setAuthError(null);
      setIsAuthReady(true);

      if (currentUser) {
        setIsLoadingProfile(true);
      } else {
        setUserProfile(null);
        setIsLoadingProfile(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    let unsubscribeProfile: () => void;

    if (user && db) {
      const userProfileRef = doc(db, 'users', user.uid);
      unsubscribeProfile = onSnapshot(
        userProfileRef,
        async (docSnap) => {
          if (docSnap.exists()) {
            setUserProfile({ ...docSnap.data(), uid: docSnap.id } as UserProfile);
          } else {
            console.log(`User ${user.email} not found in Firestore. Creating profile...`);
            try {
              const isGoogleAdmin = user.email === ADMIN_EMAIL;
              const newProfile: UserProfile = {
                uid: user.uid,
                name: user.displayName || user.email?.split('@')[0] || 'New User',
                email: user.email,
                role: isGoogleAdmin ? 'admin' : 'waiter',
                createdAt: serverTimestamp(),
              };
              await setDoc(userProfileRef, newProfile);
              setUserProfile(newProfile);
            } catch (error) {
              console.error("Error creating user profile:", error);
              setProfileError(error as Error);
            }
          }
          setIsLoadingProfile(false);
          setProfileError(null);
        },
        (error) => {
          console.error("Profile listen error:", error);
          setProfileError(error);
          setIsLoadingProfile(false);
        }
      );
    }

    return () => {
      if (unsubscribeProfile) unsubscribeProfile();
    };
  }, [user]);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoadingAuth(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setAuthError(error);
      throw error;
    } finally {
      setIsLoadingAuth(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      setAuthError(error);
    }
  }, []);

  const signup = useCallback(async (email: string, password: string) => {
    setIsLoadingAuth(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged and the useEffect above will handle profile creation
    } catch (error: any) {
      setAuthError(error);
      throw error;
    } finally {
      setIsLoadingAuth(false);
    }
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setIsLoadingAuth(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // onAuthStateChanged and the useEffect above will handle profile creation
    } catch (error: any) {
      setAuthError(error);
      throw error;
    } finally {
      setIsLoadingAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, userProfile, isLoadingAuth, authError, isLoadingProfile, 
      profileError, isAuthReady, isAdmin, isCaixaOrAdmin, login, logout, signup, signInWithGoogle 
    }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
