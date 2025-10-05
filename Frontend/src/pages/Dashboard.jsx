import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegCalendarAlt,
  FaEnvelope,
  FaTasks,
  FaUsers,
  FaBuilding,
  FaBell,
  FaUserTie,
  FaClock,
  FaChartLine,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch("https://readytech-websites.onrender.com/api/protected", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          setError("Failed to fetch data");
          return;
        }

        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
        setError("Server error");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!userData)
    return (
      <p className="mt-20 text-center text-gray-600 animate-pulse">
        Loading Dashboard...
      </p>
    );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Helmet>
        <title>Dashboard | Ready Tech Solutions</title>
      </Helmet>

      {/* Header */}
      <header className="flex flex-col items-center justify-between mb-10 md:flex-row">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-800 md:mb-0">
          Hello, <span className="text-blue-600">{userData.name}</span> 👋
        </h1>
        <button
          onClick={handleLogout}
          className="px-5 py-2 font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 hover:scale-105"
        >
          Logout
        </button>
      </header>
{/* Employee Profile */}
<div className="p-6 mb-8 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl">
  <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
    <FaUserTie /> Employee Information
  </h2>
  <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2 lg:grid-cols-3">
    <p>
      <span className="font-semibold text-gray-700">Name:</span>{" "}
      <span className="text-gray-700">{userData.name}</span>
    </p>
    <p>
      <span className="font-semibold text-gray-700">Email:</span>{" "}
      <span className="text-gray-700">{userData.email}</span>
    </p>
    <p>
      <span className="font-semibold text-gray-700">Role:</span>{" "}
      <span className="text-gray-700">{userData.role || "MERN Developer"}</span>
    </p>
    <p>
      <span className="font-semibold text-gray-700">Department:</span>{" "}
      <span className="text-gray-700">{userData.department || "Software Development"}</span>
    </p>
    <p>
      <span className="font-semibold text-gray-700">Joining Date:</span>{" "}
      <span className="text-gray-700">{userData.joined || "September 2025"}</span>
    </p>
    <p>
      <span className="font-semibold text-gray-700">Location:</span>{" "}
      <span className="text-gray-700">{userData.location || "Coimbatore, India"}</span>
    </p>
  </div>
</div>


      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <FaRegCalendarAlt />, color: "text-blue-600", title: "Attendance", value: "96%" },
          { icon: <FaTasks />, color: "text-purple-600", title: "Active Tasks", value: "8" },
          { icon: <FaEnvelope />, color: "text-green-600", title: "Pending Requests", value: "2" },
          { icon: <FaUsers />, color: "text-yellow-600", title: "Team Members", value: "12" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center p-5 transition-all bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1"
          >
            <div className={`mr-4 text-4xl ${item.color}`}>{item.icon}</div>
            <div>
              <p className="text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Company Info */}
        <div className="p-6 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
            <FaBuilding /> Company Overview
          </h2>
          <p className="mb-2 leading-relaxed text-gray-600">
            ReadyTech Solutions is a top-tier IT company delivering scalable and creative digital
            solutions. Our teams work collaboratively to empower businesses through technology.
          </p>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li><strong>Headquarters:</strong> Coimbatore & Bangalore, India</li>
            <li><strong>Founded:</strong> 2019</li>
            <li><strong>Employees:</strong> 250+</li>
            <li><strong>Core Services:</strong> MERN Stack, Mobile Apps, Cloud Architecture</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="p-6 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
            <FaBell /> Notifications
          </h2>
          <ul className="space-y-3">
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-blue-50">
              🎯 New task assigned: <strong>Landing Page Revamp</strong>
            </li>
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-blue-50">
              🕒 Server maintenance scheduled for <strong>Sunday 2AM</strong>
            </li>
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-blue-50">
              📅 Performance Review meeting on <strong>Oct 10th</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Performance + Attendance */}
      <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2">
        {/* Performance Summary */}
        <div className="p-6 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
            <FaChartLine /> Performance Summary
          </h2>
          <p className="mb-2 text-gray-600">This Month’s Performance: <strong>Excellent</strong></p>
          <div className="w-full h-3 mb-4 bg-gray-200 rounded-full">
            <div className="h-3 bg-blue-600 rounded-full w-[85%]"></div>
          </div>
          <p className="text-gray-600">KPI Score: <strong>8.5 / 10</strong></p>
          <p className="text-gray-600">Completed Projects: <strong>4</strong></p>
        </div>

        {/* Attendance Summary */}
        <div className="p-6 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
            <FaClock /> Attendance Summary
          </h2>
          <p className="text-gray-600">Today: <strong>Present</strong></p>
          <p className="text-gray-600">This Week: <strong>5 / 5 Days</strong></p>
          <p className="text-gray-600">This Month: <strong>95%</strong></p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="p-6 mt-10 transition-all bg-white shadow-lg rounded-2xl hover:shadow-2xl">
        <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
          <FaTasks /> Recent Activities
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50">
            ✅ Completed API integration for Project Alpha
          </li>
          <li className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50">
            🧩 Collaborated on UI/UX redesign for Dashboard
          </li>
          <li className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50">
            🗓️ Attended Client Review Meeting with ReadyTech Team
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} ReadyTech Solutions — Empowering Innovation 🚀
      </footer>
    </div>
  );
}
