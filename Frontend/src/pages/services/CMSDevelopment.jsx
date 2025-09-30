import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWordpress, FaDrupal, FaMagento, FaJoomla } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// ✅ Import your local image correctly
import bannerImg from "../../assets/images/bg1.jpg";

export default function CMSDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>CMS Development Services | Ready Tech Solution</title>
        <meta
          name="description"
          content="Ready Tech Solution provides CMS development services to help businesses manage their content effectively."
        />
        <meta
          name="keywords"
          content="Ready Tech, CMS Development, IT Solutions, Training, Coimbatore, Bangalore"
        />
      </Helmet>

      {/* Top Banner */}
      <section className="relative bg-gray-800 text-white h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={bannerImg}
          alt="CMS Development Banner"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        <div className="relative px-6 text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            CMS Web Development <span className="text-indigo-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-100">
            Ready Tech Solution provides end-to-end CMS solutions tailored to
            your business. Custom CMS websites, migrations, and full content
            management systems.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          CMS Web Development
        </h2>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          Ready Tech Solution has end-to-end CMS development solutions catering
          to your business needs, whether you want a custom CMS website or a
          website migration service. CMS web development has come a long way
          from simple catalogs to being a significant platform for a wide
          variety of websites.
        </p>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          Our effective custom CMS website development services ensure your
          content is properly organized, helping you manage it easily. The
          popularity of CMS platforms such as WordPress, Drupal, Joomla, and
          Magento has increased due to the rapid pace of digital transformation.
        </p>
      </section>

      {/* Platforms Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-900">
          CMS Platforms We Work With
        </h3>
        <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaWordpress className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">WordPress</h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              Highly flexible and widely used CMS for websites and blogs.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaDrupal className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Drupal</h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              Secure and scalable CMS platform for enterprise-level websites.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaJoomla className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Joomla</h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              Flexible CMS for creating dynamic and interactive websites.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaMagento className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Magento</h4>
            <p className="mt-2 text-sm text-center text-gray-600">
              Robust eCommerce CMS for large-scale online stores.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-indigo-50 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Why Choose Ready Tech Solution
        </h3>
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-indigo-600">Custom CMS Solutions</h4>
            <p className="mt-2 text-sm text-gray-600">
              Tailored CMS platforms built to match your business processes and UX.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-indigo-600">Agile Development Process</h4>
            <p className="mt-2 text-sm text-gray-600">
              Quick delivery, iterative improvements, and stress-free maintenance.
            </p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-indigo-600">Cost & Time Efficient</h4>
            <p className="mt-2 text-sm text-gray-600">
              Up to 70% cost savings and 2x faster development compared to traditional approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center text-white bg-indigo-600">
        <h2 className="text-3xl font-bold">Let's Build Your CMS Solution</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-white/90">
          Partner with Ready Tech Solution to build a secure, scalable, and modern CMS platform tailored for your business.
        </p>
        <button
          onClick={() => navigate("/demo")}
          className="px-8 py-4 mt-8 font-semibold text-indigo-600 transition bg-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
        >
          🚀 Book a Free Demo
        </button>
      </section>
    </div>
  );
}
