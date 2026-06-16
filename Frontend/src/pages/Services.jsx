import React from "react";
import {
  FaRobot,
  FaChartLine,
  FaLaptopCode,
  FaLightbulb,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const navigate = useNavigate();

  // ⭐ CORE SERVICES (AI + MARKETING)
  const coreServices = [
    {
      title: "Digital Marketing",
      description:
        "Performance-driven SEO, ads, and strategies to grow your business online.",
      icon: <FaChartLine />,
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
      link: "/services/digital-marketing",
      highlights: [
        "SEO Optimization",
        "Paid Ads Campaigns",
        "Lead Generation",
        "Brand Growth Strategy",
      ],
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "AI Solutions",
      description:
        "Smart automation and AI systems that scale your business faster.",
      icon: <FaRobot />,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      link: "/services/artificial-intelligence",
      highlights: [
        "AI Automation",
        "Chatbots",
        "Data Intelligence",
        "Process Optimization",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  // SUPPORTING SERVICES WITH IMAGES (NEW PREMIUM STRUCTURE)
  const services = [
  {
    title: "Website Maintenance",
    description:
      "Ongoing website updates, security monitoring, speed optimization, and performance improvements for seamless user experience.",
    icon: <FaLaptopCode />,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    link: "/services/website-maintenance",
  },
  {
    title: "Graphic Design",
    description:
      "Modern, high-impact branding, UI assets, and creative visuals that strengthen your business identity.",
    icon: <FaLightbulb />,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    link: "/services/graphic-design",
  },
  {
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights using dashboards, analytics, and reporting systems.",
    icon: <FaDatabase />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/services/business-intelligence",
  },
  {
    title: "IoT Solutions",
    description:
      "Smart connected systems and IoT integrations to automate and scale modern business operations.",
    icon: <FaMobileAlt />,
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    link: "/services/iot-solutions",
  },
  {
    title: "Domain & Hosting",
    description:
      "Reliable, secure, and high-speed hosting infrastructure ensuring maximum uptime and stability.",
    icon: <FaServer />,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    link: "/services/domain-hosting",
  },
  {
    title: "BPO Solutions",
    description:
      "End-to-end outsourcing services including customer support, operations, and business process management.",
    icon: <FaHeadset />,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    link: "/services/bpo-solutions",
  },
];

  // ---------- CORE CARD ----------
  const CoreCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden border shadow-xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* IMAGE */}
      <div className="h-56 overflow-hidden">
        <img
          src={service.image}
          className="object-cover w-full h-full transition duration-700 hover:scale-110"
          alt={service.title}
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl text-white bg-gradient-to-r ${service.gradient}`}
        >
          {service.icon}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-white">
          {service.title}
        </h2>

        <p className="mt-2 text-sm text-gray-300">
          {service.description}
        </p>

        <div className="mt-4 space-y-1">
          {service.highlights.map((item, i) => (
            <div key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-green-400">✔</span> {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate(service.link)}
          className="w-full mt-6 py-2 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] transition"
        >
          Explore {service.title}
        </button>
      </div>
    </motion.div>
  );

  // ---------- SUPPORTING CARD (NEW IMAGE STYLE) ----------
  const ServiceCard = ({ service }) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="overflow-hidden border shadow-md rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* IMAGE */}
      <div className="overflow-hidden h-36">
        <img
          src={service.image}
          className="object-cover w-full h-full transition duration-700 hover:scale-110"
          alt={service.title}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col justify-between h-[160px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            {service.icon}
          </div>

          <h3 className="text-sm font-semibold text-white">
            {service.title}
          </h3>
        </div>

        <p className="mt-2 text-xs text-gray-300">
          {service.description}
        </p>

        <button
  onClick={() => navigate(service.link)}
  className="mt-4 py-2 text-xs rounded-lg bg-white text-black font-medium hover:scale-[1.02] transition group"
>
  <span className="transition group-hover:tracking-wide">
    View Service →
  </span>
</button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#070A12] text-white relative overflow-hidden">

      <Helmet>
        <title>Services | Ready Tech Solutions</title>
      </Helmet>

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full top-[-200px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-pink-600/10 blur-3xl rounded-full bottom-[-150px] right-[-120px]" />
      </div>

      {/* HERO */}
      <section className="relative px-6 text-center py-28">
        <h1 className="text-5xl font-extrabold md:text-5xl">
          AI & Marketing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Growth Solutions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-300">
          We help businesses scale with Digital Marketing and AI-powered automation systems.
        </p>

        <button
          onClick={() => navigate("/demo")}
          className="px-8 py-3 mt-8 font-semibold text-black rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
        >
          Book a Demo
        </button>
      </section>

      {/* CORE */}
      <section className="px-6 pb-20 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">Core Services</h2>

        <div className="grid gap-10 mt-12 md:grid-cols-2">
          {coreServices.map((s, i) => (
            <CoreCard key={i} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* SUPPORTING */}
      <section className="px-6 pb-24 mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-center text-gray-200">
          Supporting Services
        </h2>

        <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}