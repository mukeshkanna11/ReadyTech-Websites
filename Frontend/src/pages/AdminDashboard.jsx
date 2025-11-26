import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin")) || {
    name: "Admin User",
    adminId: "RTS-ADMIN",
  };

  const token = localStorage.getItem("token");

  // ===============================
  // UI STATES
  // ===============================
  const [activeTab, setActiveTab] = useState("work");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // WORK
  const [works, setWorks] = useState([]);
  const [workForm, setWorkForm] = useState({
    employeeId: "",
    taskTitle: "",
    description: "",
    status: "In Progress",
    deadline: "",
  });

  // ATTENDANCE
  const [attendance, setAttendance] = useState([]);
  const [attendanceForm, setAttendanceForm] = useState({
    employeeId: "",
    date: "",
    status: "Present",
    notes: "",
  });

  // SUPPORT
  const [tickets, setTickets] = useState([]);
  const [replyMessage, setReplyMessage] = useState("");
  const [selectedTicketId, setSelectedTicketId] = useState(null);


  // ======================================================
  // PARSE RESPONSE + AUTH CHECK
  // ======================================================
  async function parseJsonResponse(res) {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.message || `Error ${res.status}`);
    }
    return data;
  }

  // ======================================================
  // LOGOUT
  // ======================================================
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/admin-login");
  }

  // ======================================================
  // WORK API
  // ======================================================
  async function fetchAllWorks() {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/work/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await parseJsonResponse(res);
      setWorks(data.works || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addWork() {
    if (!workForm.employeeId || !workForm.taskTitle) {
      alert("Employee ID & Task Title required");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/work/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(workForm),
      });
      await parseJsonResponse(res);
      alert("Work added successfully!");
      setWorkForm({
        employeeId: "",
        taskTitle: "",
        description: "",
        status: "In Progress",
        deadline: "",
      });
      fetchAllWorks();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateWorkStatus(id, status) {
    try {
      const res = await fetch(`${BASE_URL}/work/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      await parseJsonResponse(res);
      fetchAllWorks();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteWork(id) {
    if (!confirm("Delete this work item?")) return;
    try {
      const res = await fetch(`${BASE_URL}/work/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await parseJsonResponse(res);
      fetchAllWorks();
    } catch (err) {
      setError(err.message);
    }
  }

  // ======================================================
  // ATTENDANCE API
  // ======================================================
  async function fetchAttendance() {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/attendance`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await parseJsonResponse(res);
      setAttendance(data.attendance || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function markAttendance() {
    if (!attendanceForm.employeeId || !attendanceForm.date) {
      alert("Employee ID & Date required");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(attendanceForm),
      });
      await parseJsonResponse(res);
      setAttendanceForm({
        employeeId: "",
        date: "",
        status: "Present",
        notes: "",
      });
      fetchAttendance();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateAttendance(id, status) {
    try {
      const res = await fetch(`${BASE_URL}/attendance/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      await parseJsonResponse(res);
      fetchAttendance();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteAttendance(id) {
    if (!confirm("Delete this attendance record?")) return;
    try {
      const res = await fetch(`${BASE_URL}/attendance/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await parseJsonResponse(res);
      fetchAttendance();
    } catch (err) {
      setError(err.message);
    }
  }

  // ======================================================
  // SUPPORT TICKET API
  // ======================================================
  async function fetchTickets() {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/support/admin/tickets`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await parseJsonResponse(res);
      setTickets(data.tickets || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

async function sendReply(ticketId) {
  if (!replyMessage.trim()) {
    alert("Reply message cannot be empty");
    return;
  }
  try {
    const res = await fetch(`${BASE_URL}/support/admin/reply/${ticketId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ replyMessage: replyMessage.trim() }),
    });
    await parseJsonResponse(res);
    alert("Reply sent successfully!");
    setReplyMessage("");
    setSelectedTicketId(null);
    fetchTickets();
  } catch (err) {
    console.error("sendReply error:", err);
    alert("Failed to send reply");
  }
}


  async function deleteTicket(ticketId) {
    if (!confirm("Delete this ticket?")) return;
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/support/admin/ticket/${ticketId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await parseJsonResponse(res);
      fetchTickets();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ======================================================
  // LOAD DATA ON TAB CHANGE
  // ======================================================
  useEffect(() => {
    setError(null);
    if (activeTab === "work") fetchAllWorks();
    if (activeTab === "attendance") fetchAttendance();
    if (activeTab === "support") fetchTickets();
  }, [activeTab]);

  useEffect(() => {
    fetchAllWorks(); // initial load
  }, []);

  // ======================================================
  // UI RENDER
  // ======================================================
  return (
    <div className="min-h-screen p-6 bg-slate-100">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">Welcome, {admin.name}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600">{admin.adminId}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded-xl hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-8">
        {["work", "attendance", "support"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              activeTab === tab
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-indigo-100"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ERROR */}
      {error && (
        <div className="p-3 mb-4 text-red-700 border border-red-200 rounded bg-red-50">{error}</div>
      )}
      {loading && <div className="mb-4 text-sm text-slate-500">Loading...</div>}

      {/* ================= WORK TAB ================= */}
      {activeTab === "work" && (
        <div className="space-y-6">
          {/* Add Work Form */}
          <div className="p-6 bg-white border shadow-lg rounded-xl">
            <h2 className="mb-3 text-xl font-bold text-indigo-700">Add Work</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                placeholder="Employee ID"
                className="p-3 border rounded-xl"
                value={workForm.employeeId}
                onChange={(e) => setWorkForm({ ...workForm, employeeId: e.target.value })}
              />
              <input
                placeholder="Task Title"
                className="p-3 border rounded-xl"
                value={workForm.taskTitle}
                onChange={(e) => setWorkForm({ ...workForm, taskTitle: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="p-3 border rounded-xl md:col-span-2"
                value={workForm.description}
                onChange={(e) => setWorkForm({ ...workForm, description: e.target.value })}
              />
              <input
                type="date"
                className="p-3 border rounded-xl"
                value={workForm.deadline}
                onChange={(e) => setWorkForm({ ...workForm, deadline: e.target.value })}
              />
              <select
                className="p-3 border rounded-xl"
                value={workForm.status}
                onChange={(e) => setWorkForm({ ...workForm, status: e.target.value })}
              >
                <option>In Progress</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
              <button
                onClick={addWork}
                className="p-3 text-white bg-green-600 rounded-xl hover:bg-green-700 md:col-span-2"
              >
                Add Work
              </button>
            </div>
          </div>

          {/* Work List */}
          <div className="space-y-4">
            {works.map((w) => (
              <div key={w._id} className="p-5 bg-white border shadow rounded-xl hover:shadow-lg">
                <p>
                  <strong>Employee:</strong> {w.employeeId}
                </p>
                <p>
                  <strong>Task:</strong> {w.taskTitle}
                </p>
                <p>
                  <strong>Status:</strong> {w.status}
                </p>
                <p>
                  <strong>Deadline:</strong>{" "}
                  {w.deadline ? new Date(w.deadline).toLocaleDateString() : "N/A"}
                </p>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => updateWorkStatus(w._id, "Completed")}
                    className="px-3 py-1 text-white bg-blue-600 rounded"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deleteWork(w._id)}
                    className="px-3 py-1 text-white bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= ATTENDANCE TAB ================= */}
      {activeTab === "attendance" && (
        <div className="space-y-6">
          {/* Add Attendance */}
          <div className="p-6 bg-white border shadow-lg rounded-xl">
            <h2 className="mb-3 text-xl font-bold text-indigo-700">Mark Attendance</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                placeholder="Employee ID"
                className="p-3 border rounded-xl"
                value={attendanceForm.employeeId}
                onChange={(e) =>
                  setAttendanceForm({ ...attendanceForm, employeeId: e.target.value })
                }
              />
              <input
                type="date"
                className="p-3 border rounded-xl"
                value={attendanceForm.date}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, date: e.target.value })}
              />
              <select
                className="p-3 border rounded-xl"
                value={attendanceForm.status}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, status: e.target.value })}
              >
                <option>Present</option>
                <option>Absent</option>
                <option>On Leave</option>
              </select>
              <input
                placeholder="Notes"
                className="p-3 border rounded-xl"
                value={attendanceForm.notes}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, notes: e.target.value })}
              />
              <button
                onClick={markAttendance}
                className="p-3 text-white bg-green-600 rounded-xl md:col-span-2 hover:bg-green-700"
              >
                Mark Attendance
              </button>
            </div>
          </div>

          {/* Attendance List */}
          <div className="space-y-4">
            {attendance.map((a) => (
              <div key={a._id} className="p-5 bg-white border shadow rounded-xl hover:shadow-lg">
                <p>
                  <strong>Employee:</strong> {a.employeeId}
                </p>
                <p>
                  <strong>Date:</strong> {new Date(a.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Status:</strong> {a.status}
                </p>
                <p>
                  <strong>Notes:</strong> {a.notes || "N/A"}
                </p>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => updateAttendance(a._id, "Present")}
                    className="px-3 py-1 text-white bg-blue-600 rounded"
                  >
                    Present
                  </button>
                  <button
                    onClick={() => updateAttendance(a._id, "Absent")}
                    className="px-3 py-1 text-white bg-yellow-600 rounded"
                  >
                    Absent
                  </button>
                  <button
                    onClick={() => deleteAttendance(a._id)}
                    className="px-3 py-1 text-white bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= SUPPORT TAB ================= */}
      {activeTab === "support" && (
        <div className="space-y-6">
          <h2 className="mb-3 text-2xl font-bold text-indigo-700">💬 Support Tickets</h2>
          {tickets.length === 0 && <p className="text-center text-slate-500">No tickets available</p>}
          {tickets.map((t) => (
            <div key={t.tokenId} className="p-6 bg-white border shadow-md rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">
                  🎫 Ticket ID: <span className="text-indigo-600">{t.tokenId}</span>
                </h3>
                <span className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-full">{t.subject}</span>
              </div>
              <div className="grid grid-cols-1 gap-2 mb-4 lg:grid-cols-2 text-slate-700">
                <p>
                  <strong>👤 Employee:</strong> {t.employeeId || "N/A"}
                </p>
                <p>
                  <strong>📧 Email:</strong> {t.email}
                </p>
                <p className="lg:col-span-2">
                  <strong>📝 Description:</strong> {t.description}
                </p>
              </div>

              {/* Responses */}
              <div className="p-4 mb-4 border bg-slate-50 rounded-xl">
                <strong className="text-slate-700">📨 Responses:</strong>
                {!t.responses || t.responses.length === 0 ? (
                  <p className="mt-2 text-slate-500">No responses yet</p>
                ) : (
                  <div className="mt-2 space-y-2">
                    {t.responses.map((r, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl text-sm border shadow-sm ${
                          r.from === "admin" ? "bg-indigo-50 border-indigo-200" : "bg-green-50 border-green-200"
                        }`}
                      >
                        <strong>{r.from.toUpperCase()}:</strong> {r.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Reply Form */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <input
                  type="text"
                  placeholder="Type your reply..."
                  className="flex-1 p-3 border rounded-xl"
                  value={selectedTicketId === t.tokenId ? replyMessage : ""}
                  onFocus={() => setSelectedTicketId(t.tokenId)}
                  onChange={(e) => setReplyMessage(e.target.value)}
                />
                <button
                  onClick={() => sendReply(t.tokenId, replyMessage)}
                  className="px-6 py-3 mt-2 text-white bg-indigo-600 rounded-xl md:mt-0 hover:bg-indigo-700"
                >
                  Reply
                </button>
                <button
                  onClick={() => deleteTicket(t.tokenId)}
                  className="px-4 py-3 mt-2 text-white bg-red-600 rounded-xl md:mt-0 hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
