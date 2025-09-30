import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhp, FaServer, FaCogs, FaUsers, FaDollarSign, FaRocket } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { SiApache, SiNginx } from "react-icons/si";
import { Helmet } from "react-helmet-async";

export default function Php() {
  const navigate = useNavigate();

  return (
    <div className="text-gray-800 bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>PHP Web Development | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Ready Tech Solutions provides PHP web development services to help businesses build highly functional, scalable, and secure web applications."
        />
        <meta
          name="keywords"
          content="Ready Tech, PHP Web Development, IT Solutions, Training, Coimbatore, Bangalore"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:px-20">
        <FaPhp className="mx-auto mb-4 text-6xl text-indigo-600" />
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          PHP Web Development
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600">
          Build highly functional, scalable, and secure web applications with
          PHP – the most trusted server-side scripting language powering
          thousands of websites worldwide.
        </p>
      </section>

      {/* Description */}
      <section className="grid items-center gap-10 px-6 py-10 md:px-20 md:grid-cols-1">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
            Why PHP for Web Development?
          </h2>
          <p className="leading-relaxed text-gray-600">
            PHP, a server-side scripting language, is the best choice for those
            looking for a highly functioning website or web application. With
            its open-source nature and continuous updates, PHP ensures top-notch
            performance and flexibility for businesses across all industries.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <MdWeb className="mt-1 text-xl text-indigo-600" />
              Websites & Applications trusted by global industries.
            </li>
            <li className="flex items-start gap-3">
              <FaServer className="mt-1 text-xl text-indigo-600" />
              Built-in HTTP server for easy local development.
            </li>
            <li className="flex items-start gap-3">
              <SiApache className="mt-1 text-xl text-indigo-600" />
              Compatible with Apache, Nginx, and other servers.
            </li>
            <li className="flex items-start gap-3">
              <FaCogs className="mt-1 text-xl text-indigo-600" />
              Extremely flexible, scalable, and open-source.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 text-center bg-indigo-50 md:px-20">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">
          Why Ready Tech Solution is Your PHP Development Partner?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: <FaUsers />, title: "Wide Area of Expertise" },
            { icon: <FaCogs />, title: "Model View Controller (MVC)" },
            { icon: <FaDollarSign />, title: "Affordable Pricing" },
            { icon: <FaRocket />, title: "Fast Data Processing" },
            { icon: <FaServer />, title: "Supports All Web Servers" },
            { icon: <FaPhp />, title: "Platform Independent & Trusted" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              <div className="flex justify-center mb-4 text-3xl text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Let’s Build Your Next PHP Project 🚀
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          From simple websites to enterprise-level applications, we create
          tailored PHP solutions that deliver performance, scalability, and
          growth for your business.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 mt-8 text-white transition bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700"
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
}
