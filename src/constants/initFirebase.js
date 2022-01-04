import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
initializeApp({
  apiKey: "AIzaSyBC5Gj92opgTEuXYk8Bs1nEJn9Ldefx8Lc",
  authDomain: "green-crypto.firebaseapp.com",
  projectId: "green-crypto",
  storageBucket: "green-crypto.appspot.com",
  messagingSenderId: "8912097662",
  appId: "1:8912097662:web:b24ac8928ef633a40ba32f",
  measurementId: "G-EDT1XWF6VV",
});
const db = getFirestore();
export { db };
