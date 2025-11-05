import React, { useState, useEffect } from "react";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [works, setWorks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [form, setForm] = useState({
    employeeId: "",
    taskTitle: "",
    description: "",
    status: "In Progress",
    deadline: "",
  });
  
  const [attendanceForm, setAttendanceForm] = useState({
    employeeId: "",
    date: "",
    status: "Present",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  // ============================
  // 🧩 WORK MANAGEMENT
  // ============================

  const fetchAllWorks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/work/all`);
      const data = await res.json();
      if (data.success) setWorks(data.works);
    } catch (err) {
      console.error("fetchAllWorks error:", err);
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
        alert("✅ Work Added Successfully");
        fetchAllWorks();
        setForm({
          employeeId: "",
          taskTitle: "",
          description: "",
          status: "In Progress",
          deadline: "",
        });
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
      const res = await fetch(`${BASE_URL}/work/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert("🗑️ Work Deleted");
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
        alert("✅ Attendance Marked");
        fetchAttendance();
        setAttendanceForm({ employeeId: "", date: "", status: "Present", notes: "" });
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
        alert("🗑️ Attendance Deleted");
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
  // 🧱 UI SECTIONS
  // ============================

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-center text-indigo-600">
        ReadyTech Admin Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-l-lg ${activeTab === "work" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("work")}
        >
          Work Management
        </button>
        <button
          className={`px-6 py-2 rounded-r-lg ${activeTab === "attendance" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance
        </button>
      </div>

      {activeTab === "work" ? (
        <>
          {/* Add Work Form */}
          <div className="max-w-2xl p-6 mx-auto mb-8 bg-white shadow rounded-xl">
            <h2 className="mb-4 text-xl font-semibold">Add Work</h2>
            <div className="grid grid-cols-2 gap-4">
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
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="col-span-2 p-2 border rounded"
              />
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="p-2 border rounded"
              />
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="p-2 border rounded"
              >
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
            </div>
            <button
              onClick={addWork}
              className="px-6 py-2 mt-4 text-white bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Add Work
            </button>
          </div>

          {/* Work Table */}
          <div className="p-6 overflow-x-auto bg-white shadow rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">Work List</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Employee ID</th>
                    <th className="p-2">Task</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Deadline</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((w) => (
                    <tr key={w._id} className="border-t">
                      <td className="p-2">{w.employeeId}</td>
                      <td className="p-2">{w.taskTitle}</td>
                      <td className="p-2">{w.status}</td>
                      <td className="p-2">{w.deadline}</td>
                      <td className="flex gap-2 p-2">
                        <button
                          onClick={() => updateWorkStatus(w._id, "Completed")}
                          className="px-3 py-1 text-white bg-green-500 rounded"
                        >
                          Complete
                        </button>
                        <button
                          onClick={() => deleteWork(w._id)}
                          className="px-3 py-1 text-white bg-red-500 rounded"
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
          {/* Attendance Form */}
          <div className="max-w-2xl p-6 mx-auto mb-8 bg-white shadow rounded-xl">
            <h2 className="mb-4 text-xl font-semibold">Mark Attendance</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Employee ID"
                value={attendanceForm.employeeId}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, employeeId: e.target.value })}
                className="p-2 border rounded"
              />
              <input
                type="date"
                value={attendanceForm.date}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, date: e.target.value })}
                className="p-2 border rounded"
              />
              <select
                value={attendanceForm.status}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, status: e.target.value })}
                className="p-2 border rounded"
              >
                <option>Present</option>
                <option>Absent</option>
                <option>On Leave</option>
              </select>
              <input
                type="text"
                placeholder="Notes"
                value={attendanceForm.notes}
                onChange={(e) => setAttendanceForm({ ...attendanceForm, notes: e.target.value })}
                className="p-2 border rounded"
              />
            </div>
            <button
              onClick={markAttendance}
              className="px-6 py-2 mt-4 text-white bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Mark Attendance
            </button>
          </div>

          {/* Attendance Table */}
          <div className="p-6 overflow-x-auto bg-white shadow rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">Attendance Records</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Employee ID</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Notes</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((a) => (
                    <tr key={a._id} className="border-t">
                      <td className="p-2">{a.employeeId}</td>
                      <td className="p-2">{a.date}</td>
                      <td className="p-2">{a.status}</td>
                      <td className="p-2">{a.notes}</td>
                      <td className="flex gap-2 p-2">
                        <button
                          onClick={() => updateAttendance(a._id, "Present")}
                          className="px-3 py-1 text-white bg-green-500 rounded"
                        >
                          Mark Present
                        </button>
                        <button
                          onClick={() => deleteAttendance(a._id)}
                          className="px-3 py-1 text-white bg-red-500 rounded"
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
