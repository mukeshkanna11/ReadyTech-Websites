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
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <Helmet>
        <title>Login | Ready Tech Solutions</title>
      </Helmet>

      <div className="w-full max-w-4xl p-10 border shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl border-white/20">
        <h2 className="mb-8 text-4xl font-extrabold text-center text-white">
          Welcome Back 👋
        </h2>

        {/* Error message */}
        {error && (
          <div className="px-4 py-3 mb-4 text-center text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-lg font-medium text-white">
              Employee ID
            </label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter your Employee ID"
              className="w-full px-5 py-3 text-gray-800 outline-none bg-white/80 rounded-xl focus:ring-4 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-gray-800 outline-none bg-white/80 rounded-xl focus:ring-4 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-gray-800 outline-none bg-white/80 rounded-xl focus:ring-4 focus:ring-teal-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-lg font-semibold text-white transition transform rounded-xl bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {loading && (
          <p className="mt-4 text-center text-white animate-pulse">
            ⏳ Verifying credentials... please wait
          </p>
        )}

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
