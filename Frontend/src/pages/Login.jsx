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
        if (res.status === 403) {
          setError("Employee ID does not match our records for this email.");
        } else if (res.status === 400) {
          setError(data.msg || "Invalid email or password.");
        } else {
          setError("Login failed. Please try again.");
        }
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      setError("Server error. Please check your connection and try again.");
      console.error("LOGIN ERROR:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0f] relative overflow-hidden">
      <Helmet>
        <title>ReadyTech | Login</title>
      </Helmet>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e1e2f_0%,_#0a0a0f_100%)] animate-pulse-slow" />

      <div className="relative w-full max-w-md p-10 rounded-2xl bg-[#101018]/80 backdrop-blur-2xl border border-[#2a2a3a] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Accent glow border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 opacity-40 blur-lg animate-glow" />

        <div className="relative z-10">
          <h2 className="mb-8 text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text drop-shadow-lg">
            Welcome Back 👋
          </h2>

          {error && (
            <div className="px-4 py-3 mb-4 text-center text-red-300 border rounded-lg bg-red-900/30 border-red-600/40 animate-pulse">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Employee ID */}
            <div className="group">
              <label className="block mb-2 text-sm font-medium text-gray-400 transition group-focus-within:text-blue-400">
                Employee ID
              </label>
              <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                placeholder="e.g., RTS112"
                required
                className="w-full px-4 py-3 bg-[#1a1a24] text-white placeholder-gray-500 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_10px_#3b82f6]"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block mb-2 text-sm font-medium text-gray-400 transition group-focus-within:text-purple-400">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-[#1a1a24] text-white placeholder-gray-500 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_10px_#8b5cf6]"
              />
            </div>

            {/* Password */}
            <div className="group">
              <label className="block mb-2 text-sm font-medium text-gray-400 transition group-focus-within:text-pink-400">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 bg-[#1a1a24] text-white placeholder-gray-500 rounded-xl border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all duration-300 hover:border-pink-400 hover:shadow-[0_0_10px_#ec4899]"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
            >
              <span className="absolute inset-0 transition-all duration-500 ease-out bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl group-hover:opacity-90 group-hover:scale-105" />
              <span className="relative z-10">
                {loading ? "Authenticating..." : "Login"}
              </span>
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-pink-400 transition hover:text-pink-300 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* 💡 Add these Tailwind animations in your global CSS (index.css or App.css) */
