// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6X7Cq1C1trzzXhYDhZ8a_d8XX1m8r8WU",
  authDomain: "medg-f8409.firebaseapp.com",
  projectId: "medg-f8409",
  storageBucket: "medg-f8409.appspot.com",
  messagingSenderId: "952656705930",
  appId: "1:952656705930:web:467b8271af0f40e068f073",
  measurementId: "G-MRDZ094XZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
