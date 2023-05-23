// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5SMmWGDLr1RHI3OtZGwsUECHfNEud2-0",
  authDomain: "instagram-b3803.firebaseapp.com",
  projectId: "instagram-b3803",
  storageBucket: "instagram-b3803.appspot.com",
  messagingSenderId: "1094857479691",
  appId: "1:1094857479691:web:cacdec55a465f4172e990e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
