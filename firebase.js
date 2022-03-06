// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYqKMtFOMX19CLCpjfQSfIrTYnMohC_w8",
  authDomain: "auntenticacion-firebase-3ab31.firebaseapp.com",
  projectId: "auntenticacion-firebase-3ab31",
  storageBucket: "auntenticacion-firebase-3ab31.appspot.com",
  messagingSenderId: "22879744736",
  appId: "1:22879744736:web:07f88f90182a0d70c7d685",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
const firestore = getFirestore();
