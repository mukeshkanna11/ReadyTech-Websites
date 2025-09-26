import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function IoTSolutions() {
  const iotServices = [
    "Requirements Analysis",
    "Process Modeling",
    "Platform Architecture",
    "System Integration (CRM, ERP, or other systems)",
    "Testing and Support",
    "Device Connectivity",
    "IoT Platform Integration (AWS IoT, Azure IoT, Oracle IoT, ThingWorx, Salesforce IoT, SAP HANA Cloud)",
    "Remote Monitoring and Security",
    "Asset Management via Sensors",
    "Data Collection & Analytics",
  ];

  const iotProcess = [
    "Ideate & Prototype",
    "Architecture & Design",
    "Develop & Launch",
    "Measure & Monitor",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>    
          <title>IoT Solutions | Ready Tech Solutions</title>        
          <meta name="description" content="Ready Tech Solutions provides expert IoT solutions to help businesses optimize operations, secure remote locations, and improve data-driven decisions." />        
          <meta name="keywords" content="Ready Tech, IoT Solutions, IT Solutions, Training, Coimbatore, Bangalore" />
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
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            Our Internet of Things (IoT) services help businesses design, integrate, and manage connected devices and platforms. 
            From manufacturing to healthcare, IoT solutions optimize operations, secure remote locations, and improve data-driven decisions.
          </p>
          <p>
            We work with leading IoT platforms including AWS IoT, Jasper Control Center, Azure IoT Suite, Oracle IoT Cloud, 
            ThingWorx, Salesforce IoT Cloud, and SAP HANA Cloud Platform to deliver scalable, efficient, and secure solutions.
          </p>
        </div>

        {/* Key IoT Services */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            IoT Services
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

        {/* IoT Process */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our IoT Process
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {iotProcess.map((process, index) => (
              <div
                key={index}
                className="p-4 font-medium text-center text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                <span>{process}</span>
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
            Get Your IoT Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
