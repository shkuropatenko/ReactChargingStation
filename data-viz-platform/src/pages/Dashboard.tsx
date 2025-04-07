import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <button
        onClick={logout}
        className="bg-gray-800 text-white py-2 px-4 rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
