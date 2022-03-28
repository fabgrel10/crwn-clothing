// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnigRNrWclCfE2FrI4kuuCYacZWH0ffm8',
  authDomain: 'crwn-clothing-db-5e040.firebaseapp.com',
  projectId: 'crwn-clothing-db-5e040',
  storageBucket: 'crwn-clothing-db-5e040.appspot.com',
  messagingSenderId: '982553123350',
  appId: '1:982553123350:web:e412c892e8acf03a04b337'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
