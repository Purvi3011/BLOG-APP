// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU5WBsiRBu_nJFKrmFLJ7s27edii-M898",
  authDomain: "blog-project-cccb3.firebaseapp.com",
  projectId: "blog-project-cccb3",
  storageBucket: "blog-project-cccb3.appspot.com",
  messagingSenderId: "230523770419",
  appId: "1:230523770419:web:e9562db268c6667fb57546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();