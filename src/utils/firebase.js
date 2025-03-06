// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJPBAFPIHYVcptfdkeKs4h6ZgC9fojbJg",
  authDomain: "netflixgpt-8d5fa.firebaseapp.com",
  projectId: "netflixgpt-8d5fa",
  storageBucket: "netflixgpt-8d5fa.firebasestorage.app",
  messagingSenderId: "97395079963",
  appId: "1:97395079963:web:314b385d07c3850e8671be",
  measurementId: "G-N6DWW2ZBTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();