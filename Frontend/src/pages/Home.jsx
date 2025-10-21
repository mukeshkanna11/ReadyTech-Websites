import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaDatabase,
  FaLock,
  FaReact,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";

// 🖼️ Local floating images (tech-style)
import BgVision from "../assets/images/bg-vision.jpg";
import BgHero from "../assets/images/bg-hero.jpg";
import Img1 from "../assets/images/image1.png";
import Img2 from "../assets/images/image2.png";
import Img3 from "../assets/images/image3.png";

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

{/* -------------------- Hero Section -------------------- */}
<section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center sm:px-16 bg-hero">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-overlay -z-5"></div>

  {/* Hero Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="z-10 max-w-3xl"
  >
    <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl text-gradient">
      Transforming Ideas Into Digital Excellence
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
      At <span className="font-semibold text-indigo-400">Ready Tech Solutions</span>, we craft intelligent, scalable, and secure platforms — blending <span className="font-semibold text-pink-400">AI innovation</span> and <span className="font-semibold text-yellow-300">cloud architecture</span>.
    </p>

    <div className="flex flex-col items-center justify-center gap-6 mt-12 sm:flex-row">
      <motion.a
        href="/services"
        whileHover={{ scale: 1.08 }}
        className="inline-block px-10 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 bg-yellow-300 rounded-full shadow-lg hover:bg-yellow-400"
      >
        Explore Services
      </motion.a>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.08 }}
        className="inline-block px-10 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600"
      >
        Contact Us
      </motion.a>
    </div>
  </motion.div>
</section>




      {/* -------------------- Vision & Mission -------------------- */}
      <VisionMissionSection />

      {/* -------------------- Template Switcher -------------------- */}
      <TemplateSwitcher template={template} setTemplate={setTemplate} />
    </div>
  );
}

