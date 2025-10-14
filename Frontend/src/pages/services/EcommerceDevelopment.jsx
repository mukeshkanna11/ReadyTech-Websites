import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStore, FaGem, FaTshirt, FaPlane, FaUtensils, FaLock, FaMobileAlt, FaChartLine, FaRocket } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function EcommerceDevelopment() {
  const navigate = useNavigate();

  const processSteps = [
    { step: "Requirement Analysis", desc: "Understand business objectives, target audience, and eCommerce goals." },
    { step: "UI/UX Design", desc: "Create intuitive and mobile-friendly designs for a seamless shopping experience." },
    { step: "Development & Integration", desc: "Implement front-end, back-end, payment gateways, and third-party APIs." },
    { step: "Testing & QA", desc: "Thorough testing for performance, security, and cross-browser/device compatibility." },
    { step: "Deployment & Support", desc: "Launch your store and provide ongoing maintenance & updates." },
  ];

  const ecommerceFeatures = [
    { icon: <FaShoppingCart />, title: "Custom Shopping Cart", desc: "Optimized cart for smooth customer checkout experience." },
    { icon: <FaLock />, title: "Secure Payment Gateway", desc: "Integrate secure payment methods like Stripe, PayPal, and credit cards." },
    { icon: <FaMobileAlt />, title: "Mobile-Friendly Design", desc: "Responsive websites for customers on any device." },
    { icon: <FaChartLine />, title: "SEO & Analytics", desc: "Built-in analytics and SEO tools to increase traffic and conversions." },
    { icon: <FaRocket />, title: "Fast & Scalable", desc: "Websites optimized for high performance and growth." },
  ];

  const industriesServed = [
    "Fashion & Apparel",
    "Grocery & Retail",
    "Jewelry & Luxury",
    "Travel & Tourism",
    "Food & Restaurants",
    "Electronics & Gadgets",
  ];

  const clientTestimonials = [
    { name: "John D., New York", feedback: "Ready Tech built an amazing eCommerce platform for our fashion store. Smooth UX, fast checkout, and secure payments!" },
    { name: "Samantha R., San Francisco", feedback: "Our online grocery platform was delivered on time with full mobile optimization. Highly recommended!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <Helmet>
        <title>Ready Tech Solutions - Ecommerce Development</title>
        <meta name="description" content="Ready Tech Solutions provides Ecommerce development services to help businesses build feature-rich, reliable, and scalable eCommerce websites." />
        <meta name="keywords" content="Ready Tech, Ecommerce Development, IT Solutions, Training, Coimbatore, Bangalore, US Clients" />
      </Helmet>

      {/* Top Banner */}
      <section className="relative bg-gray-800 text-white h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1920&q=80"
          alt="Ecommerce Development Banner"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative px-6 text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Ecommerce Development <span className="text-indigo-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-100">
            Feature-rich, reliable, and scalable eCommerce websites tailored for your business.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Ecommerce Development</h2>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          Ready Tech Solutions provides robust eCommerce platforms for US clients, ensuring secure transactions, excellent user experience, and efficient content management.
        </p>
      </section>

      {/* Major Services */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-900">Our eCommerce Services</h3>
        <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaStore className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Grocery Store App</h4>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaPlane className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Travel & Tourism</h4>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaGem className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Jewelry eCommerce</h4>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaUtensils className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Restaurants & Takeaways</h4>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaTshirt className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Fashion & Clothing</h4>
          </div>
          <div className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <FaTshirt className="w-12 h-12 text-indigo-600" />
            <h4 className="mt-4 font-semibold text-gray-800">Clothing & Exports</h4>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-indigo-50 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Our Ecommerce Development Process</h3>
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg">
              <h4 className="mb-2 text-xl font-semibold text-indigo-600">{step.step}</h4>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900">Advanced Ecommerce Features</h3>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {ecommerceFeatures.map((feature, i) => (
            <div key={i} className="p-6 text-center bg-white shadow rounded-xl hover:shadow-lg">
              <div className="flex justify-center mb-4 text-3xl text-indigo-600">{feature.icon}</div>
              <h4 className="font-semibold text-black">{feature.title}</h4>
              <p className="mt-2 text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-gray-100 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Industries We Serve</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {industriesServed.map((industry, i) => (
            <span key={i} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full">{industry}</span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-indigo-50 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Client Success Stories</h3>
        <div className="mt-10 space-y-6 text-center text-gray-700">
          {clientTestimonials.map((testimonial, i) => (
            <p key={i}>"{testimonial.feedback}" – <strong>{testimonial.name}</strong></p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center text-white bg-indigo-600">
        <h2 className="text-3xl font-bold">Ready to Launch Your eCommerce Store?</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-white/90">
          Partner with Ready Tech Solutions to develop a modern, scalable, and secure eCommerce website tailored for your business.
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
