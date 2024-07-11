// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5zOtW4XAkn3l7OM8Kqyn62hK_mdtTVJY",
  authDomain: "apexstatstracker-d6409.firebaseapp.com",
  projectId: "apexstatstracker-d6409",
  storageBucket: "apexstatstracker-d6409.appspot.com",
  messagingSenderId: "94019820646",
  appId: "1:94019820646:web:8eaeca920b627f46ce61a7",
  measurementId: "G-Q8RM822SWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
