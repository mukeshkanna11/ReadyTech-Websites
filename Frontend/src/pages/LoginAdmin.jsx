import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === "admin@readytech.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/dashboard");
    } else {
      alert("Invalid admin credentials ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <form
        onSubmit={handleAdminLogin}
        className="p-8 text-white bg-gray-800 shadow-xl rounded-2xl w-80"
      >
        <div className="flex items-center justify-center mb-4 text-4xl text-blue-400">
          <FaUserShield />
        </div>
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-3 text-black rounded-md focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-black rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
