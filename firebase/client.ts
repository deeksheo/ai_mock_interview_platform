// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYFTPeRceQtxIX0sCe63ZShl7eLoCD2IU",
    authDomain: "interview-aad22.firebaseapp.com",
    projectId: "interview-aad22",
    storageBucket: "interview-aad22.firebasestorage.app",
    messagingSenderId: "552110273902",
    appId: "1:552110273902:web:df52fb565a0caf941dbd7f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);