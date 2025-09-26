import React from "react";
import {
  FaGlobe,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaCloud,
  FaLock,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";  
export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>  
        <title>Web Development Services | Web Development Company</title>        
        <meta name="description" content="Ready Tech Solutions provides web development services to help businesses build scalable, secure, and modern web applications." />        
        <meta name="keywords" content="Ready Tech, Web Development Services, IT Solutions, Training, Coimbatore, Bangalore" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Web Development Services
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-white/90">
            We create scalable, secure, and modern web applications — from
            business websites to enterprise platforms.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="px-6 py-3 font-semibold text-indigo-600 bg-white rounded-lg shadow hover:bg-gray-100"
            >
              Get a Quote
            </a>
            <a
              href="#solutions"
              className="px-6 py-3 font-semibold text-white border border-white rounded-lg hover:bg-white/10"
            >
              Explore Solutions
            </a>
          </div>
        </div>
        {/* Hero Illustration */}
        <div className="max-w-3xl mx-auto mt-12">
          <img
            src="https://undraw.co/api/illustrations/15a4762e-933a-4dd1-91ef-41f3039efb0c"
            alt="Web Development Illustration"
            className="w-full mx-auto drop-shadow-lg"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose Our Web Development?
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          A web application is more than just a website — it’s the backbone of
          your digital presence. At Ready Tech Solutions, we go beyond
          stand-alone sites and build enterprise-grade apps, e-commerce
          platforms, ERP systems, portals, and much more.
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl px-6 pb-16 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaLaptopCode className="w-8 h-8 text-indigo-600" />}
            title="Custom Web Apps"
            description="Tailored software that matches your unique business workflows and UX."
          />
          <FeatureCard
            icon={<FaCloud className="w-8 h-8 text-indigo-600" />}
            title="Cloud Ready"
            description="Seamless migrations and scalable architecture on AWS, GCP, or Azure."
          />
          <FeatureCard
            icon={<FaLock className="w-8 h-8 text-indigo-600" />}
            title="Secure by Design"
            description="We follow OWASP, encryption, and GDPR/HIPAA compliance practices."
          />
          <FeatureCard
            icon={<FaServer className="w-8 h-8 text-indigo-600" />}
            title="Enterprise Apps"
            description="Scalable, high-performing enterprise-grade web applications."
          />
          <FeatureCard
            icon={<FaGlobe className="w-8 h-8 text-indigo-600" />}
            title="SEO Optimized"
            description="Fast, mobile-first, semantic markup for better ranking and visibility."
          />
          <FeatureCard
            icon={<FaLayerGroup className="w-8 h-8 text-indigo-600" />}
            title="Modular Code"
            description="Future-proof, maintainable codebases with CI/CD pipelines."
          />
        </div>
      </section>

      {/* Enterprise App Section with Illustration */}
      <section className="py-16 bg-gray-100">
        <div className="grid items-center max-w-6xl gap-10 px-6 mx-auto md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Enterprise App Development
            </h2>
            <p className="mt-4 text-gray-600">
              Enterprise applications demand more — security, scalability, and
              efficient project management. Using Agile methodology and tools
              like Jira, we build apps that automate up to 90% of operations and
              establish smooth workflows.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 mt-6 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
            >
              Start Your Project
            </a>
          </div>
          <div>
            <img
              src="https://undraw.co/api/illustrations/4963f06a-9db3-4c91-b7b2-bafec2027a3d"
              alt="Enterprise App Illustration"
              className="w-full drop-shadow-lg"
            />
          </div>
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
