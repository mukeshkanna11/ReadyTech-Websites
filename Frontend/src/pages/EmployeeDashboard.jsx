// EmployeeDashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaTasks,
  FaBell,
  FaChartLine,
  FaClock,
  FaMoneyCheckAlt,
  FaMedal,
  FaUsers,
  FaBook,
  FaBullhorn,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("employeeProfile") || "/default-avatar.png"
  );
  const [showTasks, setShowTasks] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Dhinesh",
    role: "Software Engineer",
    department: "MERN Development",
  };

  const notifications = [
    { id: 1, message: "Your project deadline is approaching — due Oct 25." },
    { id: 2, message: "New HR policy update available." },
    { id: 3, message: "Performance review scheduled for Friday." },
    { id: 4, message: "Company townhall on Oct 20 at 4 PM." },
    { id: 5, message: "You received ₹5,000 incentive for extra hours!" },
  ];

  const monthlyPerformance = [
    { month: "Jan", score: 90 },
    { month: "Feb", score: 92 },
    { month: "Mar", score: 88 },
    { month: "Apr", score: 95 },
    { month: "May", score: 97 },
    { month: "Jun", score: 94 },
  ];

  const activeTasks = [
    { id: 1, title: "Implement login page", status: "In Progress", priority: "High", due: "Oct 20" },
    { id: 2, title: "Fix navbar bugs", status: "Pending", priority: "Medium", due: "Oct 21" },
    { id: 3, title: "Create dashboard stats", status: "Completed", priority: "High", due: "Oct 18" },
    { id: 4, title: "API integration for tasks", status: "In Progress", priority: "High", due: "Oct 22" },
    { id: 5, title: "Update profile component", status: "Pending", priority: "Medium", due: "Oct 23" },
    { id: 6, title: "Add notifications dropdown", status: "In Progress", priority: "High", due: "Oct 24" },
    { id: 7, title: "Fix mobile responsiveness", status: "Pending", priority: "Medium", due: "Oct 25" },
    { id: 8, title: "Design extra work tracker", status: "In Progress", priority: "High", due: "Oct 26" },
    { id: 9, title: "Write documentation", status: "Pending", priority: "Low", due: "Oct 27" },
    { id: 10, title: "Set up performance charts", status: "In Progress", priority: "High", due: "Oct 28" },
    { id: 11, title: "Unit testing dashboard", status: "Pending", priority: "Medium", due: "Oct 29" },
    { id: 12, title: "Team meeting prep", status: "Completed", priority: "Low", due: "Oct 19" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/dashboard");
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfilePic(imageURL);
      localStorage.setItem("employeeProfile", imageURL);
    }
  };

  return (
    <div className="relative min-h-screen p-6 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Helmet>
        <title>Employee Dashboard | Ready Tech</title>
      </Helmet>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <h1 className="text-3xl font-bold">👋 Welcome, {user.name}</h1>
          <p className="text-sm text-gray-400">
            {user.role} — {user.department}
          </p>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Notification Icon */}
          <div className="relative">
            <FaBell
              className="text-2xl text-yellow-400 cursor-pointer hover:text-yellow-300"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-1.5 py-0.5 rounded-full">
              {notifications.length}
            </span>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 z-[9999] p-3 mt-3 border shadow-2xl w-80 
                             bg-white/15 border-white/20 backdrop-blur-2xl rounded-xl"
                >
                  <h4 className="mb-2 text-sm font-semibold text-yellow-300">
                    Notifications
                  </h4>
                  <ul className="space-y-2 overflow-y-auto text-sm max-h-60 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {notifications.map((note) => (
                      <li
                        key={note.id}
                        className="p-2 transition rounded-lg bg-white/5 hover:bg-white/20"
                      >
                        {note.message}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Icon */}
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 transition border-2 border-white rounded-full cursor-pointer hover:scale-105"
            />

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 z-[9999] p-4 mt-3 border shadow-2xl w-72 
                             bg-white/15 border-white/20 backdrop-blur-2xl rounded-xl"
                >
                  <div className="flex flex-col items-center mb-3">
                    <img
                      src={profilePic}
                      alt="Profile Preview"
                      className="w-20 h-20 mb-3 border-2 rounded-full border-cyan-400"
                    />
                    <label className="flex items-center gap-2 text-sm cursor-pointer text-cyan-400 hover:text-cyan-300">
                      <FaCamera /> Change Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-sm text-center text-gray-300">
                    {user.name} <br />
                    <span className="text-xs text-gray-400">
                      {user.role} — {user.department}
                    </span>
                  </p>
                  <hr className="my-3 border-white/20" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full gap-2 py-2 text-sm font-medium bg-red-600 rounded-md hover:bg-red-700"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid gap-6 md:grid-cols-3"
      >
        <StatCard
          icon={<FaTasks />}
          title="Active Tasks"
          value={activeTasks.length}
          color="cyan"
          onClick={() => setShowTasks(true)}
        />
        <StatCard icon={<FaBell />} title="Notifications" value="5" color="yellow" />
        <StatCard icon={<FaChartLine />} title="Performance Score" value="95%" color="green" />
      </motion.div>

      {/* Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="grid gap-6 mt-10 md:grid-cols-2"
      >
        <InfoCard
          icon={<FaClock />}
          title="Time & Attendance"
          description="You have logged 162 of 176 hours this month with 98% punctuality. Great job staying consistent!"
          footer="Goal: Maintain perfect attendance next month."
        />
        <InfoCard
          icon={<FaMoneyCheckAlt />}
          title="Compensation & Incentives"
          description="Your salary and PF are up to date. Earned ₹12,000 this month for your extra project efforts!"
          footer="Keep up the pace to achieve top performer bonus."
        />
      </motion.div>

      {/* Monthly Performance */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="p-6 mt-12 border bg-white/10 backdrop-blur-lg rounded-2xl border-white/10"
      >
        <h2 className="mb-4 text-2xl font-bold text-cyan-400">Monthly Performance</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {monthlyPerformance.map((month, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-700"
            >
              <h3 className="font-semibold">{month.month}</h3>
              <p className="mt-1 font-bold text-yellow-400">{month.score}%</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievers */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="p-6 mt-12 border bg-white/10 backdrop-blur-lg rounded-2xl border-white/10"
      >
        <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold">
          <FaMedal className="text-yellow-400" /> Achievers & Top Performers
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Priyadharsini", award: "Achiever of the Month", score: "98%" },
            { name: "Kavi", award: "Consistent Performer", score: "95%" },
            { name: "Arun", award: "Employee of the Year", score: "99%" },
          ].map((achiever, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-700"
            >
              <h3 className="text-lg font-semibold">{achiever.name}</h3>
              <p className="text-sm text-gray-300">{achiever.award}</p>
              <p className="mt-1 font-bold text-yellow-400">{achiever.score}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HR & Resources */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="grid gap-6 mt-12 md:grid-cols-3"
      >
        <ResourceCard
          icon={<FaUsers />}
          title="HR & Payroll Overview"
          details="View your PF, benefits, tax details, and predictive payroll analytics."
        />
        <ResourceCard
          icon={<FaBook />}
          title="Company Policies"
          details="Access all company guidelines, leave policies, code of conduct, and HR rules in one place."
        />
        <ResourceCard
          icon={<FaBullhorn />}
          title="Company Announcements"
          details="Townhall on Oct 20 | New AI client onboard | Diwali celebration next week!"
        />
      </motion.section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-center text-gray-500">
        © 2025 Ready Tech Solutions — Employee Empowerment Dashboard
      </footer>

      {/* Active Tasks Modal */}
      <AnimatePresence>
        {showTasks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 p-6 rounded-2xl w-96 max-h-[80vh] overflow-y-auto"
            >
              <h3 className="mb-3 text-xl font-bold text-cyan-400">Active Tasks</h3>
              <ul className="space-y-3">
                {activeTasks.map((task) => (
                  <li key={task.id} className="p-3 bg-gray-800 rounded-lg">
                    <p className="font-semibold">{task.title}</p>
                    <p className="text-sm text-gray-400">Status: {task.status}</p>
                    <p className="text-sm text-gray-400">Priority: {task.priority}</p>
                    <p className="text-sm text-gray-400">Due: {task.due}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowTasks(false)}
                className="w-full py-2 mt-4 font-semibold text-black rounded bg-cyan-500 hover:bg-cyan-400"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Reusable Components */
function StatCard({ icon, title, value, color, onClick }) {
  const colorMap = {
    cyan: "text-cyan-400",
    yellow: "text-yellow-400",
    green: "text-green-400",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="flex items-center p-5 border cursor-pointer bg-white/10 rounded-xl backdrop-blur-md border-white/10"
    >
      <div className={`mr-4 text-3xl ${colorMap[color]}`}>{icon}</div>
      <div>
        <p className="text-gray-300">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </motion.div>
  );
}

function InfoCard({ icon, title, description, footer }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 transition-all border rounded-2xl bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/20"
    >
      <h3 className="flex items-center gap-2 mb-2 text-xl font-semibold text-cyan-400">
        {icon} {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-300">{description}</p>
      <p className="mt-3 text-sm text-yellow-400">{footer}</p>
    </motion.div>
  );
}

function ResourceCard({ icon, title, details }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className="p-6 transition border bg-white/10 border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/20"
    >
      <h4 className="flex items-center gap-2 mb-2 text-lg font-semibold text-green-400">
        {icon} {title}
      </h4>
      <p className="text-sm leading-relaxed text-gray-300">{details}</p>
    </motion.div>
  );
}
