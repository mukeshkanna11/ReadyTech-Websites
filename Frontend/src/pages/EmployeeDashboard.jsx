import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch tasks for logged-in employee
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks/my");
      setTasks(res.data);
    } catch (err) {
      console.error("FETCH TASKS ERROR:", err);
      alert("Error fetching your tasks");
    }
  };

  // ✅ Update task status
  const updateStatus = async (taskId, newStatus) => {
    try {
      const res = await API.patch(`/tasks/update/${taskId}`, {
        status: newStatus,
      });
      alert(res.data.msg);
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating task");
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/dashboard");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Employee Dashboard</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t._id}>
              <td className="p-2 border">{t.title}</td>
              <td className="p-2 border">{t.description}</td>
              <td className="p-2 border">{t.status}</td>
              <td className="p-2 border">
                {t.status !== "Completed" && (
                  <button
                    onClick={() => updateStatus(t._id, "Completed")}
                    className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
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
  );
};

export default EmployeeDashboard;
