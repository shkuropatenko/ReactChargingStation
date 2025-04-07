import { useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <input
        className="border p-2 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={loginWithEmail}
        className="bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
      <button onClick={signUp} className="bg-green-500 text-white py-2 rounded">
        Register
      </button>
      <button
        onClick={loginWithGoogle}
        className="bg-red-500 text-white py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Home;
