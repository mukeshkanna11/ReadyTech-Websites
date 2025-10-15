import { useState } from "react";
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

export default function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/dashboard");
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
      title: "New Employee Joined",
      message: "Mukeshkanna added to the Development Team.",
      time: "5 mins ago",
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "Server Maintenance",
      message: "Planned downtime on Oct 20 at 3 AM.",
      time: "2 hours ago",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Security Alert",
      message: "New login detected from Chennai office.",
      time: "Yesterday",
      color: "bg-red-500",
    },
    {
      id: 4,
      title: "Project Assigned",
      message: "Alpha CRM assigned to DevOps team.",
      time: "3 days ago",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-950">
      <Helmet>
        <title>
          {user?.name
            ? `${user.name} | Admin Dashboard`
            : "Admin Dashboard"}{" "}
          | ReadyTech
        </title>
      </Helmet>

      {/* HEADER */}
      <header className="relative flex items-center justify-between p-6 border-b shadow-lg bg-black/50 backdrop-blur-lg border-white/10 rounded-b-2xl">
        {/* LEFT */}
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

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Notification Button */}
          <div>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="flex items-center justify-center w-10 h-10 text-gray-300 transition rounded-full hover:text-yellow-400 hover:bg-white/10"
              title="Notifications"
            >
              <FaBell className="text-xl" />
            </button>
            {/* Badge */}
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-black"></span>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-red-600 rounded-lg hover:bg-red-700"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Notification Dropdown Portal */}
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
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-full px-4 py-2 text-xs text-gray-400 transition hover:text-yellow-400 hover:bg-white/5"
                >
                  View All Notifications →
                </button>
              </motion.div>,
              document.body
            )}
        </AnimatePresence>
      </header>

      {/* MAIN DASHBOARD */}
      <DashboardMain performanceData={performanceData} />
    </div>
  );
}

/* ------------------- MAIN DASHBOARD CONTENT ------------------- */
function DashboardMain({ performanceData }) {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatCard icon={<FaUsers />} title="Total Employees" value="245" color="bg-blue-500" />
        <StatCard icon={<FaTasks />} title="Active Projects" value="32" color="bg-green-500" />
        <StatCard icon={<FaMoneyBillWave />} title="Monthly Revenue" value="$54K" color="bg-yellow-400" />
        <StatCard icon={<FaBug />} title="Reported Bugs" value="12" color="bg-red-500" />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <PerformanceChart performanceData={performanceData} />
          <RecentActivities />
        </div>
        <div className="space-y-6">
          <SystemHealth />
          <QuickActions />
        </div>
      </div>

      <footer className="p-6 mt-8 text-center text-gray-400 border-t border-white/10">
        <p>© {new Date().getFullYear()} ReadyTech Solutions • Powered by Admin Intelligence Suite</p>
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

function PerformanceChart({ performanceData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 border rounded-2xl bg-white/10 backdrop-blur-lg border-white/10"
    >
      <h2 className="flex items-center gap-2 mb-4 text-xl font-bold">
        <FaChartLine className="text-green-400" /> Team Performance (6 Months)
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
    { icon: "✅", text: "New employee <b>Mukeshkanna</b> joined the <b>DevOps</b> team.", time: "2 hours ago" },
    { icon: "📊", text: "Q4 Revenue report uploaded by <b>Finance Department</b>.", time: "Yesterday" },
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
            dangerouslySetInnerHTML={{ __html: `${a.icon} ${a.text}<span class='block text-xs text-gray-400'>${a.time}</span>` }}
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
    { icon: <FaUsers />, title: "Manage Employees", color: "from-blue-500 to-cyan-500" },
    { icon: <FaTasks />, title: "Assign Tasks", color: "from-yellow-500 to-orange-500" },
    { icon: <FaCogs />, title: "System Settings", color: "from-purple-500 to-pink-500" },
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
