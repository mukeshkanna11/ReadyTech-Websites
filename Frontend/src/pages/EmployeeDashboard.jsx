import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Auto-detect backend
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

  const handleLogout = () => {
    localStorage.removeItem("employee");
    localStorage.removeItem("token");
    navigate("/dashboard");
  };

  // WORK FUNCTIONS
  const fetchWork = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/work/employee/${employee.employeeId}`);
      const data = await res.json();
      setWorks(data.success ? data.works : []);
    } catch (err) {
      console.error(err);
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
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ============================
// 🕒 ATTENDANCE FUNCTIONS
// ============================
const fetchAttendance = async () => {
  try {
    setLoading(true);
    // 🔹 fetch only this employee's attendance using query param
    const res = await fetch(`${BASE_URL}/attendance?employeeId=${employee.employeeId}`);
    const data = await res.json();

    if (data.success && Array.isArray(data.attendance)) {
      setAttendance(data.attendance);
    } else {
      setAttendance([]);
    }
  } catch (err) {
    console.error("fetchAttendance error:", err);
    setAttendance([]);
  } finally {
    setLoading(false);
  }
};

const markAttendance = async () => {
  if (!attendanceForm.date) return alert("Select a valid date first.");

  try {
    // 🔹 ensure employeeId is always set for backend
    const payload = {
      ...attendanceForm,
      employeeId: employee.employeeId,
    };

    const res = await fetch(`${BASE_URL}/attendance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Attendance marked successfully!");
      // 🔹 reset form date to today
      setAttendanceForm({
        employeeId: employee.employeeId,
        date: new Date().toISOString().split("T")[0],
        status: "Present",
        notes: "",
      });
      fetchAttendance();
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error("markAttendance error:", err);
  }
};

// ============================
// 📦 INITIAL LOAD
// ============================
useEffect(() => {
  tab === "work" ? fetchWork() : fetchAttendance();
}, [tab]);


  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-white">
     {/* ================= HEADER ================= */}
{/* ================= HEADER ================= */}
<div className="flex flex-col items-center justify-between p-6 mb-8 shadow-xl sm:flex-row bg-gradient-to-r from-indigo-50 to-white rounded-2xl">
  {/* Left Section: Dashboard Title */}
  <div className="flex items-center gap-4">
    <h1 className="flex items-center gap-2 text-3xl font-bold text-indigo-700 sm:text-3xl">
      🚀 ReadyTech Dashboard
    </h1>
    <span className="hidden px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full shadow-sm sm:inline-block">
      Employee Portal
    </span>
  </div>

  {/* Right Section: Account Info + Icons + Logout */}
  <div className="flex items-center gap-4 mt-4 sm:mt-0">
    {/* Notifications Icon */}
    <button className="p-2 transition-all rounded-full hover:bg-indigo-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </button>

    {/* Messages Icon */}
    <button className="p-2 transition-all rounded-full hover:bg-indigo-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.99 0-3.838-.595-5.35-1.616L3 21l1.616-3.65A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>

    {/* Employee Account Info */}
    <div className="flex items-center gap-3 px-3 py-1 bg-white rounded-full shadow-md">
      {/* Avatar */}
      <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-indigo-500 rounded-full">
        {employee.name.charAt(0).toUpperCase()}
      </div>
      {/* Name + ID */}
      <div className="flex-col hidden sm:flex">
        <p className="font-semibold text-gray-700">{employee.name}</p>
        <p className="text-xs text-gray-500">{employee.employeeId}</p>
      </div>
    </div>

    {/* Logout Button */}
    <button
      onClick={handleLogout}
      className="px-5 py-2 font-semibold text-white transition-all transform bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:scale-105"
    >
      Logout
    </button>
  </div>
</div>




   {/* ================= EMPLOYEE INFO CARD ================= */}
<div className="flex flex-col items-center justify-between p-6 mb-8 transition-transform transform border border-indigo-100 shadow-xl sm:flex-row bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl hover:scale-105">
  
  {/* Employee Greeting */}
  <div className="flex flex-col">
    <p className="flex items-center gap-3 text-2xl font-bold text-gray-800">
      👋 Welcome, 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
        {employee.name}
      </span>
    </p>
    <p className="mt-1 text-sm text-gray-600">
      Employee ID: <span className="font-medium text-gray-800">{employee.employeeId}</span>
    </p>
  </div>

  {/* Dashboard Badge / Role */}
  <div className="flex items-center gap-3 mt-4 sm:mt-0">
    <span className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full shadow-sm">
      🛠️ Employee Dashboard
    </span>
    {/* Optional: Employee Avatar */}
    <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-indigo-500 rounded-full shadow-md">
      {employee.name.charAt(0).toUpperCase()}
    </div>
  </div>
</div>



      {/* ================= TABS ================= */}
