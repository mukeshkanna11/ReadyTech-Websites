import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaCogs,
  FaCloud,
} from "react-icons/fa";

export default function Development() {
  const navigate = useNavigate();

  const coreAreas = [
    {
      title: "Mobile Development",
      desc: "High-performance Android & iOS applications with smooth UX and scalable architecture.",
      icon: <FaMobileAlt />,
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Web Development",
      desc: "Modern responsive websites and enterprise-grade web applications built for scale.",
      icon: <FaCode />,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Enterprise Systems",
      desc: "Custom business automation systems that streamline operations and improve efficiency.",
      icon: <FaCogs />,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Scalable full-stack web applications with modern UI and API integration.",
      icon: <FaCode />,
      link: "/services/web-development",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "PHP Development",
      desc: "Secure backend systems built with optimized architecture and performance.",
      icon: <FaServer />,
      link: "/services/php-development",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "CMS Development",
      desc: "Custom CMS platforms for easy content management and scalability.",
      icon: <FaCloud />,
      link: "/services/cms-development",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Ecommerce Development",
      desc: "Secure online stores with payment gateway and order management systems.",
      icon: <FaShoppingCart />,
      link: "/services/ecommerce-development",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Angular Development",
      desc: "Fast single-page applications with high performance and security.",
      icon: <FaCode />,
      link: "/services/angular",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Node.js Development",
      desc: "High-performance backend APIs and microservices architecture.",
      icon: <FaServer />,
      link: "/services/nodejs",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const CoreCard = ({ item }) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="overflow-hidden border shadow-lg rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="overflow-hidden h-52">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="text-2xl text-cyan-300">{item.icon}</div>
        <h3 className="mt-3 text-lg font-semibold text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
      </div>
    </motion.div>
  );

  const ServiceCard = ({ item }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col h-full overflow-hidden border shadow-md rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="text-cyan-300">{item.icon}</span>
          {item.title}
        </h4>

        <p className="flex-1 mt-2 text-sm text-gray-300">
          {item.desc}
        </p>

        <button
          onClick={() => navigate(item.link)}
          className="w-full py-2 mt-4 font-semibold text-black transition rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90"
        >
          View Service →
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-x-hidden">

      <Helmet>
        <title>Development | Ready Tech Solutions</title>
      </Helmet>

      {/* BACKGROUND (SAFE - NO OVERFLOW) */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full top-[-150px] left-[-120px]" />
        <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      {/* MAIN CONTAINER (FIXED ALIGNMENT) */}
      <div className="max-w-6xl px-5 mx-auto sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="py-24 text-center">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Development Solutions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-300">
            We design scalable web, mobile and enterprise systems that help businesses
            grow with modern engineering and clean architecture.
          </p>
        </section>

        {/* CORE */}
        <section className="pb-20">
          <h2 className="mb-10 text-2xl font-bold text-center">
            Core Development Areas
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {coreAreas.map((item, i) => (
              <CoreCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="pb-24">
          <h2 className="mb-10 text-2xl font-bold text-center">
            Development Services
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}