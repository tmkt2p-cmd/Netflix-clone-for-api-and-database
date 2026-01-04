// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4tml9sm1OPSR-R0HoEH-CugzI7ZlbUVM",
  authDomain: "mrbflix-45e88.firebaseapp.com",
  projectId: "mrbflix-45e88",
  storageBucket: "mrbflix-45e88.firebasestorage.app",
  messagingSenderId: "1060395635318",
  appId: "1:1060395635318:web:98e1ce916a51aba3fa0557",
  measurementId: "G-E8ZEL8FMXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;