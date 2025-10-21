import React, { useState } from "react";
import axios from "axios";
import NewsletterBG from "../assets/images/new.jpg"; // Adjust path if needed

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim()) {
      setResponseMsg({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await axios.post(
        "https://readytech-websites.onrender.com/api/contact/subscribe",
        { email },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000, // safety timeout (10s)
        }
      );

      // Assuming backend returns { msg: "Subscribed successfully" }
      setResponseMsg({ type: "success", text: res.data.msg || "Subscription successful!" });
      setEmail("");
    } catch (err) {
      console.error("Subscription Error:", err);
      let message =
        err.response?.data?.msg ||
        (err.response?.status === 500
          ? "Server error — please try again later."
          : "Subscription failed. Please check your connection.");
      setResponseMsg({ type: "error", text: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative py-16 text-center bg-center bg-cover rounded-3xl"
      style={{ backgroundImage: `url(${NewsletterBG})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 rounded-3xl -z-10"></div>

      <div className="relative px-6 sm:px-10">
        {/* Section Title */}
        <h3 className="mb-2 font-semibold tracking-widest text-yellow-400 uppercase">
          Newsletter
        </h3>

        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Let’s Build Your Next Digital Success Story 🚀
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-2 text-gray-200">
          Join our community of growing brands — get insights, updates, and strategies
          to help you lead in the digital world.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2 mt-6 sm:flex-row sm:gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-64 px-4 py-2 text-gray-800 rounded-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {/* Response Message */}
        {responseMsg && (
          <p
            className={`mt-3 text-sm font-semibold transition-all ${
              responseMsg.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {responseMsg.text}
          </p>
        )}

        {/* Footer CTA */}
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block px-6 py-2 text-sm font-semibold text-indigo-200 transition-transform transform border border-indigo-200 rounded-full hover:bg-indigo-800 hover:text-white hover:scale-105"
          >
            Let’s Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
