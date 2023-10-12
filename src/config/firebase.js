// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALTLpRRndZ7rzvIcyoyyani0xm62t2IPg",
  authDomain: "sankalp-1472e.firebaseapp.com",
  projectId: "sankalp-1472e",
  storageBucket: "sankalp-1472e.appspot.com",
  messagingSenderId: "304709313355",
  appId: "1:304709313355:web:66597419be318a6c0dfece"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = new GoogleAuthProvider();