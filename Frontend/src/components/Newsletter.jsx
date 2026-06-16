import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiMail, FiCheckCircle } from "react-icons/fi";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const getApiUrl = () => {
    return import.meta.env.MODE === "development"
      ? "http://localhost:5000/api/subscribe"
      : "https://readytech-websites.onrender.com/api/subscribe";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", msg: "Enter valid email" });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await axios.post(getApiUrl(), { email });

      setStatus({
        type: "success",
        msg: res.data.msg || "Welcome aboard 🚀",
      });

      setEmail("");
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex items-center justify-center px-4 py-20 overflow-hidden bg-[#070A12]">

      {/* Soft ambient glow (reduced intensity for premium feel) */}
      <div className="absolute w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-[140px] top-[-120px] left-[-120px]" />
      <div className="absolute w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[140px] bottom-[-140px] right-[-120px]" />

      {/* Floating container (no heavy box feel) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full max-w-2xl px-8 py-10 text-center
                   bg-white/5 backdrop-blur-xl
                   border border-white/10
                   rounded-2xl shadow-[0_0_80px_-20px_rgba(99,102,241,0.3)]"
      >

        {/* Small premium badge */}
        <div className="inline-flex items-center px-3 py-1 mb-3 text-[11px] tracking-wide text-indigo-300 border rounded-full bg-white/5 border-white/10">
          ✦ Weekly Growth Insights
        </div>

        {/* Heading (tighter + premium spacing) */}
        <h2 className="text-3xl font-semibold leading-snug text-white">
          Get insights that help you grow faster
        </h2>

        {/* Sub text (lighter, airy feel) */}
        <p className="max-w-lg mx-auto mt-3 text-sm leading-relaxed text-gray-400">
          Join developers and founders receiving curated ideas, product strategies,
          and modern growth breakdowns every week.
        </p>

        {/* Form (compact & premium spacing) */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 mt-6 sm:flex-row sm:justify-center"
        >

          {/* Input */}
          <div className="relative w-full sm:w-72">
            <FiMail className="absolute text-gray-500 left-4 top-3.5" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full py-3 pr-4 text-white transition border outline-none pl-11 bg-white/5 border-white/10 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Button (more compact premium style) */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 text-sm font-medium text-white
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       rounded-xl shadow-lg
                       hover:scale-[1.03] transition
                       disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Free"}
          </button>
        </form>

        {/* Status */}
        {status && (
          <div
            className={`mt-4 text-xs flex items-center justify-center gap-2 ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.type === "success" && <FiCheckCircle />}
            {status.msg}
          </div>
        )}

        {/* Footer micro text */}
        <p className="mt-6 text-[11px] text-gray-500">
          No spam. Only high-signal content. Cancel anytime.
        </p>
      </motion.div>
    </section>
  );
}