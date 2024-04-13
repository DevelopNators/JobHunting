// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBmUCy8OZBaRuIgrJ3kefKgekLROx3jUk",
  authDomain: "developernators.firebaseapp.com",
  projectId: "developernators",
  storageBucket: "developernators.appspot.com",
  messagingSenderId: "237328315289",
  appId: "1:237328315289:web:7cc73f0035284d8ac51908",
  measurementId: "G-MTTNMLZD21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);