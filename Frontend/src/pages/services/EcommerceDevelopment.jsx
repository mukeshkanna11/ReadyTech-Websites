import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStore, FaGem, FaTshirt, FaPlane, FaUtensils } from "react-icons/fa";
import {Helmet} from "react-helmet-async";
export default function EcommerceDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>  
        <title>Ready Tech Solutions - Ecommerce Development</title>        
        <meta name="description" content="Ready Tech Solutions provides Ecommerce development services to help businesses build feature-rich, reliable, and scalable eCommerce websites." />        
        <meta name="keywords" content="Ready Tech, Ecommerce Development, IT Solutions, Training, Coimbatore, Bangalore" />
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

      {/* Description Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Ecommerce Development</h2>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          Ready Tech Solutions is a leading eCommerce website development company providing the best technical consultation and development plans for unique client requirements. We build feature-rich, exclusive, and reliable eCommerce platforms for businesses worldwide.
        </p>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          E-commerce websites allow business owners to reach millions of potential customers with minimal initial investment. Our websites focus on secure transactions, user-friendly design, and efficient management of customer data.
        </p>
      </section>

      {/* Major eCommerce Services */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-900">Major eCommerce Development Services</h3>
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

      {/* Why Choose Us Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-indigo-50 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Why Ready Tech Solution</h3>
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-indigo-600">Cost-effective & High Quality</h4>
            <p className="mt-2 text-sm text-gray-600">Affordable solutions without compromising quality and performance.</p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-indigo-600">Flexible & Reliable</h4>
            <p className="mt-2 text-sm text-gray-600">Consistent project management and adaptive development approach.</p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h4 className="font-semibold text-indigo-600">Expert Team</h4>
            <p className="mt-2 text-sm text-gray-600">Highly trained professionals with extensive experience in eCommerce development.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
