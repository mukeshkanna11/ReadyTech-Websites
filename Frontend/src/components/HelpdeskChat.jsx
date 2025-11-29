// src/components/HelpdeskChat.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

const SHARED_TICKET_ID = "helpdesk_shared";

export default function HelpdeskChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [ticketId] = useState(SHARED_TICKET_ID);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  // Initialize ticket on load
  useEffect(() => {
    initializeTicketAndLoad();
  }, []);

  // ================================
  // Ensure Ticket Exists
  // ================================
  const initializeTicketAndLoad = async () => {
    try {
      await axios.post(`${BASE_URL}/tickets/create-ticket`, {
        email: "guest@auto.com",
        text: "Chat started",
        tokenId: ticketId,
      });
      fetchConversation();
    } catch {
      // Ticket already exists → just fetch
      fetchConversation();
    }
  };

  // ================================
  // Fetch Conversation
  // ================================
  const fetchConversation = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/tickets/ticket/${ticketId}`);
      if (res.data.ticket) {
        const messages = res.data.ticket.responses.map((msg) => ({
          sender: msg.from === "user" ? "user" : "admin",
          text: msg.text,
          time: new Date(msg.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));
        setChat(messages);
      }
    } catch (err) {
      console.error("❌ Failed to fetch ticket:", err);
    }
  };

  // ================================
  // Detect Email
  // ================================
  const detectEmail = (text) => {
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    return emailRegex.test(text);
  };

  // ================================
  // Send Message
  // ================================
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message;
    setMessage("");

    // Show user message immediately
    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setLoading(true);
    setTyping(true);

    try {
      // Save message to ticket
      await axios.post(`${BASE_URL}/tickets/response/${ticketId}`, {
        from: "user",
        text: userText,
      });

      // If user sends an email → notify backend
      if (detectEmail(userText)) {
        await axios.post(`${BASE_URL}/contact/helpdesk-email`, {
          name: "Guest", // REQUIRED by backend
          email: userText,
          message: "User shared contact email through Helpdesk Chat.",
        });

        setTimeout(() => {
          setTyping(false);
          setChat((prev) => [
            ...prev,
            {
              sender: "admin",
              text: "📩 Thanks! We received your email. Our support team will contact you soon.",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ]);
        }, 700);
      } else {
        // Normal bot reply
        setTimeout(() => {
          setTyping(false);
          setChat((prev) => [
            ...prev,
            {
              sender: "admin",
              text: "🤖 Please share your email so our support team can assist you.",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ]);
        }, 700);
      }
    } catch (err) {
      console.error("❌ Sending failed:", err);
      setTyping(false);
      setChat((prev) => [
        ...prev,
        {
          sender: "admin",
          text: "⚠️ Unable to send message. Please try again.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }

    setLoading(false);
  };

  // ================================
  // Render Chat UI
  // ================================
  return (
    <div className="fixed z-50 bottom-5 right-5">
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setOpen(true)}
          className="p-4 text-white rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

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
                <span className="text-xs opacity-80">Ticket ID: {ticketId}</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-white/10">
                <X size={22} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-100">
              {chat.map((msg, idx) => (
                <div
                  key={idx}
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

            {/* Input */}
            <div className="flex items-center gap-2 p-3 text-black border-t bg-white/60 backdrop-blur-md">
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
