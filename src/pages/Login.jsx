import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="w-full max-w-4xl p-12 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Welcome Back 👋
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-lg text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-purple-400"
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
          <Link to="/register" className="font-semibold text-yellow-300 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
