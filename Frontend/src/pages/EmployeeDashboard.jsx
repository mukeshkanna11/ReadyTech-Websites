import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Auto-detect local or deployed backend
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const employee = JSON.parse(localStorage.getItem("employee")) || {
    name: "Employee",
    employeeId: "RTS112",
  };

  const [works, setWorks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("work");
  const [attendanceForm, setAttendanceForm] = useState({
    employeeId: employee.employeeId,
    date: new Date().toISOString().split("T")[0],
    status: "Present",
    notes: "",
  });

  // ===============================
  // 🔐 Logout
  // ===============================
  const handleLogout = () => {
    localStorage.removeItem("employee");
    localStorage.removeItem("token");
    navigate("/dashboard");
  };

  // ===============================
  // 📋 WORK FUNCTIONS
  // ===============================
  const fetchWork = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/work/employee/${employee.employeeId}`
      );
      const data = await res.json();
      if (data.success) {
        setWorks(data.works);
      } else {
        setWorks([]);
      }
    } catch (err) {
      console.error("fetchWork error:", err);
    } finally {
      setLoading(false);
    }
  };

  const markWorkCompleted = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/work/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Completed" }),
      });
      const data = await res.json();
      if (data.success) {
        fetchWork();
        alert("✅ Task marked as Completed!");
      } else {
        alert(data.message || "Failed to update task");
      }
    } catch (err) {
      console.error("markWorkCompleted error:", err);
    }
  };

  // ===============================
  // 🕒 ATTENDANCE FUNCTIONS
  // ===============================
  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/attendance`);
      const data = await res.json();
      if (data.success && Array.isArray(data.attendance)) {
        const filtered = data.attendance.filter(
          (a) => a.employeeId === employee.employeeId
        );
        setAttendance(filtered);
      } else {
        setAttendance([]);
      }
    } catch (err) {
      console.error("fetchAttendance error:", err);
    } finally {
      setLoading(false);
    }
  };

  const markAttendance = async () => {
    if (!attendanceForm.date) return alert("Select a valid date first.");
    try {
      const res = await fetch(`${BASE_URL}/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attendanceForm),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Attendance marked successfully!");
        fetchAttendance();
      } else {
        alert(data.message || "Unable to mark attendance");
      }
    } catch (err) {
      console.error("markAttendance error:", err);
    }
  };

  // ===============================
  // ⏱ INITIAL LOAD
  // ===============================
  useEffect(() => {
    if (tab === "work") fetchWork();
    else fetchAttendance();
  }, [tab]);

  // ===============================
  // 🎨 UI SECTION
  // ===============================
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
        <h1 className="text-3xl font-bold text-indigo-700">
          ReadyTech Employee Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-4 text-white bg-red-600 rounded sm:mt-0 hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Employee Info */}
      <div className="p-4 mb-6 bg-white rounded shadow-md">
        <p className="text-lg font-semibold text-gray-700">
          👋 Welcome,{" "}
          <span className="text-indigo-600">{employee.name || "Employee"}</span>
        </p>
        <p className="text-sm text-gray-500">
          Employee ID: {employee.employeeId}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 font-medium rounded-l-lg transition-all duration-200 ${
            tab === "work"
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-200 hover:bg-indigo-100"
          }`}
          onClick={() => setTab("work")}
        >
          My Tasks
        </button>
        <button
          className={`px-6 py-2 font-medium rounded-r-lg transition-all duration-200 ${
            tab === "attendance"
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-200 hover:bg-indigo-100"
          }`}
          onClick={() => setTab("attendance")}
        >
          My Attendance
        </button>
      </div>

      {/* ============================
          🧱 WORK SECTION
      ============================ */}
      {tab === "work" && (
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold text-indigo-700">
            📋 My Assigned Tasks
          </h2>

          {loading ? (
            <p className="text-gray-500">Loading tasks...</p>
          ) : works.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300">
                <thead className="text-indigo-800 bg-indigo-100">
                  <tr>
                    <th className="p-2 border">Task Title</th>
                    <th className="p-2 border">Description</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Deadline</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((work) => (
                    <tr
                      key={work._id}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="p-2 border">{work.taskTitle}</td>
                      <td className="p-2 border">{work.description}</td>
                      <td
                        className={`p-2 border font-semibold ${
                          work.status === "Completed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {work.status}
                      </td>
                      <td className="p-2 border">
                        {work.deadline?.split("T")[0] || "-"}
                      </td>
                      <td className="p-2 text-center border">
                        {work.status !== "Completed" && (
                          <button
                            onClick={() => markWorkCompleted(work._id)}
                            className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700"
                          >
                            Mark Completed
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No tasks assigned yet.</p>
          )}
        </div>
      )}

      {/* ============================
          🕒 ATTENDANCE SECTION
      ============================ */}
      {tab === "attendance" && (
        <>
          <div className="p-4 mb-6 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              🕒 Mark Attendance
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
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
                placeholder="Notes (optional)"
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

          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              📅 My Attendance Records
            </h2>
            {loading ? (
              <p className="text-gray-500">Loading attendance...</p>
            ) : attendance.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-300">
                  <thead className="text-indigo-800 bg-indigo-100">
                    <tr>
                      <th className="p-2 border">Date</th>
                      <th className="p-2 border">Status</th>
                      <th className="p-2 border">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((a) => (
                      <tr key={a._id} className="transition hover:bg-gray-50">
                        <td className="p-2 border">{a.date}</td>
                        <td
                          className={`p-2 border font-semibold ${
                            a.status === "Present"
                              ? "text-green-600"
                              : a.status === "Leave"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {a.status}
                        </td>
                        <td className="p-2 border">{a.notes || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No attendance records yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeDashboard;
