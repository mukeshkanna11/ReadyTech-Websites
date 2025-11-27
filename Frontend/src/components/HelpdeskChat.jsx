import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

export default function HelpdeskChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [ticketId, setTicketId] = useState(localStorage.getItem("ticketId") || null);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  // Load existing conversation when widget opens
  useEffect(() => {
    if (ticketId) fetchTicketConversation(ticketId);
  }, [ticketId]);

  // ---------------------------
  // FETCH TICKET CONVERSATION
  // ---------------------------
  const fetchTicketConversation = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/tickets/${id}`);

      if (!res.data.ticket) return;

      const mapped = res.data.ticket.responses.map((msg) => ({
        sender: msg.from,
        text: msg.text,
        time: new Date(msg.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));

      setChat(mapped);
    } catch (err) {
      console.error("Conversation load error:", err);
    }
  };

  // ---------------------------
  // CREATE TICKET IF NOT EXISTS
  // ---------------------------
  const createTicketIfNeeded = async () => {
    if (ticketId) return ticketId;

    try {
      const res = await axios.post(`${BASE_URL}/tickets/create`, {
        email: "customer@gmail.com",
        subject: "Help Request",
        description: "Customer opened Helpdesk widget.",
      });

      const newId = res.data.ticket.tokenId;

      localStorage.setItem("ticketId", newId);
      setTicketId(newId);

      fetchTicketConversation(newId);

      return newId;
    } catch (err) {
      console.error("Ticket creation failed:", err);
      return null;
    }
  };

  // ---------------------------
  // SEND USER MESSAGE
  // ---------------------------
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message;
    setMessage("");

    // Add user's bubble immediately
    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setLoading(true);
    setTyping(true);

    try {
      const id = await createTicketIfNeeded();
      if (!id) return;

      // Send message to backend
      await axios.post(`${BASE_URL}/tickets/response/${id}`, {
        from: "user",
        text: userText,
      });

      // Simulated bot reply
      setTimeout(() => {
        setTyping(false);
        const botBubble = {
          sender: "admin",
          text: "🤖 Thank you! Your message has been received. Our support team will get back within 24 hours.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setChat((prev) => [...prev, botBubble]);
        fetchTicketConversation(id); // Always sync from DB
      }, 600);
    } catch (err) {
      console.error(err);
      setTyping(false);

      setChat((prev) => [
        ...prev,
        {
          sender: "admin",
          text: "Unable to send message right now. Please try again.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }

    setLoading(false);
  };

  // UI -----------------------------------------
  return (
    <div className="fixed z-50 bottom-5 right-5">
      {/* OPEN BUTTON */}
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => {
            setOpen(true);
            createTicketIfNeeded();
          }}
          className="p-4 text-white rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className="flex flex-col w-80 h-[450px] rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-blue-600 to-indigo-600">
              <div>
                <h2 className="text-lg font-semibold">Helpdesk Support</h2>
                {ticketId && <span className="text-xs opacity-80">Ticket: {ticketId}</span>}
              </div>

              <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-white/10">
                <X size={22} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-100">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] p-2 text-sm rounded-2xl shadow ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-600 text-white rounded-br-none"
                      : "mr-auto bg-white text-gray-900 border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <div className="text-[10px] text-right opacity-70 mt-1">{msg.time}</div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-1 p-2 px-3 mr-auto bg-white border shadow rounded-xl">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 delay-150 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 delay-300 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              )}

              <div ref={chatEndRef}></div>
            </div>

            {/* Input Box */}
            <div className="flex items-center gap-2 p-3 border-t bg-white/60 backdrop-blur-md">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border shadow-sm outline-none rounded-xl"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                disabled={loading}
                onClick={sendMessage}
                className={`p-2 rounded-xl text-white shadow-md transition ${
                  loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
