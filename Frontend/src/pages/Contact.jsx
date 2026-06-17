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
import { motion } from "framer-motion";// main background

// Helpdesk chat widget
import HelpdeskChat from "../components/HelpdeskChat";

export default function Contact() {

  /* ================= CONTACT INFO ================= */
  const contactInfo = [
    {
      title: "Call Us",
      info: "+91 9600364121",
      description: "Speak directly with our team for consultations and support.",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Email Us",
      info: "quries.readytechsolutions@gmail.com",
      description: "Send us your requirements and project details anytime.",
      icon: <FaEnvelope />,
    },
    {
      title: "Visit Us",
      info: "Coimbatore, Tamil Nadu, India",
      description: "Meet our team and discuss your business transformation goals.",
      icon: <FaMapMarkerAlt />,
    },
  ];

  /* ================= OFFICE LOCATIONS ================= */
  const locations = [
    {
      title: "Headquarters",
      city: "Coimbatore",
      address: "No 149, 2nd Floor, Hopes, Coimbatore",
    },
    {
      title: "Development Center",
      city: "Coimbatore",
      address:
        "Tidel Park, Peelamedu, B.R Puram Industrial Estate",
    },
    {
      title: "Regional Office",
      city: "Bangalore",
      address:
        "2nd Floor, Hanumanthappa Building, Konanakunte Cross Road",
    },
  ];

  /* ================= TRUST HIGHLIGHTS ================= */
  const highlights = [
    {
      icon: <FaAward />,
      title: "AI-Powered Solutions",
      desc: "Smart technologies designed for modern businesses.",
    },
    {
      icon: <FaUsers />,
      title: "Client-Focused Delivery",
      desc: "Every project is built around business outcomes.",
    },
    {
      icon: <FaHandshake />,
      title: "Long-Term Partnership",
      desc: "Reliable support and continuous innovation.",
    },
  ];

  /* ================= CONTACT FORM ================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [contactResp, setContactResp] = useState(null);
  const [loadingContact, setLoadingContact] = useState(false);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ================= FORM SUBMIT ================= */
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setLoadingContact(true);
    setContactResp(null);

    if (!formData.name || !formData.email || !formData.message) {
      setContactResp({
        type: "error",
        text: "Name, email and message are required.",
      });

      setLoadingContact(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setContactResp({
        type: "success",
        text: res.data.msg || "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });

    } catch (err) {
      setContactResp({
        type: "error",
        text:
          err.response?.data?.msg ||
          "Unable to send message. Please try again.",
      });
    } finally {
      setLoadingContact(false);
    }
  };

  /* ================= ANIMATION ================= */
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 bg-black">

  <Helmet>
    <title>Contact Us | Ready Tech Solutions</title>
    <meta
      name="description"
      content="Connect with Ready Tech Solutions for AI solutions, software development, digital marketing, cloud services, and enterprise technology consulting."
    />
  </Helmet>

  {/* Premium Background */}
  <div className="absolute inset-0 overflow-hidden -z-10">

    <div className="absolute inset-0 bg-black" />

    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

    <div className="absolute top-40 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  {/* HERO */}
  <motion.section
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="relative px-6 pt-32 pb-24"
  >

    <div className="max-w-5xl mx-auto">

      {/* Badge */}
      <div className="flex justify-center">

        <div className="px-5 py-2 text-sm font-medium text-purple-300 border rounded-full bg-purple-500/10 border-purple-500/20 backdrop-blur-md">
          READY TECH SOLUTIONS • AI & DIGITAL TRANSFORMATION
        </div>

      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto mt-10 text-center">

        <h1 className="text-5xl font-bold leading-tight md:text-5xl">

          Let's Build

          <span className="block mt-2 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text">
            Intelligent Digital Experiences
          </span>

        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-relaxed text-gray-400 md:text-xl">
          Partner with Ready Tech Solutions to build scalable software,
          AI-powered platforms, automation systems, cloud infrastructure,
          enterprise applications, and digital marketing solutions that
          accelerate business growth.
        </p>

      </div>

      {/* Quick Contact */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <div className="px-5 py-3 border rounded-2xl bg-white/[0.03] border-white/10 backdrop-blur-xl">
          <p className="text-xs tracking-wider text-gray-500 uppercase">
            Call Us
          </p>
          <p className="mt-1 font-medium text-white">
            +91 9600364121
          </p>
        </div>

        <div className="px-5 py-3 border rounded-2xl bg-white/[0.03] border-white/10 backdrop-blur-xl">
          <p className="text-xs tracking-wider text-gray-500 uppercase">
            Email
          </p>
          <p className="mt-1 font-medium text-white">
            quries.readytechsolutions@gmail.com
          </p>
        </div>

        <div className="px-5 py-3 border rounded-2xl bg-white/[0.03] border-white/10 backdrop-blur-xl">
          <p className="text-xs tracking-wider text-gray-500 uppercase">
            Response Time
          </p>
          <p className="mt-1 font-medium text-white">
            Within 24 Hours
          </p>
        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-24">

        <div className="text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Why Businesses Choose Us
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            We combine technology expertise, innovation, and long-term
            strategic thinking to deliver impactful digital solutions.
          </p>

        </div>

        <div className="grid gap-6 mt-12 md:grid-cols-3">

          {[
            {
              icon: <FaAward />,
              title: "AI-Powered Solutions",
              desc: "Intelligent systems that automate processes and improve decision making.",
            },
            {
              icon: <FaUsers />,
              title: "Client-Focused Delivery",
              desc: "Every project is tailored to business goals, growth, and long-term success.",
            },
            {
              icon: <FaHandshake />,
              title: "Trusted Partnership",
              desc: "Reliable support, transparent communication, and continuous innovation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="
                group
                p-8
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                hover:border-purple-500/40
                transition-all
                duration-300
              "
            >

              <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl text-purple-300 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </div>

  </motion.section>

      {/* ================= CONTACT INFORMATION ================= */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="px-6 py-24 mx-auto max-w-7xl"
>

  {/* Section Header */}
  <div className="max-w-3xl mx-auto text-center">

    <div className="inline-flex px-4 py-2 mb-6 text-sm font-medium text-purple-300 border rounded-full bg-purple-500/10 border-purple-500/20">
      CONNECT WITH US
    </div>

    <h2 className="text-4xl font-bold md:text-5xl">
      Let's Start a
      <span className="block mt-2 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text">
        Meaningful Conversation
      </span>
    </h2>

    <p className="mt-6 leading-relaxed text-gray-400">
      Whether you're planning a new project, seeking technical support,
      exploring AI solutions, or looking for a long-term technology partner,
      our team is ready to help.
    </p>

  </div>

  {/* Contact Cards */}
  <div className="grid gap-8 mt-16 md:grid-cols-3">

    {contactInfo.map((item, idx) => (
      <motion.div
        key={idx}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          hover:border-purple-500/40
          transition-all
          duration-300
        "
      >

        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl text-purple-300 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-3 font-medium text-purple-300 break-words">
            {item.info}
          </p>

          <p className="mt-4 leading-relaxed text-gray-400">
            {item.description}
          </p>

        </div>

      </motion.div>
    ))}

  </div>

</motion.section>


     {/* ================= CONTACT EXPERIENCE ================= */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="px-6 py-24 mx-auto max-w-7xl"
>
  {/* Header */}
  <div className="max-w-4xl mx-auto mb-16 text-center">

    <div className="inline-flex px-4 py-2 mb-6 text-sm font-medium border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20">
      CONNECT WITH READY TECH
    </div>

    <h2 className="text-4xl font-bold md:text-5xl">
      Start Your Next
      <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 bg-clip-text">
        Digital Transformation Journey
      </span>
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-400">
      Whether you need AI-powered solutions, enterprise software,
      digital marketing, cloud infrastructure, automation systems,
      ERP platforms, or custom applications, our specialists are
      ready to help turn your vision into scalable business success.
    </p>

  </div>

  {/* Form + Office */}
  <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">

    {/* Contact Form */}
    <motion.div
      whileHover={{ y: -3 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        md:p-10
      "
    >

      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">

        <h3 className="text-3xl font-bold text-white">
          Let's Discuss Your Project
        </h3>

        <p className="mt-4 text-gray-400">
          Share your requirements and our experts will get back to you
          with tailored recommendations and strategic guidance.
        </p>

        {contactResp && (
          <div
            className={`mt-6 rounded-2xl p-4 text-sm font-medium ${
              contactResp.type === "success"
                ? "border border-green-500/20 bg-green-500/10 text-green-400"
                : "border border-red-500/20 bg-red-500/10 text-red-400"
            }`}
          >
            {contactResp.text}
          </div>
        )}

        <form
          onSubmit={handleContactSubmit}
          className="mt-8 space-y-5"
        >

          <div className="grid gap-5 md:grid-cols-2">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-white transition-all border outline-none rounded-2xl border-white/10 bg-black/30 focus:border-cyan-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-white transition-all border outline-none rounded-2xl border-white/10 bg-black/30 focus:border-cyan-500"
            />

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 text-white transition-all border outline-none rounded-2xl border-white/10 bg-black/30 focus:border-cyan-500"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-5 py-4 text-white transition-all bg-black border outline-none rounded-2xl border-white/10 focus:border-cyan-500"
            >
              <option>General Inquiry</option>
              <option>Software Development</option>
              <option>AI Solutions</option>
              <option>Digital Marketing</option>
              <option>Cloud Services</option>
              <option>ERP Solutions</option>
              <option>Technical Support</option>
              <option>Business Partnership</option>
            </select>

          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your project, goals and requirements..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 text-white transition-all border outline-none rounded-2xl border-white/10 bg-black/30 focus:border-cyan-500"
          />

          <button
            type="submit"
            disabled={loadingContact}
            className="
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-purple-500
              to-cyan-500
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.01]
            "
          >
            {loadingContact ? "Sending Message..." : "Submit Inquiry"}
          </button>

        </form>

      </div>

    </motion.div>

    {/* Office Information */}
    <motion.div
      whileHover={{ y: -3 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >

      <div className="p-8">

        <h3 className="text-2xl font-bold text-white">
          Visit Our Office
        </h3>

        <p className="mt-3 text-gray-400">
          Meet our consultants and discuss your technology roadmap,
          business transformation goals, and future growth plans.
        </p>

        <div className="mt-8 space-y-4">

          <div className="p-5 border rounded-2xl border-white/10 bg-white/[0.03]">
            <p className="text-sm text-gray-500">
              Business Hours
            </p>
            <h4 className="mt-1 font-semibold text-white">
              Monday – Saturday
            </h4>
            <p className="text-gray-400">
              9:00 AM – 6:00 PM
            </p>
          </div>

          <div className="p-5 border rounded-2xl border-white/10 bg-white/[0.03]">
            <p className="text-sm text-gray-500">
              Response Time
            </p>
            <h4 className="mt-1 font-semibold text-white">
              Within 24 Hours
            </h4>
          </div>

          <div className="p-5 border rounded-2xl border-white/10 bg-white/[0.03]">
            <p className="text-sm text-gray-500">
              Support Availability
            </p>
            <h4 className="mt-1 font-semibold text-white">
              Dedicated Technical Assistance
            </h4>
          </div>

        </div>

      </div>

      <div className="overflow-hidden border-t h-[400px] border-white/10">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.556611945835!2d76.96242117477455!3d11.016844092130465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cd7d9c5ed9%3A0x4aee018a6f85e924!2s2nd%20Floor%2C%20149%2C%20Srinagar%20Rd%2C%20Peelamedu%2C%20Chitra%20Nagar%2C%20Hope%20College%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1694713600000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Ready Tech Solutions Location"
        />

      </div>

    </motion.div>

  </div>

  {/* Locations */}
  <div className="mt-24">

    <div className="mb-12 text-center">

      <h2 className="text-4xl font-bold text-white">
        Our Locations
      </h2>

      <p className="max-w-2xl mx-auto mt-4 text-gray-400">
        Expanding innovation across multiple locations while delivering
        world-class technology solutions and business transformation services.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-3">

      {locations.map((loc, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -6 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            transition-all
            hover:border-cyan-500/30
          "
        >

          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative">

            <div className="inline-flex px-3 py-1 text-xs font-medium rounded-full text-cyan-300 bg-cyan-500/10">
              Ready Tech Office
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-white">
              {loc.city}
            </h3>

            <p className="mt-4 leading-relaxed text-gray-400">
              {loc.address}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</motion.section>
      {/* Helpdesk Chat */}
      <HelpdeskChat />
    </div>
  );
}
