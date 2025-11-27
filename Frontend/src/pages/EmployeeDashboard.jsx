import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Auto-detect backend
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  // Employee info from localStorage
  const employee = JSON.parse(localStorage.getItem("employee")) || {
    name: "Employee",
    employeeId: "RTS112",
    email: "employee@example.com",
  };
  const token = localStorage.getItem("token") || "";

  const [tab, setTab] = useState("work");
  const [works, setWorks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  const [attendanceForm, setAttendanceForm] = useState({
    employeeId: employee.employeeId,
    date: new Date().toISOString().split("T")[0],
    status: "Present",
    notes: "",
  });

  const [ticketForm, setTicketForm] = useState({
    subject: "",
    description: "",
    email: employee.email,
  });

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("employee");
    localStorage.removeItem("token");
    navigate("/dashboard");
  };

  // ================= WORK =================
  const fetchWork = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/work/employee/${employee.employeeId}`);
      const data = await res.json();
      setWorks(data.success ? data.works : []);
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
      if (data.success) fetchWork();
    } catch (err) {
      console.error("markWorkCompleted error:", err);
    }
  };

  // ================= ATTENDANCE =================
  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/attendance?employeeId=${employee.employeeId}`);
      const data = await res.json();
      setAttendance(data.success ? data.attendance : []);
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
        alert("✅ Attendance marked successfully!");
        setAttendanceForm({
          employeeId: employee.employeeId,
          date: new Date().toISOString().split("T")[0],
          status: "Present",
          notes: "",
        });
        fetchAttendance();
      } else alert(data.message);
    } catch (err) {
      console.error("markAttendance error:", err);
    }
  };

  // ================= SUPPORT TICKET =================
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/support/tickets/${employee.email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTickets(data.success ? data.tickets : []);
    } catch (err) {
      console.error("fetchTickets error:", err);
    } finally {
      setLoading(false);
    }
  };

  const submitTicket = async () => {
    if (!ticketForm.subject || !ticketForm.description) {
      alert("Subject and description are required");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/support/ticket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...ticketForm,
          employeeId: employee.employeeId,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      alert("✅ Ticket submitted successfully!");
      setTicketForm({ subject: "", description: "", email: employee.email });
      fetchTickets();
    } catch (err) {
      console.error("submitTicket error:", err);
      alert(`❌ Failed to submit: ${err.message}`);
    }
  };

  // Poll tickets every 5 seconds
  useEffect(() => {
    let interval;
    if (tab === "ticket") {
      fetchTickets();
      interval = setInterval(fetchTickets, 5000);
    }
    return () => clearInterval(interval);
  }, [tab]);

  useEffect(() => {
    if (tab === "work") fetchWork();
    else if (tab === "attendance") fetchAttendance();
  }, [tab]);

  // ================= RENDER =================
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-white">
      {/* HEADER */}
