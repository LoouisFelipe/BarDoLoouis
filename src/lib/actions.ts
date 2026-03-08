'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Link } from '@/lib/schemas';
import { revalidatePath } from 'next/cache';

export async function saveLink(data: Partial<Link>, id?: string): Promise<void> {
  try {
    if (id) {
      await updateDoc(doc(db, 'links', id), {
        ...data,
        updatedAt: serverTimestamp(),
      });
    } else {
      await addDoc(collection(db, 'links'), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
    // Revalidate the path where links are displayed
    revalidatePath('/'); // Adjust the path as needed
  } catch (error) {
    console.error('Failed to save link:', error);
    throw new Error('Failed to save link.');
  }
}
