// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwbWiPcJgf36VWMTzY5TSfYeumt3Rrvvw",
  authDomain: "personal-website-4ca64.firebaseapp.com",
  projectId: "personal-website-4ca64",
  storageBucket: "personal-website-4ca64.appspot.com",
  messagingSenderId: "1047180530711",
  appId: "1:1047180530711:web:6dfbdefae654b932feb852",
  measurementId: "G-TFP2RGETP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);