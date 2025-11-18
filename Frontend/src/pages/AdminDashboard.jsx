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
    if (!attendanceForm.employeeId || !attendanceForm.date) {
      return alert("Employee and Date are required.");
    }

    try {
      const res = await fetch(`${BASE_URL}/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attendanceForm),
      });
      const data = await res.json();
      if (data.success) {
        alert(`✅ Attendance for ${attendanceForm.employeeId} marked!`);
        // Reset form if needed
        setAttendanceForm({ employeeId: "", date: "", status: "Present", notes: "" });
        fetchAttendance(); // Refresh the list
      } else {
        alert(data.message);
      }
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

    {/* ================= ADMIN HEADER - PREMIUM NEON DESIGN ================= */}
<div className="sticky top-0 z-40 w-full mb-8">
  <div className="
    flex flex-col sm:flex-row items-center justify-between
    w-full p-6 rounded-2xl
    bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#2563eb]
    shadow-[0_0_25px_rgba(124,58,237,0.7)]
    border border-white/20 backdrop-blur-xl
    transition-all duration-300
  ">

    {/* LEFT: TITLE */}
    <div className="flex items-center gap-4">
      <div className="p-3 text-xl text-white border shadow-lg bg-white/20 backdrop-blur-lg rounded-2xl border-white/30">
        🚀
      </div>

      <h1 className="text-2xl font-extrabold text-white sm:text-3xl drop-shadow-lg">
        ReadyTech Admin Panel
      </h1>
    </div>

    {/* RIGHT: ACTIONS */}
    <div className="flex items-center gap-5 mt-4 sm:mt-0">

      {/* Notifications */}
      <button className="p-3 transition-all border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-white/30 hover:bg-white/20 hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 17h5l-1.4-1.4A2 2 0 0118 14V11a6 6 0 10-12 0v3c0 .4-.1.7-.4 1L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>

      {/* Settings */}
      <button className="p-3 transition-all border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-white/30 hover:bg-white/20 hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Avatar with Glow */}
      <div className="
        w-12 h-12 flex items-center justify-center rounded-full 
        bg-white text-indigo-700 font-bold text-lg 
        shadow-[0_0_15px_rgba(255,255,255,0.6)] 
        border border-indigo-200 
        transition-all hover:scale-110 cursor-pointer
      ">
        {admin?.name?.charAt(0)?.toUpperCase()}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="px-5 py-2 text-sm font-semibold text-white transition-all bg-red-500 border border-red-300 shadow-lg rounded-xl hover:bg-red-600 hover:scale-110"
      >
        Logout
      </button>
    </div>
  </div>
</div>


      {/* ================= ADMIN INFO CARD - UPDATED WITH LOGIN NAME ================= */}
<div className="w-full mb-8">
  <div className="relative p-6 overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl">

    {/* Background Glow */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-purple-500/10 blur-2xl opacity-60"></div>

    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-5">
        
        {/* Avatar */}
        <div className="relative group">
          <div className="flex items-center justify-center w-20 h-20 overflow-hidden text-3xl font-semibold text-white border-4 border-white rounded-full shadow-md bg-gradient-to-br from-indigo-600 to-blue-600">
            {admin?.avatarUrl ? (
              <img
                src={admin.avatarUrl}
                alt={admin.name}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
              />
            ) : (
              admin?.name?.charAt(0)?.toUpperCase()
            )}
          </div>
        </div>

        {/* ADMIN INFO */}
        <div className="flex flex-col">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            👋 <span>Hello,</span>
            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text">
              {admin?.name || "Admin"}
            </span>
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Admin ID:
            <span className="ml-1 font-semibold text-gray-900">
              {admin?.adminId || "-"}
            </span>
          </p>

          {admin?.email && (
            <p className="flex items-center gap-1 mt-1 text-sm text-gray-500">
              📧 {admin.email}
            </p>
          )}
        </div>

      </div>

      {/* RIGHT SIDE - ROLE BADGE */}
      <div className="flex items-center">
        <span className="px-4 py-2 text-sm font-semibold text-white shadow-md rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600">
          🔑 {admin?.role || "Administrator"}
        </span>
      </div>

    </div>
  </div>
</div>





      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 font-semibold transition-all duration-300 rounded-l-lg shadow-sm ${activeTab === "work"
              ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          onClick={() => setActiveTab("work")}
        >
          Work Management
        </button>
        <button
          className={`px-6 py-2 font-semibold transition-all duration-300 rounded-r-lg shadow-sm ${activeTab === "attendance"
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
                          className={`${index % 2 === 0 ? "bg-white" : "bg-indigo-50"
                            } hover:bg-indigo-100 transition-all`}
                        >
                          <td className="p-3 font-medium text-center text-gray-700 border-t">
                            {w.employeeId}
                          </td>
                          <td className="p-3 text-center text-gray-700 border-t">
                            {w.title}
                          </td>
                          <td
                            className={`p-3 text-center font-semibold border-t ${w.status === "Completed"
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
                          className={`${index % 2 === 0 ? "bg-white" : "bg-indigo-50"
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
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${a.status === "Present"
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
      <div className="p-6 mt-10 border border-indigo-100 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold text-indigo-700">
          <span className="text-2xl">📊</span> Dashboard Insights
        </h2>


        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-5 transition-all bg-white shadow rounded-2xl hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-500">Total Employees</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">48</p>
          </div>


          <div className="p-5 transition-all bg-white shadow rounded-2xl hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-500">Present Today</h3>
            <p className="mt-2 text-3xl font-bold text-green-600">42</p>
          </div>


          <div className="p-5 transition-all bg-white shadow rounded-2xl hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-500">Absent Today</h3>
            <p className="mt-2 text-3xl font-bold text-red-600">6</p>
          </div>


          <div className="p-5 transition-all bg-white shadow rounded-2xl hover:shadow-lg">
            <h3 className="text-sm font-semibold text-gray-500">Pending Requests</h3>
            <p className="mt-2 text-3xl font-bold text-yellow-600">3</p>
          </div>
        </div>


        {/* Recent Activity Log */}
        <div className="p-6 bg-white shadow rounded-2xl">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-indigo-700">
            <span>🕒</span> Recent Activity
          </h3>


          <ul className="space-y-3">
            <li className="p-3 text-gray-700 border border-indigo-100 rounded-lg bg-indigo-50">
              ✔️ Employee **RTS112** marked as **Present** today
            </li>
            <li className="p-3 text-gray-700 border border-indigo-100 rounded-lg bg-indigo-50">
              ❌ Attendance entry deleted for **RTS125**
            </li>
            <li className="p-3 text-gray-700 border border-indigo-100 rounded-lg bg-indigo-50">
              📝 Admin updated company holiday list
            </li>
          </ul>
        </div>

        <div className="p-6 mt-10 bg-white border border-indigo-100 shadow rounded-2xl">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-indigo-700">
            <span>⚙️</span> System Health
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="p-3 border border-green-100 rounded-lg bg-green-50">🟢 API Server: Running Smoothly</li>
            <li className="p-3 border border-green-100 rounded-lg bg-green-50">🟢 Database Connection: Stable</li>
            <li className="p-3 border border-yellow-100 rounded-lg bg-yellow-50">🟡 Storage Usage: 78% (Monitor Soon)</li>
          </ul>
        </div>


        {/* User Management Panel */}
        <div className="p-6 mt-10 shadow bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-indigo-700">
            <span>👥</span> User Management
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="p-5 transition-all bg-white border border-indigo-100 shadow rounded-2xl hover:shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800">Add New Employee</h4>
              <p className="mt-1 text-sm text-gray-500">Quickly register a new team member.</p>
              <button className="px-4 py-2 mt-3 text-sm text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700">Add Employee</button>
            </div>


            <div className="p-5 transition-all bg-white border border-indigo-100 shadow rounded-2xl hover:shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800">Manage Roles</h4>
              <p className="mt-1 text-sm text-gray-500">Update access levels & permissions.</p>
              <button className="px-4 py-2 mt-3 text-sm text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">Manage Roles</button>
            </div>
          </div>
        </div>


        {/* Notifications Center */}
        <div className="p-6 mt-10 bg-white border border-indigo-100 shadow rounded-2xl">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-indigo-700">
            <span>🔔</span> Notifications Center
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="p-3 border border-indigo-100 rounded-lg bg-indigo-50">📢 New update available for attendance module</li>
            <li className="p-3 border border-indigo-100 rounded-lg bg-indigo-50">📅 Holiday added: Pongal (Jan 15)</li>
            <li className="p-3 border border-indigo-100 rounded-lg bg-indigo-50">👤 New employee registered: RTS220</li>
          </ul>
        </div>



        {/* Footer */}
        <p className="mt-10 text-sm italic text-center text-gray-500">Enhanced Admin Dashboard © ReadyTech Solutions</p>


      </div>
    </div>
  );
};

export default AdminDashboard;
