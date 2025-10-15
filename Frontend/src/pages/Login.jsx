import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaUserShield, FaUserTie } from "react-icons/fa";

// 🖼 Role-based Backgrounds
import AdminBg from "../assets/images/landing.jpg"; // upload a premium office / control room style image
import EmployeeBg from "../assets/images/p3.png"; // upload a teamwork / workspace image

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");

  // Fetch selected role
  useEffect(() => {
    const selectedRole = localStorage.getItem("selectedRole");
    if (!selectedRole) {
      navigate("/dashboard");
    } else {
      setRole(selectedRole);
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!role || !email || !password || !employeeId) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://readytech-websites.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, employeeId }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || "Login failed");

      const userRole = data.user.role?.toLowerCase();
      if (userRole !== "admin" && userRole !== "employee") {
        setError("Invalid role assigned.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate(userRole === "admin" ? "/admin-dashboard" : "/employee-dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  if (!role) return null;

  // 🎨 Dynamic Theme by Role
  const isAdmin = role === "admin";
  const bgImage = isAdmin ? AdminBg : EmployeeBg;
  const accentColor = isAdmin ? "yellow" : "blue";
  const accentClasses = isAdmin
    ? "bg-yellow-400 text-black hover:bg-yellow-500"
    : "bg-blue-400 text-black hover:bg-blue-500";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${bgImage})`,
      }}
    >
      <Helmet>
        <title>{isAdmin ? "Admin Login" : "Employee Login"} | ReadyTech</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm p-8 text-white border shadow-2xl bg-black/60 backdrop-blur-md rounded-2xl border-white/10"
      >
        {/* Role Icon + Title */}
        <div className="flex flex-col items-center mb-6">
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl ${
              isAdmin
                ? "bg-yellow-400/20 text-yellow-400"
                : "bg-blue-400/20 text-blue-400"
            }`}
          >
            {isAdmin ? <FaUserShield /> : <FaUserTie />}
          </div>

          <motion.h1
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            className="text-2xl font-bold tracking-wide"
          >
            {isAdmin ? "Admin Login" : "Employee Login"}
          </motion.h1>

          <span
            className={`mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
              isAdmin
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/40"
                : "bg-blue-500/20 text-blue-300 border border-blue-400/40"
            }`}
          >
            {isAdmin ? "Admin Access Only" : "Employee Access Only"}
          </span>
        </div>

        {/* Error Message */}
        {error && (
          <p className="p-2 mb-3 text-sm font-medium text-red-400 rounded-lg bg-red-500/10">
            ⚠️ {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Official Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 text-white placeholder-gray-300 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 text-white placeholder-gray-300 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="text"
            placeholder="Employee ID (e.g., RTS1001)"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="px-4 py-2 text-white placeholder-gray-300 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <button
            type="submit"
            className={`w-full py-2 font-semibold rounded-lg shadow-md transition-all hover:scale-105 ${accentClasses}`}
          >
            {isAdmin ? "Login as Admin" : "Login as Employee"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-300">
            🚀 ReadyTech Secure Portal • {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
