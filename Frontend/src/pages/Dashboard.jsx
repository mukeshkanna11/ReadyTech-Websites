import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaRegCalendarAlt, 
  FaEnvelope, 
  FaTasks, 
  FaUsers, 
  FaBuilding, 
  FaBell 
} from "react-icons/fa";

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
        const res = await fetch("https://rtech-backend.onrender.com/api/protected", {
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

  if (!userData) return <p className="mt-20 text-center text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <header className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:mb-0">
          Welcome, {userData.name} 👋
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center p-4 bg-white shadow-lg rounded-xl">
          <FaRegCalendarAlt className="mr-4 text-3xl text-blue-600" />
          <div>
            <p className="text-gray-500">Attendance</p>
            <h2 className="text-xl font-semibold text-gray-800">95%</h2>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white shadow-lg rounded-xl">
          <FaEnvelope className="mr-4 text-3xl text-green-600" />
          <div>
            <p className="text-gray-500">Pending Requests</p>
            <h2 className="text-xl font-semibold text-gray-800">3</h2>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white shadow-lg rounded-xl">
          <FaTasks className="mr-4 text-3xl text-purple-600" />
          <div>
            <p className="text-gray-500">Workflow Tasks</p>
            <h2 className="text-xl font-semibold text-gray-800">7</h2>
          </div>
        </div>

        <div className="flex items-center p-4 bg-white shadow-lg rounded-xl">
          <FaUsers className="mr-4 text-3xl text-yellow-600" />
          <div>
            <p className="text-gray-500">Team Updates</p>
            <h2 className="text-xl font-semibold text-gray-800">5</h2>
          </div>
        </div>
      </div>

      {/* Company Info & Notifications */}
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
            <FaBuilding /> ReadyTech Solutions Info
          </h2>
          <p className="mb-2 text-gray-600">
            ReadyTech Solutions is a leading IT solutions company specializing in web development, mobile apps, and cloud services. We focus on delivering innovative solutions that drive business growth.
          </p>
          <p className="text-gray-600">
            Headquarters: Coimbatore & Banglore, India<br/>
            Founded: 2019<br/>
            Employees: 200+
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-800">
            <FaBell /> Notifications
          </h2>
          <ul className="space-y-2">
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100">
              New task assigned: Design Landing Page
            </li>
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100">
              Server maintenance scheduled for Sunday
            </li>
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100">
              Monthly performance review meeting
            </li>
          </ul>
        </div>
      </div>

      {/* Leave Requests */}
      <div className="p-6 mb-8 bg-white shadow-lg rounded-xl">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Request Leave</h2>
        <form className="space-y-4">
          <input
            type="date"
            className="w-full p-3 text-gray-700 border outline-none rounded-xl focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Reason for leave"
            className="w-full p-3 text-gray-700 border outline-none rounded-xl focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 text-white transition bg-blue-600 rounded-xl hover:bg-blue-700">
            Submit Leave
          </button>
        </form>
      </div>

      {/* Attendance & Workflow */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Attendance</h2>
          <p className="text-gray-600">Today: Present</p>
          <p className="text-gray-600">This Week: 4/5 Days</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Workflow Tasks</h2>
          <ul className="space-y-2">
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100">
              Complete API integration for project X
            </li>
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100">
              Review UI designs submitted by {userData.name}
            </li>
            <li className="p-3 text-gray-700 rounded-lg bg-gray-50 hover:bg-gray-100">
              Prepare report for client meeting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
