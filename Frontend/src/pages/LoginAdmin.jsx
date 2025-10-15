import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import BgCover from "../assets/images/admin-bg.jpg"; // ✅ use your uploaded cover image

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
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BgCover})`,
      }}
    >
      {/* Glassmorphic Container */}
      <div className="backdrop-blur-md bg-black/50 shadow-2xl rounded-2xl p-8 w-[360px] border border-gray-700/40">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 mb-3 text-4xl text-yellow-400 rounded-full shadow-md bg-white/10">
            <FaUserShield />
          </div>
          <h2 className="text-2xl font-bold tracking-wide text-white">
            Admin Login
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            Secure access for ReadyTech admins 🔐
          </p>
        </div>

        <form onSubmit={handleAdminLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-gray-300 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-gray-300 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <button
            type="submit"
            className="w-full py-2 mt-2 font-semibold text-black transition-all bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105"
          >
            Login Now
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ReadyTech Solutions • Admin Portal
          </p>
        </div>
      </div>
    </div>
  );
}
