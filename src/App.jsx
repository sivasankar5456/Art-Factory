import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./app/components/ProtectedRoute";
import Login from "./app/pages/Login";
import SignUp from "./app/pages/SignUp";
import Dashboard from "./app/pages/Dashboard";
import { LandingPage } from "./app/pages/LandingPage";
import NotFound from "./app/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
