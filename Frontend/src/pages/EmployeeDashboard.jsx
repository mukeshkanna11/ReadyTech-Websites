import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000/api/work";

export default function EmployeeDashboard() {
  const [employeeId, setEmployeeId] = useState("RTS112");
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch work for the logged-in employee
  const fetchEmployeeWork = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/employee/${employeeId}`);
      if (!res.ok) throw new Error("Failed to fetch employee work");
      const data = await res.json();
      // handle array or object response
      setWorks(Array.isArray(data) ? data : data.works || []);
    } catch (err) {
      console.error("fetchEmployeeWork error:", err);
      setMessage("Error fetching work updates.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update work status
  const updateWorkStatus = async (workId, newStatus) => {
    try {
      const res = await fetch(`${API_BASE}/update/${workId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const json = await res.json();
      if (json.success) {
        setMessage("✅ Status updated successfully!");
        fetchEmployeeWork();
      } else {
        setMessage("⚠️ Failed to update status.");
      }
    } catch (err) {
      console.error("updateWorkStatus error:", err);
      setMessage("Error updating status.");
    }
  };

  useEffect(() => {
    fetchEmployeeWork();
  }, [employeeId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6 text-white bg-indigo-700 shadow-md">
        <h1 className="text-xl font-bold">Employee Dashboard</h1>
        <div>
          <p className="text-sm">
            Employee ID: <b>{employeeId}</b>
          </p>
          <button
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("employeeId");
    navigate("/dashboard"); // ✅ Will go to role-selection / login
  }}
  className="px-3 py-1 mt-2 text-sm bg-red-500 rounded hover:bg-red-600"
>
  Logout
</button>

        </div>
      </header>

      <main className="max-w-5xl p-6 mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Your Assigned Work
        </h2>

        {loading ? (
          <p className="text-gray-600">Loading work details...</p>
        ) : works.length > 0 ? (
          <div className="space-y-4">
            {works.map((work) => (
              <div
                key={work._id}
                className="p-4 bg-white border border-gray-200 shadow-sm rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-600">
                      {work.taskTitle}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {work.description || "No description provided"}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Deadline: {work.deadline || "N/A"}
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

                  {work.status !== "Completed" && (
                    <button
                      onClick={() => updateWorkStatus(work._id, "Completed")}
                      className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                    >
                      Mark Completed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No assigned work yet.</p>
        )}

        {message && (
          <div className="p-3 mt-4 text-sm text-center text-white bg-indigo-600 rounded-lg">
            {message}
          </div>
        )}
      </main>
    </div>
  );
}
