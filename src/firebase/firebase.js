// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ ADD THIS

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0dz85WHuo-nYvbuXlVatNi1kP7f32ZfI",
  authDomain: "auth-e9cf8.firebaseapp.com",
  projectId: "auth-e9cf8",
  storageBucket: "auth-e9cf8.firebasestorage.app",
  messagingSenderId: "1076805857812",
  appId: "1:1076805857812:web:62c9260df5a7de34c56d01",
  measurementId: "G-WELXRM43MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔐 AUTH (UNCHANGED)
export const auth = getAuth(app);

// 🗄️ FIRESTORE (NEW – SAFE)
export const db = getFirestore(app);
