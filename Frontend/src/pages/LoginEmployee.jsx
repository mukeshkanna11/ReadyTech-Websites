import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

export default function LoginEmployee() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmployeeLogin = (e) => {
    e.preventDefault();
    if (email === "employee@readytech.com" && password === "emp123") {
      localStorage.setItem("role", "employee");
      navigate("/dashboard");
    } else {
      alert("Invalid employee credentials ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-black">
      <form
        onSubmit={handleEmployeeLogin}
        className="p-8 text-white bg-gray-800 shadow-xl rounded-2xl w-80"
      >
        <div className="flex items-center justify-center mb-4 text-4xl text-purple-400">
          <FaUserTie />
        </div>
        <h2 className="mb-6 text-2xl font-bold text-center">Employee Login</h2>
        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-3 text-black rounded-md focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Employee Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-black rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
