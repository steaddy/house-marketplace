import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfY-P4_WGllLLWI42k8W9zySb4uid6KF0",
    authDomain: "house-marketplace-app-5b0bb.firebaseapp.com",
    projectId: "house-marketplace-app-5b0bb",
    storageBucket: "house-marketplace-app-5b0bb.appspot.com",
    messagingSenderId: "758653350736",
    appId: "1:758653350736:web:1d5ca012880cf66ab9b255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();