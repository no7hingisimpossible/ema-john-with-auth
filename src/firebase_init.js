// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ2-infxaV1XBwher4TWDHnknglcZSoeI",
  authDomain: "ema-john-simple-9687c.firebaseapp.com",
  projectId: "ema-john-simple-9687c",
  storageBucket: "ema-john-simple-9687c.appspot.com",
  messagingSenderId: "566504762631",
  appId: "1:566504762631:web:95140586f48d779d8929a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;