import React from "react";
import { CheckCircle, Shield, Clock, Wrench, Activity, RefreshCcw } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function WebsiteMaintenance() {
  const features = [
    "24/7 website monitoring & uptime checks",
    "Bug fixing, error resolution & version updates",
    "SEO, analytics, and performance optimization",
    "Regular backups & cloud disaster recovery",
    "Security scans & vulnerability patching",
    "CMS, plugin & framework upgrades",
    "Content updates, page additions, and layout redesign",
    "Image replacement, banner refresh & UI improvements",
    "Corporate email setup & configuration",
    "Database maintenance & server optimization",
  ];

  const benefits = [
    "Improved website speed and reliability",
    "Higher SEO rankings & reduced bounce rates",
    "Continuous content freshness for better engagement",
    "Enhanced data security & reduced downtime",
    "Professional handling of technical issues",
    "End-to-end website management without extra hiring",
  ];

  const industries = [
    "Insurance",
    "Healthcare",
    "Manufacturing",
    "IT & Telecom",
    "Legal",
    "FMCG & Retail",
    "eCommerce",
    "Education & eLearning",
    "Government & M-Gov",
    "Finance & Banking",
    "Media & Entertainment",
    "Transport & Logistics",
  ];

  const processSteps = [
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "Regular Monitoring",
      desc: "We continuously monitor your website for uptime, speed, and performance to ensure zero disruption."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Security & Backups",
      desc: "Your site is protected with routine backups, SSL monitoring, malware scanning, and security audits."
    },
    {
      icon: <Wrench className="w-8 h-8 text-indigo-600" />,
      title: "Content & Design Updates",
      desc: "We update text, images, banners, and blog content while maintaining your brand’s visual consistency."
    },
    {
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      title: "Performance Optimization",
      desc: "Through cache configuration, CDN integration, and code cleanup, we keep your site running lightning-fast."
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-indigo-600" />,
      title: "Reports & Insights",
      desc: "Monthly reports on uptime, visitor analytics, and performance improvements are shared transparently."
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <Helmet>
        <title>Website Maintenance Services | Ready Tech Solutions</title>
        <meta
          name="description"
          content="ReadyTech Solutions provides professional website maintenance services — ensuring your business website stays secure, updated, fast and high-performing at all times."
        />
        <meta
          name="keywords"
          content="Website Maintenance, Website Support, Website Optimization, Web Security, Website Management, IT Support, Coimbatore, Bangalore, ReadyTech Solutions"
        />
      </Helmet>

      <div className="max-w-6xl px-6 mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Website Maintenance Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Keep your website performing at its best with{" "}
            <span className="font-semibold text-indigo-500">Ready Tech Solutions</span> — 
            we ensure it remains secure, optimized and always up to date.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            Your website is the digital face of your brand — but launching it is only the first step. 
            Continuous maintenance keeps it running smoothly, secure from vulnerabilities, 
            and optimized for a seamless user experience. Whether you manage a corporate site, 
            an eCommerce platform, or a learning portal, our team ensures your site operates 
            without downtime or errors.
          </p>
          <p>
            At <strong>ReadyTech Solutions</strong>, our website maintenance services are crafted 
            to meet global quality standards. We manage everything — from CMS updates, plugin upgrades, 
            and performance tuning to SSL renewals, database optimization and security patching. 
            Our proactive approach helps you avoid costly downtime and keeps your site future-ready.
          </p>
          <p>
            With a decade of IT experience, we maintain business websites, portals and enterprise 
            systems across industries, ensuring uninterrupted performance and growth.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Maintenance Process */}
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Our Website Maintenance Process
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="p-6 transition bg-white rounded-lg shadow-md hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-center text-indigo-600">
                  {step.title}
                </h3>
                <p className="text-sm text-center text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Benefits of Choosing ReadyTech
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-20">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-4 py-2 text-center transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Your Website Professionally Maintained
          </a>
          <p className="mt-4 text-gray-600">
            Keep your site healthy, fast and secure — focus on your business, while we handle your technology.
          </p>
        </div>
      </div>
    </section>
  );
}
