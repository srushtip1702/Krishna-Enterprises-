import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZdGXPlm0VoKsdCDjGs9fuukdFsvnfde0",
  authDomain: "krishna-enterprises-d8370.firebaseapp.com",
  projectId: "krishna-enterprises-d8370",
  storageBucket: "krishna-enterprises-d8370.firebasestorage.app",
  messagingSenderId: "767643535802",
  appId: "1:767643535802:web:87284a009906495452f583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// Firebase Storage for product images
export const storage = getStorage(app);