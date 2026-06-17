import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaLock,
  FaGlobe,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ================= MAIN PAGE ================= */
export default function AboutReadyTech() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black via-zinc-950 to-black">

      {/* ================= PREMIUM HERO ================= */}
<section className="relative flex items-center justify-center px-6 py-40 overflow-hidden text-center">

  {/* Background Glow Layers */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black" />
    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />
    <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />
  </div>

  {/* Subtle Grid Overlay */}
  <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Content Wrapper */}
  <motion.div
    initial="hidden"
    animate="show"
    variants={fadeUp}
    transition={{ duration: 0.7 }}
    className="relative max-w-6xl mx-auto"
  >

    {/* Badge */}
    <div className="inline-flex items-center px-5 py-2 mb-8 text-sm tracking-wider border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md">
      NEXT-GEN SOFTWARE ENGINEERING PLATFORM
    </div>

    {/* Main Title */}
    <h1 className="text-5xl font-extrabold leading-tight md:text-5xl">
      Engineering the Future of{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
        Intelligent Software
      </span>
    </h1>

    {/* Divider Line */}
    <div className="w-24 h-[2px] mx-auto mt-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

    {/* Subtitle */}
    <p className="max-w-3xl mx-auto mt-8 text-lg leading-relaxed text-gray-300 md:text-xl">
      We design scalable AI systems, cloud-native platforms and long-term
      digital ecosystems that evolve with your business — not against it.
    </p>

    {/* Feature Pills */}
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {[
        "AI-Powered Systems",
        "Cloud Native",
        "Scalable Architecture",
        "Enterprise Grade",
      ].map((item) => (
        <span
          key={item}
          className="px-4 py-2 text-sm text-gray-200 border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
        >
          {item}
        </span>
      ))}
    </div>

    {/* CTA Buttons */}
<div className="flex flex-wrap justify-center gap-4 mt-12">
  
  <button
    onClick={() => navigate("/services")}
    className="py-3 font-semibold text-black transition rounded-full shadow-lg px-7 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-500/20"
  >
    Explore Platform
  </button>

  <button
    onClick={() => navigate("/services")}
    className="py-3 font-semibold text-white transition border rounded-full px-7 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md"
  >
    Learn More
  </button>

</div>

  </motion.div>
</section>

      {/* ================= SECTION WRAPPER ================= */}
<Section title="Software is Our Craft">

  <div className="grid items-center gap-12 mt-10 md:grid-cols-2">

    {/* LEFT: MAIN STORY */}
    <div className="space-y-6">

      <p className="text-lg leading-relaxed text-gray-300">
        We don’t rush software. We engineer it with intention, clarity and
        precision — treating every system as a long-term digital foundation,
        not a temporary release.
      </p>

      <p className="leading-relaxed text-gray-400">
        Our focus is on building architecture that stays reliable under scale,
        adapts to change and evolves without breaking its core integrity.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        {[
          "Clean Architecture",
          "Scalable Design",
          "Long-Term Thinking",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT: PREMIUM HIGHLIGHT CARD */}
    <div className="p-8 border shadow-xl rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border-white/10 backdrop-blur-md">

      <h3 className="text-xl font-semibold text-cyan-400">
        Engineering Philosophy
      </h3>

      <div className="w-12 h-[2px] mt-3 mb-6 bg-cyan-400/60" />

      <ul className="space-y-4 text-gray-300">
        <li className="flex gap-3">
          <span className="text-cyan-400">•</span>
          Every system is designed with future scale in mind
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-400">•</span>
          Simplicity is prioritized over unnecessary complexity
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-400">•</span>
          Stability and performance are treated as core features
        </li>

        <li className="flex gap-3">
          <span className="text-cyan-400">•</span>
          Code is engineered to evolve, not to be replaced
        </li>
      </ul>
    </div>

  </div>
</Section>

      {/* ================= PHILOSOPHY ================= */}
<Section title="Technology With Purpose">

  <div className="grid items-center mt-12 gap-14 md:grid-cols-2">

    {/* LEFT: CORE MESSAGE */}
    <div className="space-y-6">

      <p className="text-lg leading-relaxed text-gray-300">
        Technology is not just about solving today’s problems — it is about
        anticipating tomorrow’s challenges before they appear.
      </p>

      <p className="leading-relaxed text-gray-400">
        We design intelligent systems that evolve continuously with your
        business, ensuring scalability, resilience and long-term adaptability
        without constant rebuilding.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        {[
          "Future-Ready Systems",
          "AI-Augmented Thinking",
          "Scalable Foundations",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT: PREMIUM FEATURE STACK */}
    <div className="space-y-5">

      <FeatureCard
        icon={<FaRocket />}
        title="Long-Term Architecture"
        desc="Built to scale from startup load to enterprise-grade systems without redesign."
      />

      <FeatureCard
        icon={<FaLightbulb />}
        title="Innovation-First Thinking"
        desc="We design around possibilities, not limitations — turning ideas into systems."
      />

      <FeatureCard
        icon={<FaCogs />}
        title="Adaptive System Design"
        desc="Systems that learn, evolve and adjust with business growth patterns."
      />

    </div>
  </div>
</Section>

     {/* ================= PRIVACY ================= */}
<Section title="Privacy by Design">

  <div className="grid items-center mt-12 gap-14 md:grid-cols-2">

    {/* LEFT: STORY */}
    <div className="space-y-6">

      <p className="text-lg leading-relaxed text-gray-300">
        Privacy is not an add-on — it is a core engineering principle.
        Every system we build is designed with security, transparency
        and user ownership at its foundation.
      </p>

      <p className="leading-relaxed text-gray-400">
        We eliminate unnecessary data collection, avoid intrusive tracking,
        and ensure full control stays with the user at every layer of the system.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        {[
          "Zero Tracking Philosophy",
          "Data Minimization",
          "User Ownership",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT: SECURITY CARDS */}
    <div className="space-y-5">

      <FeatureCard
        icon={<FaShieldAlt />}
        title="Secure Architecture"
        desc="Systems designed with multiple layers of protection and controlled access."
      />

      <FeatureCard
        icon={<FaLock />}
        title="No Data Selling"
        desc="We never monetize user data — privacy is not a business model."
      />

      <FeatureCard
        icon={<FaUsers />}
        title="User-Controlled Systems"
        desc="Users maintain full control over their data, permissions and visibility."
      />

    </div>
  </div>

</Section>

      {/* ================= BUSINESS MODEL ================= */}
<Section title="Independent & Long-Term Focused">

  <div className="grid items-center mt-12 gap-14 md:grid-cols-2">

    {/* LEFT: STORY */}
    <div className="space-y-6">

      <p className="text-lg leading-relaxed text-gray-300">
        We are an independent, product-first engineering company built on
        long-term thinking — not short-term market pressure or external influence.
      </p>

      <p className="leading-relaxed text-gray-400">
        This independence allows us to prioritize engineering excellence,
        stability, and sustainable innovation over rapid but fragile growth cycles.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        {[
          "Product First Mindset",
          "No External Pressure",
          "Engineering-Led Growth",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT: VALUE CARDS */}
    <div className="space-y-5">

      <FeatureCard
        icon={<FaBuilding />}
        title="Independent Company"
        desc="We operate without external dependency, enabling full control over product vision."
      />

      <FeatureCard
        icon={<FaUsers />}
        title="Customer-Centric Design"
        desc="Every decision starts with user value, not investor expectations or trends."
      />

      <FeatureCard
        icon={<FaChartLine />}
        title="Sustainable Growth Model"
        desc="We scale systems gradually with stability, performance, and reliability in focus."
      />

    </div>

  </div>

</Section>

     {/* ================= PLATFORM ================= */}
<Section title="Unified Digital Ecosystem">

  <div className="grid items-center mt-12 gap-14 md:grid-cols-2">

    {/* LEFT: STORY */}
    <div className="space-y-6 mb-60">

      <p className="text-lg leading-relaxed text-gray-300 ">
        We build a unified digital ecosystem that connects AI intelligence,
        automation systems, cloud infrastructure, and enterprise platforms
        into one seamless operational layer.
      </p>

      <p className="leading-relaxed text-gray-400 ">
        This ecosystem is designed to help businesses modernize operations,
        improve decision-making, and scale efficiently through intelligent
        digital transformation.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        {[
          "AI-Driven Intelligence",
          "Business Automation",
          "Digital Transformation",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT: PLATFORM LAYERS */}
    <div className="space-y-5">

      <FeatureCard
        icon="🤖"
        title="AI Solutions"
        desc="Intelligent systems for prediction, automation, and decision support."
      />

      <FeatureCard
        icon="📈"
        title="Digital Marketing Systems"
        desc="Data-driven marketing automation, SEO intelligence, and growth optimization tools."
      />

      <FeatureCard
        icon="☁️"
        title="Cloud Infrastructure"
        desc="Scalable, secure, and high-performance cloud-native architecture."
      />

      <FeatureCard
        icon="⚙️"
        title="Enterprise Systems"
        desc="ERP, CRM, and operational platforms designed for large-scale business control."
      />

    </div>

  </div>

  {/* TAG STRIP */}
  <div className="text-center mt-14">
    <div className="inline-flex flex-wrap justify-center gap-3 text-sm text-cyan-300">
      {[
        "AI",
        "AUTOMATION",
        "CLOUD",
        "ERP",
        "ANALYTICS",
        "DIGITAL MARKETING",
        "AI SOLUTIONS",
      ].map((item) => (
        <span
          key={item}
          className="px-4 py-2 border rounded-full bg-white/5 border-white/10"
        >
          {item}
        </span>
      ))}
    </div>
  </div>

</Section>

      
      {/* ================= GLOBAL IMPACT ================= */}
<Section title="Global Impact">

  <div className="grid items-center mt-12 gap-14 md:grid-cols-2">

    {/* LEFT: STORY */}
    <div className="space-y-6 mb-50">

      <p className="text-lg leading-relaxed text-gray-300">
        Our systems power businesses across regions, industries and scales —
        from fast-growing startups to large enterprise environments.
      </p>

      <p className="leading-relaxed text-gray-400">
        We focus on building technology that performs consistently under global
        demand, ensuring reliability, speed and scalability at every level.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        {[
          "Multi-Industry Reach",
          "Enterprise Scale Systems",
          "Global Reliability",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10 backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* RIGHT: IMPACT CARDS */}
    <div className="space-y-5">

      <FeatureCard
        icon={<FaGlobe />}
        title="Worldwide Clients"
        desc="We deliver solutions across global markets with scalable architecture."
      />

      <FeatureCard
        icon={<FaUsers />}
        title="Enterprise Adoption"
        desc="Trusted by growing teams and enterprise-level organizations."
      />

      <FeatureCard
        icon={<FaRocket />}
        title="High-Scale Systems"
        desc="Built to handle high traffic, complex workflows and global usage."
      />

    </div>

  </div>

</Section>

      {/* ================= OUR JOURNEY ================= */}
<Section title="Our Journey">

  <div className="max-w-4xl mx-auto mt-12">

    <p className="mb-12 leading-relaxed text-center text-gray-400">
      Since 2019, Ready Tech Solutions has been helping businesses embrace
      digital transformation through innovative software, intelligent automation,
      AI-powered solutions, cloud technologies and digital marketing services.
      What started as a vision to build impactful technology has evolved into a
      trusted technology partner for growing businesses.
    </p>

    <div className="relative pl-10 space-y-10 border-l border-cyan-500/30">

      {[
        {
          year: "2019",
          title: "Company Founded",
          desc: "Started with a mission to deliver reliable software solutions and help businesses accelerate their digital journey.",
        },
        {
          year: "2020",
          title: "Digital Transformation Services",
          desc: "Expanded into web development, cloud-based applications and custom business software for growing organizations.",
        },
        {
          year: "2022",
          title: "Business Growth & Expansion",
          desc: "Successfully delivered projects across multiple industries, helping clients improve efficiency and operational performance.",
        },
        {
          year: "2024",
          title: "AI & Automation Integration",
          desc: "Introduced AI-powered workflows, intelligent automation and advanced business solutions to improve productivity.",
        },
        {
          year: "2026",
          title: "Driving Innovation Forward",
          desc: "Continuing to empower businesses with AI solutions, digital marketing, enterprise systems, cloud technologies and scalable software platforms.",
        },
      ].map((item, index) => (
        <div key={index} className="relative">

          <div className="absolute w-4 h-4 rounded-full -left-[49px] top-2 bg-cyan-400 shadow-lg shadow-cyan-500/50" />

          <div className="p-6 transition-all border rounded-2xl bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/40">

            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20">
              {item.year}
            </span>

            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 leading-relaxed text-gray-400">
              {item.desc}
            </p>

          </div>
        </div>
      ))}
    </div>

  </div>

</Section>

      {/* ================= CLOSING CTA ================= */}
      <section className="relative px-6 py-32 overflow-hidden border-t border-white/10">

  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
  </div>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* Badge */}
    <div className="inline-flex px-4 py-2 mb-6 text-sm tracking-wider border rounded-full text-cyan-300 bg-cyan-500/10 border-cyan-500/20">
      READY TECH SOLUTIONS
    </div>

    {/* Heading */}
    <h2 className="text-4xl font-bold leading-tight md:text-5xl">
      Building Digital Success
      <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text">
        Since 2019
      </span>
    </h2>

    {/* Description */}
    <p className="max-w-3xl mx-auto mt-8 text-lg leading-relaxed text-gray-400">
      From custom software and cloud platforms to AI solutions, automation,
      enterprise systems and digital marketing — we help businesses innovate,
      scale and thrive in a digital-first world.
    </p>

    {/* Service Tags */}
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {[
        "AI Solutions",
        "Digital Marketing",
        "Web Development",
        "Cloud Services",
        "Automation",
        "Enterprise Software",
      ].map((item) => (
        <span
          key={item}
          className="px-4 py-2 text-sm border rounded-full text-cyan-300 bg-white/5 border-white/10"
        >
          {item}
        </span>
      ))}
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mt-12">

      <button
        onClick={() => navigate("/contact")}
        className="px-8 py-4 font-semibold text-black transition-all duration-300 rounded-full shadow-lg group bg-cyan-500 hover:bg-cyan-400 hover:scale-105 shadow-cyan-500/30"
      >
        Get In Touch
        <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>

      <button
        onClick={() => navigate("/services")}
        className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10"
      >
        Explore Services
      </button>

    </div>

    {/* Bottom Trust Line */}
    <p className="mt-12 text-sm tracking-wide text-gray-500">
      Trusted Technology • Intelligent Solutions • Long-Term Partnership
    </p>

  </div>

</section>
    </div>
  );
}

/* ================= SECTION ================= */
const Section = ({ title, children }) => (
  <section className="max-w-6xl px-6 py-24 mx-auto">
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-8 text-4xl font-bold"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

/* ================= GRID ================= */
const Grid = ({ children }) => (
  <div className="grid gap-6 mt-10 md:grid-cols-3">
    {children}
  </div>
);

/* ================= FEATURE CARD ================= */
const Feature = memo(({ icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="p-6 transition border rounded-2xl bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/40"
  >
    <div className="mb-4 text-3xl text-cyan-400">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
  </motion.div>
));

/* ================= TIMELINE ================= */
function Timeline() {
  const items = [
    "2000 — Engineering foundation established",
    "2008 — Enterprise system development begins",
    "2015 — Cloud transformation era",
    "2020 — AI & automation integration",
    "2026 — Intelligent ecosystem platform",
  ];

  return (
    <div className="relative pl-6 space-y-6 border-l border-cyan-400/40">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-300"
        >
          <div className="absolute w-2 h-2 mt-2 rounded-full bg-cyan-400 -left-1" />
          {item}
        </motion.div>



      ))}
    </div>
  );
}
const FeatureCard = memo(({ icon, title, desc }) => {
  return (
    <div className="p-6 transition border shadow-lg rounded-2xl bg-white/5 border-white/10 backdrop-blur-md hover:border-cyan-400/40 hover:shadow-cyan-500/10">

      <div className="flex items-start gap-4">

        <div className="mt-1 text-2xl text-cyan-400">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {desc}
          </p>
        </div>

      </div>
    </div>
  );
});