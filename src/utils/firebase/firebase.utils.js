// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  fetchSignInMethodsForEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJeCZG7f4wueVy0PnN7WPdP_lgiUN1D8s",
  authDomain: "crwn-clothing-db-d55c6.firebaseapp.com",
  projectId: "crwn-clothing-db-d55c6",
  storageBucket: "crwn-clothing-db-d55c6.appspot.com",
  messagingSenderId: "261132533642",
  appId: "1:261132533642:web:894f1caa577acc76671273",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// database
export const db = getFirestore();
