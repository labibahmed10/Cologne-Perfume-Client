import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYbCE-YqxthF2T_E95ObRLW2xqZR8pgVM",
  authDomain: "cologne-perfume-auth-6e250.firebaseapp.com",
  projectId: "cologne-perfume-auth-6e250",
  storageBucket: "cologne-perfume-auth-6e250.appspot.com",
  messagingSenderId: "180610178635",
  appId: "1:180610178635:web:024dea9c9e8cca8a66f7ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
