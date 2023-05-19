// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
}; */

const firebaseConfig = {
  apiKey: "AIzaSyC1_vwT-7y7w8mLcWMe_IZmrYyzeS8L5ts",
  authDomain: "edu-toy-emporium.firebaseapp.com",
  projectId: "edu-toy-emporium",
  storageBucket: "edu-toy-emporium.appspot.com",
  messagingSenderId: "639372045528",
  appId: "1:639372045528:web:21e7d96a17dd1f59b1fbad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;