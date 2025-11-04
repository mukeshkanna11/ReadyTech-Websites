import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch tasks for logged-in employee
  const fetchMyTasks = async () => {
    try {
      const res = await API.get("/tasks/my");
      setTasks(res.data);
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update task status
  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await API.patch(`/tasks/update/${taskId}`, { status: newStatus });
      fetchMyTasks(); // reload tasks
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating task");
    }
  };

  useEffect(() => {
    fetchMyTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
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
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="p-2 border">{task.title}</td>
                <td className="p-2 border">{task.description}</td>
                <td className="p-2 border">{task.status}</td>
                <td className="p-2 border">
                  {task.status !== "Completed" && (
                    <button
                      onClick={() => updateTaskStatus(task._id, "Completed")}
                      className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
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
  );
};

export default EmployeeDashboard;
