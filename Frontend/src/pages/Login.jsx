import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState(""); // ✅ Employee ID field
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, employeeId }), // send Employee ID
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Login failed");
        return;
      }

      // ✅ Save token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Server error");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="w-full max-w-4xl p-12 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Welcome Back 👋
        </h2>

        {/* Display error */}
        {error && <p className="mb-4 text-center text-red-400">{error}</p>}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-lg text-white">Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter your employee ID (e.g., RTS112)"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-400"
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
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-400"
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
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-purple-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white transition transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-yellow-300 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
