import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3xUuiCzwvc5-jXsDHyPSDH_EZyI3ZoFI",
  authDomain: "otpverification-75e48.firebaseapp.com",
  projectId: "otpverification-75e48",
  storageBucket: "otpverification-75e48.appspot.com",
  messagingSenderId: "678780443115",
  appId: "1:678780443115:web:9abfa1fa8cd9e31a1ce1ae",
  measurementId: "G-P3N3XFHVC7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
