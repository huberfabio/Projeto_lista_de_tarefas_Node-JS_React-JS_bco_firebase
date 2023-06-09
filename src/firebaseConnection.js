import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDtvGEeJebYlwfH_EL8fmyg0a_TYYkpON4",
  authDomain: "curso-f9c59.firebaseapp.com",
  projectId: "curso-f9c59",
  storageBucket: "curso-f9c59.appspot.com",
  messagingSenderId: "22727512912",
  appId: "1:22727512912:web:3ce261312f51bc26335255",
  measurementId: "G-BZH9PJ06BB"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };