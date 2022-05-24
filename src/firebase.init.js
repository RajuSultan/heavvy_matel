// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBagPMnbbeyhxpWhISyad5KNlKTNuNdahE",
    authDomain: "menufacturer-5ee6c.firebaseapp.com",
    projectId: "menufacturer-5ee6c",
    storageBucket: "menufacturer-5ee6c.appspot.com",
    messagingSenderId: "249115194893",
    appId: "1:249115194893:web:c741ef2b4a9300f6fb8744",
    measurementId: "G-JQKVV4F31Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// console.log(auth);

export default auth;