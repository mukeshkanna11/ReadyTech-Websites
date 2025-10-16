import React, { useState } from "react";
import { FaLaptopCode, FaPhoneAlt, FaBullseye, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaAward, FaUsers, FaHandshake, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import axios from "axios";

export default function Contact() {
  const contactInfo = [
    { title: "Call Us", info: "+91 7010797721", icon: <FaPhoneAlt /> },
    { title: "Email Us", info: "uiuxmukesh@gmail.com", icon: <FaEnvelope /> },
    { title: "Address", info: "Coimbatore - 641004, Tamil Nadu, India", icon: <FaMapMarkerAlt /> },
  ];

  const locations = [
    { city: "Coimbatore", address: "No 149 2nd Floor, Hopes, Coimbatore", phone: "+91 7010797721" },
    { city: "Coimbatore", address: "Tidel Park, Peelamedu, B.R Puram Industrial Estate", phone: "+91 7010797721" },
    { city: "Bangalore", address: "2nd floor, Hanumanthappa building, 21/8, Konanakunte Cross Rd", phone: "+91 7010797721" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMsg({ type: "error", text: "Name, email, and message are required!" });
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setResponseMsg({ type: "success", text: res.data.msg });
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    } catch (err) {
      setResponseMsg({ type: "error", text: err.response?.data?.msg || "Failed to send message" });
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    { name: "Suresh Kumar", feedback: "Ready Tech transformed our website, boosting our client engagement!", role: "CEO, TechCorp" },
    { name: "Anita Reddy", feedback: "Professional, efficient, and innovative solutions every time.", role: "Founder, StartUpHub" },
  ];

  return (
    <div className="relative min-h-screen text-gray-100 bg-gray-900">

      <Helmet>
        <title>Contact Us | Ready Tech Solutions</title>
        <meta name="description" content="Get in touch with Ready Tech Solutions. We provide innovative IT solutions, training, and services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[550px] overflow-hidden text-white text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-80 animate-gradient-x"></div>
        {[...Array(25)].map((_, idx) => (
          <span
            key={idx}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
        <div className="relative z-10 max-w-4xl">
          <h1 className="mb-4 text-5xl font-extrabold text-yellow-300 drop-shadow-md">Contact Ready Tech</h1>
          <p className="mb-10 text-lg text-gray-100/90">
            Collaborate with us to transform your ideas into cutting-edge technology. Reach out for IT services, collaborations, or career opportunities.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[{ icon: <FaAward />, title: "6+ Years", desc: "Of Excellence" },
              { icon: <FaUsers />, title: "200+ Experts", desc: "Across India" },
              { icon: <FaHandshake />, title: "150+ Projects", desc: "Successfully Delivered" }].map((item, i) => (
              <div key={i} className="p-6 transition bg-gray-800 shadow-lg bg-opacity-60 rounded-xl backdrop-blur-md hover:bg-gray-700/70">
                <div className="flex justify-center mb-3 text-3xl text-yellow-400">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes gradient-x {0%{background-position:0%}50%{background-position:100%}100%{background-position:0%}}
          .animate-gradient-x {background-size: 200% 200%; animation: gradient-x 15s ease infinite;}
          @keyframes float {0% { transform: translateY(0px); opacity: 0.5; } 50% { transform: translateY(-15px); opacity: 1; } 100% { transform: translateY(0px); opacity: 0.5; }}
          .animate-float { animation: float 6s ease-in-out infinite; }
        `}</style>
      </section>

      {/* Contact Info Cards */}
      <section className="grid max-w-6xl gap-6 px-6 py-20 mx-auto sm:grid-cols-1 md:grid-cols-3">
        {contactInfo.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 text-center transition transform bg-gray-800 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center mb-4 text-2xl text-indigo-400 bg-gray-700 rounded-full w-14 h-14">
              {item.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-indigo-400">{item.title}</h3>
            <p className="text-gray-300">{item.info}</p>
          </div>
        ))}
      </section>

      {/* Contact Form + Map */}
      <section className="grid max-w-6xl gap-12 px-6 py-20 mx-auto sm:grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-gray-800 shadow-2xl rounded-xl md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Send a Message</h2>
          <p className="mb-6 text-gray-300">Our team will respond within 24 hours.</p>
          {responseMsg && (
            <p
              className={`mb-4 font-semibold ${
                responseMsg.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {responseMsg.text}
            </p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"/>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"/>
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"/>
            <select name="subject" value={formData.subject} onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md">
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Collaboration</option>
            </select>
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"/>
            <button type="submit" disabled={loading}
              className="w-full py-3 font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-xl">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="w-full overflow-hidden shadow-2xl h-72 md:h-96 rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.556611945835!2d76.96242117477455!3d11.016844092130465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cd7d9c5ed9%3A0x4aee018a6f85e924!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694713600000!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
            loading="lazy"
            title="Ready Tech Location"
          />
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Offices</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 transition transform bg-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-3xl text-indigo-400">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">{loc.city}</h4>
                <p className="text-sm text-gray-300">{loc.address}</p>
                <p className="mt-2 text-sm font-medium text-indigo-400">{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Settler Section: Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-yellow-400">What Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 transition transform bg-gray-800 shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-2">
                <p className="mb-4 italic text-gray-300">"{t.feedback}"</p>
                <h4 className="font-bold text-white">{t.name}</h4>
                <span className="text-indigo-400">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Subscribe */}
      <section className="py-20 text-center text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <h2 className="mb-6 text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="max-w-xl mx-auto mb-6">Stay updated with our latest services, tutorials, and updates.</p>
        <div className="flex flex-col items-center justify-center max-w-md gap-4 mx-auto sm:flex-row">
          <input type="email" placeholder="Enter your email" className="flex-1 w-full px-4 py-3 text-gray-900 rounded-md sm:w-auto"/>
          <button className="px-6 py-3 font-semibold text-white transition bg-indigo-700 rounded-md hover:bg-indigo-600">Subscribe</button>
        </div>
      </section>

      

    </div>
  );
}
