import React from "react";
import { CheckCircle } from "lucide-react";

export default function ArtificialIntelligence() {
  const aiServices = [
    "Custom AI software development",
    "AI Consulting",
    "Machine Learning",
    "Cloud-based artificial intelligence",
    "Bot development",
    "AI as a service",
    "Knowledge based systems",
    "Pattern and image recognition",
    "Biometrics based access protocol",
    "AI enabled chatbot apps",
    "Decision management",
    "Advanced business analytics",
    "Face detection and video analytics",
    "Patient management system",
    "Finance and market prediction bot",
    "Retail analytics solution",
  ];

  const values = [
    "Quality & Security Adherence",
    "Your Ideas Are Safe With Us",
    "First Time Right Process",
    "Innovation Is Guaranteed",
    "Result-Driven Approach",
    "Co-Development Teams",
    "DevOps Enablement",
    "In-Depth Domain Knowledge",
    "Integrity & Transparency",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Artificial Intelligence (AI)
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Empower your business with cutting-edge AI solutions from{" "}
            <span className="font-semibold text-indigo-500">ReadyTech AI</span>, 
            improving efficiency, accuracy, and decision-making.
          </p>
        </div>

        {/* Description Section */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            Artificial Intelligence (AI) enables machines to perform tasks that
            mimic human intelligence, including learning, reasoning, and problem-solving. 
            Businesses leverage AI to reduce costs, improve efficiency, and gain high-quality insights.
          </p>
          <p>
            Our AI solutions help organizations automate operations, analyze data
            efficiently, and scale digital applications effectively. AI technology
            transforms your business by enhancing productivity and enabling smarter decisions.
          </p>
        </div>

        {/* Key AI Services */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Key AI Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((service, index) => (
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

        {/* Core Values / Benefits */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our Values
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="p-4 text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mb-2 text-indigo-500" />
                <p>{item}</p>
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
            Get Your AI Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