<header className="p-4 mb-8 border-b shadow-lg backdrop-blur-xl bg-white/60 border-indigo-200/40 sm:p-6 rounded-2xl">
  <div className="flex items-center justify-between">

    {/* LEFT — LOGO + SEARCH */}
    <div className="flex items-center gap-6">
      {/* Logo */}
      <h1 className="flex items-center gap-2 text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text">
        <span>⚡</span> ReadyTech Dashboard
      </h1>

      {/* Search */}
      <div className="items-center hidden px-4 py-2 border border-indigo-100 shadow-md md:flex bg-white/70 rounded-xl">
        <input
          type="text"
          placeholder="Search anything..."
          className="w-48 text-sm bg-transparent outline-none"
        />
        <svg
          className="w-5 h-5 text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>
    </div>

    {/* RIGHT — NOTIFICATIONS + ACCOUNT DROPDOWN */}
    <div className="flex items-center gap-5">

      {/* Notifications */}
      <button className="relative p-2 transition rounded-full shadow-md bg-white/70 hover:shadow-lg hover:bg-white">
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 18.25a1.75 1.75 0 11-3.5 0m7-5.5V10a6 6 0 10-12 0v2.75L4 17h16l-2.75-4.25z"
          />
        </svg>
        <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
          3
        </span>
      </button>

      {/* Account dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-3 p-2 pr-4 transition border border-indigo-100 rounded-full shadow-md bg-white/80 hover:shadow-lg">
          {/* Avatar */}
          <div className="flex items-center justify-center text-lg font-bold text-white rounded-full w-11 h-11 bg-gradient-to-r from-indigo-500 to-blue-500">
            {employee.name.charAt(0).toUpperCase()}
          </div>

          {/* Employee Name */}
          <div className="flex-col hidden text-left sm:flex">
            <p className="font-semibold text-green-800">{employee.name}</p>
            <p className="text-xs text-gray-800">{employee.employeeId}</p>
          </div>

          {/* Arrow */}
          <svg
            className="w-4 h-4 text-gray-600 transition group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 z-20 flex-col hidden w-48 p-3 mt-2 border border-indigo-100 shadow-xl group-hover:flex bg-white/90 backdrop-blur-xl rounded-xl">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-black rounded-lg hover:bg-indigo-50">
            👤 Account
          </button>
          <button className="flex items-center py-2 text-sm text-black rounded-lg x-3 hover:bg-indigo-50">
            ⚙️ Settings
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-black rounded-lg hover:bg-indigo-50">
            📄 My Reports
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* EXTRA HEADER SECTIONS */}
  <div className="flex items-center justify-between mt-6">

    {/* Quick Stats */}
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="p-4 transition border border-indigo-100 shadow-md bg-white/70 rounded-xl hover:scale-105">
        <p className="text-xs text-gray-800">Today's Tasks</p>
        <h3 className="text-xl font-bold text-indigo-700">12</h3>
      </div>

      <div className="p-4 transition border border-indigo-100 shadow-md bg-white/70 rounded-xl hover:scale-105">
        <p className="text-xs text-gray-800">Completed</p>
        <h3 className="text-xl font-bold text-green-700">8</h3>
      </div>

      <div className="p-4 transition border border-indigo-100 shadow-md bg-white/70 rounded-xl hover:scale-105">
        <p className="text-xs text-gray-800">Pending</p>
        <h3 className="text-xl font-bold text-yellow-600">4</h3>
      </div>

      <div className="p-4 transition border border-indigo-100 shadow-md bg-white/70 rounded-xl hover:scale-105">
        <p className="text-xs text-gray-800">Messages</p>
        <h3 className="text-xl font-bold text-blue-700">3</h3>
      </div>
    </div>
  </div>
