import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWPTu8E8SgBScuhVYpnJG2WK7we1sSJGw',
  authDomain: 'chat-8b410.firebaseapp.com',
  projectId: 'chat-8b410',
  storageBucket: 'chat-8b410.appspot.com',
  messagingSenderId: '538487429537',
  appId: '1:538487429537:web:a04c93a225661b1bb813e0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
