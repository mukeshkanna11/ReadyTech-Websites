import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://readytech-websites.onrender.com/api";

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter your email");

    try {
      setLoading(true);

      const res = await axios.post(`${BASE_URL}/contact/subscribe`, {
        email,
      });

      alert(res.data.msg || "Subscribed successfully 🚀");
      setEmail("");
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden text-gray-300 bg-[#05070F]">

      {/* Soft ambient glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* Main container */}
      <div className="relative z-10 grid px-6 py-24 mx-auto max-w-7xl gap-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Ready Tech Solutions
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We build scalable digital products, modern websites and enterprise
            solutions that help businesses grow faster in the digital world.
          </p>

          <div className="mt-5 space-y-1 text-sm text-gray-400">
            <p>📍 Coimbatore, Tamil Nadu</p>
            <p>
              📞{" "}
              <a href="tel:+917010797721" className="hover:text-indigo-400">
                +91 70107 97721
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:info@readytechsolutions.in"
                className="hover:text-indigo-400"
              >
                info@readytechsolutions.in
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-medium text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="transition hover:text-indigo-400">About Us</Link></li>
            <li><Link to="/services" className="transition hover:text-indigo-400">Services</Link></li>
            <li><Link to="/development" className="transition hover:text-indigo-400">Development</Link></li>
            <li><Link to="/contact" className="transition hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="mb-4 font-medium text-white">Follow Us</h3>

          <div className="flex gap-4 text-lg">

            <a
              href="https://www.facebook.com/SoftwareOrganisation/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition border rounded-lg bg-white/5 border-white/10 hover:bg-indigo-600/20 hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/readytechsolutions/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition border rounded-lg bg-white/5 border-white/10 hover:bg-indigo-600/20 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/explore/locations/218009922476192/ready-tech-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition border rounded-lg bg-white/5 border-white/10 hover:bg-indigo-600/20 hover:scale-110"
            >
              <FaInstagram />
            </a>

          </div>

          <p className="mt-5 text-xs text-gray-500">
            Stay connected for updates & insights.
          </p>
        </div>

        {/* Newsletter */}
        <div className="p-6 border shadow-lg bg-white/5 border-white/10 backdrop-blur-xl rounded-2xl">

          <h3 className="font-medium text-white">Newsletter</h3>

          <p className="mt-2 text-xs text-gray-400">
            Get weekly updates on tech, design & growth.
          </p>

          <form onSubmit={handleSubscribe} className="mt-4 space-y-3">

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-sm text-white border outline-none bg-white/5 border-white/10 rounded-xl focus:border-indigo-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-white
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         rounded-xl hover:scale-[1.03] transition"
            >
              <FaEnvelope />
              {loading ? "Sending..." : "Subscribe"}
            </button>

          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 py-6 text-xs text-center text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} Ready Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}