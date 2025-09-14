import { useState } from "react";
import Navbar from "../components/Navbar"; // ✅ ensure path is correct


export default function Home() {
  const [template, setTemplate] = useState("A");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

    {/* Top Creative Banner */}
<section className="relative w-full h-64 overflow-hidden sm:h-80 md:h-96 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
  {/* Decorative Shapes */}
  <div className="absolute bg-white rounded-full -top-10 -left-20 w-72 h-72 opacity-20 animate-pulse"></div>
  <div className="absolute bg-white rounded-full -bottom-10 -right-20 w-96 h-96 opacity-20 animate-pulse"></div>

  {/* Banner Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
    <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl drop-shadow-lg">
      Your Gateway to <span className="text-yellow-300">Digital Excellence</span>
    </h2>
    <p className="max-w-2xl mt-4 text-sm text-white sm:text-lg font-poppins drop-shadow-md">
      Innovate. Scale. Succeed. Ready Tech Solutions brings you cutting-edge technology and creative strategies to elevate your business.
    </p>
    <a
      href="/services"
      className="px-6 py-3 mt-6 font-semibold text-indigo-900 transition-all bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-300"
    >
      Discover More
    </a>
  </div>
</section>




      {/* Template Switcher */}
      {/* Template Switcher */}
<div className="max-w-6xl px-4 pt-10 mx-auto sm:px-6 lg:px-8">
  <div className="flex items-center justify-between gap-4 mb-6">
    <div className="flex items-center gap-3 font-poppins">
      <span className="text-sm text-gray-600">Preview templates:</span>
      <div className="flex gap-2">
        {/* Corporate */}
        <button
          onClick={() => setTemplate("A")}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${
              template === "A"
                ? "bg-indigo-600 text-white shadow-md scale-105 font-poppins"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md"
            }`}
        >
          Corporate
        </button>

        {/* Creative */}
        <button
          onClick={() => setTemplate("B")}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${
              template === "B"
                ? "bg-rose-500 text-white shadow-md scale-105 font-poppins"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-rose-50 hover:text-rose-500 hover:shadow-md"
            }`}
        >
          Creative
        </button>

        {/* Developer */}
        <button
          onClick={() => setTemplate("C")}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${
              template === "C"
                ? "bg-gray-900 text-white shadow-md scale-105 font-poppins"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md"
            }`}
        >
          Developer
        </button>
      </div>
    </div>
  </div>

  {/* Templates */}
  <main className="space-y-12">
    {template === "A" && <TemplateA />}
    {template === "B" && <TemplateB />}
    {template === "C" && <TemplateC />}
  </main>
</div>


      {/* Footer */}
<footer className="mt-12 text-gray-300 bg-gray-900">
  <div className="grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl lg:px-8 md:grid-cols-4">
    
    {/* Company Info */}
    <div>
      <h3 className="text-xl font-semibold text-white font-poppins">Ready Tech Solutions</h3>
      <p className="mt-4 text-sm leading-relaxed font-poppins">
        No 149, 2nd Floor, Sri Nagar,  
        Hopes, Coimbatore - 641004,  
        Behind Hope College Stop, Srinagar.
      </p>
      <p className="mt-4 text-sm font-poppins">
        <strong>Phone:</strong> <a href="tel:+917010797721" className="hover:underline">+91 70107 97721</a>  
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:info@readytechsolutions.in" className="hover:underline">
          info@readytechsolutions.in
        </a>
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Quick Links</h4>
      <ul className="space-y-2 text-sm font-poppins">
        <li><a href="#about" className="hover:text-white">About Us</a></li>
        <li><a href="#services" className="hover:text-white">Services</a></li>
        <li><a href="#careers" className="hover:text-white">Careers</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Our Services</h4>
      <ul className="space-y-2 text-sm">
        <li>Web Development</li>
        <li>Mobile Applications</li>
        <li>UI/UX Design</li>
        <li>Cloud Solutions</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="mb-4 text-lg font-semibold text-white">Connect With Us</h4>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/SoftwareOrganisation/" target="_blank" className="hover:text-white">🌐</a>
        <a href="https://www.linkedin.com/company/readytechsolutions/people/" target="_blank" className="hover:text-white">💼</a>
        <a href="https://www.instagram.com/explore/locations/218009922476192/ready-tech-solutions/" target="_blank" className="hover:text-white">🐦</a>
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="mt-10 border-t border-gray-700">
    <div className="px-6 py-6 mx-auto text-sm text-center text-gray-400 max-w-7xl lg:px-8">
      © {new Date().getFullYear()} Ready Tech Solutions — Prototype by Mukesh
    </div>
  </div>
</footer>

    </div>
  );
}

/* ---------------------- Template A: Corporate ---------------------- */
function TemplateA() {
  return (
    <section className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-6 py-16 md:flex md:items-center md:gap-12 lg:px-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Build Scalable & Secure Web Apps with{" "}
            <span className="text-indigo-600">MERN Experts</span>
          </h1>

          <p className="max-w-xl mt-6 text-lg leading-relaxed text-gray-600">
            At <strong>Ready Tech Solutions</strong>, we deliver enterprise-grade
            web applications with modern architectures. From clean APIs to
            optimized performance, our team ensures your product is
            <span className="font-semibold"> secure, scalable, and user-friendly</span>.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="p-2 text-indigo-600 bg-indigo-100 rounded-lg">✅</div>
              <div>
                <h4 className="font-semibold text-gray-900">Scalable Solutions</h4>
                <p className="text-sm text-gray-500">
                  Handle millions of users with cloud-native deployments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 text-indigo-600 bg-indigo-100 rounded-lg">🔒</div>
              <div>
                <h4 className="font-semibold text-gray-900">Enterprise Security</h4>
                <p className="text-sm text-gray-500">
                  Advanced authentication, data protection, and compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 text-indigo-600 bg-indigo-100 rounded-lg">⚡</div>
              <div>
                <h4 className="font-semibold text-gray-900">High Performance</h4>
                <p className="text-sm text-gray-500">
                  Fast APIs, caching, and responsive UI for smooth experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 text-indigo-600 bg-indigo-100 rounded-lg">🤝</div>
              <div>
                <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                <p className="text-sm text-gray-500">
                  Dedicated technical support for your peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/contact"
              className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-block px-6 py-3 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right Image */}
{/* Right Design Placeholder */}
<div className="mt-10 md:w-1/2 md:mt-0">
  <div className="flex items-center justify-center p-6 shadow bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl h-72">
    <div className="text-center">
      <div className="mb-3 text-5xl text-white">💻</div>
      <h3 className="text-xl font-semibold text-white">Corporate Tech UI</h3>
      <p className="mt-2 text-sm text-indigo-100">
        A sleek, modern design representing business technology
      </p>
    </div>
  </div>
</div>

      </div>

      {/* Scroll-Down Section */}
      <div className="px-6 py-16 border-t bg-gray-50 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Why Choose Ready Tech Solutions?
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-600">
          We don’t just build apps — we build long-term partnerships. Our
          corporate solutions are trusted by startups, SMEs, and enterprises
          worldwide to deliver growth-focused digital products.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-8 mt-10 text-center sm:grid-cols-3">
          <div>
            <h3 className="text-4xl font-extrabold text-indigo-600">50+</h3>
            <p className="text-gray-600">Enterprise Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-indigo-600">10+</h3>
            <p className="text-gray-600">Years of Combined Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-indigo-600">100%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        {/* Additional Section */}
        <div className="grid gap-10 mt-16 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-bold text-gray-900">Custom Development</h4>
            <p className="mt-3 text-gray-600">
              Tailor-made solutions designed to fit your business goals. From web apps to enterprise portals, we bring your vision to life.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-bold text-gray-900">Agile & Reliable</h4>
            <p className="mt-3 text-gray-600">
              We follow agile methodology with transparent sprints, continuous updates, and reliable delivery timelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ---------------------- Template B: Creative ---------------------- */
function TemplateB() {
  return (
    <section className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-rose-50 to-white">
      <div className="px-6 py-16 md:flex md:items-center md:gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="p-8 rounded-lg shadow-sm bg-gradient-to-br from-pink-50 to-rose-50">
            <h2 className="text-3xl font-extrabold md:text-4xl text-rose-600">
              Design-driven engineering for modern products
            </h2>
            <p className="max-w-lg mt-4 leading-relaxed text-gray-700">
              At <span className="font-semibold text-rose-600">Ready Tech Solutions</span>, 
              we blend creativity and engineering discipline to deliver scalable, 
              user-focused digital products. With years of expertise across multiple domains, 
              we’ve helped startups and enterprises transform their ideas into powerful solutions.
            </p>
            
            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 text-center bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-rose-600">6+</h3>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="p-4 text-center bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-rose-600">50+</h3>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div className="p-4 text-center bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-rose-600">20+</h3>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="p-4 text-center bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-rose-600">5+</h3>
                <p className="text-sm text-gray-600">Industries Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="grid grid-cols-2 gap-4 mt-10 md:w-1/2 md:mt-0">
          <div className="flex items-center justify-center h-40 shadow bg-gradient-to-br from-pink-200 to-rose-100 rounded-xl">
            <span className="font-medium text-gray-800">UI/UX Design</span>
          </div>
          <div className="flex items-center justify-center h-40 shadow bg-gradient-to-br from-cyan-200 to-rose-100 rounded-xl">
            <span className="font-medium text-gray-800">Web Apps</span>
          </div>
          <div className="flex items-center justify-center h-40 shadow bg-gradient-to-br from-indigo-200 to-rose-100 rounded-xl">
            <span className="font-medium text-gray-800">Mobile Apps</span>
          </div>
          <div className="flex items-center justify-center h-40 shadow bg-gradient-to-br from-yellow-200 to-rose-100 rounded-xl">
            <span className="font-medium text-gray-800">Cloud Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------- Template C: Developer ---------------------- */
function TemplateC() {
  return (
    <section className="overflow-hidden text-white bg-gray-900 rounded-lg">
      <div className="px-6 py-16 md:flex md:items-start md:gap-12">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold md:text-4xl">
            Fast, Reliable MERN Engineering
          </h1>
          <p className="mt-4 leading-relaxed text-gray-300">
            At <span className="font-semibold text-indigo-400">Ready Tech Solutions</span>, 
            we build developer-friendly systems with clean code, tested APIs, 
            and predictable deployments. Our engineering team ensures 
            performance, scalability, and security for every project.
          </p>

          {/* Feature Highlights */}
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
  <div className="p-5 transition transform bg-gray-800 rounded-lg shadow hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-indigo-500/30">
    <h4 className="font-semibold text-indigo-300">APIs & Integrations</h4>
    <p className="mt-2 text-sm text-gray-400">
      REST/GraphQL endpoints with versioning, documentation, 
      and third-party integrations.
    </p>
  </div>
  <div className="p-5 transition transform bg-gray-800 rounded-lg shadow hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-indigo-500/30">
    <h4 className="font-semibold text-indigo-300">Performance</h4>
    <p className="mt-2 text-sm text-gray-400">
      Optimized queries, server-side caching, and client lazy-loading.
    </p>
  </div>
  <div className="p-5 transition transform bg-gray-800 rounded-lg shadow hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-indigo-500/30">
    <h4 className="font-semibold text-indigo-300">Scalability</h4>
    <p className="mt-2 text-sm text-gray-400">
      Cloud-native deployments with load balancing, CI/CD pipelines, 
      and microservices architecture.
    </p>
  </div>
  <div className="p-5 transition transform bg-gray-800 rounded-lg shadow hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-indigo-500/30">
    <h4 className="font-semibold text-indigo-300">Security</h4>
    <p className="mt-2 text-sm text-gray-400">
      Best practices with JWT/OAuth authentication, 
      role-based access, and data encryption.
    </p>
  </div>
</div>
        </div>

        {/* Right Illustration / Visual */}
        <div className="hidden w-1/3 mt-10 md:block md:mt-0">
          <div className="flex items-center justify-center h-64 p-6 shadow-lg bg-gradient-to-br from-indigo-700 to-purple-800 rounded-xl">
            <div className="text-center">
              {/* Illustration Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 mx-auto text-indigo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <h3 className="mt-4 text-xl font-bold">Developer Tools</h3>
              <p className="text-sm text-indigo-200">API Docs • Testing • CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

