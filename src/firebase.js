// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAW9wdKvpHF-b2PaQVWt8dASzFKhf2A83U",
  authDomain: "kriegsspiel-tic-tac-toe.firebaseapp.com",
  projectId: "kriegsspiel-tic-tac-toe",
  storageBucket: "kriegsspiel-tic-tac-toe.appspot.com",
  messagingSenderId: "952364564017",
  appId: "1:952364564017:web:177eef6d7602c3d98f1f10",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
