import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600">
      <div className="w-full max-w-4xl p-12 shadow-2xl bg-white/10 backdrop-blur-xl rounded-2xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Create Account 🚀
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-lg text-white">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-lg text-gray-800 outline-none rounded-xl bg-white/80 focus:ring-4 focus:ring-teal-400"
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
          <Link to="/login" className="font-semibold text-yellow-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
