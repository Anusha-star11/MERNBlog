// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-308c5.firebaseapp.com",
  projectId: "mern-blog-308c5",
  storageBucket: "mern-blog-308c5.appspot.com",
  messagingSenderId: "265862603775",
  appId: "1:265862603775:web:a7e6a5b41d80c125743dca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);