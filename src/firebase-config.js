import { initializeApp } from "firebase/app";
import {getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDAaJnMgS5Cd8ZHM-jJ-P3FZFGn-X3KqWI",
    authDomain: "blogme-1be3f.firebaseapp.com",
    projectId: "blogme-1be3f",
    storageBucket: "blogme-1be3f.appspot.com",
    messagingSenderId: "798943817298",
    appId: "1:798943817298:web:193e4f04460d298f68b98b",
    measurementId: "G-ME0LN20ZWG"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore();