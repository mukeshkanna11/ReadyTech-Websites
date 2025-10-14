import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhp, FaServer, FaCogs, FaUsers, FaDollarSign, FaRocket, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { MdWeb, MdSecurity } from "react-icons/md";
import { SiApache, SiNginx, SiMysql, SiJavascript } from "react-icons/si";
import { Helmet } from "react-helmet-async";

export default function Php() {
  const navigate = useNavigate();

  const features = [
    { icon: <FaUsers />, title: "Expert PHP Developers" },
    { icon: <FaCogs />, title: "MVC Architecture Implementation" },
    { icon: <FaDollarSign />, title: "Cost-effective Solutions" },
    { icon: <FaRocket />, title: "High-performance Applications" },
    { icon: <FaServer />, title: "Supports All Web Servers" },
    { icon: <FaPhp />, title: "Platform-independent & Trusted" },
    { icon: <SiMysql />, title: "Database Integration & Optimization" },
    { icon: <SiJavascript />, title: "Seamless Frontend-Backend Integration" },
  ];

  const processSteps = [
    { step: "Requirement Analysis", desc: "Understanding business goals, user requirements, and functional specifications." },
    { step: "Design & Architecture", desc: "UI/UX design, MVC structure planning, and database modeling." },
    { step: "Development", desc: "Clean, scalable, and secure PHP coding with best practices." },
    { step: "Testing & QA", desc: "Comprehensive testing to ensure performance, security, and reliability." },
    { step: "Deployment", desc: "Smooth deployment on server, domain setup, and environment configuration." },
    { step: "Maintenance & Support", desc: "Ongoing monitoring, bug fixes, and feature updates." },
  ];

  const usClientBenefits = [
    "Fully GDPR & CCPA compliant web solutions",
    "High-performance and responsive designs for US audiences",
    "Scalable architecture to handle traffic growth",
    "Secure payment gateway and financial integration",
    "SEO-friendly and optimized for Google ranking",
    "24/7 support and US-friendly communication hours",
    "Integration with modern cloud services and APIs",
  ];

  return (
    <div className="text-gray-800 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>PHP Web Development | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Ready Tech Solutions provides PHP web development services to help businesses build highly functional, scalable, and secure web applications."
        />
        <meta
          name="keywords"
          content="Ready Tech, PHP Web Development, IT Solutions, Training, Coimbatore, Bangalore, US Clients, PHP Applications"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:px-20">
        <FaPhp className="mx-auto mb-4 text-6xl text-indigo-600" />
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          PHP Web Development
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600">
          Build highly functional, scalable, and secure web applications with PHP – powering thousands of websites worldwide. 
          We cater specifically to **US clients**, ensuring solutions meet global standards and business goals.
        </p>
      </section>

      {/* Why PHP */}
      <section className="grid items-center gap-10 px-6 py-10 md:px-20 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">Why PHP for Web Development?</h2>
          <p className="leading-relaxed text-gray-600">
            PHP is a trusted server-side scripting language, offering scalability, security, and flexibility. It powers enterprise-grade websites and applications with efficient backend solutions.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <MdWeb className="mt-1 text-xl text-indigo-600" />
              Trusted by global industries for websites & web applications.
            </li>
            <li className="flex items-start gap-3">
              <FaServer className="mt-1 text-xl text-indigo-600" />
              Built-in HTTP server for easy local development & testing.
            </li>
            <li className="flex items-start gap-3">
              <SiApache className="mt-1 text-xl text-indigo-600" />
              Compatible with Apache, Nginx, and other web servers.
            </li>
            <li className="flex items-start gap-3">
              <FaCogs className="mt-1 text-xl text-indigo-600" />
              Extremely flexible, open-source, and scalable for any project size.
            </li>
            <li className="flex items-start gap-3">
              <MdSecurity className="mt-1 text-xl text-indigo-600" />
              Secure code practices and compliance with international standards.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <FaLaptopCode className="text-indigo-200 w-80 h-80" />
        </div>
      </section>

      {/* Features / Expertise */}
      <section className="px-6 py-16 text-center bg-indigo-50 md:px-20">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Our PHP Expertise</h2>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              <div className="flex justify-center mb-4 text-3xl text-indigo-600">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PHP Development Process */}
      <section className="px-6 py-16 md:px-20">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-900">Our PHP Development Process</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">{step.step}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* US Client Benefits */}
      <section className="px-6 py-16 text-center bg-gray-100 md:px-20">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Why US Clients Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {usClientBenefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl">
              <FaChartLine className="w-10 h-10 mx-auto mb-3 text-indigo-500" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="px-6 py-16 text-center md:px-20">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Client Success Stories</h2>
        <p className="max-w-4xl mx-auto text-gray-600">
          "Ready Tech Solutions developed our PHP application with incredible speed and attention to detail. The team ensured top-notch security, scalability, and performance. Our US operations now run more efficiently than ever." – <strong>John D., San Francisco</strong>
        </p>
        <p className="max-w-4xl mx-auto mt-6 text-gray-600">
          "Their PHP development team provided excellent support, clear communication, and delivered a solution that exceeded our expectations." – <strong>Sarah L., New York</strong>
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="px-6 py-16 text-center md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Ready to Start Your PHP Project?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          Build a scalable, secure, and high-performance PHP web application that drives growth for your business.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 mt-8 text-white transition bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700"
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
}
