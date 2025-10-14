import React from "react";
import {
  FaGlobe,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaCloud,
  FaLock,
  FaTools,
  FaCodeBranch,
  FaSyncAlt,
  FaCogs,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>Web Development Services | Full Stack & Maintenance Solutions</title>
        <meta
          name="description"
          content="Ready Tech Solutions offers full stack web development, website maintenance, and enterprise-grade digital solutions to keep your business ahead."
        />
        <meta
          name="keywords"
          content="Ready Tech Solutions, Web Development, Website Maintenance, Full Stack Developer, MERN Stack, IT Company, Coimbatore, Bangalore"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Web Development Services
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-white/90">
            Build fast, secure, and scalable web solutions with our expert full
            stack development team — from UI design to cloud deployment.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="px-6 py-3 font-semibold text-indigo-600 bg-white rounded-lg shadow hover:bg-gray-100"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose Our Web Development?
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          Websites are not just digital brochures — they are the backbone of
          your online success. At Ready Tech Solutions, we combine modern design,
          robust backend systems, and cloud integration to create seamless
          digital experiences.
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl px-6 pb-16 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaLaptopCode className="w-8 h-8 text-indigo-600" />}
            title="Full Stack Development"
            description="We specialize in MERN, MEAN, and LAMP stacks — building end-to-end web applications with both frontend and backend excellence."
          />
          <FeatureCard
            icon={<FaCloud className="w-8 h-8 text-indigo-600" />}
            title="Cloud Deployment"
            description="Our applications are designed to scale effortlessly on AWS, Azure, or Google Cloud environments."
          />
          <FeatureCard
            icon={<FaLock className="w-8 h-8 text-indigo-600" />}
            title="Security & Compliance"
            description="We integrate SSL, encryption, and follow OWASP & GDPR standards for data protection."
          />
          <FeatureCard
            icon={<FaServer className="w-8 h-8 text-indigo-600" />}
            title="API & Database Integration"
            description="We connect your web apps with databases, CRMs, payment gateways, and third-party APIs for automation."
          />
          <FeatureCard
            icon={<FaGlobe className="w-8 h-8 text-indigo-600" />}
            title="SEO & Performance"
            description="Optimized architecture, semantic markup, and fast loading ensure better ranking and visibility."
          />
          <FeatureCard
            icon={<FaLayerGroup className="w-8 h-8 text-indigo-600" />}
            title="Modular Architecture"
            description="Future-ready code with maintainable, reusable, and scalable modules using CI/CD pipelines."
          />
        </div>
      </section>

      {/* Website Maintenance Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Website Maintenance & Support
          </h2>
          <p className="mt-4 text-gray-600">
            Launching your website is just the beginning. Our maintenance plans
            ensure your platform stays updated, secure, and optimized for
            performance. We handle everything — updates, bug fixes, security
            patches, content uploads, and performance audits.
          </p>

          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<FaTools className="w-8 h-8 text-indigo-600" />}
              title="Regular Updates"
              description="Keep your site up-to-date with the latest technologies and security patches."
            />
            <FeatureCard
              icon={<FaCodeBranch className="w-8 h-8 text-indigo-600" />}
              title="Version Control"
              description="All updates and new features are tracked and managed via Git workflows."
            />
            <FeatureCard
              icon={<FaSyncAlt className="w-8 h-8 text-indigo-600" />}
              title="Performance Monitoring"
              description="We continuously monitor uptime, load speed, and resolve errors proactively."
            />
          </div>

          <a
            href="/contact"
            className="inline-block px-6 py-3 mt-8 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
          >
            Request Maintenance Plan
          </a>
        </div>
      </section>

      {/* Enterprise App Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Enterprise & Business Applications
          </h2>
          <p className="mt-4 text-gray-600">
            We deliver enterprise-grade web applications built with scalable
            architecture, Agile methodology, and continuous integration tools
            like Jira and GitHub Actions. Automate up to 90% of your business
            operations through digital transformation.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 mt-6 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

// Reusable Feature Card
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 transition bg-white rounded-lg shadow hover:shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
