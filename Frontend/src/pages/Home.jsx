import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaDatabase,
  FaLock,
  FaReact,
  FaRobot,
  FaUsers,
  FaRocket,
  FaAward,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiNodedotjs,
  SiMongodb,
  SiOpenai,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";
// 🖼️ Local floating images (tech-style)
import BgVision from "../assets/images/bg-vision.jpg";
import BgHero from "../assets/images/bg-hero.jpg";
import Img1 from "../assets/images/image1.jpg";
import Img2 from "../assets/images/image2.jpg";
import Img3 from "../assets/images/image3.jpg";

export default function Home() {
  const [template, setTemplate] = useState("A");

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-poppins bg-gray-950">
      <Navbar />

      <Helmet>
        <title>Home | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Ready Tech Solutions provides expert IT solutions to help businesses grow and succeed in the digital world."
        />
      </Helmet>

{/* ================= PREMIUM HERO ================= */}
<section className="relative overflow-hidden bg-[#050816]">

  {/* Background */}
  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[180px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="container relative z-10 px-6 py-24 mx-auto lg:px-12">

    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* ================= LEFT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">

          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

          <span className="text-sm text-gray-300">
            AI • SaaS • Digital Marketing
          </span>

        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white lg:text-5xl">

          Next-Generation Solutions For

          <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text">

            AI-Powered Solutions

          </span>

        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg leading-relaxed text-gray-400 mt-7">

          ReadyTechSolutions helps businesses scale faster through
          AI automation, SaaS development, CRM systems, SEO,
          performance marketing and lead generation.

        </p>

        {/* CTA */}
        <div className="flex flex-col gap-4 mt-10 sm:flex-row">

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-black transition-all rounded-xl bg-gradient-to-r from-yellow-300 to-orange-400"
          >
            Get Free Consultation
            <FaArrowRight />
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white border rounded-xl border-white/10 bg-white/5 backdrop-blur-md"
          >
            Explore Services
          </motion.a>

        </div>

        {/* ================= PREMIUM STATS ================= */}
{/* ================= PREMIUM STATS (COMPACT) ================= */}
<div className="grid grid-cols-2 gap-3 mt-10 md:grid-cols-4">

  {/* Card 1 */}
  <div className="p-4 transition-all duration-300 border rounded-xl border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30">

    <h3 className="text-2xl font-bold leading-tight text-white">
      300<span className="text-cyan-400">%</span>
    </h3>

    <p className="mt-1 text-xs text-gray-400">
      Growth Rate
    </p>

  </div>

  {/* Card 2 */}
  <div className="p-4 transition-all duration-300 border rounded-xl border-white/10 bg-white/5 backdrop-blur-md hover:border-indigo-400/30">

    <h3 className="text-2xl font-bold leading-tight text-white">
      100<span className="text-indigo-400">+</span>
    </h3>

    <p className="mt-1 text-xs text-gray-400">
      Clients
    </p>

  </div>

  {/* Card 3 */}
  <div className="p-4 transition-all duration-300 border rounded-xl border-white/10 bg-white/5 backdrop-blur-md hover:border-pink-400/30">

    <h3 className="text-2xl font-bold leading-tight text-white">
      50<span className="text-pink-400">+</span>
    </h3>

    <p className="mt-1 text-xs text-gray-400">
      SaaS Apps
    </p>

  </div>

  {/* Card 4 */}
  <div className="p-4 transition-all duration-300 border rounded-xl border-white/10 bg-white/5 backdrop-blur-md hover:border-yellow-400/30">

    <h3 className="text-2xl font-bold leading-tight text-white">
      5<span className="text-yellow-400">★</span>
    </h3>

    <p className="mt-1 text-xs text-gray-400">
      Rating
    </p>

  </div>

</div>

      </motion.div>

      {/* ================= RIGHT DASHBOARD ================= */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="justify-center hidden w-full lg:flex"
>

  <div className="w-full max-w-xl">

    <div className="relative p-6 border shadow-[0_25px_80px_rgba(0,0,0,0.45)] rounded-3xl bg-white/5 backdrop-blur-2xl border-white/10">

      {/* Header */}
      <div className="flex items-start justify-between mb-8">

        <div>
          <p className="text-sm text-gray-400">
            Ready Tech Analytics
          </p>

          <h3 className="text-2xl font-bold text-white">
            Growth Intelligence
          </h3>
        </div>

        <span className="px-3 py-1 text-xs font-medium text-green-400 border rounded-full bg-green-500/10 border-green-500/20">
          Live
        </span>

      </div>

      {/* Top KPI Row */}
      <div className="grid grid-cols-2 gap-4 mb-5">

        <div className="p-5 border rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border-white/10">

          <FaChartLine className="mb-3 text-cyan-400" size={22} />

          <h4 className="text-3xl font-bold text-white">+247%</h4>

          <p className="mt-1 text-sm text-gray-400">
            Monthly Growth
          </p>

        </div>

        <div className="p-5 border rounded-2xl bg-white/5 border-white/10">

          <FaGlobe className="mb-3 text-yellow-400" size={22} />

          <h4 className="text-3xl font-bold text-white">1.2M</h4>

          <p className="mt-1 text-sm text-gray-400">
            Website Traffic
          </p>

        </div>

      </div>

      {/* Middle Stats */}
      <div className="grid grid-cols-2 gap-4 mb-5">

        <div className="p-5 border rounded-2xl bg-white/5 border-white/10">

          <FaRobot className="mb-3 text-cyan-400" size={22} />

          <h4 className="text-2xl font-bold text-white">128+</h4>

          <p className="text-sm text-gray-400">
            AI Automations
          </p>

        </div>

        <div className="p-5 border rounded-2xl bg-white/5 border-white/10">

          <FaLaptopCode className="mb-3 text-indigo-400" size={22} />

          <h4 className="text-2xl font-bold text-white">52</h4>

          <p className="text-sm text-gray-400">
            SaaS Projects
          </p>

        </div>

      </div>

      {/* Revenue + Conversion */}
      <div className="p-5 mb-5 border rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border-white/10">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-400">
              Revenue Growth
            </p>

            <h2 className="mt-1 text-4xl font-black text-white">
              ₹48.6L
            </h2>

          </div>

          <FaChartLine size={38} className="text-pink-400" />

        </div>

        <div className="mt-4">

          <div className="flex justify-between mb-2 text-xs text-gray-400">
            <span>Conversion Rate</span>
            <span className="text-green-400">92%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-white/10">
            <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 w-[92%]" />
          </div>

        </div>

      </div>

      

    </div>

  </div>

</motion.div>
    </div>

  </div>

{/* ================= PREMIUM BOTTOM STRIP (FIXED) ================= */}
<div className="relative border-t border-white/10 bg-white/[0.02] overflow-hidden">

  {/* soft background glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5" />

  <div className="relative px-4 py-5 mx-auto max-w-7xl sm:px-6">

    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">

      {[
        "AI Automation",
        "SEO",
        "Google Ads",
        "Meta Ads",
        "CRM Systems",
        "SaaS Platforms",
        "Lead Generation",
        "Business Growth",
      ].map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 text-xs sm:text-sm text-gray-300 
          border border-white/10 rounded-full bg-white/5 backdrop-blur-md 
          transition-all duration-300 
          hover:border-cyan-400/40 hover:text-white
          hover:shadow-[0_0_18px_rgba(34,211,238,0.15)]"
        >

          {/* small dot icon */}
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-70" />

          {item}

        </span>
      ))}

    </div>

    {/* footer note */}
    <p className="text-center text-[11px] sm:text-xs text-gray-500 mt-4">
      Scalable digital solutions for modern businesses
    </p>

  </div>
