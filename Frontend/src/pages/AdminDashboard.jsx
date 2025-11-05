import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // 🧑‍💼 Admin info (from localStorage)
  const admin = JSON.parse(localStorage.getItem("admin")) || {
    name: "Admin User",
    adminId: "RTS-ADMIN",
  };

  const [activeTab, setActiveTab] = useState("work");
  const [works, setWorks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState("idle");

  // 🧱 Work form
  const [form, setForm] = useState({
    employeeId: "",
    taskTitle: "",
    description: "",
    status: "In Progress",
    deadline: "",
  });

  // 🕒 Attendance form
  const [attendanceForm, setAttendanceForm] = useState({
    employeeId: "",
    date: "",
    status: "Present",
    notes: "",
  });

  // ============================
  // 🔐 Logout
  // ============================
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/dashboard");
  };

  // ============================
  // 📁 WORK MANAGEMENT
  // ============================
  const fetchAllWorks = async () => {
    try {
      setLoading(true);
      setServerStatus("Connecting to server...");
      const res = await fetch(`${BASE_URL}/work/all`);
      const data = await res.json();
      if (data.success) {
        setWorks(data.works);
        setServerStatus("connected");
      } else setServerStatus("failed");
    } catch (err) {
      console.error("fetchAllWorks error:", err);
      setServerStatus("Server waking up... please wait (Render cold start)");
    } finally {
      setLoading(false);
    }
  };

  const addWork = async () => {
    try {
      const res = await fetch(`${BASE_URL}/work/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Work added successfully!");
        setForm({
          employeeId: "",
          taskTitle: "",
          description: "",
          status: "In Progress",
          deadline: "",
        });
        fetchAllWorks();
      } else alert(data.message);
    } catch (err) {
      console.error("addWork error:", err);
    }
  };

  const updateWorkStatus = async (id, status) => {
    try {
      const res = await fetch(`${BASE_URL}/work/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) fetchAllWorks();
      else alert(data.message);
    } catch (err) {
      console.error("updateWorkStatus error:", err);
    }
  };

  const deleteWork = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/work/delete/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        alert("🗑️ Work deleted successfully!");
        fetchAllWorks();
      } else alert(data.message);
    } catch (err) {
      console.error("deleteWork error:", err);
    }
  };

  // ============================
  // 🕒 ATTENDANCE MANAGEMENT
  // ============================
  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/attendance`);
      const data = await res.json();
      if (data.success) setAttendance(data.attendance);
    } catch (err) {
      console.error("fetchAttendance error:", err);
    } finally {
      setLoading(false);
    }
  };

  const markAttendance = async () => {
    try {
      const res = await fetch(`${BASE_URL}/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attendanceForm),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Attendance marked!");
        setAttendanceForm({ employeeId: "", date: "", status: "Present", notes: "" });
        fetchAttendance();
      } else alert(data.message);
    } catch (err) {
      console.error("markAttendance error:", err);
    }
  };

  const updateAttendance = async (id, status) => {
    try {
      const res = await fetch(`${BASE_URL}/attendance/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) fetchAttendance();
      else alert(data.message);
    } catch (err) {
      console.error("updateAttendance error:", err);
    }
  };

  const deleteAttendance = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/attendance/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        alert("🗑️ Attendance deleted!");
        fetchAttendance();
      } else alert(data.message);
    } catch (err) {
      console.error("deleteAttendance error:", err);
    }
  };

  // ============================
  // 📦 INITIAL LOAD
  // ============================
  useEffect(() => {
    if (activeTab === "work") fetchAllWorks();
    else fetchAttendance();
  }, [activeTab]);

  // ============================
  // 🧱 UI SECTION
  // ============================
  return (
    <div className="min-h-screen p-6 bg-gray-50">

{/* ================= ADMIN HEADER ================= */}
<div className="sticky top-0 z-30 flex flex-col items-center justify-between w-full p-6 mb-8 text-white shadow-xl sm:flex-row bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl">
  
  {/* Left: Dashboard Title */}
  <div className="flex items-center gap-3">
    <div className="p-2 text-indigo-500 bg-white rounded-full shadow-md">
      🚀
    </div>
    <h1 className="text-2xl font-bold tracking-wide sm:text-2xl">
      ReadyTech Admin Dashboard
    </h1>
  </div>

  {/* Right: Actions */}
  <div className="flex items-center gap-4 mt-4 sm:mt-0">
    {/* Notifications */}
    <button className="p-2 transition-all bg-indigo-500 rounded-full shadow-md hover:bg-indigo-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .386-.149.735-.405 1.005L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </button>

    {/* Settings */}
    <button className="p-2 transition-all bg-indigo-500 rounded-full shadow-md hover:bg-indigo-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>

    {/* Admin Avatar */}
    <div className="flex items-center justify-center w-10 h-10 font-bold text-indigo-600 bg-white rounded-full shadow-md">
      {admin.name.charAt(0).toUpperCase()}
    </div>

    {/* Logout Button */}
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-semibold transition-transform transform bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:scale-105"
    >
      Logout
    </button>
  </div>
</div>


{/* ================= ADMIN INFO CARD ================= */}
<div className="flex flex-col items-center justify-between p-6 mb-8 transition-transform transform border border-indigo-100 shadow-xl sm:flex-row bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl hover:scale-105">
  
  {/* Admin Greeting & Info */}
  <div className="flex items-center gap-4">
    {/* Avatar */}
    <div className="flex items-center justify-center w-16 h-16 overflow-hidden text-2xl font-bold text-white bg-indigo-500 rounded-full shadow-md">
      {admin.avatarUrl ? (
        <img
          src={admin.avatarUrl}
          alt={admin.name}
          className="object-cover w-full h-full"
        />
      ) : (
        admin.name.charAt(0).toUpperCase()
      )}
    </div>

    {/* Name, ID, Email */}
    <div className="flex flex-col">
      <p className="flex items-center gap-2 text-2xl font-bold text-gray-800">
        👋 Welcome,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          {admin.name}
        </span>
      </p>
      <p className="text-sm text-gray-600">
        Admin ID: <span className="font-medium text-gray-800">{admin.adminId}</span>
      </p>
      {admin.email && (
        <p className="text-sm text-gray-500">
          📧 {admin.email}
        </p>
      )}
    </div>
  </div>

  {/* Role Badge */}
  <div className="flex items-center gap-3 mt-4 sm:mt-0">
    <span className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full shadow-sm">
      🛠️ Admin Dashboard
    </span>
  </div>
</div>




      {/* Tabs */}
<div className="flex justify-center mb-8">
  <button
    className={`px-6 py-2 font-semibold transition-all duration-300 rounded-l-lg shadow-sm ${
      activeTab === "work"
        ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md scale-105"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={() => setActiveTab("work")}
  >
    Work Management
  </button>
  <button
    className={`px-6 py-2 font-semibold transition-all duration-300 rounded-r-lg shadow-sm ${
      activeTab === "attendance"
        ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md scale-105"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={() => setActiveTab("attendance")}
  >
    Attendance
  </button>
</div>


      {/* Server Status */}
      {serverStatus !== "connected" && (
        <div className="p-3 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded">
          ⚠️ {serverStatus || "Connecting to backend... (Render cold start can take 1–2 minutes)"}
        </div>
      )}

      {/* Content */}
      {activeTab === "work" ? (
        <>
          {/* ================= WORK SECTION ================= */}
<div className="p-6 mb-8 border border-indigo-100 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
  <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold text-indigo-700">
    <span className="text-2xl">➕</span> Add New Work
  </h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <input
      type="text"
      placeholder="Employee ID"
      value={form.employeeId}
      onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
      className="p-3 text-gray-700 placeholder-gray-400 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />
    <input
      type="text"
      placeholder="Task Title"
      value={form.taskTitle}
      onChange={(e) => setForm({ ...form, taskTitle: e.target.value })}
      className="p-3 text-gray-700 placeholder-gray-400 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />
    <input
      type="date"
      value={form.deadline}
      onChange={(e) => setForm({ ...form, deadline: e.target.value })}
      className="p-3 text-gray-700 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />
    <textarea
      placeholder="Description"
      value={form.description}
      onChange={(e) => setForm({ ...form, description: e.target.value })}
      className="p-3 text-gray-700 placeholder-gray-400 transition-all border border-gray-300 rounded-lg sm:col-span-2 md:col-span-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      rows="3"
    />

    <div className="flex justify-end sm:col-span-2 md:col-span-3">
      <button
        onClick={addWork}
        className="px-6 py-2.5 text-white font-medium bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all"
      >
        Add Work
      </button>
    </div>
  </div>
</div>


          {/* ================= WORK LIST SECTION ================= */}
<div className="p-6 border border-indigo-100 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
  <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold text-indigo-700">
    <span className="text-2xl">📋</span> Work List
  </h2>

  {loading ? (
    <p className="py-4 text-center text-gray-600">Loading...</p>
  ) : (
    <div className="overflow-x-auto border border-indigo-100 rounded-lg">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-white bg-gradient-to-r from-indigo-500 to-blue-600">
          <tr>
            <th className="p-3 font-semibold text-center">Employee ID</th>
            <th className="p-3 font-semibold text-center">Task</th>
            <th className="p-3 font-semibold text-center">Status</th>
            <th className="p-3 font-semibold text-center">Deadline</th>
            <th className="p-3 font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {works.length > 0 ? (
            works.map((w, index) => (
              <tr
                key={w._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-indigo-50"
                } hover:bg-indigo-100 transition-all`}
              >
                <td className="p-3 font-medium text-center text-gray-700 border-t">
                  {w.employeeId}
                </td>
                <td className="p-3 text-center text-gray-700 border-t">
                  {w.title}
                </td>
                <td
                  className={`p-3 text-center font-semibold border-t ${
                    w.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {w.status}
                </td>
                <td className="p-3 text-center text-gray-600 border-t">
                  {w.deadline?.split("T")[0]}
                </td>
                <td className="p-3 text-center border-t">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => updateWorkStatus(w._id, "Completed")}
                      className="px-3 py-1 text-sm font-medium text-white transition-all bg-green-500 rounded-md hover:bg-green-600"
                    >
                      Complete
                    </button>
                    <button
                      onClick={() => deleteWork(w._id)}
                      className="px-3 py-1 text-sm font-medium text-white transition-all bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="p-4 italic text-center text-gray-500 bg-white"
              >
                No work records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )}
</div>

        </>
      ) : (
        <>
          {/* ================= ATTENDANCE SECTION ================= */}
<div className="p-6 mb-8 border border-indigo-100 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
  <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold text-indigo-700">
    <span className="text-2xl">🕒</span> Mark Attendance
  </h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <input
      type="text"
      placeholder="Employee ID"
      value={attendanceForm.employeeId}
      onChange={(e) =>
        setAttendanceForm({ ...attendanceForm, employeeId: e.target.value })
      }
      className="p-3 text-gray-700 placeholder-gray-400 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />

    <input
      type="date"
      value={attendanceForm.date}
      onChange={(e) =>
        setAttendanceForm({ ...attendanceForm, date: e.target.value })
      }
      className="p-3 text-gray-700 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />

    <select
      value={attendanceForm.status}
      onChange={(e) =>
        setAttendanceForm({ ...attendanceForm, status: e.target.value })
      }
      className="p-3 text-gray-700 transition-all bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    >
      <option value="Present">Present</option>
      <option value="Absent">Absent</option>
      <option value="Leave">Leave</option>
    </select>

    <input
      type="text"
      placeholder="Notes"
      value={attendanceForm.notes}
      onChange={(e) =>
        setAttendanceForm({ ...attendanceForm, notes: e.target.value })
      }
      className="p-3 text-gray-700 placeholder-gray-400 transition-all border border-gray-300 rounded-lg sm:col-span-2 md:col-span-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
    />

    <div className="flex justify-end sm:col-span-2 md:col-span-3">
      <button
        onClick={markAttendance}
        className="px-6 py-2.5 text-white font-medium bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all"
      >
        Mark Attendance
      </button>
    </div>
  </div>
</div>


          {/* ================= ATTENDANCE RECORDS SECTION ================= */}
<div className="p-6 border border-indigo-100 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
  <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold text-indigo-700">
    <span className="text-2xl">📅</span> Attendance Records
  </h2>

  {loading ? (
    <p className="py-4 text-center text-gray-600">Loading...</p>
  ) : (
    <div className="overflow-x-auto border border-indigo-100 rounded-lg">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-white bg-gradient-to-r from-indigo-500 to-blue-600">
          <tr>
            <th className="p-3 font-semibold text-center">Employee ID</th>
            <th className="p-3 font-semibold text-center">Date</th>
            <th className="p-3 font-semibold text-center">Status</th>
            <th className="p-3 font-semibold text-center">Notes</th>
            <th className="p-3 font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length > 0 ? (
            attendance.map((a, index) => (
              <tr
                key={a._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-indigo-50"
                } hover:bg-indigo-100 transition-all`}
              >
                <td className="p-3 font-medium text-center text-gray-700 border-t">
                  {a.employeeId}
                </td>
                <td className="p-3 text-center text-gray-700 border-t">
                  {new Date(a.date).toLocaleDateString()}
                </td>
                <td className="p-3 text-center border-t">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      a.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : a.status === "Absent"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="p-3 text-center text-gray-600 border-t">
                  {a.notes || "-"}
                </td>
                <td className="p-3 text-center border-t">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => updateAttendance(a._id, "Present")}
                      className="px-3 py-1 text-sm font-medium text-white transition-all bg-green-500 rounded-md hover:bg-green-600"
                    >
                      Mark Present
                    </button>
                    <button
                      onClick={() => deleteAttendance(a._id)}
                      className="px-3 py-1 text-sm font-medium text-white transition-all bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="p-4 italic text-center text-gray-500 bg-white"
              >
                No attendance records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )}
</div>

        </>
      )}
    </div>
  );
};

export default AdminDashboard;
