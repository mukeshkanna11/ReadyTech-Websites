import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
// Optional animation (install with: npm install framer-motion)
// import { motion } from "framer-motion";

export default function BusinessIntelligence() {
  const services = [
    "BI Analytics & Reporting",
    "Data Warehousing Solutions",
    "Data Modeling & Architecture",
    "Custom Dashboard & Visualization",
    "ETL (Extract, Transform, Load) Development",
    "Predictive & Prescriptive Analytics",
    "Cloud BI Implementation",
    "Self-Service BI Platforms",
    "Real-Time Data Processing",
    "Data Quality & Governance",
    "Mobile BI Solutions",
    "AI-Driven Insights",
  ];

  const benefits = [
    "Empowers data-driven decision-making across departments",
    "Boosts operational efficiency through real-time analytics",
    "Improves forecasting accuracy and business agility",
    "Enhances marketing performance with customer segmentation insights",
    "Reduces costs by optimizing resource allocation and processes",
    "Strengthens compliance and ensures data security standards",
  ];

  const industries = [
    "Retail & E-commerce",
    "Manufacturing & Logistics",
    "Healthcare & Pharmaceuticals",
    "Banking & Financial Services",
    "Education & E-learning",
    "IT & Technology",
    "Travel & Hospitality",
    "Telecommunications",
  ];

  const process = [
    "Business Requirement Analysis",
    "Data Collection & Cleansing",
    "Data Integration & Warehousing",
    "Modeling & Visualization",
    "Report Automation & Delivery",
    "Performance Monitoring & Optimization",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* ================= SEO Meta Tags ================= */}
        <Helmet>
          <title>Business Intelligence (BI) Services | ReadyTech Solutions</title>
          <meta
            name="description"
            content="Unlock the full potential of your business data with ReadyTech Business Intelligence (BI) Services. We specialize in BI analytics, data modeling, dashboards, and predictive insights that empower smarter decisions."
          />
          <meta
            name="keywords"
            content="Business Intelligence, BI Analytics, ReadyTech Solutions, Data Warehousing, Cloud BI, Data Visualization, Power BI, Tableau, Predictive Analytics, Coimbatore, Bangalore"
          />
        </Helmet>

        {/* ================= Hero Section ================= */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Business Intelligence (BI)
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Transform your raw data into valuable insights that drive growth and innovation with{" "}
            <span className="font-semibold text-indigo-500">ReadyTech BI Solutions</span>.
          </p>
        </div>

        {/* ================= Introduction ================= */}
        <div className="mt-12 space-y-6 leading-relaxed text-gray-700">
          <p>
            In today’s competitive digital era, businesses generate massive amounts of data every day.
            Without proper tools and strategies, this data remains unused. Our Business Intelligence
            (BI) services help organizations unlock data value and make informed, strategic decisions.
          </p>
          <p>
            At <strong>ReadyTech Solutions</strong>, we implement data-driven systems that combine
            technology, analytics, and visualization — providing clarity, direction, and measurable impact.
          </p>
        </div>

        {/* ================= Services Offered ================= */}
        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Our Business Intelligence Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Why BI Matters ================= */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Why Business Intelligence Matters
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            Business Intelligence turns raw data into meaningful insights that enhance decision-making,
            increase ROI, and improve business agility. With BI, companies can track KPIs, identify
            opportunities, and predict market trends faster than competitors.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="p-4 text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle aria-hidden="true" className="w-6 h-6 mb-2 text-indigo-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BI Process ================= */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Our BI Implementation Process
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            A proven, step-by-step approach ensures that our BI solutions align perfectly with your
            organizational goals and deliver measurable outcomes.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={index}
                className="p-4 text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle aria-hidden="true" className="w-6 h-6 mb-2 text-indigo-500" />
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Industries Served ================= */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            Our BI expertise extends across multiple industries, delivering customized solutions that
            fit each sector’s unique data and operational challenges.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4 text-center text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle aria-hidden="true" className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                <p>{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Call to Action ================= */}
        <div className="mt-20 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Ready to Transform Your Data into Actionable Intelligence?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Partner with <strong>ReadyTech Solutions</strong> to develop a custom BI ecosystem tailored to your
            organization’s goals. We empower businesses to predict outcomes, identify opportunities, and
            achieve faster growth with smarter insights.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Your BI Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
