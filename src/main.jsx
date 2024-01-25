import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2JR2ZOOGQcKs4Oqow4mbW3szKl18zVVs",
  authDomain: "fgmuebleria-53529.firebaseapp.com",
  projectId: "fgmuebleria-53529",
  storageBucket: "fgmuebleria-53529.appspot.com",
  messagingSenderId: "907362577756",
  appId: "1:907362577756:web:1d68e79690f545bef12599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <App />
  </React.StrictMode>,
)
