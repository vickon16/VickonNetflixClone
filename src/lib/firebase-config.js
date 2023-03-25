import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "vickonnetflixclone-19a1b.firebaseapp.com",
  projectId: "vickonnetflixclone-19a1b",
  storageBucket: "vickonnetflixclone-19a1b.appspot.com",
  messagingSenderId: "391372660356",
  appId: "1:391372660356:web:dc51da2f2f0eed1db2ecd1",
};

// Initialize Firebase
export const app = getApps.length > 0 ? getApp()  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const collectionUserRef = collection(db, "Users");
export const collectionFilmsRef = collection(db, "Films");
export const collectionSeriesRef = collection(db, "Series");