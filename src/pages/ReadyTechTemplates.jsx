import { useState } from "react";
import Navbar from "../components/Navbar"; // ✅ Make sure path is correct

export default function ReadyTechTemplates() {
  const [template, setTemplate] = useState("A");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Template Switcher */}
      <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Preview templates:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setTemplate("A")}
                className={`px-3 py-2 rounded ${
                  template === "A"
                    ? "bg-indigo-600 text-white"
                    : "bg-white border"
                }`}
              >
                Corporate
              </button>
              <button
                onClick={() => setTemplate("B")}
                className={`px-3 py-2 rounded ${
                  template === "B"
                    ? "bg-rose-500 text-white"
                    : "bg-white border"
                }`}
              >
                Creative
              </button>
              <button
                onClick={() => setTemplate("C")}
                className={`px-3 py-2 rounded ${
                  template === "C"
                    ? "bg-gray-900 text-white"
                    : "bg-white border"
                }`}
              >
                Developer
              </button>
            </div>
          </div>
          <span className="text-sm text-gray-500">
            Built for demo • Customize content & images
          </span>
        </div>

        {/* Templates */}
        <main className="space-y-12">
          {template === "A" && <TemplateA />}
          {template === "B" && <TemplateB />}
          {template === "C" && <TemplateC />}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Ready Tech Solutions — Prototype by Mukesh
        </div>
      </footer>
    </div>
  );
}

/* ---------------------- Template A: Corporate ---------------------- */
function TemplateA() {
  return (
    <section className="bg-white rounded-lg shadow overflow-hidden">
      <div className="md:flex md:items-center md:gap-10 px-6 py-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            Build scalable, secure web apps with MERN experts
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            We design and deliver reliable software, clean APIs, and modern
            cloud-native deployments that scale with your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md shadow-sm hover:bg-indigo-700">
              Get Started
            </a>
            <a className="inline-block border border-gray-200 px-5 py-3 rounded-md text-gray-700 hover:bg-gray-50">
              View Services
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
            <img
              src="https://placehold.co/720x420?text=Product+Screenshot"
              alt="screenshot"
              className="w-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Template B: Creative ---------------------- */
function TemplateB() {
  return (
    <section className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-rose-50 to-white">
      <div className="px-6 py-12 md:flex md:items-center md:gap-8">
        <div className="md:w-1/2">
          <div className="p-6 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50">
            <h2 className="text-3xl font-extrabold text-rose-600">
              Design-driven engineering for modern products
            </h2>
            <p className="mt-3 text-gray-700 max-w-lg">
              We combine UX excellence with engineering discipline to craft
              delightful products people love.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 grid grid-cols-2 gap-4">
          <div className="h-36 bg-gradient-to-br from-pink-200 to-rose-100 rounded flex items-center justify-center">
            Design 1
          </div>
          <div className="h-36 bg-gradient-to-br from-cyan-200 to-rose-100 rounded flex items-center justify-center">
            Design 2
          </div>
          <div className="h-36 bg-gradient-to-br from-indigo-200 to-rose-100 rounded flex items-center justify-center">
            Design 3
          </div>
          <div className="h-36 bg-gradient-to-br from-yellow-200 to-rose-100 rounded flex items-center justify-center">
            Design 4
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Template C: Developer ---------------------- */
function TemplateC() {
  return (
    <section className="bg-gray-900 text-white rounded-lg overflow-hidden">
      <div className="px-6 py-8 flex justify-between items-start gap-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold">Fast, reliable MERN engineering</h1>
          <p className="text-gray-300 mt-2">
            Developer-friendly systems with clear APIs, tests, and predictable
            deployments.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="font-semibold">APIs & Integrations</h4>
              <p className="text-sm text-gray-400 mt-2">
                Design REST endpoints with versioning and docs.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="font-semibold">Performance</h4>
              <p className="text-sm text-gray-400 mt-2">
                Server-side caching and lazy-loading on the client.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/3">
          <div className="bg-gradient-to-br from-indigo-800 to-purple-700 h-40 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold">API</div>
              <div className="text-sm text-indigo-200">/v1/docs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

