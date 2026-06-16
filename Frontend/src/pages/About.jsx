import React, { memo } from "react";
import {
  FaBuilding,
  FaLock,
  FaGlobe,
  FaLeaf,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

/* ================= MAIN PAGE ================= */
export default function AboutReadyTech() {
  return (
    <div className="min-h-screen text-white bg-black">

      {/* ================= HERO ================= */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Building Software That Thinks, Scales & Evolves
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
            For over a decade, Ready Tech Solutions has taken a different path —
            focusing on deep engineering, long-term thinking, and building
            intelligent systems that help businesses grow sustainably.
          </p>

        </div>
      </section>

      {/* ================= CRAFT SECTION ================= */}
      <Section title="Software is Our Craft">
        <p className="leading-relaxed text-gray-300">
          Good software is not built fast — it is crafted. Our teams focus on
          mastering engineering, design, and AI systems to deliver long-lasting
          value. We don’t treat software as a product alone — it is our craft,
          our discipline, and our identity.
        </p>

        <p className="mt-4 text-gray-300">
          We spend years refining systems so businesses can depend on them for
          decades.
        </p>
      </Section>

      {/* ================= TECHNOLOGY PHILOSOPHY ================= */}
      <Section title="Cutting-Edge Technology Meets Timeless Thinking">
        <p className="text-gray-300">
          We believe technology should solve real problems, anticipate needs,
          and unlock opportunities — not just follow trends.
        </p>

        <Grid>
          <Feature icon={<FaRocket />} title="Long-Term Engineering" />
          <Feature icon={<FaLightbulb />} title="Innovation Driven R&D" />
          <Feature icon={<FaChartLine />} title="Scalable Systems" />
        </Grid>
      </Section>

      {/* ================= PRIVACY ================= */}
      <Section title="A Common Sense Approach to Privacy">
        <p className="leading-relaxed text-gray-300">
          We don’t believe in ads inside products. We don’t sell user data.
          And we never rely on third-party trackers to understand our users.
        </p>

        <div className="grid gap-6 mt-8 md:grid-cols-3">
          <Card icon={<FaLock />} title="No Ads in Products" />
          <Card icon={<FaLock />} title="No Data Selling" />
          <Card icon={<FaLock />} title="User-Controlled Privacy" />
        </div>
      </Section>

      {/* ================= BUSINESS MODEL ================= */}
      <Section title="A Company You Can Trust">
        <p className="leading-relaxed text-gray-300">
          We are independent, self-funded, and long-term focused. This allows us
          to build for customers — not investors or short-term profit cycles.
        </p>

        <Grid>
          <Feature icon={<FaBuilding />} title="Independent Company" />
          <Feature icon={<FaUsers />} title="Customer First Approach" />
          <Feature icon={<FaChartLine />} title="Sustainable Growth" />
        </Grid>
      </Section>

      {/* ================= PLATFORM ================= */}
      <Section title="A New Way to Run Your Business">
        <p className="text-gray-300">
          Ready Tech Solutions is more than a product — it is a connected
          ecosystem of intelligent systems designed to power modern businesses.
        </p>

        <div className="mt-10 text-sm tracking-wider text-cyan-400">
          AI • AUTOMATION • CLOUD • ERP • DIGITAL SYSTEMS
        </div>
      </Section>

      {/* ================= GLOBAL IMPACT ================= */}
      <Section title="Global Reach & Impact">
        <p className="text-gray-300">
          From startups to enterprises, our systems power businesses across
          industries, enabling digital transformation at scale.
        </p>

        <Grid>
          <Feature icon={<FaGlobe />} title="Global Clients" />
          <Feature icon={<FaUsers />} title="Enterprise Users" />
          <Feature icon={<FaRocket />} title="Fast Scaling Systems" />
        </Grid>
      </Section>

      {/* ================= TIMELINE ================= */}
      <Section title="Our Journey">
        <Timeline />
      </Section>

      {/* ================= CLOSING ================= */}
      <section className="py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold">
          A Company You Will Keep
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          We build systems that last — designed to grow with you, not replace you.
        </p>
      </section>

    </div>
  );
}

/* ================= SECTIONS ================= */

const Section = ({ title, children }) => (
  <section className="max-w-5xl px-6 py-20 mx-auto">
    <h2 className="mb-6 text-3xl font-bold text-white">{title}</h2>
    {children}
  </section>
);

const Grid = ({ children }) => (
  <div className="grid gap-6 mt-10 md:grid-cols-3">
    {children}
  </div>
);

/* ================= CARDS ================= */

const Feature = memo(({ icon, title }) => (
  <div className="p-6 transition border rounded-xl bg-white/5 border-white/10 hover:border-cyan-400/40">
    <div className="mb-3 text-3xl text-cyan-400">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </div>
));

const Card = memo(({ icon, title }) => (
  <div className="p-6 text-center border rounded-xl bg-white/5 border-white/10">
    <div className="mb-3 text-3xl text-cyan-400">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </div>
));

/* ================= TIMELINE ================= */

function Timeline() {
  const years = [
    "2000 - Foundation of engineering vision",
    "2008 - First enterprise systems",
    "2015 - Cloud transformation era",
    "2020 - AI & automation expansion",
    "2026 - Intelligent ecosystem platform",
  ];

  return (
    <div className="space-y-4">
      {years.map((y, i) => (
        <div
          key={i}
          className="p-4 text-gray-300 border-l-2 border-cyan-400"
        >
          {y}
        </div>
      ))}
    </div>
  );
}