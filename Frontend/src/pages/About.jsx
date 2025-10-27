import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRobot,
  FaCloud,
  FaBullseye,
  FaLightbulb,
  FaHeart,
  FaMapMarkerAlt,
  FaMicrochip,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import InnovationImg from "../assets/images/C1.jpg";
import AIImg from "../assets/images/unnamed.webp";

export default function AboutReadyTech() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const locations = [
    {
      city: "Coimbatore",
      address: "149 2nd Floor, Hopes, Coimbatore, Tamil Nadu",
      phone: "+91 7010797721",
    },
    {
      city: "Coimbatore",
      address:
        "Tidel Park, Peelamedu, B.R. Puram Industrial Estate, Coimbatore, Tamil Nadu 641014",
      phone: "+91 7010797721",
    },
    {
      city: "Bangalore",
      address:
        "2nd floor, Hanumanthappa building, 21/8, Konanakunte Cross Rd, Vasanthapura, Bikasipura, Bangalore, Karnataka",
      phone: "+91 7010797721",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100">
      <Helmet>
        <title>About Us | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Discover how Ready Tech Solutions drives innovation with AI, automation, and smart IT systems."
        />
      </Helmet>

      {/* === FULL BACKGROUND WITH TWO IMAGES === */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Two blended background layers */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-70 animate-bgShift"
          style={{
            backgroundImage: `url(${AIImg})`,
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-center bg-cover opacity-50 mix-blend-overlay animate-bgShiftReverse"
          style={{
            backgroundImage: `url(${InnovationImg})`,
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Overlay gradient for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* === PAGE CONTENT === */}
      <section className="relative flex flex-col items-center justify-center text-center text-white py-28">
        <div className="relative z-10 px-6" data-aos="zoom-in">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl drop-shadow-lg">
            We Build the Future with AI & Technology
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200/90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Since 2019, Ready Tech Solutions has redefined innovation with
            automation, data-driven systems, and AI products that empower
            businesses to scale smarter.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative z-10 max-w-6xl px-6 py-20 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Our Expertise in AI & Digital Innovation
            </h2>
            <p className="mb-6 leading-relaxed text-gray-300">
              We craft next-gen AI systems that automate workflows, optimize
              decisions, and unlock digital growth opportunities.
            </p>
            <p className="mb-6 leading-relaxed text-gray-300">
              Our tech stack spans predictive analytics, cloud solutions, and
              ML-powered automation — blending innovation with intelligence.
            </p>
            <p className="leading-relaxed text-gray-300">
              Each solution we design evolves with your business, adapting to
              the ever-changing digital landscape.
            </p>
          </div>
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src={AIImg}
              alt="AI Development Illustration"
              className="h-auto p-4 mx-auto border shadow-xl rounded-2xl w-80 bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 animate-float"
            />
          </div>
        </div>
      </section>

      {/* FLOW SECTION */}
      <section className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white" data-aos="fade-up">
            Innovation Flows Through Everything We Do
          </h2>
          <div className="grid ">
            <div data-aos="fade-right">
              {/* <img
                src={InnovationImg}
                alt="Innovation Illustration"
                className="border shadow-xl rounded-2xl border-cyan-500/30"
              /> */}
            </div>
            <div className="flex flex-col justify-center" data-aos="fade-left">
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Innovation isn’t a department — it’s our DNA. From AI-powered
                customer support to automated analytics pipelines, every project
                we build is designed to create impact, speed, and intelligence.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                We believe technology should evolve alongside you — transforming
                ideas into intelligent systems that move industries forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative z-10 py-16 border-t border-gray-800 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl px-6 mx-auto text-center" data-aos="fade-up">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Capabilities</h2>
          <div className="grid gap-12 md:grid-cols-3">
            <StatCard icon={<FaRobot />} title="AI Development" value={95} />
            <StatCard icon={<FaCloud />} title="Web Development" value={90} />
            <StatCard icon={<FaMicrochip />} title="BPO Services" value={88} />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative z-10 grid max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
        <MissionCard />
        <VisionCard />
      </section>

      {/* VALUES */}
      <section className="relative z-10 py-20 bg-black/60" data-aos="fade-up">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ValueCard
              icon={<FaHeart />}
              title="Innovation"
              description="Exploring new frontiers in AI and automation to redefine possibilities."
            />
            <ValueCard
              icon={<FaHeart />}
              title="Integrity"
              description="We build technology with transparency, ethics, and impact."
            />
            <ValueCard
              icon={<FaHeart />}
              title="Excellence"
              description="Delivering world-class solutions that exceed standards."
            />
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="relative z-10 py-20 border-t border-gray-800 bg-black/40" data-aos="zoom-in">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Locations</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 transition transform border shadow-lg bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-cyan-500/20 rounded-xl hover:-translate-y-1 hover:shadow-cyan-500/40"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="flex justify-center mb-4 text-3xl text-cyan-400 animate-bounce">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">{loc.city}</h4>
                <p className="text-sm text-gray-300">{loc.address}</p>
                <p className="mt-2 text-sm font-medium text-cyan-400">
                  {loc.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
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

/* COMPONENTS */
function StatCard({ icon, title, value }) {
  return (
    <div
      className="p-6 transition border shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 rounded-xl hover:shadow-cyan-500/40 hover:-translate-y-1"
      data-aos="flip-left"
    >
      <div className="flex items-center justify-center mb-4 text-4xl text-cyan-400 animate-pulse">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-gray-300">{value}%</p>
      <div className="h-2 mt-2 bg-gray-700 rounded-full">
        <div
          className="h-2 rounded-full bg-cyan-400"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function MissionCard() {
  return (
    <div
      className="p-8 transition border shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 rounded-xl hover:shadow-cyan-500/40"
      data-aos="fade-right"
    >
      <h3 className="flex items-center gap-2 mb-4 text-2xl font-bold text-cyan-400">
        <FaBullseye /> Mission
      </h3>
      <p className="leading-relaxed text-gray-300">
        Empower businesses with intelligent, scalable AI systems that simplify
        challenges, automate processes, and drive measurable growth.
      </p>
    </div>
  );
}

function VisionCard() {
  return (
    <div
      className="p-8 transition border shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 rounded-xl hover:shadow-cyan-500/40"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <h3 className="flex items-center gap-2 mb-4 text-2xl font-bold text-cyan-400">
        <FaLightbulb /> Vision
      </h3>
      <p className="leading-relaxed text-gray-300">
        Lead the global AI transformation by creating systems that think, learn,
        and evolve — revolutionizing industries with intelligent progress.
      </p>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div
      className="p-6 transition transform border shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-500/20 rounded-xl hover:shadow-cyan-500/40 hover:-translate-y-1"
      data-aos="zoom-in-up"
    >
      <div className="flex justify-center mb-4 text-3xl text-cyan-400 animate-pulse">
        {icon}
      </div>
      <h4 className="mb-2 text-xl font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
