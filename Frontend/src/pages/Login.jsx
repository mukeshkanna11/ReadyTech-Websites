import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://readytech-websites.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, employeeId }),
        }
      );

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.msg || "Login failed");
        return;
      }

      // Save token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      setError("Server error. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="w-full max-w-md p-10 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-white">
          Welcome Back 👋
        </h2>

        {error && <p className="mb-4 text-center text-red-400">{error}</p>}

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Employee ID */}
          <div>
            <label className="block mb-2 font-medium text-white">
              Employee ID
            </label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="e.g., RTS112"
              required
              className="w-full px-4 py-3 text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-purple-400"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold text-white transition-transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
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
