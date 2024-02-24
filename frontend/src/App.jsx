import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import FeaturesPage from "./screens/FeaturesPage";
import AboutUs from "./screens/AboutUs";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import Dashboard from "./screens/Dashboard";
import AdminRoute from "./components/AdminRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./screens/ProfilePage.jsx";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/FeaturesPage" element={<FeaturesPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="" element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
