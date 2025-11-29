import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import DevImg1 from "../assets/images/bg5-hero.jpg"; // background 1
import DevImg2 from "../assets/images/bg5-hero.jpg"; // background 2

export default function Development() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-poppins">
      <Helmet>
        <title>Development | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Ready Tech Solutions provides expert development services to help businesses grow and succeed in the digital world."
        />
      </Helmet>

      {/* ===== Floating Background (dual-layer like About page) ===== */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-70 animate-bgShift"
          style={{
            backgroundImage: `url(${DevImg1})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0 bg-center bg-cover mix-blend-overlay "
          style={{
            backgroundImage: `url(${DevImg2})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* ===== Banner Section ===== */}
      <section className="relative flex items-center justify-center h-[500px] overflow-hidden">
        <div className="relative z-10 px-6 text-center" data-aos="zoom-in">
          <h1 className="text-4xl font-extrabold md:text-5xl drop-shadow-lg">
            Empowering Development with{" "}
            <span className="text-cyan-400">Ready Tech Solutions</span>
          </h1>
          <p
            className="max-w-3xl mx-auto mt-4 text-lg text-gray-200/90 md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Software & hardware innovations crafted to optimize operations and
            accelerate growth.
          </p>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="relative z-10 max-w-6xl px-6 py-16 mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-white" data-aos="fade-up">
          What We Do
        </h2>
        <p
          className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-300 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Ready Tech Solutions develops, creates and modifies applications to
          meet the demands of today’s businesses. From mobile apps to enterprise
          systems, we deliver scalable, reliable and futuristic solutions.
        </p>
      </section>

      {/* ===== Core Areas ===== */}
      <section className="relative z-10 max-w-6xl px-6 py-20 mx-auto border-t border-gray-800 bg-black/30 backdrop-blur-sm">
        <h2 className="mb-12 text-3xl font-bold text-center text-white" data-aos="fade-up">
          Our Core Areas
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <GlowCard
            image="https://cdn-icons-png.flaticon.com/512/4727/4727424.png"
            title="Mobile Development"
            description="Cross-platform mobile apps designed for performance and usability."
          />
          <GlowCard
            image="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            title="Web Development"
            description="Full-stack web apps with responsive UI and scalable backends."
          />
          <GlowCard
            image="https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
            title="Custom Projects"
            description="Enterprise systems, IoT apps and next-gen technology solutions."
          />
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="relative z-10 max-w-6xl px-6 py-20 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-white" data-aos="fade-up">
          Development Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            title="Web Development"
            description="Scalable web applications with modern frameworks & API integration."
            onClick={() => navigate("/services/web-development")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/919/919830.png"
            title="PHP Development"
            description="Dynamic PHP-based apps, optimized for speed & functionality."
            onClick={() => navigate("/services/php-development")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            title="CMS Development"
            description="Custom CMS solutions for easy content management and migration."
            onClick={() => navigate("/services/cms-development")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            title="Ecommerce Development"
            description="Feature-rich eCommerce solutions with secure payment gateways."
            onClick={() => navigate("/services/ecommerce-development")}
          />
          <ServiceCard
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg"
            title="Angular JS Development"
            description="High-performance Angular apps with robust security and features."
            onClick={() => navigate("/services/angular")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/919/919825.png"
            title="Node JS Development"
            description="Backend APIs and microservices using Node.js for scalability."
            onClick={() => navigate("/services/nodejs")}
          />
        </div>
      </section>

      {/* ===== Animations ===== */}
      <style>
        {`
        @keyframes bgShift {
          0% { transform: scale(1) translateY(0px); opacity: 0.65; }
          50% { transform: scale(1.05) translateY(-15px); opacity: 0.75; }
          100% { transform: scale(1) translateY(0px); opacity: 0.65; }
        }
        @keyframes bgShiftReverse {
          0% { transform: scale(1) translateY(0px); opacity: 0.55; }
          50% { transform: scale(1.07) translateY(15px); opacity: 0.65; }
          100% { transform: scale(1) translateY(0px); opacity: 0.55; }
        }
        .animate-bgShift { animation: bgShift 20s ease-in-out infinite; }
        .animate-bgShiftReverse { animation: bgShiftReverse 22s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
}

/* ====== Reusable Cards ====== */
function GlowCard({ image, title, description }) {
  return (
    <motion.div
      className="relative p-6 text-center transition-all duration-300 border shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 rounded-xl hover:shadow-cyan-500/40 hover:-translate-y-1"
      whileHover={{ scale: 1.05 }}
      data-aos="zoom-in"
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-500/10 blur-2xl"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src={image}
        alt={title}
        className="relative z-10 object-contain w-20 h-20 mx-auto animate-float"
      />
      <h3 className="relative z-10 mt-4 text-lg font-semibold text-cyan-300">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-gray-400">{description}</p>
    </motion.div>
  );
}

function ServiceCard({ image, title, description, onClick }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 p-6 transition-all duration-300 border shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 rounded-xl hover:shadow-cyan-500/40 md:flex-row"
      whileHover={{ scale: 1.03 }}
      data-aos="fade-up"
    >
      <img src={image} alt={title} className="object-contain w-20 h-20 animate-float" />
      <div>
        <h4 className="text-xl font-semibold text-cyan-300">{title}</h4>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <motion.button
          onClick={onClick}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(34,211,238,0.6)",
          }}
          className="px-4 py-2 mt-4 text-sm font-medium text-white rounded-md bg-cyan-600 hover:bg-cyan-500"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  );
}
