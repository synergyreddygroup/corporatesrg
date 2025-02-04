import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBroU7k6Hz7H5z0pGvdiTMoT1WJbLiZpBI",
  authDomain: "corporatedb-580e5.firebaseapp.com",
  projectId: "corporatedb-580e5",
  storageBucket: "corporatedb-580e5.firebasestorage.app",
  messagingSenderId: "504852713470",
  appId: "1:504852713470:web:506c92f27eacfec626baaf",
  measurementId: "G-NKX1JQF7P5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app); // Firestore instance
