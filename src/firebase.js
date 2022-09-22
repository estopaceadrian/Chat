import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBNpPAe_TrtkbtLAu_ZetNVE31KFDQ_lfE',
  authDomain: 'chat-ec223.firebaseapp.com',
  projectId: 'chat-ec223',
  storageBucket: 'chat-ec223.appspot.com',
  messagingSenderId: '76525877482',
  appId: '1:76525877482:web:7679e72fdfa48093e5ff93',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
