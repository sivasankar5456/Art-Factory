// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvsCKyMOH_s4jnQMB9mXb7RBDIdLzycb0",
  authDomain: "art-factory-bd59a.firebaseapp.com",
  projectId: "art-factory-bd59a",
  storageBucket: "art-factory-bd59a.firebasestorage.app",
  messagingSenderId: "205893003031",
  appId: "1:205893003031:web:a62997d94a2bda187eb952",
  measurementId: "G-PJMMFERB5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);