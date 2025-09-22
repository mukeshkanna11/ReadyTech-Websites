import React from "react";
import { FaReact, FaBolt, FaMobileAlt, FaCloud } from "react-icons/fa";

export default function Reactjs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative max-w-6xl px-6 pt-24 mx-auto pb-14">
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:flex-1">
            <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl">
              React.js Development
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Build fast, resilient, and delightful user experiences with
              <span className="font-semibold text-indigo-600"> React.js </span>.
              We create maintainable component systems, accessible UI, and
              production-ready frontends that scale across web and mobile.
            </p>

            <div className="grid gap-4 mt-8 sm:grid-cols-2">
              <div className="p-5 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-indigo-600">Why React?</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Reusable components, huge ecosystem, great performance — ideal
                  for modern SPAs and progressive web apps.
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-indigo-600">Business Impact</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Faster iteration, lower maintenance cost, and measurable UX improvements that convert visitors to customers.
                </p>
              </div>
            </div>

            <ul className="grid gap-3 mt-8 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <FaBolt className="mt-1 text-indigo-500" />
                <div>
                  <strong className="text-sm text-gray-800">High Performance</strong>
                  <div className="text-sm text-gray-600">Code-splitting, SSR/SSG, lazy-loading.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMobileAlt className="mt-1 text-indigo-500" />
                <div>
                  <strong className="text-sm text-gray-800">Cross-platform</strong>
                  <div className="text-sm text-gray-600">Responsive UIs and React Native-ready patterns.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaCloud className="mt-1 text-indigo-500" />
                <div>
                  <strong className="text-sm text-gray-800">Cloud Friendly</strong>
                  <div className="text-sm text-gray-600">Optimized for CDNs and modern hosting (Vercel, Netlify, AWS).</div>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/contact"
                className="inline-block px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
              >
                Talk to a React Expert
              </a>
              <a
                href="/services/reactjs#case-studies"
                className="inline-block px-6 py-3 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
              >
                See Case Studies
              </a>
            </div>
          </div>

          <div className="hidden md:block md:w-1/3">
            <div className="p-8 text-white shadow-xl rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                <FaReact className="w-10 h-10 text-white" />
              </div>
              <h4 className="mt-6 text-xl font-semibold">React Component Systems</h4>
              <p className="mt-2 text-sm text-white/90">
                Design systems, Storybook, and developer tooling to speed delivery and ensure visual consistency.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Design tokens & shared components</li>
                <li>Automated visual testing</li>
                <li>Efficient CI for front-end releases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example case studies / short list to satisfy business audience */}
      <section id="case-studies" className="max-w-6xl px-6 pb-20 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Selected Outcomes</h2>
        <div className="grid gap-6 mt-6 sm:grid-cols-3">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-indigo-600">SaaS Dashboard</h3>
            <p className="mt-2 text-sm text-gray-600">Reduced load time by 55% and increased activation rate.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-indigo-600">Retail PWA</h3>
            <p className="mt-2 text-sm text-gray-600">Offline-capable PWA with 2x engagement on mobile.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-indigo-600">Complex UI Migration</h3>
            <p className="mt-2 text-sm text-gray-600">Migrated legacy views to React with zero downtime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