</div>
</section>



      {/* -------------------- Vision & Mission -------------------- */}
      <VisionMissionSection />

      {/* -------------------- Template Switcher -------------------- */}
      <TemplateSwitcher template={template} setTemplate={setTemplate} />
    </div>
  );
}

/* -------------------- Premium Animated Background -------------------- */
function AnimatedBackground() {
  const icons = [
    <FaReact />,
    <FaRobot />,
    <FaCloud />,
    <FaDatabase />,
    <FaCode />,
    <FaLock />,
  ];

  const floatingItems = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    icon: icons[i % icons.length],
    top: `${10 + Math.random() * 80}%`,
    left: `${5 + Math.random() * 90}%`,
    size: 28 + Math.random() * 40,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden -z-30">

      {/* Main Dark Gradient */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora Glow */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[800px] h-[800px]
                   -translate-x-1/2 rounded-full
                   bg-purple-600/20 blur-[180px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px]
                   rounded-full bg-cyan-500/15 blur-[150px]"
        animate={{
          x: [-50, 50, -50],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute top-20 right-0 w-[450px] h-[450px]
                   rounded-full bg-indigo-500/15 blur-[140px]"
        animate={{
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Premium Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.06]
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Center Spotlight */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
        "
      />

      {/* Floating Icons */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-white/10"
          style={{
            top: item.top,
            left: item.left,
            fontSize: `${item.size}px`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Floating Images */}
      {[Img1, Img2, Img3].map((img, i) => (
        <motion.div
          key={i}
          className="absolute rounded-3xl overflow-hidden
                     border border-white/10
                     backdrop-blur-xl
                     bg-white/5
                     shadow-[0_0_40px_rgba(255,255,255,0.05)]"
          style={{
            width: "180px",
            height: "180px",
            top: `${20 + i * 22}%`,
            right: `${5 + i * 8}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
          }}
        >
          <img
            src={img}
            alt=""
            className="object-cover w-full h-full opacity-70"
          />
        </motion.div>
      ))}

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />
    </div>
  );
}


import {
  FaBullhorn,
  FaLightbulb,
} from "react-icons/fa";

function VisionMissionSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      {/* ================= Background ================= */}
      <div className="absolute inset-0 -z-30 bg-[#050816]" />

      {/* Aurora Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-[900px] h-[900px]
        rounded-full
        bg-indigo-600/20
        blur-[180px]
        -z-20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0
        w-[500px] h-[500px]
        bg-cyan-500/10
        rounded-full
        blur-[150px]
        -z-20"
        animate={{
          x: [-30, 40, -30],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      {/* Grid */}
      <div
        className="
        absolute inset-0 -z-10
        opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      {/* ================= Content ================= */}
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-indigo-300 border rounded-full bg-white/5 border-white/10">
            AI Solutions • Digital Marketing • Automation
          </span>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Driving Growth Through
            <span className="block text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text">
              AI & Digital Innovation
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-400">
            We help businesses scale faster through intelligent AI systems,
            marketing automation, data-driven campaigns and modern digital
            transformation strategies that create measurable growth.
          </p>
        </motion.div>

        {/* Vision + Mission Cards */}
        <div className="grid gap-8 mt-20 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-10
            "
          >
            <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-cyan-500/10 group-hover:opacity-100" />

            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500">
              <FaLightbulb className="text-2xl text-white" />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <p className="leading-relaxed text-gray-400">
              To become a global leader in AI-powered business transformation,
              empowering organizations with intelligent automation, predictive
              analytics and innovative digital marketing strategies that drive
              sustainable growth and long-term success.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 text-indigo-300">
                <FaRobot />
                AI Innovation
              </div>

              <div className="flex items-center gap-2 text-cyan-300">
                <FaChartLine />
                Growth Focused
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-10
            "
          >
            <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-500/10 group-hover:opacity-100" />

            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500">
              <FaBullhorn className="text-2xl text-white" />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              Our Mission
            </h3>

            <p className="leading-relaxed text-gray-400">
              Our mission is to deliver cutting-edge AI solutions, performance
              marketing campaigns, CRM automation and intelligent business
              platforms that help organizations improve efficiency, increase
              customer engagement and accelerate revenue growth.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 text-pink-300">
                <FaBullhorn />
                Digital Marketing
              </div>

              <div className="flex items-center gap-2 text-purple-300">
                <FaRobot />
                Smart Automation
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= PREMIUM STATS ================= */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="grid grid-cols-2 gap-4 mt-16 md:grid-cols-4"
>

  {/* Stat 1 */}
  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition">

    <FaRocket className="text-xl text-cyan-400" />

    <div>
      <h4 className="text-2xl font-bold text-white">50+</h4>
      <p className="text-xs text-gray-400">Projects Delivered</p>
    </div>

  </div>

  {/* Stat 2 */}
  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-indigo-400/30 transition">

    <FaUsers className="text-xl text-indigo-400" />

    <div>
      <h4 className="text-2xl font-bold text-white">25+</h4>
      <p className="text-xs text-gray-400">Business Clients</p>
    </div>

  </div>

  {/* Stat 3 */}
  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-pink-400/30 transition">

    <FaChartLine className="text-xl text-pink-400" />

    <div>
      <h4 className="text-2xl font-bold text-white">99%</h4>
      <p className="text-xs text-gray-400">Client Satisfaction</p>
    </div>

  </div>

  {/* Stat 4 */}
  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-yellow-400/30 transition">

    <FaRobot className="text-xl text-yellow-400" />

    <div>
      <h4 className="text-2xl font-bold text-white">24/7</h4>
      <p className="text-xs text-gray-400">Support</p>
    </div>

  </div>

</motion.div>
      </div>
    </section>
  );
}



import {
  FaBuilding,
  FaPalette,
  FaMagic,
} from "react-icons/fa";

function TemplateSwitcher({ template, setTemplate }) {
  const templates = [
    {
      id: "A",
      title: "Corporate",
      icon: <FaBuilding />,
      desc: "Professional business websites",
    },
    {
      id: "B",
      title: "Creative",
      icon: <FaPalette />,
      desc: "Modern creative portfolios",
    },
    {
      id: "C",
      title: "Developer",
      icon: <FaCode />,
      desc: "Technical & SaaS platforms",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-[#050816]">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora Glow */}
      <motion.div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-indigo-600/20
          blur-[180px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
        animate={{
          x: [-30, 40, -30],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* ================= Content ================= */}

      <div className="relative z-10 px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">

          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-indigo-300 border rounded-full border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <FaMagic />
            Premium Website Templates
          </div>

          <h2
            className="mb-6 text-4xl font-extrabold text-white md:text-4xl"
          >
            Explore Our
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400"
            >
              Premium Templates
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Discover professionally crafted website designs tailored for
            businesses, startups, agencies, creators and SaaS products.
          </p>
        </div>

        {/* ================= Template Tabs ================= */}

        <div className="flex justify-center mb-16 mt-14">

          <div
            className="
              relative
              flex
              p-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
            "
          >
            {templates.map((item) => (
              <button
                key={item.id}
                onClick={() => setTemplate(item.id)}
                className="relative z-10 px-8 py-4 transition-all duration-300 rounded-xl"
              >
                {template === item.id && (
                  <motion.div
                    layoutId="activeTemplate"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <div className="relative flex items-center gap-3">
                  <span
                    className={`text-lg ${
                      template === item.id
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <div className="text-left">
                    <p
                      className={`font-semibold ${
                        template === item.id
                          ? "text-white"
                          : "text-gray-300"
                      }`}
                    >
                      {item.title}
                    </p>

                    <p
                      className={`text-xs ${
                        template === item.id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= Template Content ================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={template}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            {template === "A" && <TemplateA />}
            {template === "B" && <TemplateB />}
            {template === "C" && <TemplateC />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}





import {
  FaCheckCircle,
} from "react-icons/fa";

function TemplateA() {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      desc: "Intelligent automation, AI chatbots, workflow optimization and predictive analytics.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "SEO, social media campaigns, lead generation and conversion-focused marketing.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Platforms",
      desc: "Scalable SaaS applications, CRM systems and enterprise-grade cloud deployments.",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[40px] bg-[#050816] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-[800px] h-[800px]
        rounded-full
        bg-indigo-600/20
        blur-[180px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div
        className="
        absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      <div className="relative z-10 px-8 py-24 lg:px-16">

        {/* Hero */}
        <div className="max-w-5xl mx-auto mt-5 text-center">

          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-indigo-300 border rounded-full border-white/10 bg-white/5 backdrop-blur-xl"
          >
            Enterprise Digital Solutions
          </span>

          <h1
            className="mt-8 text-5xl font-black leading-tight md:text-5xl"
          >
            Accelerate Growth With
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400"
            >
              AI & Digital Innovation
            </span>
          </h1>

          <p
            className="max-w-3xl mx-auto mt-8 text-lg leading-relaxed text-gray-400 "
          >
            ReadyTech Solutions helps businesses transform operations,
            automate workflows, improve customer engagement, and scale
            revenue through AI-powered technology and performance-driven
            digital marketing.
          </p>

        </div>

        {/* Stats */}
<div className="grid gap-6 mt-10 md:grid-cols-4">

  {[
    { value: "50+", label: "Projects Delivered", icon: "🚀" },
    { value: "25+", label: "Business Clients", icon: "🤝" },
    { value: "99%", label: "Client Satisfaction", icon: "⭐" },
    { value: "24/7", label: "Support", icon: "🛟" },
  ].map((item, i) => (
    <div
      key={i}
      className="
        relative group
        p-8
        text-center
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all duration-300
        hover:scale-[1.04]
        hover:bg-white/[0.06]
        hover:border-indigo-500/40
        overflow-hidden
      "
    >
      {/* Glow background on hover */}
      <div className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 blur-2xl" />

      {/* Icon */}
      <div className="flex justify-center mb-3">
        <div className="p-3 text-2xl transition border rounded-xl bg-white/5 border-white/10 group-hover:border-indigo-500/30">
          {item.icon}
        </div>
      </div>

      {/* Value */}
      <h3 className="text-3xl font-bold tracking-tight text-white">
        {item.value}
      </h3>

      {/* Label */}
      <p className="mt-2 text-sm text-gray-400">
        {item.label}
      </p>

      {/* underline animation */}
      <div className="mx-auto mt-4 h-[2px] w-10 bg-indigo-500/30 group-hover:w-16 transition-all duration-300 rounded-full" />
    </div>
  ))}
</div>

        {/* Services */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center">
            Core Business Solutions
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-400">
            Innovative services designed to improve efficiency,
            customer engagement and business growth.
          </p>

          <div className="grid gap-8 mt-14 lg:grid-cols-3">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
              >
                <div
                  className="flex items-center justify-center w-16 h-16 text-2xl rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                >
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid gap-12 mt-28 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-bold">
              Why Businesses Choose ReadyTech
            </h2>

            <p className="mt-6 text-gray-400">
              We combine technology expertise, AI innovation
              and digital marketing excellence to help businesses
              achieve sustainable growth.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "AI-Powered Business Automation",
                "Lead Generation & Growth Marketing",
                "Scalable SaaS & CRM Platforms",
                "Enterprise Security Standards",
                "Performance-Focused Development",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-10
          "
          >
            <h3 className="text-3xl font-bold">
              Business Impact
            </h3>

            <div className="mt-8 space-y-8">

              <div>
                <div className="flex justify-between">
                  <span>Automation Efficiency</span>
                  <span>95%</span>
                </div>

                <div className="h-3 mt-2 rounded-full bg-white/10">
                  <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Lead Conversion Growth</span>
                  <span>88%</span>
                </div>

                <div className="h-3 mt-2 rounded-full bg-white/10">
                  <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Client Retention</span>
                  <span>98%</span>
                </div>

                <div className="h-3 mt-2 rounded-full bg-white/10">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


function TemplateB() {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      desc: "AI chatbots, workflow automation, intelligent assistants and business process optimization.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "SEO, paid advertising, social media growth and lead generation campaigns.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Platforms",
      desc: "Scalable SaaS applications, CRM systems and enterprise cloud solutions.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Analytics",
      desc: "Advanced reporting, customer insights and performance tracking.",
    },
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "E-Commerce",
    "Real Estate",
    "Education",
    "Logistics",
    "Manufacturing",
    "SaaS Startups",
  ];

  const benefits = [
    "AI-Powered Automation",
    "Performance Marketing Expertise",
    "Scalable Cloud Architecture",
    "Enterprise Security Standards",
    "Dedicated Support Team",
    "Transparent Delivery Process",
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "25+", label: "Business Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support & Monitoring" },
  ];

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-[#050816] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      <motion.div
        className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[180px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div
        className="
        absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      <div className="relative z-10 px-6 py-24 lg:px-12">

        {/* HERO */}
        <div className="max-w-5xl mx-auto text-center">

          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-white/10 bg-white/5 text-cyan-300 backdrop-blur-xl"
          >
            <FaLightbulb />
            Digital Marketing • AI Solutions
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-5xl">
            Building
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text">
              Intelligent Growth
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg leading-relaxed text-gray-400">
            ReadyTech Solutions helps businesses scale faster through
            AI-powered automation, digital marketing strategies,
            cloud technologies and enterprise-grade software solutions.
          </p>

          
        </div>

        {/* STATS */}
        <div className="grid gap-6 mt-10 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              p-8
              text-center
              backdrop-blur-xl
            "
            >
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="mt-2 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center">
            Core Capabilities
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-400">
            End-to-end solutions designed to accelerate growth,
            improve efficiency and strengthen your digital presence.
          </p>

          <div className="grid gap-8 mt-14 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
              "
              >
                <div
                  className="flex items-center justify-center w-16 h-16 text-2xl rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500"
                >
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-12 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-6
                text-center
                transition
                hover:-translate-y-1
                backdrop-blur-xl
              "
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Process
          </h2>

          <div className="grid gap-8 md:grid-cols-4">

            {[
              "Discovery",
              "Strategy",
              "Execution",
              "Optimization",
            ].map((step, index) => (
              <div
                key={index}
                className="
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-8
                text-center
                backdrop-blur-xl
              "
              >
                <div
                  className="flex items-center justify-center mx-auto font-bold rounded-full h-14 w-14 bg-gradient-to-r from-indigo-500 to-cyan-500"
                >
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE */}
        <div className="grid gap-12 mt-28 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-bold">
              Why Choose ReadyTech Solutions
            </h2>

            <p className="mt-6 text-gray-400">
              We combine creativity, technology and business strategy
              to deliver measurable results and sustainable growth.
            </p>

            <div className="mt-8 space-y-4">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400" />
                  <span>{item}</span>
                </div>
              ))}

            </div>
          </div>

          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-10
            backdrop-blur-xl
          "
          >
            <div className="flex items-center gap-4">
              <FaUsers className="text-4xl text-cyan-400" />
              <div>
                <h3 className="text-2xl font-bold">
                  Trusted Growth Partner
                </h3>
                <p className="text-gray-400">
                  Helping businesses innovate and scale.
                </p>
              </div>
            </div>

            <p className="mt-8 leading-relaxed text-gray-400">
              Our team specializes in AI systems, digital marketing,
              CRM platforms, automation workflows and cloud-based
              applications that improve productivity and revenue.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div
          className="
          mt-28
          rounded-[40px]
          border border-white/10
          bg-gradient-to-r
          from-indigo-600/20
          via-purple-600/20
          to-cyan-600/20
          p-14
          text-center
        "
        >
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-300">
            Partner with ReadyTech Solutions to build smarter systems,
            stronger marketing strategies and sustainable growth.
          </p>

          <div className="flex flex-col justify-center gap-5 mt-10 sm:flex-row">

  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500"
    >
      Let's Get Started
      <FaArrowRight size={16} />
    </Link>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to="/services"
      className="inline-flex items-center px-8 py-4 font-semibold text-white border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl hover:bg-white/10"
    >
      Explore Services
    </Link>
  </motion.div>

</div>
        </div>

      </div>
    </section>
  );
}





function TemplateC() {
  const navigate = useNavigate();

  const solutions = [
  {
    icon: <FaRobot className="text-3xl text-white" />,
    title: "AI Automation",
    desc: "Automate repetitive tasks, streamline workflows and improve operational efficiency using intelligent AI systems.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaBullhorn className="text-3xl text-white" />,
    title: "Digital Marketing",
    desc: "Performance-driven SEO, paid advertising and growth campaigns designed to maximize ROI.",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-white" />,
    title: "CRM & SaaS Platforms",
    desc: "Scalable business platforms that improve customer engagement and operational management.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: <FaCloud className="text-3xl text-white" />,
    title: "Cloud Infrastructure",
    desc: "Secure, scalable and highly available cloud environments engineered for business growth.",
    color: "from-emerald-500 to-cyan-600",
  },
];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "25+", label: "Global Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-5xl text-sky-400" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-5xl text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-400" />,
  },
  {
    name: "AWS",
    icon: <FaAws className="text-5xl text-orange-400" />,
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-5xl text-blue-400" />,
  },
  {
    name: "OpenAI",
    icon: <SiOpenai className="text-5xl text-emerald-400" />,
  },
  {
    name: "Google Ads",
    icon: <SiGoogleads className="text-5xl text-yellow-400" />,
  },
  {
    name: "Meta Ads",
    icon: <SiMeta className="text-5xl text-blue-500" />,
  },
];



  return (
    <section className="relative overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      <div
        className="
        absolute inset-0 opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      <div className="relative z-10 px-6 py-20 mx-auto max-w-7xl">

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center">

          <span
            className="inline-flex items-center px-4 py-2 text-sm border rounded-full border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
          >
            AI Solutions • Digital Marketing • SaaS Development
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Accelerating
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text">
              Digital Transformation
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400">
            Ready Tech Solutions helps businesses scale faster with
            AI-powered automation, digital marketing strategies,
            cloud-native platforms and enterprise-grade software solutions.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 mt-10 font-semibold transition rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-6 mt-20 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              p-8
              text-center
              backdrop-blur-xl
            "
            >
              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

       {/* Solutions */}
<div className="mt-24">

  <div className="text-center">
    <span
      className="inline-flex px-4 py-2 text-sm border rounded-full border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
    >
      Core Expertise
    </span>

    <h2 className="mt-5 text-4xl font-black md:text-5xl">
      Business Solutions
    </h2>

    <p className="max-w-2xl mx-auto mt-4 text-gray-400">
      Comprehensive digital solutions designed to accelerate growth,
      automate operations and improve customer experiences.
    </p>
  </div>

  <div className="grid gap-8 mt-14 md:grid-cols-2 xl:grid-cols-4">

    {solutions.map((item, index) => (
      <div
        key={index}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-500/30
      "
      >

        {/* Glow */}
        <div
          className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-20
          transition-opacity
          duration-500
          bg-gradient-to-br
          ${item.color}
        `}
        />

        {/* Icon */}
        <div
          className={`
          relative
          flex
          items-center
          justify-center
          w-16 h-16
          rounded-2xl
          bg-gradient-to-r
          ${item.color}
          text-white
          text-2xl
          shadow-lg
        `}
        >
          {item.icon}
        </div>

        {/* Content */}
        <div className="relative">

          <h3 className="mt-6 text-xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-relaxed text-gray-400">
            {item.desc}
          </p>

          <div
            className="flex items-center gap-2 mt-6 text-sm font-medium text-cyan-300"
          >
            Learn More →
          </div>

        </div>

      </div>
    ))}

  </div>

</div>

        {/* Technology */}
        <div className="mt-24">
  <h2 className="text-4xl font-bold text-center">
    Technology Ecosystem
  </h2>

  <p className="max-w-2xl mx-auto mt-4 text-center text-gray-400">
    Modern technologies powering scalable digital experiences.
  </p>

  <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-4">
    {techStack.map((tech, index) => (
      <div
        key={index}
        className="
          group
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-8
          text-center
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500/40
        "
      >
        <div className="flex justify-center">
          {tech.icon}
        </div>

        <h3 className="mt-4 font-semibold text-white">
          {tech.name}
        </h3>
      </div>
    ))}
  </div>
</div>

        {/* Success Story */}
        <div className="mt-24">

          <div
            className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.04]
            p-12
            backdrop-blur-xl
          "
          >
            <h2 className="text-4xl font-bold">
              Driving Real Business Impact
            </h2>

            <p className="mt-6 text-lg text-gray-400">
              Our solutions help organizations automate processes,
              improve customer experiences, increase lead generation,
              and create sustainable digital growth.
            </p>

            <div className="grid gap-6 mt-10 md:grid-cols-3">

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  40%
                </h3>
                <p className="text-gray-400">
                  Faster Operations
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-400">
                  3X
                </h3>
                <p className="text-gray-400">
                  Lead Generation Growth
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                  99.9%
                </h3>
                <p className="text-gray-400">
                  Platform Reliability
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div
          className="
          mt-24
          rounded-[40px]
          border border-white/10
          bg-gradient-to-r
          from-indigo-600/20
          via-purple-600/20
          to-cyan-600/20
          p-14
          text-center
        "
        >
          <h2 className="text-4xl font-bold">
            Ready to Build the Future?
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-300">
            Partner with Ready Tech Solutions to transform your ideas
            into scalable digital products powered by AI and innovation.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 mt-8 font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500"
          >
            Schedule a Consultation
          </button>
        </div>

      </div>
    </section>
  );
}


