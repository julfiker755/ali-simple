import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeFIuVM_b9-Bf3PL1ruGyb5LIieEZTUIg",
  authDomain: "doc-house-9a7bf.firebaseapp.com",
  projectId: "doc-house-9a7bf",
  storageBucket: "doc-house-9a7bf.appspot.com",
  messagingSenderId: "316259452618",
  appId: "1:316259452618:web:8cd30731f1628f89489633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;