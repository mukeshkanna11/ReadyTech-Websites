import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000/api/work";

export default function AdminDashboard() {
  const [workList, setWorkList] = useState([]);
  const [formData, setFormData] = useState({
    employeeId: "",
    taskTitle: "",
    description: "",
    status: "Pending",
    deadline: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch all work entries
  const fetchAllWorks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/all`);
      if (!res.ok) throw new Error("Failed to fetch work list");
      const data = await res.json();
      setWorkList(data.works || []);
    } catch (err) {
      console.error("fetchAllWorks error:", err);
      setMessage("⚠️ Error fetching work list.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add new work
  const handleAddWork = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Work added successfully!");
        setFormData({
          employeeId: "",
          taskTitle: "",
          description: "",
          status: "Pending",
          deadline: "",
        });
        fetchAllWorks();
      } else {
        setMessage(data.message || "⚠️ Failed to add work.");
      }
    } catch (err) {
      console.error("handleAddWork error:", err);
      setMessage("❌ Error adding work.");
    }
  };

  // ✅ Update work status manually (admin can change)
  const handleUpdateStatus = async (workId, newStatus) => {
    try {
      const res = await fetch(`${API_BASE}/update/${workId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("✅ Status updated!");
        fetchAllWorks();
      } else {
        setMessage("⚠️ Failed to update status.");
      }
    } catch (err) {
      console.error("handleUpdateStatus error:", err);
      setMessage("❌ Error updating status.");
    }
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/dashboard"); // redirect to dashboard
  };

  useEffect(() => {
    fetchAllWorks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex flex-col justify-between p-6 text-white bg-indigo-700 shadow-md md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-indigo-200">
            ReadyTech Solutions Pvt. Ltd. – Work Management
          </p>
        </div>
        <div className="flex flex-col items-end space-y-2 md:space-y-0 md:flex-row md:space-x-4">
          <p className="text-sm text-indigo-200">
            Total Works: <b>{workList.length}</b>
          </p>
          <button
            onClick={handleLogout}
            className="px-4 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Add Work Form */}
      <main className="max-w-6xl p-6 mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Assign New Work
        </h2>
        <form
          onSubmit={handleAddWork}
          className="grid gap-4 p-6 bg-white border border-gray-200 shadow-sm rounded-xl md:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Employee ID (e.g. RTS112)"
            value={formData.employeeId}
            onChange={(e) =>
              setFormData({ ...formData, employeeId: e.target.value })
            }
            required
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Task Title"
            value={formData.taskTitle}
            onChange={(e) =>
              setFormData({ ...formData, taskTitle: e.target.value })
            }
            required
            className="p-2 border rounded-md"
          />
          <textarea
            placeholder="Task Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="p-2 border rounded-md md:col-span-2"
          />
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
            required
            className="p-2 border rounded-md"
          />
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="p-2 border rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 md:col-span-2"
          >
            Add Work
          </button>
        </form>

        {/* Display Work List */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            All Work Status
          </h2>

          {loading ? (
            <p className="text-gray-600">Loading work details...</p>
          ) : workList.length > 0 ? (
            <div className="space-y-4">
              {workList.map((work) => (
                <div
                  key={work._id}
                  className="flex flex-col justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl md:flex-row md:items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold text-indigo-600">
                      {work.taskTitle}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {work.description || "No description provided"}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Employee ID: <b>{work.employeeId}</b> | Deadline:{" "}
                      {work.deadline || "N/A"}
                    </p>
                    <p className="mt-1 text-sm">
                      Status:{" "}
                      <span
                        className={`font-semibold ${
                          work.status === "Completed"
                            ? "text-green-600"
                            : work.status === "Pending"
                            ? "text-yellow-600"
                            : "text-blue-600"
                        }`}
                      >
                        {work.status}
                      </span>
                    </p>
                  </div>

                  {/* Admin can change status manually */}
                  <div className="mt-3 md:mt-0">
                    <select
                      value={work.status}
                      onChange={(e) =>
                        handleUpdateStatus(work._id, e.target.value)
                      }
                      className="p-2 text-sm border rounded-md"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No work entries found.</p>
          )}
        </div>

        {/* Message Box */}
        {message && (
          <div className="p-3 mt-4 text-sm text-center text-white bg-indigo-600 rounded-lg">
            {message}
          </div>
        )}
      </main>
    </div>
  );
}
