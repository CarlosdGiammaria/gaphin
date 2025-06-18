import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export { collection, doc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, addDoc, where, onSnapshot } from "firebase/firestore";
// Tu configuración
const firebaseConfig = {
  apiKey: "AIzaSyAHUQuR52MP205-FwWMsBcxDzlA9rpJ-7E",
  authDomain: "rese-2.firebaseapp.com",
  projectId: "rese-2",
  storageBucket: "rese-2.firebasestorage.app",
  messagingSenderId: "26624574651",
  appId: "1:26624574651:web:0d0c57259bfc0bf448159e"
};

// Inicializar solo si no hay apps
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const storage = getStorage(app);
