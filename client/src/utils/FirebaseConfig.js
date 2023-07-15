import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTl1yGJD4aUr6xRy5P8MIYWOCkqEnqsVE",
    authDomain: "whatsapp-clone-8c944.firebaseapp.com",
    projectId: "whatsapp-clone-8c944",
    storageBucket: "whatsapp-clone-8c944.appspot.com",
    messagingSenderId: "616587697084",
    appId: "1:616587697084:web:1e168e3e2dceea080a69b9",
    measurementId: "G-TXW5EFC87Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)