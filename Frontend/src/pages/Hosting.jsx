import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Hosting() {
  const hostingFeatures = [
    "Secure your personal information & website data",
    "Easy-to-use Control Panel (cPanel & Plesk)",
    "Firewall & DDoS Protection",
    "Bulk Domain Search & Registration",
    "Premium Domain Booking",
    "Domain Lock to prevent hijacking",
    "Free URL Forwarding & Subdomain Management",
    "TLD Selection for specific professions (.photo, .music, .tech)",
    "Multi-year Domain Registration",
    "High-speed SSD Hosting",
    "Automated Backups & Recovery",
    "99.9% Uptime Guarantee",
  ];

  const domainServices = [
    "Domain Registration & Management",
    "Best Dedicated Servers Hosting",
    "WordPress Hosting",
    "VPS Hosting",
    "Windows Hosting",
    "Linux Reseller Hosting",
    "Email Hosting Solutions",
    "SSL Certificate Installation & Management",
  ];

  const hostingBenefits = [
    "Reliable & Secure Website Access 24/7",
    "Fast website performance with optimized servers",
    "Professional support & assistance",
    "Scalable solutions for businesses of all sizes",
    "Easy integration with existing systems",
    "Flexible hosting plans & pricing",
    "Complete control over your domains and data",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>
          <title>Domain & Hosting Services | Ready Tech Solutions</title>
          <meta
            name="description"
            content="Ready Tech Solutions provides domain registration and secure hosting services to ensure businesses maintain a reliable and professional online presence."
          />
          <meta
            name="keywords"
            content="Domain & Hosting, Web Hosting, Ready Tech Solutions, VPS Hosting, WordPress Hosting, Dedicated Server, Email Hosting, IT Solutions"
          />
        </Helmet>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Domain & Hosting Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Secure, reliable, and fully managed domain & hosting services designed to ensure your online presence thrives with Ready Tech Solutions.
          </p>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-4 leading-relaxed text-gray-700">
          <p>
            We provide high-performance web hosting and domain registration services with dedicated servers in India and the USA. Whether you need Linux, Windows, WordPress, or VPS hosting, our solutions are optimized for speed, reliability, and security.
          </p>
          <p>
            Hosting ensures your website is always online and accessible. Our control panel simplifies management of domains, emails, databases, and SSL certificates. We provide automated backups, firewalls, and DDoS protection for peace of mind.
          </p>
        </div>

        {/* Hosting Features */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Hosting Features
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hostingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Services */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our Domain Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {domainServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hosting Benefits */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Benefits of Choosing Us
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hostingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Started with Domain & Hosting
          </a>
        </div>
      </div>
    </section>
  );
}
