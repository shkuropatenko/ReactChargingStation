import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-oMnnjQPCEzwcPMvrg4hTKzXseC7uKY",
  authDomain: "reactchargingstation.firebaseapp.com",
  projectId: "reactchargingstation",
  storageBucket: "reactchargingstation.firebasestorage.app",
  messagingSenderId: "842769849820",
  appId: "1:842769849820:web:70528c84c62180715cc319",
  measurementId: "G-8YJNLSZEGW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
