// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL4SEBCkHdo0IJWCGNG7KouQQKudp8gEw",
  authDomain: "fir-storage-b1293.firebaseapp.com",
  projectId: "fir-storage-b1293",
  storageBucket: "fir-storage-b1293.appspot.com",
  messagingSenderId: "1068011657392",
  appId: "1:1068011657392:web:bbe8aa86f22c684aca4375",
  measurementId: "G-P1B4JYSV6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;