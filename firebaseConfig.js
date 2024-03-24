// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoRMf820Hcy47nn_4CWYdfZc9X38E2nAw",
  authDomain: "cancer-identifier-fag.firebaseapp.com",
  projectId: "cancer-identifier-fag",
  storageBucket: "cancer-identifier-fag.appspot.com",
  messagingSenderId: "169696331794",
  appId: "1:169696331794:web:5df64705628aa7edfd70cb",
  measurementId: "G-P40H2H92RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getAuth } from "firebase/auth";
const auth = getAuth(app);