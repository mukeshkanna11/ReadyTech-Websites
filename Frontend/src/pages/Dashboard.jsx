import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BgImage from "../assets/images/landing.jpg";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // ✅ Save selected role temporarily in localStorage
    localStorage.setItem("selectedRole", role);

    // ✅ Optional: pre-fill default email for UX
    if (role === "admin") {
      localStorage.setItem("defaultEmail", "admin@readytechsolutions.com");
    } else {
      localStorage.setItem("defaultEmail", "employee@readytechsolutions.com");
    }

    // ✅ Navigate to Login page
    navigate("/login");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Helmet>
        <title>Select Role | Ready Tech</title>
      </Helmet>

      <div className="w-full max-w-md p-8 text-center text-white shadow-xl bg-black/70 backdrop-blur-md rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold animate-pulse">Welcome to ReadyTech</h1>
        <p className="mb-6 text-gray-300">
          Select your login type to continue. Only ReadyTech Solutions users are allowed.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleRoleSelect("admin")}
            className="px-5 py-3 font-semibold text-black transition-all bg-yellow-400 shadow-md rounded-xl hover:bg-yellow-500 hover:scale-105"
          >
            Login as Admin
          </button>
          <button
            onClick={() => handleRoleSelect("employee")}
            className="px-5 py-3 font-semibold text-black transition-all bg-blue-400 shadow-md rounded-xl hover:bg-blue-500 hover:scale-105"
          >
            Login as Employee
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          🚀 ReadyTech Solutions - Secure company dashboard
        </p>
      </div>
    </div>
  );
}
