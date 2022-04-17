// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU7q_h7tgjtoTYiewgFCoUkemzcyS_WB4",
  authDomain: "cardio-health-264d4.firebaseapp.com",
  projectId: "cardio-health-264d4",
  storageBucket: "cardio-health-264d4.appspot.com",
  messagingSenderId: "685409667591",
  appId: "1:685409667591:web:0bb03129956a6a79e378a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;