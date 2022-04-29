// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWB1ncV_3bPiAmBr89e6HA510t8miMnQk",
  authDomain: "bikers-b2e71.firebaseapp.com",
  projectId: "bikers-b2e71",
  storageBucket: "bikers-b2e71.appspot.com",
  messagingSenderId: "24874167307",
  appId: "1:24874167307:web:720760d34c8caabbf3ab0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)