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

  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // Load existing ticket conversation if exists
  useEffect(() => {
    if (ticketId) fetchTicketConversation(ticketId);
  }, [ticketId]);

  // ---------------------------
  // 1️⃣ Fetch existing conversation
  // ---------------------------
  const fetchTicketConversation = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/tickets/${id}`);

      const mappedChat = res.data.ticket.responses.map((msg) => ({
        sender: msg.from,
        text: msg.text,
        time: new Date(msg.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));

      setChat(mappedChat);
    } catch (err) {
      console.error("Failed to load conversation:", err);
    }
  };

  // ---------------------------
  // 2️⃣ Create ticket
  // ---------------------------
  const createTicketIfNeeded = async () => {
    if (ticketId) return ticketId;

    try {
      const res = await axios.post(`${BASE_URL}/tickets/create-ticket`, {
        email: "customer@gmail.com",
        message: "Hello, I need help.",
      });

      const newId = res.data.ticket.tokenId;
      localStorage.setItem("ticketId", newId);
      setTicketId(newId);

      fetchTicketConversation(newId);

      return newId;
    } catch (err) {
      console.error("Ticket creation error:", err);
      return null;
    }
  };

  // ---------------------------
  // 3️⃣ Send user message
  // ---------------------------
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message;
    setMessage("");

    // Add user bubble
    const userBubble = {
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setChat((prev) => [...prev, userBubble]);

    setLoading(true);

    try {
      const id = await createTicketIfNeeded();
      if (!id) return;

      const res = await axios.post(`${BASE_URL}/tickets/send-message`, {
        ticketId: id,
        message: userText,
      });

      // Add bot reply
      if (res.data.reply) {
        setChat((prev) => [
          ...prev,
          {
            sender: "bot",
            text: res.data.reply,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }

      // Refresh from DB
      fetchTicketConversation(id);
    } catch (err) {
      console.error("Send error:", err);

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to send message. Please try again.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed z-50 bottom-5 right-5">
      {/* Floating Button */}
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-4 text-white transition bg-blue-600 rounded-full shadow-xl hover:bg-blue-700"
          onClick={() => {
            setOpen(true);
            createTicketIfNeeded();
          }}
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="flex flex-col bg-white border border-gray-200 shadow-2xl w-80 h-96 rounded-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 text-white bg-blue-600 rounded-t-xl">
              <div>
                <h3 className="font-semibold">Helpdesk Support</h3>
                {ticketId && <p className="text-[10px] opacity-80">Ticket: {ticketId}</p>}
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* Chat list */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] p-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-500 text-white"
                      : "mr-auto bg-gray-300 text-black"
                  }`}
                >
                  {msg.text}
                  <div className="text-[10px] mt-1 text-right opacity-70">{msg.time}</div>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input box */}
            <div className="flex items-center p-3 space-x-2 border-t">
              <input
                type="text"
                className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button
                className={`p-2 rounded-lg text-white ${
                  loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={sendMessage}
                disabled={loading}
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
