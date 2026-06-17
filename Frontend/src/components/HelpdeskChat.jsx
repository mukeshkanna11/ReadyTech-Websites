// src/components/HelpdeskChat.jsx

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Send,
  X,
  HeadphonesIcon,
} from "lucide-react";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://readytech-websites.onrender.com/api";

export default function HelpdeskChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [emailCollected, setEmailCollected] = useState(false);
  const chatEndRef = useRef(null);

  const [ticketId] = useState(() => {
    const existing = localStorage.getItem("helpdesk_ticket");

    if (existing) return existing;

    const newId = `ticket_${Date.now()}`;
    localStorage.setItem("helpdesk_ticket", newId);

    return newId;
  });

  useEffect(() => {
    initializeTicket();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, typing]);

  const detectEmail = (text) => {
    const emailRegex =
      /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

    return emailRegex.test(text);
  };

 const initializeTicket = async () => {
  try {
    await axios.post(
      `${BASE_URL}/tickets/create-ticket`,
      {
        email: "guest@readytech.com",
        text: "Chat Started",
        tokenId: ticketId,
      }
    );

    await loadConversation();
  } catch (error) {
    console.error(error);
  }

  setTimeout(() => {
    setChat((prev) =>
      prev.length
        ? prev
        : [
            {
              sender: "admin",
              text:
                "👋 Welcome to ReadyTech Support.\n\nTell us about your requirement and share your email address.",
              time: getTime(),
            },
          ]
    );
  }, 300);
};

  const loadConversation = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/tickets/ticket/${ticketId}`
    );

    if (res.data?.ticket) {
      const messages = res.data.ticket.responses.map((msg) => ({
        sender: msg.from === "user" ? "user" : "admin",
        text: msg.text,
        time: msg.createdAt
          ? new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : getTime(),
      }));

      setChat(messages);
    }
  } catch (err) {
    if (err.response?.status === 404) {
      console.log("Ticket doesn't exist yet. Waiting for first message.");
      return;
    }

    console.error(err);
  }
};

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sendMessage = async () => {
  if (!message.trim() || loading) return;

  const text = message.trim();

  setMessage("");

  // Show user message instantly
  setChat((prev) => [
    ...prev,
    {
      sender: "user",
      text,
      time: getTime(),
    },
  ]);

  setLoading(true);
  setTyping(true);

  try {
    console.log("BASE_URL:", BASE_URL);
    console.log("Ticket ID:", ticketId);

    // Create ticket or add response
    if (chat.length <= 1) {
      console.log("Creating Ticket...");

      await axios.post(
        `${BASE_URL}/tickets/create-ticket`,
        {
          email: "guest@readytech.com",
          text,
          tokenId: ticketId,
        }
      );
    } else {
      console.log("Adding Response...");

      await axios.post(
        `${BASE_URL}/tickets/response/${ticketId}`,
        {
          from: "user",
          text,
        }
      );
    }

    let reply = "";

    // Email detected
    if (detectEmail(text) && !emailCollected) {
      setEmailCollected(true);

      try {
        console.log("Sending Helpdesk Email...");

        const emailRes = await axios.post(
          `${BASE_URL}/contact/helpdesk-email`,
          {
            name: "Website Visitor",
            email: text,
            message:
              "Customer shared their email through Helpdesk Chat.",
          }
        );

        console.log(
          "Helpdesk Email Success:",
          emailRes.data
        );

        reply =
          "✅ Thank you! We have received your email address.\n\nOur team will contact you within 24 hours.";
      } catch (mailError) {
        console.error(
          "EMAIL ERROR:",
          mailError.response?.data ||
            mailError.message
        );

        reply =
          "⚠️ Your email was received, but we couldn't notify support right now.";
      }
    }
    // Email not provided yet
    else if (!emailCollected) {
      reply =
        "📩 Please share your email address so our team can contact you within 24 hours.";
    }
    // Normal conversation after email
    else {
      reply =
        "✅ Your message has been received.\n\nOur support team will review it and get back to you shortly.";
    }

    setTyping(false);

    setChat((prev) => [
      ...prev,
      {
        sender: "admin",
        text: reply,
        time: getTime(),
      },
    ]);

    if (!open) {
      setUnread((prev) => prev + 1);
    }
  } catch (error) {
    console.error("SEND MESSAGE ERROR:", error);

    console.log(
      "STATUS:",
      error.response?.status
    );

    console.log(
      "DATA:",
      error.response?.data
    );

    setTyping(false);

    setChat((prev) => [
      ...prev,
      {
        sender: "admin",
        text:
          "⚠️ Unable to send your message right now. Please try again in a few moments.",
        time: getTime(),
      },
    ]);
  } finally {
    setLoading(false);
  }
};

  const openChat = () => {
    setOpen(true);
    setUnread(0);
  };

  return (
    <div className="fixed z-[9999] bottom-6 right-6">

      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={openChat}
          className="relative flex items-center justify-center w-16 h-16 text-white shadow-2xl rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
        >
          <MessageCircle size={30} />

          {unread > 0 && (
            <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold bg-red-500 rounded-full -top-2 -right-2">
              {unread}
            </div>
          )}
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            className="
             w-[95vw]
max-w-[420px]
h-[80vh]
max-h-[650px]
              overflow-hidden
              rounded-3xl
              border
              border-white/20
              bg-white/80
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.2)]
              flex
              flex-col
            "
          >
            {/* Header */}

            <div className="p-5 text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">

                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl">
                      <HeadphonesIcon size={24} />
                    </div>

                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      ReadyTech Support
                    </h3>

                    <p className="text-xs text-white/80">
  Online • Support available 24/7
</p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}

            <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
              <div className="space-y-4">

                {chat.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[80%]
                        px-4
                        py-3
                        rounded-2xl
                        text-sm
                        shadow-md
                        ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-md"
                            : "bg-white text-gray-800 border rounded-bl-md"
                        }
                      `}
                    >
                      <p>{msg.text}</p>

                      <div
                        className={`text-[10px] mt-2 ${
                          msg.sender === "user"
                            ? "text-white/70"
                            : "text-gray-400"
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="flex">
                    <div className="px-4 py-3 bg-white border rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 delay-150 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 delay-300 bg-gray-400 rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Footer */}

            <div className="p-4 bg-white border-t">
              <div className="flex gap-2 text-black">
                <input
                  type="text"
                  value={message}
                  placeholder="Tell us how we can help..."
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    sendMessage()
                  }
                  className="flex-1 px-4 py-3 text-sm border outline-none rounded-2xl focus:ring-2 focus:ring-blue-500"
                />

                <button
                  disabled={loading}
                  onClick={sendMessage}
                  className="flex items-center justify-center w-12 h-12 text-white transition rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}