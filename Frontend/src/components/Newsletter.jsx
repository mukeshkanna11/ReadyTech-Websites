import React, { useState } from "react";
import axios from "axios";
import NewsletterBG from "../assets/images/new.jpg"; // adjust the path

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setResponseMsg({ type: "error", text: "Email is required!" });
      return;
    }

    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await axios.post("http://localhost:5000/api/contact/subscribe", { email });
      setResponseMsg({ type: "success", text: res.data.msg });
      setEmail("");
    } catch (err) {
      setResponseMsg({ type: "error", text: err.response?.data?.msg || "Subscription failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="py-12 text-center bg-center bg-no-repeat rounded-3xl"
      style={{ backgroundImage: `url(${NewsletterBG})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="px-6 py-12 rounded-3xl ">
        {/* Section Title */}
        <h3 className="mb-1 font-semibold tracking-widest text-yellow-400 uppercase">
          New Settler
        </h3>

        {/* Main Heading */}
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Let’s Build Your Next Digital Success Story 🚀
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-2 text-gray-200">
          Join our community of growing brands — get insights, updates, and strategies
          that help you lead in the digital world.
        </p>

        {/* Subscribe Form */}
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
            className={`mt-3 font-semibold text-sm ${
              responseMsg.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {responseMsg.text}
          </p>
        )}

        {/* Small Footer CTA */}
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
