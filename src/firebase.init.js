// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8kgTn0Wc6kIxiOSTyOZDHSoap37oGWRE",
  authDomain: "ema-john-simple-1539b.firebaseapp.com",
  projectId: "ema-john-simple-1539b",
  storageBucket: "ema-john-simple-1539b.appspot.com",
  messagingSenderId: "65878806363",
  appId: "1:65878806363:web:257de99fb8cb71e08b947e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;