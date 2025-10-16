import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaUsers,
  FaTasks,
  FaChartLine,
  FaCogs,
  FaSignOutAlt,
  FaUserCircle,
  FaBell,
  FaClipboardList,
  FaLaptopCode,
  FaBug,
  FaMoneyBillWave,
  FaHeartbeat,
  FaSearch,
  FaFilter,
  FaHistory,
  FaSyncAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ------------------- MAIN COMPONENT ------------------- */
export default function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEmployeePanel, setShowEmployeePanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [realtimeStats, setRealtimeStats] = useState({
    users: 245,
    projects: 32,
    revenue: 54000,
    bugs: 12,
  });

  const [employees] = useState([
    {
      id: 1,
      name: "Mukeshkanna Murugan",
      role: "MERN SDE",
      department: "Software Development",
      status: "Active",
      attendance: "98%",
      incentives: "₹10,500",
    },
    {
      id: 2,
      name: "Priyadharshini P",
      role: "UI/UX Designer",
      department: "Design",
      status: "Remote",
      attendance: "95%",
      incentives: "₹8,200",
    },
    {
      id: 3,
      name: "Stalin S",
      role: "QA Engineer",
      department: "Testing",
      status: "Active",
      attendance: "97%",
      incentives: "₹7,500",
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeStats((prev) => ({
        ...prev,
        revenue: prev.revenue + Math.floor(Math.random() * 200 - 100),
        bugs: Math.max(0, prev.bugs + Math.floor(Math.random() * 3 - 1)),
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const performanceData = [
    { month: "Jan", projects: 20, performance: 80 },
    { month: "Feb", projects: 24, performance: 85 },
    { month: "Mar", projects: 27, performance: 90 },
    { month: "Apr", projects: 30, performance: 87 },
    { month: "May", projects: 34, performance: 91 },
    { month: "Jun", projects: 38, performance: 95 },
  ];

  const notifications = [
    {
      id: 1,
      title: "Employee Performance Bonus",
      message: "Mukeshkanna received ₹10,500 performance bonus.",
      time: "10 mins ago",
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "Attendance Report",
      message: "All teams marked attendance for today.",
      time: "1 hour ago",
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "New Task Assigned",
      message: "UI update for Admin Panel assigned to Aishwarya.",
      time: "2 hours ago",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "System Security Check",
      message: "Routine scan completed successfully.",
      time: "Yesterday",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-950">
      <Helmet>
        <title>
          {user?.name ? `${user.name} | Admin Dashboard` : "Admin Dashboard"} | ReadyTech
        </title>
      </Helmet>

      {/* HEADER */}
      <header className="relative flex items-center justify-between p-6 border-b shadow-lg bg-black/50 backdrop-blur-lg border-white/10 rounded-b-2xl">
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-yellow-400" />
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {user?.name || "Admin"} 👋
            </h1>
            <p className="text-sm text-gray-400">
              Admin Panel • ReadyTech Solutions Pvt Ltd
            </p>
          </div>
        </div>

        {/* SEARCH + FILTER + NOTIFICATIONS */}
        <div className="flex items-center gap-3">
          <div className="items-center hidden gap-2 px-3 py-2 rounded-lg md:flex bg-white/10">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-48 text-sm text-gray-200 bg-transparent outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaFilter
              className="text-gray-400 cursor-pointer hover:text-yellow-400"
              onClick={() => setShowEmployeePanel(!showEmployeePanel)}
            />
          </div>

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative flex items-center justify-center w-10 h-10 text-gray-300 transition rounded-full hover:text-yellow-400 hover:bg-white/10"
          >
            <FaBell className="text-xl" />
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-black"></span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-red-600 rounded-lg hover:bg-red-700"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* NOTIFICATION PANEL */}
        <AnimatePresence>
          {showNotifications &&
            createPortal(
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="fixed right-6 top-20 w-80 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg z-[9999] overflow-hidden"
              >
                <div className="px-4 py-3 text-sm font-semibold text-yellow-400 border-b border-white/10">
                  🔔 Notifications
                </div>
                <ul className="overflow-y-auto text-sm text-gray-200 max-h-60">
                  {notifications.map((note) => (
                    <li
                      key={note.id}
                      className="px-4 py-3 transition-all border-b border-white/5 hover:bg-white/10"
                    >
                      <p className={`font-semibold ${note.color} mb-1`}>
                        {note.title}
                      </p>
                      <p className="text-xs text-gray-300">{note.message}</p>
                      <p className="mt-1 text-xs text-gray-400">{note.time}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>,
              document.body
            )}
        </AnimatePresence>

        {/* EMPLOYEE FILTER PANEL */}
        <AnimatePresence>
          {showEmployeePanel &&
            createPortal(
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="fixed right-6 top-24 w-96 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl z-[9999] overflow-hidden"
              >
                <div className="px-5 py-3 font-semibold text-yellow-400 border-b border-white/10">
                  👥 Employee Details
                </div>
                <div className="overflow-y-auto max-h-72">
                  {employees
                    .filter((e) =>
                      e.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((e) => (
                      <div
                        key={e.id}
                        className="px-4 py-3 text-sm border-b border-white/5 hover:bg-white/10"
                      >
                        <p className="text-lg font-semibold text-white">
                          {e.name}
                        </p>
                        <p className="text-gray-300">
                          {e.role} • {e.department}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Status:{" "}
                          <span
                            className={`${
                              e.status === "Active"
                                ? "text-green-400"
                                : "text-yellow-400"
                            }`}
                          >
                            {e.status}
                          </span>{" "}
                          | Attendance: {e.attendance} | Incentives:{" "}
                          <span className="text-yellow-300">{e.incentives}</span>
                        </p>
                      </div>
                    ))}
                </div>
              </motion.div>,
              document.body
            )}
        </AnimatePresence>
      </header>

      {/* MAIN DASHBOARD */}
      <DashboardMain performanceData={performanceData} stats={realtimeStats} />
    </div>
  );
}

/* ------------------- DASHBOARD CONTENT ------------------- */
function DashboardMain({ performanceData, stats }) {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatCard icon={<FaUsers />} title="Total Users" value={stats.users} color="bg-blue-500" />
        <StatCard icon={<FaTasks />} title="Active Projects" value={stats.projects} color="bg-green-500" />
        <StatCard icon={<FaMoneyBillWave />} title="Revenue (Monthly)" value={`$${stats.revenue.toLocaleString()}`} color="bg-yellow-400" />
        <StatCard icon={<FaBug />} title="Open Bugs" value={stats.bugs} color="bg-red-500" />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <PerformanceChart performanceData={performanceData} />
          <RecentActivities />
          <HistoricalData />
        </div>
        <div className="space-y-6">
          <SystemHealth />
          <QuickActions />
        </div>
      </div>

      <footer className="p-6 mt-8 text-center text-gray-400 border-t border-white/10">
        <p>© {new Date().getFullYear()} ReadyTech • Admin Intelligence Suite</p>
      </footer>
    </>
  );
}

/* ------------------- SUB COMPONENTS ------------------- */
function StatCard({ icon, title, value, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center p-5 transition-all border shadow-md rounded-xl bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20"
    >
      <div className={`flex items-center justify-center w-12 h-12 mr-4 text-2xl text-white ${color} rounded-full`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-300">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </motion.div>
  );
}

/* ------------------- PERFORMANCE + HEALTH + ACTIVITIES (unchanged below) ------------------- */
function PerformanceChart({ performanceData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 border rounded-2xl bg-white/10 backdrop-blur-lg border-white/10"
    >
      <h2 className="flex items-center gap-2 mb-4 text-xl font-bold">
        <FaChartLine className="text-green-400" /> Team Performance
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#1f1f1f", borderRadius: "10px" }} />
          <Line type="monotone" dataKey="projects" stroke="#00BFFF" strokeWidth={2} />
          <Line type="monotone" dataKey="performance" stroke="#FFD700" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function RecentActivities() {
  const activities = [
    { icon: "✅", text: "New user <b>Mukeshkanna</b> assigned to <b>DevOps</b>.", time: "2 hours ago" },
    { icon: "📊", text: "Revenue report uploaded by <b>Finance Dept</b>.", time: "Yesterday" },
    { icon: "⚙️", text: "System upgrade completed for <b>Server 3</b>.", time: "2 days ago" },
  ];
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 border rounded-2xl bg-white/10 backdrop-blur-md border-white/10"
    >
      <h2 className="flex items-center gap-2 mb-4 text-xl font-bold">
        <FaClipboardList className="text-yellow-400" /> Recent Activities
      </h2>
      <ul className="space-y-3 text-sm">
        {activities.map((a, i) => (
          <li
            key={i}
            className="p-3 transition-all rounded-lg bg-white/5 hover:bg-white/10"
            dangerouslySetInnerHTML={{
              __html: `${a.icon} ${a.text}<span class='block text-xs text-gray-400'>${a.time}</span>`,
            }}
          />
        ))}
      </ul>
    </motion.div>
  );
}

function SystemHealth() {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 border rounded-2xl bg-white/10 backdrop-blur-md border-white/10"
    >
      <h2 className="flex items-center gap-2 mb-4 text-xl font-bold">
        <FaHeartbeat className="text-pink-400" /> System Health
      </h2>
      <ProgressBar label="Server Uptime" value={99} color="bg-green-500" />
      <ProgressBar label="Database Performance" value={92} color="bg-blue-500" />
      <ProgressBar label="Security Index" value={96} color="bg-yellow-400" />
    </motion.div>
  );
}

function ProgressBar({ label, value, color }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1 text-sm text-gray-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    { icon: <FaLaptopCode />, title: "Manage Projects", color: "from-green-500 to-teal-500" },
    { icon: <FaUsers />, title: "User Management", color: "from-blue-500 to-cyan-500" },
    { icon: <FaTasks />, title: "Bulk Actions", color: "from-yellow-500 to-orange-500" },
    { icon: <FaCogs />, title: "Integrations", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((a, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className={`flex flex-col items-center justify-center gap-2 p-4 text-center rounded-xl bg-gradient-to-br ${a.color} text-white font-semibold shadow-lg`}
        >
          <div className="text-3xl">{a.icon}</div>
          <p className="text-sm">{a.title}</p>
        </motion.div>
      ))}
    </div>
  );
}

function HistoricalData() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 border rounded-2xl bg-white/10 backdrop-blur-md border-white/10"
    >
      <h2 className="flex items-center gap-2 mb-4 text-xl font-bold">
        <FaHistory className="text-cyan-400" /> Historical Data & Trends
      </h2>
      <p className="text-sm text-gray-300">
        Compare data from previous quarters and identify long-term trends. Coming soon: export to Excel & system integration support.
      </p>
      <div className="flex items-center justify-end gap-2 mt-3 text-sm text-yellow-400 cursor-pointer hover:text-yellow-300">
        <FaSyncAlt /> Refresh Trends
      </div>
    </motion.div>
  );
}
