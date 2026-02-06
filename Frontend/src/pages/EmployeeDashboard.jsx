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
      {/* ================= EMPLOYEE HEADER (PREMIUM) ================= */}
{/* ================= PREMIUM HEADER ================= */}
<header className="sticky top-0 z-40 mb-8 border shadow-xl bg-white/90 backdrop-blur-xl rounded-3xl border-slate-200">

  <div className="flex items-center justify-between px-6 py-4">

    {/* ================= LEFT : LOGO ================= */}
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white shadow-lg rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500">
        ⚡
      </div>

      <div>
        <h1 className="text-2xl font-extrabold tracking-wide text-slate-900">
          ReadyTech
        </h1>
        <p className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
          Employee Panel
        </p>
      </div>
    </div>

    {/* ================= RIGHT : ACTIONS ================= */}
    <div className="flex items-center gap-6">

      {/* ================= NOTIFICATIONS ================= */}
      <div className="relative group">
        <button className="relative flex items-center justify-center transition border shadow-md w-11 h-11 rounded-xl border-slate-200 bg-slate-50 hover:bg-indigo-50">
          🔔
          <span className="absolute -top-1 -right-1 px-1.5 text-[10px] font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </button>

        {/* Notification Dropdown */}
        <div className="absolute right-0 z-30 hidden mt-4 bg-white border shadow-2xl w-96 rounded-2xl border-slate-200 group-hover:block">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h3 className="font-bold text-slate-900">
              Notifications
            </h3>
            <button className="text-xs font-semibold text-indigo-600">
              Mark all read
            </button>
          </div>

          <div className="overflow-y-auto max-h-80">
            <div className="flex gap-4 px-5 py-4 border-b bg-indigo-50">
              <span className="text-xl">🧾</span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  New task assigned
                </p>
                <p className="text-xs text-slate-500">
                  CRM Dashboard UI
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  2 minutes ago
                </p>
              </div>
            </div>

            <div className="flex gap-4 px-5 py-4 border-b">
              <span className="text-xl">🎧</span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Ticket updated
                </p>
                <p className="text-xs text-slate-500">
                  VPN access issue
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  1 hour ago
                </p>
              </div>
            </div>

            <div className="flex gap-4 px-5 py-4">
              <span className="text-xl">✅</span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Task completed
                </p>
                <p className="text-xs text-slate-500">
                  Bug fix approved
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  Yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ACCOUNT ================= */}
      <div className="relative group">
        <button className="flex items-center gap-4 px-4 py-2 transition bg-white border shadow-md rounded-2xl border-slate-200 hover:bg-slate-50">

          {/* Avatar */}
          <div className="relative">
            <div className="flex items-center justify-center text-lg font-bold text-white shadow w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600">
              MK
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Info */}
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">
              Mukesh
            </p>
            <p className="text-xs font-medium text-slate-500">
              RTS-112
            </p>
          </div>

          {/* Chevron */}
          <svg
            className="w-4 h-4 transition text-slate-500 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Account Dropdown */}
        <div className="absolute right-0 z-30 hidden w-64 mt-4 bg-white border shadow-2xl rounded-2xl border-slate-200 group-hover:block">
          <div className="px-5 py-4 border-b bg-slate-50">
            <p className="text-sm font-bold text-slate-900">
              Mukesh
            </p>
            <p className="text-xs text-slate-500">
              Mern SDE
            </p>
          </div>

          <div className="py-2">
            <button className="w-full px-5 py-3 text-sm text-left text-black hover:bg-indigo-50">
              👤 My Profile
            </button>
            <button className="w-full px-5 py-3 text-sm text-left text-black hover:bg-indigo-50">
              🕒 Attendance
            </button>
            <button className="w-full px-5 py-3 text-sm text-left text-black hover:bg-indigo-50">
              🎧 Support Tickets
            </button>
          </div>

          <div className="border-t">
            <button className="w-full px-5 py-3 text-sm font-semibold text-left text-red-600 hover:bg-red-50">
              🚪 Logout
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</header>
{/* ================= QUICK STATS ================= */}
<section className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-4">

  {/* TODAY TASKS */}
  <div className="relative p-6 transition bg-white shadow-xl rounded-2xl hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-2xl"></div>

    <div className="relative flex items-center justify-between">
      <div>
        <p className="text-xs font-bold tracking-wide text-indigo-700 uppercase">
          Today Tasks
        </p>
        <p className="mt-2 text-4xl font-extrabold text-indigo-800">
          12
        </p>
        <p className="mt-1 text-xs font-medium text-indigo-600/70">
          Assigned to you
        </p>
      </div>

      <div className="flex items-center justify-center text-xl text-white shadow-lg w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl">
        📋
      </div>
    </div>
  </div>

  {/* COMPLETED */}
  <div className="relative p-6 transition bg-white shadow-xl rounded-2xl hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-transparent rounded-2xl"></div>

    <div className="relative flex items-center justify-between">
      <div>
        <p className="text-xs font-bold tracking-wide uppercase text-emerald-700">
          Completed
        </p>
        <p className="mt-2 text-4xl font-extrabold text-emerald-700">
          8
        </p>
        <p className="mt-1 text-xs font-medium text-emerald-600/70">
          Finished today
        </p>
      </div>

      <div className="flex items-center justify-center text-xl text-white shadow-lg w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl">
        ✅
      </div>
    </div>
  </div>

  {/* PENDING */}
  <div className="relative p-6 transition bg-white shadow-xl rounded-2xl hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl"></div>

    <div className="relative flex items-center justify-between">
      <div>
        <p className="text-xs font-bold tracking-wide uppercase text-amber-700">
          Pending
        </p>
        <p className="mt-2 text-4xl font-extrabold text-amber-700">
          4
        </p>
        <p className="mt-1 text-xs font-medium text-amber-600/80">
          Needs attention
        </p>
      </div>

      <div className="flex items-center justify-center text-xl text-white shadow-lg w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-2xl">
        ⏳
      </div>
    </div>
  </div>

  {/* SUPPORT TICKETS */}
  <div className="relative p-6 transition bg-white shadow-xl rounded-2xl hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 to-transparent rounded-2xl"></div>

    <div className="relative flex items-center justify-between">
      <div>
        <p className="text-xs font-bold tracking-wide uppercase text-rose-700">
          Tickets
        </p>
        <p className="mt-2 text-4xl font-extrabold text-rose-700">
          3
        </p>
        <p className="mt-1 text-xs font-medium text-rose-600/80">
          Open requests
        </p>
      </div>

      <div className="flex items-center justify-center text-xl text-white shadow-lg w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl">
        🎧
      </div>
    </div>
  </div>

</section>




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
