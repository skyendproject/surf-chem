import { db } from '@/lib/firebase';
import {
    addDoc,
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    query as makeQuery,
    QueryConstraint,
    serverTimestamp,
    setDoc
} from 'firebase/firestore';

export function getDocRef(id: string, col: string) {
    return doc(db, col, id);
}

export async function readCollection(path: string, constraints?: QueryConstraint[]) {
    const ref = collection(db, path);
    const query = constraints?.length ? makeQuery(ref, ...constraints) : ref;
    const snap = await getDocs(query);
    return snap.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });
}

export async function readDocument(id: string, col: string) {
    const ref = doc(db, col, id);
    const snap = await getDoc(ref);
    return {
        id: snap.id,
        ...snap.data(),
    };
}


export async function createDocument(col: string, data: DocumentData, id?: string) {
    data.created_at = serverTimestamp()
    id ? await setDoc(doc(db, col, id), data) : await addDoc(collection(db, col), data)
}
