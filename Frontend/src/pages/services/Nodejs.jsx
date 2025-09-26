import React from "react";
import { useNavigate } from "react-router-dom";
import { FaServer, FaBolt, FaCode, FaLayerGroup, FaDatabase, FaRocket } from "react-icons/fa";
import {Helmet} from "react-helmet-async";
export default function NodeJS() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
<Helmet>  
        <title>Node JS Development | Ready Tech Solutions</title>        
        <meta name="description" content="Ready Tech Solutions provides Node JS development services to help businesses build fast, scalable, and efficient server-side applications." />        
        <meta name="keywords" content="Ready Tech, Node JS Development, IT Solutions, Training, Coimbatore, Bangalore" />
      </Helmet>
      {/* Top Banner */}
      <section className="relative bg-green-600 text-white h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="https://nodejs.org/static/images/logo.svg"
          alt="NodeJS Banner"
          className="absolute inset-0 w-64 mx-auto md:w-96 opacity-20"
        />
        <div className="relative px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Node JS Development
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Build fast, scalable, and efficient server-side applications with Ready Tech Solutions.
          </p>
          <button
            onClick={() => navigate("/demo")}
            className="px-8 py-3 mt-6 font-semibold text-green-600 transition transform bg-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
          >
            🚀 Book a Free Demo
          </button>
        </div>
      </section>

      {/* About NodeJS Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          About Node JS
        </h2>
        <div className="mt-8 md:flex md:items-center md:gap-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="NodeJS Logo"
            className="w-48 mx-auto md:w-64 md:mx-0"
          />
          <div className="mt-6 md:mt-0 md:flex-1">
            <p className="text-lg leading-relaxed">
              Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside the browser. It is perfect for building high-performance, scalable applications that handle a large number of concurrent requests efficiently.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              NodeJS is event-driven, non-blocking, and lightweight. It allows you to write server-side and client-side code in JavaScript, reducing complexity and development time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Key Features of Node JS</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaBolt className="w-6 h-6 text-green-600" />}
            title="Asynchronous I/O"
            description="Non-blocking I/O for faster and more efficient handling of multiple requests."
          />
          <FeatureCard
            icon={<FaServer className="w-6 h-6 text-green-600" />}
            title="Real-Time Applications"
            description="Perfect for chat apps, gaming apps, streaming services, and collaborative platforms."
          />
          <FeatureCard
            icon={<FaCode className="w-6 h-6 text-green-600" />}
            title="JavaScript Everywhere"
            description="Use JavaScript on both the client and server sides, unifying development."
          />
          <FeatureCard
            icon={<FaLayerGroup className="w-6 h-6 text-green-600" />}
            title="Modular Architecture"
            description="NodeJS has a rich ecosystem of modules and packages via npm."
          />
          <FeatureCard
            icon={<FaDatabase className="w-6 h-6 text-green-600" />}
            title="Unified Database Queries"
            description="Easier database integration and management across different layers."
          />
          <FeatureCard
            icon={<FaRocket className="w-6 h-6 text-green-600" />}
            title="Scalable & High Performance"
            description="Handles thousands of concurrent connections efficiently with event-driven architecture."
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose Node JS?</h2>
        <ul className="mt-8 space-y-4 text-lg list-disc list-inside md:text-xl">
          <li>Efficient and lightweight for data-intensive real-time applications.</li>
          <li>Unified programming language across frontend and backend.</li>
          <li>Vast ecosystem with npm for reusable modules.</li>
          <li>Scalable architecture for handling concurrent users.</li>
          <li>Cross-platform and supported on Windows, Linux, and Mac.</li>
          <li>Asynchronous, event-driven design reduces latency.</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Node JS Use Cases</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaServer className="w-6 h-6 text-green-600" />}
            title="Backend APIs"
            description="Handle I/O-heavy API requests efficiently."
          />
          <FeatureCard
            icon={<FaBolt className="w-6 h-6 text-green-600" />}
            title="Real-Time Apps"
            description="Chat apps, collaboration platforms, and gaming apps."
          />
          <FeatureCard
            icon={<FaLayerGroup className="w-6 h-6 text-green-600" />}
            title="Microservices"
            description="Build scalable microservice architectures with ease."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center text-white bg-green-600">
        <h2 className="text-3xl font-bold">Ready to Build Your NodeJS Application?</h2>
        <p className="mt-4 text-lg">Let’s develop your next high-performance, scalable app together.</p>
        <button
          onClick={() => navigate("/demo")}
          className="px-8 py-3 mt-6 font-semibold text-green-600 transition transform bg-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
        >
          🚀 Book a Free Demo
        </button>
      </section>

    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 transition transform bg-white shadow rounded-xl hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