</header>


      {/* TABS */}
      <div className="flex justify-center mb-8 space-x-2">
        {["work", "attendance", "ticket"].map((t) => (
          <button
            key={t}
            className={`px-6 py-2 font-semibold rounded-lg transition-all ${
              tab === t
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-indigo-600 hover:bg-indigo-100"
            }`}
            onClick={() => setTab(t)}
          >
            {t === "work" ? "My Tasks" : t === "attendance" ? "My Attendance" : "Support Tickets"}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div>
        {/* WORK */}
        {tab === "work" && (
          <div className="p-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
            <h2 className="mb-4 text-2xl font-bold text-indigo-700">📋 My Tasks</h2>
            {loading ? (
              <p>Loading tasks...</p>
            ) : works.length === 0 ? (
              <p>No tasks assigned.</p>
            ) : (
              <table className="w-full overflow-hidden text-sm border border-gray-300 rounded-lg table-auto">
                <thead className="text-white bg-gradient-to-r from-indigo-500 to-blue-600">
                  <tr>
                    <th className="p-3">Task</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Deadline</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((w, i) => (
                    <tr key={w._id} className={i % 2 === 0 ? "bg-white " : "bg-indigo-50"}>
                      <td className="p-3 text-center text-black">{w.taskTitle}</td>
                      <td className="p-3 text-center text-black">{w.description}</td>
                      <td className="p-3 text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            w.status === "Completed"
                              ? "bg-green-600 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                        >
                          {w.status}
                        </span>
                      </td>
                      <td className="p-3 text-center text-black">{w.deadline?.split("T")[0] || "-"}</td>
                      <td className="p-3 text-center">
                        {w.status !== "Completed" && (
                          <button
                            onClick={() => markWorkCompleted(w._id)}
                            className="px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
                          >
                            Mark Completed
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* ATTENDANCE */}
        {tab === "attendance" && (
          <div className="space-y-6">
            {/* Mark Attendance */}
            <div className="p-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
              <h2 className="mb-4 text-2xl font-bold text-indigo-700">🕒 Mark Attendance</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <input
                  type="date"
                  value={attendanceForm.date}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, date: e.target.value })}
                  className="p-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
                <select
                  value={attendanceForm.status}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, status: e.target.value })}
                  className="p-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                >
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Leave</option>
                </select>
                <input
                  type="text"
                  placeholder="Notes (optional)"
                  value={attendanceForm.notes}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, notes: e.target.value })}
                  className="p-3 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 sm:col-span-2 md:col-span-3"
                />
                <div className="flex justify-end sm:col-span-2 md:col-span-3">
                  <button
                    onClick={markAttendance}
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700"
                  >
                    Mark Attendance
                  </button>
                </div>
              </div>
            </div>

            {/* Attendance Records */}
            <div className="p-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
              <h2 className="mb-4 text-2xl font-bold text-indigo-700">📅 My Attendance Records</h2>
              {loading ? (
                <p>Loading attendance...</p>
              ) : attendance.length === 0 ? (
                <p>No attendance records.</p>
              ) : (
                <table className="w-full overflow-hidden text-sm border border-gray-300 rounded-lg table-auto">
                  <thead className="text-white bg-gradient-to-r from-indigo-500 to-blue-600">
                    <tr>
                      <th className="p-3 ">Date</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((a, i) => (
                      <tr key={a._id} className={i % 2 === 0 ? "bg-white" : "bg-indigo-50"}>
                        <td className="p-3 text-center text-black">{new Date(a.date).toLocaleDateString()}</td>
                        <td className="p-3 text-center text-black">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              a.status === "Present"
                                ? "bg-green-600 text-white"
                                : a.status === "Leave"
                                ? "bg-yellow-500 text-white"
                                : "bg-red-600 text-white"
                            }`}
                          >
                            {a.status}
                          </span>
                        </td>
                        <td className="p-3 text-center text-black">{a.notes || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* SUPPORT TICKET */}
        {tab === "ticket" && (
          <div className="space-y-6">
            {/* Raise Ticket */}
            <div className="p-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
              <h2 className="mb-4 text-2xl font-bold text-indigo-700">📨 Raise a Support Ticket</h2>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Subject"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                  className="p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
                <textarea
                  placeholder="Describe your issue..."
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                  rows={5}
                  className="p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  onClick={submitTicket}
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700"
                >
                  Submit Ticket
                </button>
              </div>
            </div>

            {/* Tickets List */}
            <div className="p-6 bg-white border border-indigo-100 shadow-lg rounded-2xl">
              <h2 className="mb-4 text-2xl font-bold text-indigo-700">📝 My Tickets</h2>
              {loading ? (
                <p>Loading tickets...</p>
              ) : tickets.length === 0 ? (
                <p>No tickets yet.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {tickets.map((t) => (
                    <div
                      key={t._id}
                      className="p-4 border border-indigo-200 rounded-lg shadow-sm bg-indigo-50"
                    >
                      <h4 className="font-semibold text-indigo-800">{t.subject}</h4>
                      <p className="mb-2 text-gray-700">{t.description}</p>
                      <p className="mb-2 text-sm text-gray-500">Status: {t.status}</p>
                      <div className="flex flex-col gap-2 pt-2 mt-2 overflow-y-auto border-t border-indigo-200 max-h-60">
                        {t.responses.map((r, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-lg text-sm ${
                              r.from === "admin"
                                ? "bg-blue-100 text-blue-800 self-start"
                                : "bg-green-100 text-green-800 self-end"
                            }`}
                          >
                            <p>{r.text}</p>
                            <span className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