<div className="flex justify-center mb-8">
  <button
    className={`px-6 py-2 font-semibold rounded-l-lg transition-all duration-300 ${
      tab === "work"
        ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
    }`}
    onClick={() => setTab("work")}
  >
    My Tasks
  </button>
  <button
    className={`px-6 py-2 font-semibold rounded-r-lg transition-all duration-300 ${
      tab === "attendance"
        ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
    }`}
    onClick={() => setTab("attendance")}
  >
    My Attendance
  </button>
</div>


      {/* WORK SECTION */}
      {tab === "work" && (
        <div className="p-6 mb-8 bg-white border border-indigo-100 shadow-lg rounded-2xl">
  <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold text-indigo-700">
    📋 My Assigned Tasks
  </h2>

  {loading ? (
    <p className="text-gray-500">Loading tasks...</p>
  ) : works.length > 0 ? (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-sm border border-gray-300 table-auto">
        <thead className="text-white bg-gradient-to-r from-indigo-500 to-blue-600">
          <tr>
            <th className="p-3 font-semibold text-center rounded-tl-md">Task Title</th>
            <th className="p-3 font-semibold text-center">Description</th>
            <th className="p-3 font-semibold text-center">Status</th>
            <th className="p-3 font-semibold text-center">Deadline</th>
            <th className="p-3 font-semibold text-center rounded-tr-md">Actions</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work, index) => (
            <tr
              key={work._id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-indigo-50"
              } hover:bg-indigo-100 hover:shadow-md transition-all`}
            >
              <td className="p-3 text-center text-gray-700 border rounded-md">{work.taskTitle}</td>
              <td className="p-3 text-center text-gray-700 border rounded-md">{work.description}</td>
              <td className="p-3 text-center text-gray-700 border rounded-md">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${
                    work.status === "Completed" ? "bg-green-600" : "bg-yellow-500"
                  }`}
                >
                  {work.status}
                </span>
              </td>
              <td className="p-3 text-center text-gray-700 border rounded-md">
                {work.deadline?.split("T")[0] || "-"}
              </td>
              <td className="p-3 text-center text-gray-700 border rounded-md">
                {work.status !== "Completed" && (
                  <button
                    onClick={() => markWorkCompleted(work._id)}
                    className="px-3 py-1 text-xs font-medium text-white transition-all bg-green-500 rounded-md hover:bg-green-600"
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

      {/* ATTENDANCE SECTION */}
      {tab === "attendance" && (
        <>
          <div className="p-6 mb-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
  <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold text-indigo-700">
    🕒 Mark Attendance
  </h2>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <input
      type="date"
      value={attendanceForm.date}
      onChange={(e) =>
        setAttendanceForm({ ...attendanceForm, date: e.target.value })
      }
      className="p-3 text-gray-800 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none hover:border-indigo-400"
    />
    <select
      value={attendanceForm.status}
      onChange={(e) =>
        setAttendanceForm({ ...attendanceForm, status: e.target.value })
      }
      className="p-3 text-gray-800 transition-all bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none hover:border-indigo-400"
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
      className="p-3 text-gray-800 placeholder-gray-400 transition-all border border-gray-300 rounded-lg sm:col-span-2 md:col-span-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none hover:border-indigo-400"
    />
    <div className="flex justify-end sm:col-span-2 md:col-span-3">
      <button
        onClick={markAttendance}
        className="px-6 py-2.5 font-medium text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all"
      >
        Mark Attendance
      </button>
    </div>
  </div>
</div>


          <div className="p-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
  <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold text-indigo-700">
    📅 My Attendance Records
  </h2>

  {loading ? (
    <p className="text-gray-500">Loading attendance...</p>
  ) : attendance.length > 0 ? (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-sm border border-gray-300 table-auto">
        <thead className="text-white bg-gradient-to-r from-indigo-500 to-blue-600">
          <tr>
            <th className="p-3 font-semibold text-center rounded-tl-md">Date</th>
            <th className="p-3 font-semibold text-center">Status</th>
            <th className="p-3 font-semibold text-center rounded-tr-md">Notes</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a, index) => (
            <tr
              key={a._id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-indigo-50"
              } hover:bg-indigo-100 hover:shadow-md transition-all`}
            >
              <td className="p-3 text-center text-gray-700 border rounded-md">
                {new Date(a.date).toLocaleDateString()}
              </td>
              <td className="p-3 text-center border rounded-md">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${
                    a.status === "Present"
                      ? "bg-green-600"
                      : a.status === "Leave"
                      ? "bg-yellow-500"
                      : "bg-red-600"
                  }`}
                >
                  {a.status}
                </span>
              </td>
              <td className="p-3 text-center text-gray-700 border rounded-md">{a.notes || "-"}</td>
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
