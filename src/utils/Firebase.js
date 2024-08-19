// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj5hknpLFh7gu1DxD1Zs6Nb5yiFiavnlE",
  authDomain: "netflix-gpt-2352e.firebaseapp.com",
  projectId: "netflix-gpt-2352e",
  storageBucket: "netflix-gpt-2352e.appspot.com",
  messagingSenderId: "1023774577558",
  appId: "1:1023774577558:web:9cc181e5683ca2cd0303b7",
  measurementId: "G-J6DV5RV1ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();