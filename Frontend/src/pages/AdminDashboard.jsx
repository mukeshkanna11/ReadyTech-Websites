// AdminDashboard.jsx
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCogs, FaUsers, FaTasks, FaChartLine, FaBuilding } from "react-icons/fa";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <Helmet>
        <title>Admin Dashboard | Ready Tech</title>
      </Helmet>

      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">👑 Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard icon={<FaUsers />} title="Total Employees" value="250+" />
        <StatCard icon={<FaTasks />} title="Active Projects" value="32" />
        <StatCard icon={<FaChartLine />} title="Growth Rate" value="84%" />
      </div>

      <div className="p-6 mt-8 bg-gray-800 rounded-xl">
        <h2 className="flex items-center gap-2 mb-3 text-xl font-bold"><FaBuilding /> Company Summary</h2>
        <p>ReadyTech Solutions continues to scale with innovative AI-driven systems and a growing engineering team.</p>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="flex items-center p-5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20">
      <div className="mr-4 text-3xl">{icon}</div>
      <div>
        <p className="text-gray-300">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
}
