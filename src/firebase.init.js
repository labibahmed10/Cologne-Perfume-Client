// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbv-F23s1pjPq-p9rvAgTU4W01p_Udhn0",
  authDomain: "cologne-perfume-auth.firebaseapp.com",
  projectId: "cologne-perfume-auth",
  storageBucket: "cologne-perfume-auth.appspot.com",
  messagingSenderId: "192614512557",
  appId: "1:192614512557:web:800ee78418f0bb030f1324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
