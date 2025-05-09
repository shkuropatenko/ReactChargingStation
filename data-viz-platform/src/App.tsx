import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="py-8 px-8 xl:py-16 xl:px-19">
      <div className="border rounded-[10px] border-grey-400 bg-black-100">
        <Router basename="/ReactChargingStation">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard/home"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
