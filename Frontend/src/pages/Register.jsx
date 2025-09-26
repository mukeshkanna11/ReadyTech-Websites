// Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Frontend validation
    if (!name || !email || !password || !employeeId) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://readytech-websites.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, employeeId }),
        }
      );

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.msg || data.error || "Registration failed");
        return;
      }

      setSuccess("🎉 Registration successful! Redirecting to login...");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setEmployeeId("");

      // Redirect to login after 1.5 seconds
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Server error. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600">
     <Helmet> 
        <title>Register</title>
      </Helmet>
      <div className="w-full max-w-4xl p-12 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Create Account 🚀
        </h2>

        {/* Error message */}
        {error && (
          <div className="px-4 py-3 mb-4 text-center text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="px-4 py-3 mb-4 text-center text-green-800 bg-green-100 rounded-lg animate-pulse">
            {success}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="block mb-2 text-lg text-white">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
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

          <div>
            <label className="block mb-2 text-lg text-white">Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter your Employee ID (e.g., RTS112)"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-yellow-400"
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
                Registering...
              </span>
            ) : (
              "Sign Up"
            )}
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
