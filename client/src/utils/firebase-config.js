import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCejYsZuk-nhYFKnaZDIRgHxW9y6y9zt4c",
    authDomain: "netflix-clone-874a7.firebaseapp.com",
    projectId: "netflix-clone-874a7",
    storageBucket: "netflix-clone-874a7.appspot.com",
    messagingSenderId: "1081745534314",
    appId: "1:1081745534314:web:4b530fbb6ee052352e8913",
    measurementId: "G-8QLRM60DJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)