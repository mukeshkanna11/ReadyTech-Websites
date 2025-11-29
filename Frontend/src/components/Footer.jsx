import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Set backend URL based on environment
  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://readytech-websites.onrender.com/api";

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      // Call the new subscribe endpoint
      const response = await axios.post(`${BASE_URL}/contact/subscribe`, { email });

      alert(response.data.msg || "Subscribed successfully! ✅");
      setEmail("");
    } catch (err) {
      console.error("Subscribe Error:", err);

      // Show specific server message if available
      if (err.response?.data?.msg) {
        alert(err.response.data.msg);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden text-gray-200 bg-gray-900">
      {/* Decorative Blobs */}
      <div className="absolute w-72 h-72 bg-indigo-700 opacity-30 rounded-full top-[-10%] left-[-10%] blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-56 h-56 bg-pink-600 opacity-25 rounded-full bottom-[-10%] right-[-10%] blur-3xl animate-pulse-slow"></div>

      {/* Main Grid */}
      <div className="relative z-10 grid gap-12 px-6 py-16 mx-auto max-w-7xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-white">Ready Tech Solutions</h3>
          <p className="text-sm leading-relaxed">
            No 149, 2nd Floor, Sri Nagar, Hopes, Coimbatore - 641004, Behind Hope College Stop.
          </p>
          <p className="text-sm">
            <strong>📞 Phone:</strong>{" "}
            <a href="tel:+917010797721" className="underline hover:text-indigo-400">+91 70107 97721</a><br/>
            <strong>📧 Email:</strong>{" "}
            <a href="mailto:info@readytechsolutions.in" className="underline hover:text-indigo-400">info@readytechsolutions.in</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400">Services</Link></li>
            <li><Link to="/development" className="hover:text-indigo-400">Development</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/SoftwareOrganisation/" className="transition transform hover:text-indigo-400 hover:scale-110"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/readytechsolutions/?originalSubdomain=in" className="transition transform hover:text-indigo-400 hover:scale-110"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/explore/locations/218009922476192/ready-tech-solutions/" className="transition transform hover:text-indigo-400 hover:scale-110"><FaInstagram /></a>
          </div>

          <h4 className="mt-4 text-lg font-semibold text-white">Subscribe</h4>
          <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-4 py-3 font-semibold text-white rounded-md transition bg-indigo-600 hover:bg-indigo-500 ${loading ? "cursor-not-allowed bg-gray-400" : ""}`}
            >
              <FaEnvelope /> {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 py-4 text-sm text-center text-gray-400 bg-gray-800">
        © {new Date().getFullYear()} Ready Tech Solutions. All rights reserved.
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
