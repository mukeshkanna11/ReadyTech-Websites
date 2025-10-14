import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ArtificialIntelligence() {
  const aiServices = [
    "Custom AI software development",
    "AI Consulting & Strategy",
    "Machine Learning Models",
    "Deep Learning & Neural Networks",
    "Cloud-based AI Solutions",
    "Chatbots & Virtual Assistants",
    "AI as a Service (AIaaS)",
    "Pattern & Image Recognition",
    "Decision Support Systems",
    "AI-enabled Mobile Apps",
    "Predictive Analytics & Forecasting",
    "Business Process Automation",
    "Face Detection & Video Analytics",
    "Patient Management Systems",
    "Retail & Sales Analytics Solutions",
    "Finance & Market Prediction Bots",
  ];

  const values = [
    "Quality & Security Adherence",
    "First-Time-Right Approach",
    "Innovation Guaranteed",
    "Result-Driven Solutions",
    "Transparent Communication",
    "Client-Centric Development",
    "Advanced Domain Expertise",
    "DevOps Enablement",
    "Continuous Learning & Support",
  ];

  const industries = [
    "Healthcare & Pharmaceuticals",
    "Retail & E-commerce",
    "Finance & Banking",
    "Manufacturing & Logistics",
    "Education & E-Learning",
    "Telecommunications",
    "IT & Software",
    "Travel & Hospitality",
  ];

  const process = [
    "Requirement Analysis & Goal Setting",
    "Data Collection & Preprocessing",
    "Model Development & Training",
    "Validation & Testing",
    "Integration & Deployment",
    "Monitoring & Continuous Improvement",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">

        {/* SEO Meta */}
        <Helmet>
          <title>Artificial Intelligence (AI) Solutions | ReadyTech AI</title>
          <meta
            name="description"
            content="ReadyTech AI provides cutting-edge Artificial Intelligence solutions including Machine Learning, AI consulting, predictive analytics, and AI-powered applications for businesses."
          />
          <meta
            name="keywords"
            content="Artificial Intelligence, AI Solutions, Machine Learning, Deep Learning, AI Consulting, Predictive Analytics, ReadyTech AI, Data Analytics, AI Chatbots"
          />
        </Helmet>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Artificial Intelligence (AI)
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Empower your business with innovative AI solutions from{" "}
            <span className="font-semibold text-indigo-500">ReadyTech AI</span>, 
            improving efficiency, accuracy, and decision-making.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6 leading-relaxed text-gray-700">
          <p>
            Artificial Intelligence (AI) enables machines to perform tasks 
            that mimic human intelligence, including learning, reasoning, 
            and problem-solving. Businesses use AI to automate operations, 
            enhance customer experience, and generate actionable insights.
          </p>
          <p>
            At ReadyTech AI, we deliver tailor-made AI solutions that align 
            with your business goals. Our expertise spans AI consulting, 
            predictive analytics, machine learning, and advanced automation 
            for smarter, data-driven decision-making.
          </p>
        </div>

        {/* AI Services */}
        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Our AI Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((service, index) => (
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

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Why Choose ReadyTech AI
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-4 text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle aria-hidden="true" className="w-6 h-6 mb-2 text-indigo-500" />
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Process */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Our AI Implementation Process
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            We follow a structured and transparent process to deliver AI solutions that generate measurable value for your business.
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

        {/* Industries Served */}
        <div className="mt-20">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
            Our AI solutions are customized for various industries, ensuring industry-specific benefits and scalable implementation.
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

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Partner with <strong>ReadyTech AI</strong> to implement intelligent, innovative, 
            and scalable AI solutions tailored to your organization’s goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Schedule Your AI Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
