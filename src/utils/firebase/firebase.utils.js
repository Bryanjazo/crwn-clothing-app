// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userDocRefv = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRefv);
  console.log(userAuth, "password");

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRefv, {
        displayName: displayName,
        email: email,
        createdAt: createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("There was an error that refrences to: ", err);
    }
  } else {
    return userSnapShot;
  }

  //   check of user data exist if it does return user doc ref
  //  else create a user data document
};

export const createAuthUserDocumentFromAuth = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createSignInAuth = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
