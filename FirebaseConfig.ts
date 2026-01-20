import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyCBODiQs52jn3DihvCxFjD8KlvpE6Wc4UQ",
    authDomain: "premierleague-7ab70.firebaseapp.com",
    projectId: "premierleague-7ab70",
    storageBucket: "premierleague-7ab70.firebasestorage.app",
    messagingSenderId: "751683728058",
    appId: "1:751683728058:web:41dee3ffc6560c378bc883",
    measurementId: "G-KYHM6KFV3S"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
