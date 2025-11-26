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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  useEffect(() => {
    if (ticketId) fetchTicketConversation(ticketId);
  }, [ticketId]);

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

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message;
    setMessage("");

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
    setTyping(true);

    try {
      const id = await createTicketIfNeeded();
      if (!id) return;

      const res = await axios.post(`${BASE_URL}/tickets/send-message`, {
        ticketId: id,
        message: userText,
      });

      setTimeout(() => {
        setTyping(false);

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

        fetchTicketConversation(id);
      }, 600);
    } catch (err) {
      setTyping(false);

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
      {/* Floating Chat Button */}
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-4 text-white transition rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-300 hover:scale-110"
          onClick={() => {
            setOpen(true);
            createTicketIfNeeded();
          }}
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      {/* Chatbox Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="backdrop-blur-xl bg-white/80 border border-white/30 shadow-2xl w-80 h-[420px] rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-blue-600 to-indigo-600">
              <div>
                <h2 className="text-lg font-semibold">Helpdesk Support</h2>
                {ticketId && (
                  <span className="text-[10px] opacity-80">Ticket: {ticketId}</span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-white/10"
              >
                <X size={22} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-100">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] p-2 text-sm rounded-2xl shadow
                    ${
                      msg.sender === "user"
                        ? "ml-auto bg-blue-600 text-white rounded-br-none"
                        : "mr-auto bg-white text-gray-900 border rounded-bl-none"
                    }`}
                >
                  {msg.text}
                  <div className="text-[10px] text-right opacity-70 mt-1">
                    {msg.time}
                  </div>
                </div>
              ))}

              {/* Bot typing animation */}
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
            <div className="flex items-center gap-2 p-3 border-t bg-white/60 backdrop-blur-md">
              <input
                type="text"
                className="flex-1 px-3 py-2 text-sm border shadow-sm outline-none rounded-xl"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button
                className={`p-2 rounded-xl text-white shadow-md transition 
                  ${
                    loading
                      ? "bg-gray-400"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
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
