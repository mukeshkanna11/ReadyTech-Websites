// frontend/src/components/AdminTickets.jsx
import React, { useEffect, useState } from "react";
import client, { adminHeaders } from "../api/client";

export default function AdminTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await client.get("/api/tickets");
      setTickets(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch tickets");
    } finally {
      setLoading(false);
    }
  };

  const viewTicket = (t) => {
    setSelected(t);
    setStatus(t.status);
    setResponseText("");
  };

  const patchTicket = async () => {
    if (!selected) return;
    try {
      const body = { status };
      if (responseText.trim()) {
        body.response = { from: "agent", text: responseText.trim() };
      }
      // include apiKey in header
      await client.patch(`/api/tickets/${selected.tokenId}`, body, { headers: adminHeaders() });
      alert("Ticket updated");
      setSelected(null);
      fetchTickets();
    } catch (err) {
      console.error(err);
      alert("Failed to update ticket. Check API_KEY or server logs.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-semibold">Admin — Tickets</h2>
      <div className="flex gap-4">
        <div className="w-1/3 border rounded p-2 max-h-[60vh] overflow-y-auto">
          {loading && <div>Loading...</div>}
          {!loading && tickets.length === 0 && <div>No tickets</div>}
          {tickets.map((t) => (
            <div key={t.tokenId} className="p-2 border-b cursor-pointer" onClick={() => viewTicket(t)}>
              <div className="font-medium">#{t.tokenId}</div>
              <div className="text-xs text-gray-500 truncate">{t.message}</div>
              <div className="mt-1 text-xs">{t.status}</div>
            </div>
          ))}
        </div>

        <div className="flex-1 p-4 border rounded">
          {!selected && <div>Select a ticket to view details</div>}
          {selected && (
            <>
              <div className="mb-2">
                <div className="font-medium">#{selected.tokenId}</div>
                <div className="text-sm text-gray-700">{selected.message}</div>
                <div className="mt-1 text-xs text-gray-500">Created: {new Date(selected.createdAt).toLocaleString()}</div>
              </div>

              <div className="mb-3">
                <label className="block text-xs">Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="px-2 py-1 border rounded">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                  <option>Closed</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-xs">Add response (agent)</label>
                <textarea value={responseText} onChange={(e) => setResponseText(e.target.value)} rows={4} className="w-full px-2 py-1 text-sm border rounded" />
              </div>

              <div className="flex gap-2">
                <button onClick={patchTicket} className="px-3 py-2 text-white bg-blue-600 rounded">Update Ticket</button>
                <button onClick={() => { setSelected(null); setResponseText(""); }} className="px-3 py-2 border rounded">Close</button>
              </div>

              <div className="mt-4">
                <h4 className="mb-2 font-medium">Responses</h4>
                <div className="space-y-2 text-sm">
                  {(selected.responses || []).map((r, i) => (
                    <div key={i} className={`p-2 rounded ${r.from === "agent" ? "bg-yellow-50" : "bg-gray-100"}`}>
                      <div className="text-xs text-gray-500">{r.from} • {new Date(r.createdAt).toLocaleString()}</div>
                      <div className="mt-1">{r.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
