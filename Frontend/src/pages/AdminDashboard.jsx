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
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          ReadyTech Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Admin Info */}
      <div className="p-4 mb-6 bg-white rounded shadow">
        <p className="text-lg font-semibold text-gray-700">
          👋 Welcome, <span className="text-indigo-600">{admin.name}</span>
        </p>
        <p className="text-sm text-gray-500">Admin ID: {admin.adminId}</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-l-lg ${
            activeTab === "work" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work Management
        </button>
        <button
          className={`px-6 py-2 rounded-r-lg ${
            activeTab === "attendance" ? "bg-indigo-600 text-white" : "bg-gray-200"
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
          <div className="p-4 mb-6 bg-white rounded shadow">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              ➕ Add New Work
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              <input
                type="text"
                placeholder="Employee ID"
                value={form.employeeId}
                onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Task Title"
                value={form.taskTitle}
                onChange={(e) => setForm({ ...form, taskTitle: e.target.value })}
                className="p-2 border rounded"
              />
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="p-2 border rounded"
              />
              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="p-2 border rounded sm:col-span-2"
              />
              <button
                onClick={addWork}
                className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Add Work
              </button>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              📋 Work List
            </h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full border">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="p-2 border">Employee ID</th>
                    <th className="p-2 border">Task</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Deadline</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((w) => (
                    <tr key={w._id}>
                      <td className="p-2 border">{w.employeeId}</td>
                      <td className="p-2 border">{w.title}</td>
                      <td className="p-2 border">{w.status}</td>
                      <td className="p-2 border">{w.deadline?.split("T")[0]}</td>
                      <td className="flex gap-2 p-2 border">
                        <button
                          onClick={() => updateWorkStatus(w._id, "Completed")}
                          className="px-2 py-1 text-sm text-white bg-green-600 rounded"
                        >
                          Complete
                        </button>
                        <button
                          onClick={() => deleteWork(w._id)}
                          className="px-2 py-1 text-sm text-white bg-red-600 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <>
          {/* ================= ATTENDANCE SECTION ================= */}
          <div className="p-4 mb-6 bg-white rounded shadow">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              ➕ Mark Attendance
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              <input
                type="text"
                placeholder="Employee ID"
                value={attendanceForm.employeeId}
                onChange={(e) =>
                  setAttendanceForm({ ...attendanceForm, employeeId: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="date"
                value={attendanceForm.date}
                onChange={(e) =>
                  setAttendanceForm({ ...attendanceForm, date: e.target.value })
                }
                className="p-2 border rounded"
              />
              <select
                value={attendanceForm.status}
                onChange={(e) =>
                  setAttendanceForm({ ...attendanceForm, status: e.target.value })
                }
                className="p-2 border rounded"
              >
                <option>Present</option>
                <option>Absent</option>
                <option>Leave</option>
              </select>
              <input
                type="text"
                placeholder="Notes"
                value={attendanceForm.notes}
                onChange={(e) =>
                  setAttendanceForm({ ...attendanceForm, notes: e.target.value })
                }
                className="p-2 border rounded sm:col-span-2"
              />
              <button
                onClick={markAttendance}
                className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Mark Attendance
              </button>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              📅 Attendance Records
            </h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full border">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="p-2 border">Employee ID</th>
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Notes</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((a) => (
                    <tr key={a._id}>
                      <td className="p-2 border">{a.employeeId}</td>
                      <td className="p-2 border">{a.date}</td>
                      <td className="p-2 border">{a.status}</td>
                      <td className="p-2 border">{a.notes}</td>
                      <td className="flex gap-2 p-2 border">
                        <button
                          onClick={() => updateAttendance(a._id, "Present")}
                          className="px-2 py-1 text-sm text-white bg-green-600 rounded"
                        >
                          Mark Present
                        </button>
                        <button
                          onClick={() => deleteAttendance(a._id)}
                          className="px-2 py-1 text-sm text-white bg-red-600 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
