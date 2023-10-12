
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALTLpRRndZ7rzvIcyoyyani0xm62t2IPg",
  authDomain: "sankalp-1472e.firebaseapp.com",
  projectId: "sankalp-1472e",
  storageBucket: "sankalp-1472e.appspot.com",
  messagingSenderId: "304709313355",
  appId: "1:304709313355:web:66597419be318a6c0dfece"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);