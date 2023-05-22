import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7NUbNV5kaOkrcUZ5UDADQbUwtilxi5WA",
  authDomain: "netflix-510b5.firebaseapp.com",
  projectId: "netflix-510b5",
  storageBucket: "netflix-510b5.appspot.com",
  messagingSenderId: "624856687632",
  appId: "1:624856687632:web:2a1438a737915108685695",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };

export default db;
