import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    employee: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks/all");
      setTasks(res.data);
    } catch (err) {
      console.error("FETCH TASKS ERROR:", err);
      alert("Error fetching tasks");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add task
  const addTask = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/tasks/add", newTask);
      alert(res.data.msg);
      setNewTask({ title: "", description: "", employee: "" });
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.msg || "Error adding task");
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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="p-2 mr-2 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="p-2 mr-2 border rounded"
        />
        <input
          type="text"
          placeholder="Employee ID (Mongo _id)"
          value={newTask.employee}
          onChange={(e) =>
            setNewTask({ ...newTask, employee: e.target.value })
          }
          className="p-2 mr-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>

      {/* Task Table */}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Employee</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t._id}>
              <td className="p-2 border">{t.title}</td>
              <td className="p-2 border">{t.employee?.name || "N/A"}</td>
              <td className="p-2 border">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
