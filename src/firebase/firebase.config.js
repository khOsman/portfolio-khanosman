// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQr98ELvUaRDG2jkNxne8opi74uCu0_V0",
    authDomain: "portfolio-khanosman.firebaseapp.com",
    projectId: "portfolio-khanosman",
    storageBucket: "portfolio-khanosman.appspot.com",
    messagingSenderId: "854052300861",
    appId: "1:854052300861:web:bfdfa0761d6ea00a20a254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;