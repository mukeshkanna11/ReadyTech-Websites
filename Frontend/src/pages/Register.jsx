import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://rtech-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Registration failed");
        return;
      }

      // Optional: redirect to login page after registration
      navigate("/login");
    } catch (err) {
      setError("Server error");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600">
      <div className="w-full max-w-4xl p-12 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Create Account 🚀
        </h2>
        {error && <p className="mb-4 text-center text-red-400">{error}</p>}
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="block mb-2 text-lg text-white">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-teal-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white transition transform rounded-xl bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-yellow-300 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
