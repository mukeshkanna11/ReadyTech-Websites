import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/**
 * AdminDashboard.jsx
 * Fully-upgraded admin dashboard component.
 *
 * Notes:
 * - Expects backend endpoints:
 *   GET  ${API_BASE}/all           -> { works: [...] }
 *   POST ${API_BASE}/add           -> create work
 *   PATCH ${API_BASE}/update/:id   -> { success: true, work: {...} }
 *
 * - Use env var REACT_APP_API_BASE to avoid hardcoding.
 */

// Constants
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/work";

const PAGE_SIZE_OPTIONS = [5, 10, 20];
const STATUS_COLORS = {
  Pending: { bg: "bg-yellow-100", text: "text-yellow-600" },
  "In Progress": { bg: "bg-blue-100", text: "text-blue-600" },
  Completed: { bg: "bg-green-100", text: "text-green-600" },
};

// Small utility: export CSV
const exportToCSV = (rows, filename = "work-export.csv") => {
  if (!rows || rows.length === 0) {
    toast.error("No data to export");
    return;
  }
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map((r) =>
      headers
        .map((h) => {
          const val = r[h] ?? "";
          // escape quotes
          return `"${String(val).replace(/"/g, '""')}"`;
        })
        .join(",")
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Simple modal component (self-contained)
function Modal({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto bg-black/40"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Close
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Auth guard: ensure admin only
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRaw = localStorage.getItem("user");
    let user = null;
    try {
      user = userRaw ? JSON.parse(userRaw) : null;
    } catch (err) {
      user = null;
    }
    if (!token || user?.role !== "admin") {
      toast.error("Unauthorized — please login as admin");
      setTimeout(() => navigate("/login"), 900);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [workList, setWorkList] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI state
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openAddModal, setOpenAddModal] = useState(false);

  // Pagination
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  // Add form state
  const initialForm = {
    employeeId: "",
    taskTitle: "",
    description: "",
    status: "Pending",
    deadline: "",
  };
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  // Fetch all works
  const fetchAllWorks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/all`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setWorkList(Array.isArray(data.works) ? data.works : []);
    } catch (err) {
      console.error("fetchAllWorks error:", err);
      toast.error("Failed to fetch works");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllWorks();
    // load dark mode preference
    const pref = localStorage.getItem("rt_dark") === "1";
    setDarkMode(pref);
  }, []);

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("rt_dark", darkMode ? "1" : "0");
  }, [darkMode]);

  // Derived data: filtered/sorted list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let data = [...workList];

    if (statusFilter !== "All") {
      data = data.filter((w) => w.status === statusFilter);
    }
    if (q) {
      data = data.filter(
        (w) =>
          String(w.employeeId || "").toLowerCase().includes(q) ||
          String(w.taskTitle || "").toLowerCase().includes(q) ||
          String(w.description || "").toLowerCase().includes(q)
      );
    }
    // sort by createdAt (descending) if present else by title
    data.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return (a.taskTitle || "").localeCompare(b.taskTitle || "");
    });
    return data;
  }, [workList, query, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount, page]);

  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  // Counts for dashboard cards & chart
  const total = workList.length;
  const cPending = workList.filter((w) => w.status === "Pending").length;
  const cProgress = workList.filter((w) => w.status === "In Progress").length;
  const cCompleted = workList.filter((w) => w.status === "Completed").length;

  const chartData = [
    { name: "Pending", value: cPending },
    { name: "In Progress", value: cProgress },
    { name: "Completed", value: cCompleted },
  ];
  const chartColors = ["#f59e0b", "#3b82f6", "#16a34a"];

  // Add work handler (modal form)
  const handleAddWork = async (e) => {
    e?.preventDefault();
    // basic validation
    if (!form.employeeId || !form.taskTitle || !form.deadline) {
      toast.error("Please fill required fields");
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch(`${API_BASE}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Work added");
        setForm(initialForm);
        setOpenAddModal(false);
        await fetchAllWorks();
      } else {
        toast.error(data?.message || "Failed to add work");
      }
    } catch (err) {
      console.error("addWork error:", err);
      toast.error("Error adding work");
    } finally {
      setSubmitting(false);
    }
  };

  // Update status inline
  const handleUpdateStatus = async (workId, newStatus) => {
    // Optimistic update
    const previous = [...workList];
    setWorkList((wl) =>
      wl.map((w) => (w._id === workId ? { ...w, status: newStatus } : w))
    );

    try {
      const res = await fetch(`${API_BASE}/update/${workId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Update failed");
      }
      toast.success("Status updated");
    } catch (err) {
      console.error("handleUpdateStatus error:", err);
      toast.error("Failed to update status — reverting");
      setWorkList(previous);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out");
    setTimeout(() => navigate("/dashboard"), 700);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />

      {/* Header */}
      <header className="flex flex-col items-start justify-between p-6 text-white shadow-md bg-gradient-to-r from-indigo-600 to-indigo-500 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-indigo-100">
            ReadyTech Solutions — Work Management
          </p>
        </div>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <div className="flex items-center gap-2 p-2 rounded-md bg-white/10">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 text-sm rounded-md hover:bg-white/20"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <div className="hidden text-sm text-indigo-100 md:block">
            Total Works: <b className="ml-2">{total}</b>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium bg-red-500 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl p-6 mx-auto">
        {/* Top controls */}
        <section className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center w-full gap-3">
            <input
              type="search"
              placeholder="Search employee ID, title or description..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              className="w-full p-2 border rounded-md bg-white/90 dark:bg-gray-800 dark:border-gray-700"
            />

            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="p-2 text-sm border rounded-md bg-white/90 dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <button
              onClick={() => setOpenAddModal(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
            >
              + Add Work
            </button>

            <button
              onClick={() =>
                exportToCSV(
                  workList.map((w) => ({
                    id: w._id,
                    employeeId: w.employeeId,
                    title: w.taskTitle,
                    description: w.description,
                    status: w.status,
                    deadline: w.deadline,
                    createdAt: w.createdAt,
                  })),
                  "works.csv"
                )
              }
              className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Export CSV
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm">Rows</label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="p-2 text-sm border rounded-md bg-white/90 dark:bg-gray-800"
            >
              {PAGE_SIZE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Dashboard cards + chart */}
        <section className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          <div className="p-4 bg-white shadow-sm rounded-xl dark:bg-gray-800">
            <h3 className="text-sm text-gray-500">Total Tasks</h3>
            <p className="text-3xl font-bold text-indigo-600">{total}</p>
            <p className="mt-2 text-sm text-gray-500">All tasks in system</p>
          </div>

          <div className="p-4 bg-white shadow-sm rounded-xl dark:bg-gray-800">
            <h3 className="text-sm text-gray-500">Status Overview</h3>
            <div className="flex items-center gap-4 mt-3">
              <div>
                <p className="text-lg font-semibold text-yellow-600">{cPending}</p>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-blue-600">{cProgress}</p>
                <p className="text-xs text-gray-500">In Progress</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-green-600">{cCompleted}</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white shadow-sm rounded-xl dark:bg-gray-800">
            <h3 className="text-sm text-gray-500">Status Chart</h3>
            <div className="w-full h-40 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={30}
                    outerRadius={60}
                    paddingAngle={2}
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={chartColors[index % chartColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Work table */}
        <section className="mt-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-200">
            All Work Status
          </h2>

          {loading ? (
            <div className="p-6 bg-white shadow-sm rounded-xl dark:bg-gray-800">
              <p className="text-gray-600">Loading tasks...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-6 bg-white shadow-sm rounded-xl dark:bg-gray-800">
              <p className="text-gray-600">No work entries found.</p>
            </div>
          ) : (
            <div className="overflow-hidden bg-white shadow-sm rounded-xl dark:bg-gray-800">
              <table className="min-w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="p-3 text-xs font-medium text-gray-500">Employee</th>
                    <th className="p-3 text-xs font-medium text-gray-500">Title</th>
                    <th className="p-3 text-xs font-medium text-gray-500">Description</th>
                    <th className="p-3 text-xs font-medium text-gray-500">Deadline</th>
                    <th className="p-3 text-xs font-medium text-gray-500">Status</th>
                    <th className="p-3 text-xs font-medium text-center text-gray-500">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {visible.map((w) => (
                    <tr key={w._id} className="border-b last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-900">
                      <td className="p-3 align-top">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {w.employeeId || "—"}
                        </div>
                        <div className="text-xs text-gray-400">{w.createdAt ? new Date(w.createdAt).toLocaleString() : ""}</div>
                      </td>

                      <td className="p-3 align-top">
                        <div className="text-sm font-semibold text-indigo-600">{w.taskTitle}</div>
                      </td>

                      <td className="p-3 align-top">
                        <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {w.description || "No description"}
                        </div>
                      </td>

                      <td className="p-3 align-top">
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {w.deadline || "N/A"}
                        </div>
                      </td>

                      <td className="p-3 align-top">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            STATUS_COLORS[w.status]?.bg || "bg-gray-100"
                          } ${STATUS_COLORS[w.status]?.text || "text-gray-600"}`}
                        >
                          {w.status || "Unknown"}
                        </span>
                      </td>

                      <td className="p-3 text-center align-top">
                        <select
                          value={w.status}
                          onChange={(e) => handleUpdateStatus(w._id, e.target.value)}
                          className="p-2 text-sm border rounded-md bg-white/90 dark:bg-gray-700"
                        >
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Showing <b>{(page - 1) * pageSize + 1}</b> -
                  <b>{Math.min(page * pageSize, filtered.length)}</b> of <b>{filtered.length}</b>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1 text-sm bg-white border rounded disabled:opacity-50 dark:bg-gray-800"
                  >
                    Prev
                  </button>
                  <div className="px-3 py-1 text-sm bg-white border rounded dark:bg-gray-800">
                    Page {page} / {pageCount}
                  </div>
                  <button
                    onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                    disabled={page === pageCount}
                    className="px-3 py-1 text-sm bg-white border rounded disabled:opacity-50 dark:bg-gray-800"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Add Work Modal */}
      <Modal open={openAddModal} onClose={() => setOpenAddModal(false)} title="Assign New Work">
        <form onSubmit={handleAddWork} className="space-y-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input
              type="text"
              placeholder="Employee ID (e.g. RTS112)"
              value={form.employeeId}
              onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
              required
              className="p-2 border rounded-md bg-white/90 dark:bg-gray-700"
            />
            <input
              type="text"
              placeholder="Task Title"
              value={form.taskTitle}
              onChange={(e) => setForm({ ...form, taskTitle: e.target.value })}
              required
              className="p-2 border rounded-md bg-white/90 dark:bg-gray-700"
            />
          </div>

          <textarea
            placeholder="Task Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-2 border rounded-md bg-white/90 dark:bg-gray-700"
            rows={4}
          />

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input
              type="date"
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              required
              className="p-2 border rounded-md bg-white/90 dark:bg-gray-700"
            />
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="p-2 border rounded-md bg-white/90 dark:bg-gray-700"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setOpenAddModal(false)}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700 disabled:opacity-60"
            >
              {submitting ? "Saving..." : "Add Work"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
