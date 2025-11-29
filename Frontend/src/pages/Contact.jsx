// src/pages/Contact.jsx
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { motion } from "framer-motion";
import ContactBG from "../assets/images/contact.jpg"; // main background

// Helpdesk chat widget
import HelpdeskChat from "../components/HelpdeskChat";

export default function Contact() {
  const contactInfo = [
    { title: "Helpline Number", info: "+91 9600364121", icon: <FaPhoneAlt /> },
    { title: "Email Us", info: "quries.readytechsolutions@gmail.com", icon: <FaEnvelope /> },
    { title: "Address", info: "Coimbatore - 641004, Tamil Nadu, India", icon: <FaMapMarkerAlt /> },
  ];

  const locations = [
    { city: "Coimbatore", address: "No 149 2nd Floor, Hopes, Coimbatore" },
    { city: "Coimbatore", address: "Tidel Park, Peelamedu, B.R Puram Industrial Estate" },
    { city: "Bangalore", address: "2nd floor, Hanumanthappa building, 21/8, Konanakunte Cross Rd" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [contactResp, setContactResp] = useState(null);
  const [loadingContact, setLoadingContact] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoadingContact(true);
    setContactResp(null);

    if (!formData.name || !formData.email || !formData.message) {
      setContactResp({ type: "error", text: "Name, email, and message are required!" });
      setLoadingContact(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setContactResp({ type: "success", text: res.data.msg || "Message sent." });
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    } catch (err) {
      setContactResp({ type: "error", text: err.response?.data?.msg || "Failed to send message" });
    } finally {
      setLoadingContact(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100">
      <Helmet>
        <title>Contact Us | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Get in touch with Ready Tech Solutions. Innovative IT solutions and services."
        />
      </Helmet>

      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-60 animate-bgShift"
          style={{
            backgroundImage: `url(/images/contact1.jpg)`,
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0 bg-center bg-cover opacity-50 mix-blend-overlay animate-bgShiftReverse"
          style={{
            backgroundImage: `url(${ContactBG})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative flex flex-col items-center justify-center h-[550px] text-center px-6"
      >
        <h1 className="mb-4 text-5xl font-extrabold text-yellow-300 drop-shadow-md">
          Contact Ready Tech
        </h1>
        <p className="mb-10 text-lg text-gray-100/90">
          Collaborate with us to transform your ideas into cutting-edge technology.
        </p>

        <h2 className="mb-6 text-3xl font-bold text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { icon: <FaAward />, title: "6+ Years", desc: "Of Excellence" },
            { icon: <FaUsers />, title: "200+ Experts", desc: "Across India" },
            { icon: <FaHandshake />, title: "150+ Projects", desc: "Successfully Delivered" },
          ].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="p-6 transition shadow-lg bg-gray-800/70 rounded-xl"
            >
              <div className="flex justify-center mb-3 text-3xl text-yellow-400">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl px-6 py-20 mx-auto"
      >
        <h2 className="mb-8 text-3xl font-bold text-center text-yellow-300">
          Contact Information
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {contactInfo.map((item, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={idx}
              className="flex flex-col items-center p-6 text-center transition transform shadow-xl bg-gray-800/70 rounded-xl hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4 text-2xl text-indigo-400 bg-gray-700 rounded-full w-14 h-14">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-indigo-400">{item.title}</h3>
              <p className="text-gray-300">{item.info}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form + Map */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl px-6 py-20 mx-auto"
      >
        <h2 className="mb-8 text-3xl font-bold text-center text-yellow-300">
          Send Us a Message
        </h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {/* Form */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 shadow-2xl bg-gray-800/70 rounded-xl md:p-8"
          >
            <p className="mb-6 text-center text-gray-300">
              Our team will respond within 24 hours.
            </p>
            {contactResp && (
              <p
                className={`mb-4 font-semibold text-center ${
                  contactResp.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {contactResp.text}
              </p>
            )}
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Collaboration</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
              />
              <button
                type="submit"
                disabled={loadingContact}
                className="w-full py-3 font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-xl"
              >
                {loadingContact ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full overflow-hidden shadow-2xl h-72 md:h-96 rounded-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.556611945835!2d76.96242117477455!3d11.016844092130465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cd7d9c5ed9%3A0x4aee018a6f85e924!2s2nd%20Floor%2C%20149%2C%20Srinagar%20Rd%2C%20Peelamedu%2C%20Chitra%20Nagar%2C%20Hope%20College%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1694713600000!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen
              loading="lazy"
              title="Ready Tech Location"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Locations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl px-6 py-20 mx-auto"
      >
        <h2 className="mb-8 text-3xl font-bold text-center text-yellow-300">Our Locations</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {locations.map((loc, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={idx}
              className="p-6 text-center transition shadow-xl bg-gray-800/70 rounded-xl hover:shadow-2xl"
            >
              <h3 className="mb-2 text-xl font-bold text-indigo-400">{loc.city}</h3>
              <p className="text-gray-300">{loc.address}</p>
              <p className="mt-2 text-gray-300">{loc.phone}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Helpdesk Chat */}
      <HelpdeskChat />
    </div>
  );
}