/* -------------------- Animated Background Component -------------------- */
function AnimatedBackground() {
  const icons = [
    <FaReact />,
    <FaRobot />,
    <FaLock />,
    <FaLaptopCode />,
    <FaCloud />,
    <FaGlobe />,
    <FaChartLine />,
    <FaDatabase />,
    <FaCode />,
  ];

  const images = [Img1, Img2, Img3];

  return (
    <div className="absolute inset-0 overflow-hidden -z-30">
      {/* Moving Grid */}
      <motion.div
        className="absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]"
        animate={{
          backgroundPosition: ["0px 0px", "70px 70px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Gradient Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-transparent to-black" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.25),_transparent_70%)]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Icons */}
      {[...Array(20)].map((_, i) => {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const size = 25 + Math.random() * 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 15 + Math.random() * 30;
        const blur = 4 + Math.random() * 8;

        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-indigo-400/25"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: `${size}px`,
              filter: `blur(${blur}px)`,
            }}
            animate={{
              y: [0, -80 + Math.random() * 120, 0],
              x: [0, -50 + Math.random() * 100, 0],
              rotate: [0, 360, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {randomIcon}
          </motion.div>
        );
      })}

      {/* Floating Local Images */}
      {images.map((img, i) => {
        const size = 100 + Math.random() * 150;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 20 + Math.random() * 25;

        return (
          <motion.img
            key={`img-${i}`}
            src={img}
            alt="Floating tech element"
            className="absolute opacity-20"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              objectFit: "contain",
            }}
            animate={{
              y: [0, -60 + Math.random() * 120, 0],
              x: [0, -40 + Math.random() * 80, 0],
              rotate: [0, 20, -20, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* -------------------- Vision & Mission Section -------------------- */
function VisionMissionSection() {
  return (
    

 <section className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-cover -z-10"
    style={{ backgroundImage: "url(/images/bg5-hero.jpg)" }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-gray-950 -z-5"></div>

  <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400"
    >
      Our Vision & Mission
    </motion.h2>

    <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-300">
      We envision a world where technology empowers creativity — blending{" "}
      <span className="font-semibold text-indigo-400">AI</span>,{" "}
      <span className="font-semibold text-pink-400">cloud systems</span>, and{" "}
      <span className="font-semibold text-yellow-400">secure solutions</span>{" "}
      to help businesses grow intelligently.
    </p>

    <div className="grid gap-10 mt-16 md:grid-cols-2">
      {[{
        title: "🌐 Our Vision",
        desc: "To lead global innovation through sustainable, AI-driven digital transformation.",
        color: "from-indigo-600 to-cyan-400",
      },{
        title: "🚀 Our Mission",
        desc: "To design intelligent, scalable, and secure platforms that empower industries worldwide.",
        color: "from-pink-500 to-purple-500",
      }].map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="relative p-8 overflow-hidden text-left transition-all duration-300 border shadow-lg rounded-2xl bg-white/5 backdrop-blur-xl border-white/10"
        >
          <div
            className={`absolute inset-0 opacity-20 blur-3xl bg-gradient-to-tr ${card.color}`}
          ></div>
          <h3 className="mb-3 text-2xl font-bold text-white">{card.title}</h3>
          <p className="text-gray-300">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


  );
}

/* -------------------- Template Switcher -------------------- */
function TemplateSwitcher({ template, setTemplate }) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-950">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-yellow-400">
          Explore Our Templates
        </h2>

        <div className="flex justify-center gap-3 mb-12">
          {["A", "B", "C"].map((t) => (
            <button
              key={t}
              onClick={() => setTemplate(t)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                template === t
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-indigo-500/20 hover:text-indigo-300"
              }`}
            >
              {t === "A" ? "Corporate" : t === "B" ? "Creative" : "Developer"}
            </button>
          ))}
        </div>

        <motion.main
          key={template}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {template === "A" && <TemplateA />}
          {template === "B" && <TemplateB />}
          {template === "C" && <TemplateC />}
        </motion.main>
      </div>
    </section>
  );
}




/* ---------------------- TemplateA Modern Dark UI ---------------------- */
function TemplateA() {
  return (
    <section className="relative overflow-hidden text-white bg-gray-900">

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 bg-purple-500 rounded-full left-1/3 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 bg-pink-500 rounded-full right-1/3 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-30 animate-bounce"></div>
        <div className="absolute bg-indigo-500 rounded-full top-1/2 left-1/4 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow"></div>
      </div>

      {/* Hero Intro */}
      <div className="px-6 py-20 lg:px-16">
        <h1 className="text-4xl font-extrabold leading-tight text-center text-pink-400 md:text-5xl">
          Your Partner for{" "}
          <span className="text-purple-300">Enterprise-Grade Digital Solutions</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-300">
          At <strong className="text-pink-400">ReadyTech Solutions</strong>, we help businesses scale with technology that lasts. From SaaS platforms to enterprise apps, we focus on{" "}
          <span className="font-semibold text-purple-300">speed, security, and measurable growth</span>.
        </p>

        {/* Business Outcomes */}
        <div className="grid gap-6 mt-16 sm:grid-cols-3">
          {[
            { title: "Faster Time-to-Market", desc: "Agile processes cut development timelines by up to 30%, helping you launch faster.", color: "from-purple-800/60 to-purple-600/40" },
            { title: "Lower Costs, Higher ROI", desc: "Optimized codebases save clients an average of 25% in operational costs.", color: "from-pink-800/60 to-pink-600/40" },
            { title: "Future-Proof Technology", desc: "Latest MERN stack and cloud-native deployments to keep your product relevant.", color: "from-yellow-800/60 to-yellow-600/40" },
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-xl shadow-xl bg-gradient-to-br ${item.color} backdrop-blur-md hover:scale-105 transition`}>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
      {/* Trusted by Businesses Section */}
<div className="relative mt-20 overflow-hidden text-center">
  <h2 className="text-2xl font-bold text-pink-400">
    Trusted by Businesses Worldwide 🌍
  </h2>
  <p className="mt-2 text-gray-300">
    From startups in Silicon Valley to SMEs in Europe — ReadyTech delivers secure, scalable, and user-friendly platforms.
  </p>

  {/* Gradient overlays for soft fade edges */}
  <div className="absolute top-0 left-0 w-24 h-full pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>
  <div className="absolute top-0 right-0 w-24 h-full pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>

  {/* Scrolling Logo Carousel */}
  <div className="relative mt-10 overflow-hidden">
    <div className="flex animate-scroll-fast gap-16 w-max hover:[animation-play-state:paused]">
      <img
        src={Img1}
        alt="Client Logo 1"
        className="object-contain w-40 h-40 transition-transform duration-300 opacity-85 hover:opacity-100 hover:scale-110"
      />
      <img
        src={Img2}
        alt="Client Logo 2"
        className="object-contain w-40 h-40 transition-transform duration-300 opacity-85 hover:opacity-100 hover:scale-110"
      />
      <img
        src={Img3}
        alt="Client Logo 3"
        className="object-contain w-40 h-40 transition-transform duration-300 opacity-85 hover:opacity-100 hover:scale-110"
      />
      <img
        src={Img1}
        alt="Client Logo 4"
        className="object-contain w-40 h-40 transition-transform duration-300 opacity-85 hover:opacity-100 hover:scale-110"
      />
      <img
        src={Img2}
        alt="Client Logo 5"
        className="object-contain w-40 h-40 transition-transform duration-300 opacity-85 hover:opacity-100 hover:scale-110"
      />
      <img
        src={Img3}
        alt="Client Logo 6"
        className="object-contain w-40 h-40 transition-transform duration-300 opacity-85 hover:opacity-100 hover:scale-110"
      />
    </div>
  </div>
</div>



        {/* Core Services */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-pink-400">Our Core Services</h2>
          <p className="max-w-2xl mx-auto mt-2 text-center text-gray-300">
            Full-stack solutions aligned with your business goals.
          </p>
          <div className="grid gap-6 mt-12 sm:grid-cols-3">
            {[
              { title: "Custom Software", desc: "Tailored applications built for scalability and security.", color: "from-purple-800/60 to-purple-600/40" },
              { title: "UI/UX Design", desc: "Creating intuitive interfaces that boost engagement.", color: "from-pink-800/60 to-pink-600/40" },
              { title: "Cloud & DevOps", desc: "Optimized deployments with high availability & performance.", color: "from-yellow-800/60 to-yellow-600/40" },
            ].map((service, idx) => (
              <div key={idx} className={`p-6 text-center rounded-xl shadow-xl bg-gradient-to-br ${service.color} backdrop-blur-md hover:scale-105 transition`}>
                <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-pink-400">Case Studies</h2>
          <div className="grid gap-6 mt-12 sm:grid-cols-2">
            {[
              { title: "FinTech SaaS Platform", desc: "Reduced transaction processing time by 40% with optimized backend APIs and scalable cloud deployment.", color: "from-purple-700/50 to-purple-500/40" },
              { title: "Healthcare Data Portal", desc: "Improved patient record management with secure HIPAA-compliant software, cutting downtime by 60%.", color: "from-pink-700/50 to-pink-500/40" },
            ].map((caseStudy, idx) => (
              <div key={idx} className={`p-6 rounded-xl shadow-xl bg-gradient-to-br ${caseStudy.color} backdrop-blur-md hover:scale-105 transition`}>
                <h4 className="text-xl font-semibold text-white">{caseStudy.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{caseStudy.desc}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}




/* ---------------------- TemplateB Modern Dark UI ---------------------- */
function TemplateB() {
  return (
    <section className="overflow-hidden text-gray-100 bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-xl">
      {/* Company Introduction */}
      <div className="px-6 py-16 mx-auto max-w-7xl md:flex md:items-start md:gap-16">
        <div className="space-y-6 md:w-1/2">
          <div className="p-8 border border-gray-700 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900">
            <h2 className="mb-4 text-4xl font-extrabold text-pink-400">
              ReadyTech Solutions – Engineering Digital Excellence
            </h2>
            <p className="text-lg text-gray-300">
              At <span className="font-semibold text-pink-400">ReadyTech Solutions</span>, we deliver
              <span className="font-semibold text-indigo-400"> end-to-end software solutions</span> that empower businesses to thrive in the digital era.
              Our team combines <span className="font-semibold text-indigo-400">UX-focused design</span>
              with <span className="font-semibold text-indigo-400">robust engineering</span> to create products that are visually compelling, technically strong, and market-ready.
            </p>
            <p className="mt-3 text-gray-400">
              Serving clients across the US and domestic markets, we provide innovative solutions that streamline operations, enhance customer engagement, and drive measurable growth.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
              <li>Custom Web & Mobile Application Development</li>
              <li>Cloud-Native & Scalable Systems</li>
              <li>AI-Powered Automation & Smart Workflows</li>
              <li>Intuitive UI/UX Designs for Maximum Engagement</li>
              <li>Data Security & Compliance with Global Standards</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Visual Elements */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:w-1/2 md:mt-0">
          <div className="p-6 border shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-pink-500/40">
            <h3 className="text-lg font-semibold text-pink-400">Custom Software Solutions</h3>
            <p className="mt-2 text-gray-300">
              Tailored applications that align with your business objectives, improving efficiency and user satisfaction.
            </p>
          </div>
          <div className="p-6 border shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500/40">
            <h3 className="text-lg font-semibold text-cyan-400">Cloud & Scalable Systems</h3>
            <p className="mt-2 text-gray-300">
              Cloud-native architectures designed for high performance, security, and effortless scalability.
            </p>
          </div>
          <div className="p-6 border shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-indigo-500/40">
            <h3 className="text-lg font-semibold text-indigo-400">UX/UI Design Excellence</h3>
            <p className="mt-2 text-gray-300">
              Engaging, accessible, and responsive interfaces that boost conversion and retention.
            </p>
          </div>
          <div className="p-6 border shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-500/40">
            <h3 className="text-lg font-semibold text-yellow-400">AI & Automation</h3>
            <p className="mt-2 text-gray-300">
              Intelligent automation for smarter workflows, reduced errors, and faster decision-making.
            </p>
          </div>
          <div className="p-6 border shadow-lg rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/40">
            <h3 className="text-lg font-semibold text-green-400">Consulting & Support</h3>
            <p className="mt-2 text-gray-300">
              Expert guidance for technology adoption and continuous support for sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="py-16 bg-gradient-to-r from-gray-950 to-black">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-pink-400">Industries We Serve</h2>
          <p className="mb-12 text-gray-300">
            From healthcare to finance, e-commerce to agriculture, our solutions are tailored to fit diverse industries and deliver tangible results.
          </p>
          <div className="grid grid-cols-2 gap-8 text-gray-200 md:grid-cols-4">
            {[
              "Healthcare",
              "Finance & Banking",
              "E-Commerce",
              "Agriculture & Farming",
              "Education",
              "Logistics & Transport",
              "Real Estate",
              "SaaS & Startups",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 transition-transform bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:scale-105"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-pink-400">Our Proven Process</h2>
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-4">
          {[
            { step: "1. Discovery", color: "text-pink-400", desc: "We understand your goals, audience, and challenges to define a clear roadmap." },
            { step: "2. Design", color: "text-cyan-400", desc: "We create wireframes, prototypes, and intuitive designs that resonate with users." },
            { step: "3. Development", color: "text-indigo-400", desc: "Our engineers build scalable, reliable, and maintainable solutions using best practices." },
            { step: "4. Launch & Support", color: "text-yellow-400", desc: "We deploy your product and provide continuous monitoring, updates, and support." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-800 border border-gray-700 shadow-xl rounded-2xl">
              <h3 className={`text-lg font-semibold ${item.color}`}>{item.step}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gradient-to-r from-gray-950 to-black">
        <div className="px-6 mx-auto space-y-8 text-center max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-pink-400">Why Choose ReadyTech Solutions?</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            With years of experience, a dedicated team of experts, and a commitment to innovation, we help businesses achieve their digital goals efficiently. Our clients value our transparency, creativity, and ability to deliver on time and within budget.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 text-gray-200 md:grid-cols-3">
            <div className="p-6 transition-shadow bg-gray-800 border shadow-lg border-pink-500/30 rounded-xl hover:shadow-2xl">
              <h3 className="font-semibold text-pink-400">Experienced Team</h3>
              <p className="mt-2">Professionals with deep expertise in full-stack development, design, and AI solutions.</p>
            </div>
            <div className="p-6 transition-shadow bg-gray-800 border shadow-lg border-cyan-500/30 rounded-xl hover:shadow-2xl">
              <h3 className="font-semibold text-cyan-400">Client-Centric Approach</h3>
              <p className="mt-2">We prioritize understanding client needs and delivering solutions that exceed expectations.</p>
            </div>
            <div className="p-6 transition-shadow bg-gray-800 border shadow-lg border-indigo-500/30 rounded-xl hover:shadow-2xl">
              <h3 className="font-semibold text-indigo-400">Proven Results</h3>
              <p className="mt-2">We have successfully helped clients in multiple industries achieve measurable growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      
    </section>
  );
}







/* ---------------------- TemplateC Modern Dark UI ---------------------- */


function TemplateC() {
  const navigate = useNavigate(); // For navigation

  const handleDemoClick = () => {
    navigate("/demo"); // Navigate to Demo page
  };

  return (
    <section className="overflow-hidden text-gray-100 bg-gradient-to-b from-gray-900 via-gray-950 to-black">

      {/* Intro Section */}
      <div className="px-6 py-16 md:flex md:items-center md:gap-12">
        <div className="max-w-2xl md:w-2/3">
          <h1 className="text-3xl font-extrabold text-pink-400 md:text-5xl">
            Fast, Reliable MERN Engineering for Global Clients
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            At <span className="font-semibold text-pink-400">Ready Tech Solutions</span>,
            we engineer scalable web & mobile applications for startups and enterprises.
            Our team ensures clean code, robust APIs, and seamless deployments to exceed expectations.
          </p>

          {/* Feature Highlights */}
          <div className="grid gap-6 mt-10 sm:grid-cols-2">
            {[
              { title: "APIs & Integrations", desc: "REST/GraphQL endpoints with documentation and third-party integrations.", color: "from-purple-700 to-purple-900" },
              { title: "Performance", desc: "Optimized queries, server-side caching, and lazy-loading for lightning-fast apps.", color: "from-pink-700 to-pink-900" },
              { title: "Scalability", desc: "Cloud-native deployments with CI/CD pipelines and microservices.", color: "from-indigo-700 to-indigo-900" },
              { title: "Security", desc: "JWT/OAuth authentication, role-based access, and data encryption.", color: "from-yellow-600 to-yellow-800" }
            ].map((feature, idx) => (
              <div key={idx} className={`p-6 rounded-xl shadow-xl bg-gradient-to-br ${feature.color} hover:scale-105 transition transform`}>
                <h4 className="font-semibold text-white">{feature.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden mt-10 md:block md:w-1/3">
          <div className="flex items-center justify-center p-6 shadow-2xl h-72 bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
              </svg>
              <h3 className="mt-4 text-2xl font-bold text-white">Developer Tools</h3>
              <p className="text-white/80">API Docs • Testing • CI/CD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-6 py-16 bg-gray-900 md:px-12">
        <h2 className="text-3xl font-bold text-center text-pink-400">Our Mission</h2>
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-300">
          Empower businesses with reliable, scalable, and user-centric digital products. Bridging innovation and practicality to drive measurable growth.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="px-6 py-16 bg-gray-950 md:px-12">
        <h2 className="text-3xl font-bold text-center text-purple-400">Our Core Values</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {[
            { icon: "💡", title: "Innovation", desc: "Exploring cutting-edge technologies to deliver next-gen solutions." },
            { icon: "🤝", title: "Collaboration", desc: "Partnering with clients for transparent and impactful results." },
            { icon: "🏆", title: "Excellence", desc: "Delivering quality products with attention to detail and user satisfaction." }
          ].map((value, idx) => (
            <div key={idx} className="p-6 transition bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl">
              <h4 className="text-xl font-semibold text-pink-400">{value.icon} {value.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="px-6 py-16 bg-gray-900 md:px-12">
        <h2 className="text-3xl font-bold text-center text-purple-400">Client Success Stories</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {[
            { title: "🌾 AgriTech Platform", desc: "Streamlined farmer operations with real-time analytics and mobile-first dashboards." },
            { title: "🛍️ E-Commerce Solution", desc: "Responsive marketplace with advanced search, filtering, and checkout experiences." },
            { title: "🎬 Media Streaming App", desc: "Optimized for performance with user-personalized recommendations." }
          ].map((story, idx) => (
            <div key={idx} className="p-6 transition bg-gray-800 shadow rounded-xl hover:shadow-lg">
              <h4 className="font-semibold text-purple-400">{story.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{story.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-6 py-16 bg-gray-950 md:px-12">
        <h2 className="text-3xl font-bold text-center text-pink-400">Our Technology Stack</h2>
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-300">
          Modern frameworks, cloud tools, and enterprise-grade security to ensure every project is robust and scalable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {["⚛️ React", "🟢 Node.js", "🍃 MongoDB", "🐳 Docker", "☁️ AWS", "🔐 OAuth/JWT", "🧪 Jest / Cypress", "📦 Nginx / CI-CD"].map((tech, idx) => (
            <span key={idx} className="px-4 py-2 font-medium text-gray-100 bg-gray-800 shadow rounded-xl">{tech}</span>
          ))}
        </div>
      </div>

      
    </section>
  );
}



