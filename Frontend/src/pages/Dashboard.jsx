import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import BgImage from "../assets/images/landing.jpg";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    localStorage.setItem("selectedRole", role);
    if (role === "admin") {
      localStorage.setItem("defaultEmail", "admin@readytechsolutions.com");
    } else {
      localStorage.setItem("defaultEmail", "employee@readytechsolutions.com");
    }
    navigate("/login");
  };

  const roles = [
    {
      id: "admin",
      title: "Admin Access",
      icon: "👑",
      color: "from-yellow-400 to-orange-500",
      description:
        "Admins have full access to employee records, analytics, and reports. Maintain control over organizational data securely.",
      features: ["Manage Employees", "View Reports", "System Settings"],
    },
    {
      id: "employee",
      title: "Employee Access",
      icon: "💼",
      color: "from-blue-400 to-cyan-500",
      description:
        "Employees can access their dashboard, view daily tasks, project updates, and communicate securely with the admin.",
      features: ["Task Management", "Attendance", "Company News"],
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-gray-900"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>ReadyTech | Secure Access</title>
      </Helmet>

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Header */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mt-10 text-4xl font-extrabold text-center text-yellow-400"
      >
        🚀 Welcome to ReadyTech Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 max-w-2xl mb-10 text-lg text-center text-gray-300"
      >
        Select your access role to continue. This system ensures secure login for all
        ReadyTech team members.
      </motion.p>

      {/* Role Cards */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 * index }}
            onClick={() => handleRoleSelect(role.id)}
            className={`cursor-pointer p-8 rounded-3xl bg-gradient-to-br ${role.color} shadow-2xl hover:scale-105 transform transition-all duration-300 relative overflow-hidden group`}
          >
            <div className="absolute inset-0 transition-all duration-300 bg-black/40 group-hover:bg-black/20"></div>

            <div className="relative z-10">
              <div className="mb-4 text-5xl">{role.icon}</div>
              <h2 className="mb-3 text-2xl font-bold">{role.title}</h2>
              <p className="mb-4 text-sm text-gray-100">{role.description}</p>
              <ul className="space-y-1 text-sm text-gray-200">
                {role.features.map((feature) => (
                  <li key={feature}>✅ {feature}</li>
                ))}
              </ul>

              <button className="px-5 py-2 mt-6 font-semibold text-white transition rounded-lg bg-black/70 hover:bg-white hover:text-black">
                Continue as {role.title.split(" ")[0]}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Security Info */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 max-w-2xl mt-10 text-sm text-center text-gray-400"
      >
        <p>🔐 This system uses JWT authentication with protected routes.</p>
        <p>🧠 Only authorized IDs (RTS001 - RTS1500) are accepted.</p>
        <p>⚙️ All sessions are monitored by ReadyTech Security Suite.</p>
      </motion.div>

      {/* Decorative Floating Glows */}
      <div className="absolute w-40 h-40 rounded-full top-10 left-10 bg-yellow-400/20 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bottom-10 right-10 w-52 h-52 bg-blue-400/20 blur-3xl animate-pulse"></div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 text-xs text-gray-500">
        © 2025 ReadyTech Solutions | Secure Company Dashboard v2.0
      </footer>
    </div>
  );
}
