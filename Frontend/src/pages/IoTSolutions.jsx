import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function IoTSolutions() {
  const iotServices = [
    "Requirements Analysis & Consultation",
    "Process Modeling & Optimization",
    "Platform Architecture & Design",
    "System Integration (CRM, ERP, MES, SCADA, etc.)",
    "Device Connectivity & Network Setup",
    "IoT Platform Integration (AWS IoT, Azure IoT, Oracle IoT, ThingWorx, Salesforce IoT, SAP HANA Cloud)",
    "Remote Monitoring & Security Management",
    "Asset & Inventory Management via Sensors",
    "Data Collection, Analytics & Visualization",
    "Predictive Maintenance & Automation",
    "Custom IoT Software & Application Development",
  ];

  const iotProcess = [
    "Ideate & Prototype",
    "Architecture & Design",
    "Develop & Launch",
    "Integrate & Test",
    "Measure, Monitor & Optimize",
  ];

  const industries = [
    "Manufacturing & Industry 4.0",
    "Healthcare & Medical Devices",
    "Smart Buildings & Home Automation",
    "Transportation & Fleet Management",
    "Agriculture & Precision Farming",
    "Energy & Utilities",
    "Retail & Supply Chain",
    "Telecommunications",
  ];

  const benefits = [
    "Real-time monitoring & actionable insights",
    "Enhanced operational efficiency",
    "Reduced downtime & predictive maintenance",
    "Secure & scalable IoT infrastructure",
    "Optimized resource management",
    "Data-driven decision-making",
    "Automation of repetitive processes",
    "Customizable solutions for all industries",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>
          <title>IoT Solutions | ReadyTech Solutions</title>
          <meta
            name="description"
            content="ReadyTech Solutions provides IoT solutions to optimize operations, secure remote locations, and improve data-driven decision-making for businesses across industries."
          />
          <meta
            name="keywords"
            content="IoT Solutions, Internet of Things, Smart Devices, ReadyTech IoT, Industry 4.0, Connected Devices, IoT Platform Integration, AWS IoT, Azure IoT, ThingWorx"
          />
        </Helmet>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            IoT Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Connect devices, streamline processes, and enhance operational efficiency with{" "}
            <span className="font-semibold text-indigo-500">ReadyTech IoT Solutions</span>.
          </p>
        </div>

        {/* Service Description */}
        <div className="mt-12 space-y-6 leading-relaxed text-gray-700">
          <p>
            ReadyTech IoT Solutions help businesses leverage connected devices and platforms to drive efficiency, reduce operational costs, and enable real-time decision-making.
          </p>
          <p>
            Our team works with leading IoT platforms such as AWS IoT, Azure IoT, Oracle IoT, ThingWorx, Salesforce IoT, and SAP HANA Cloud to design scalable, secure, and customized IoT solutions for your business.
          </p>
        </div>

        {/* Key IoT Services */}
        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Our IoT Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {iotServices.map((service, index) => (
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

        {/* IoT Implementation Process */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Our IoT Process
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            We follow a structured approach to deliver robust IoT solutions, ensuring maximum efficiency, reliability, and scalability for your business.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {iotProcess.map((step, index) => (
              <div
                key={index}
                className="p-4 font-medium text-center text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            Our IoT solutions are tailored to meet the unique challenges of various industries, enabling businesses to achieve smarter operations and higher efficiency.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4 text-center text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                <p>{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Benefits of IoT Solutions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-4 text-center text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-20 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Ready to Transform Your Business with IoT?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Partner with <strong>ReadyTech IoT</strong> to implement intelligent, secure, and scalable IoT solutions tailored to your organization’s needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Schedule Your IoT Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
