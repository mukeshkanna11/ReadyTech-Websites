import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BgImage from "../assets/images/landing.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");

  // Check role selected from Dashboard
  useEffect(() => {
    const selectedRole = localStorage.getItem("selectedRole");
    if (!selectedRole) {
      navigate("/dashboard"); // go back to role selection if none
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
      // Call backend login API
      const response = await fetch(
        "https://readytech-websites.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, employeeId }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Login failed");
      }

      // Ensure role is lowercase
      const userRole = data.user.role?.toLowerCase();

      // Only allow admin or employee
      if (userRole !== "admin" && userRole !== "employee") {
        setError("Invalid role assigned.");
        return;
      }

      // Save user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate to respective dashboard
      navigate(userRole === "admin" ? "/admin-dashboard" : "/employee-dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (!role) return null; // Prevent render until role selected

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Helmet>
        <title>Login | Ready Tech</title>
      </Helmet>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 text-center text-white bg-black/70 backdrop-blur-md rounded-2xl"
      >
        <h1 className="mb-6 text-3xl font-bold">
          Login as {role === "admin" ? "Admin" : "Employee"}
        </h1>

        {error && <p className="mb-4 font-semibold text-red-400">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 text-black rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 text-black rounded"
          required
        />

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="w-full px-4 py-3 mb-6 text-black rounded"
          required
        />

        <button
          type="submit"
          className="w-full px-5 py-3 font-semibold text-black transition-all bg-green-400 rounded-xl hover:bg-green-500 hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
}
