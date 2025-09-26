import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password: password.trim(),
            employeeId: employeeId.trim(),
          }),
        }
      );

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        // Handle 403 and 400 errors
        if (res.status === 403) {
          setError("Employee ID does not match our records for this email.");
        } else if (res.status === 400) {
          setError(data.msg || "Invalid email or password.");
        } else {
          setError("Login failed. Please try again.");
        }
        return;
      }

      // ✅ Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      setError("Server error. Please check your connection and try again.");
      console.error("LOGIN ERROR:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">

      <Helmet>
        <title>ReadyTech | Login</title>
      </Helmet> 
      <div className="w-full max-w-md p-10 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-white">
          Welcome Back 👋
        </h2>

        {/* Error message */}
        {error && (
          <div className="px-4 py-3 mb-4 text-center text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

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
