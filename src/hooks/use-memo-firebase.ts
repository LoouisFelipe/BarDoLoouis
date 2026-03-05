import { useMemo, DependencyList } from 'react';
import { CollectionReference, Query, DocumentData, DocumentReference } from 'firebase/firestore';

export function useMemoFirebase<T extends CollectionReference<DocumentData> | Query<DocumentData> | DocumentReference<DocumentData> | null | undefined>(
  factory: () => T,
  deps: DependencyList
): T & { __memo?: boolean } {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedValue = useMemo(factory, deps);
  
  if (memoizedValue && typeof memoizedValue === 'object') {
    (memoizedValue as any).__memo = true;
  }
  
  return memoizedValue as T & { __memo?: boolean };
}
