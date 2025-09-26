import { 
  FaLaptopCode, 
  FaPhoneAlt, 
  FaBullseye,
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGlobe 
} from "react-icons/fa";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const contactInfo = [
    { title: "Call Us", info: "+91 7010797721", icon: <FaPhoneAlt /> },
    { title: "Email Us", info: "info@readytechsolutions.in", icon: <FaEnvelope /> },
    { title: "Address", info: "Coimbatore - 641004, Tamil Nadu, India", icon: <FaMapMarkerAlt /> },
  ];

  const locations = [
    { city: "Coimbatore", address: "No 149 2nd Floor, Hopes, Coimbatore", phone: "+91 7010797721" },
    { city: "Coimbatore", address: "Tidel Park, Peelamedu, B.R Puram Industrial Estate Coimbatore, Chennai", phone: "+91 7010797721" },
    { city: "Bangalore", address: "2nd floor, Hanumanthappa building, 21/8, Konanakunte Cross Rd, Vasanthapura, Bikasipura, Bangalore", phone: "+91 7010797721" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 bg-gray-900">

      {/* React Helmet for SEO */}
      <Helmet>
        <title>Contact Us | Ready Tech Solutions</title>
        <meta name="description" content="Get in touch with Ready Tech Solutions. We provide innovative IT solutions, training, and services." />
        <meta name="keywords" content="Ready Tech, Contact, IT Solutions, Training, Coimbatore, Bangalore" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(-45deg, #6C63FF, #00C8FF, #FF6EC7, #FFD700)`,
            backgroundSize: "400% 400%",
            animation: "gradientShift 20s ease infinite",
          }}
        />
        <div className="absolute inset-0">
          {[...Array(30)].map((_, idx) => (
            <span
              key={idx}
              className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="relative z-10 px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl drop-shadow-lg">
            Get in Touch with <span className="text-yellow-400">Ready Tech</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-gray-200/90">
            Have a project in mind? We are innovators, developers, and designers ready to help your business succeed.
          </p>
        </div>

        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0% { transform: translateY(0px); opacity: 0.5; }
            50% { transform: translateY(-15px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 0.5; }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
        `}</style>
      </section>

      {/* Contact Info Cards */}
      <section className="grid max-w-6xl gap-6 px-6 py-20 mx-auto sm:grid-cols-1 md:grid-cols-3">
        {contactInfo.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center p-6 text-center transition bg-gray-800 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-indigo-400 bg-gray-700 rounded-full">
              {item.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-indigo-400">{item.title}</h3>
            <p className="text-gray-300">{item.info}</p>
          </div>
        ))}
      </section>

      {/* Contact Form + Map */}
      <section className="grid max-w-6xl gap-12 px-6 py-20 mx-auto sm:grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-gray-800 shadow-2xl rounded-xl md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Send a Message</h2>
          <p className="mb-6 text-gray-300">Fill out the form and our team will respond within 24 hours.</p>
          <form className="space-y-4">
            {["Full Name", "Email", "Phone"].map((placeholder, idx) => (
              <input 
                key={idx} 
                type={placeholder === "Email" ? "email" : placeholder === "Phone" ? "tel" : "text"}
                placeholder={placeholder} 
                className="w-full px-4 py-3 text-gray-100 transition-all duration-300 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
              />
            ))}
            <select className="w-full px-4 py-3 text-gray-100 transition-all duration-300 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md">
              <option>Select Subject</option>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Collaboration</option>
            </select>
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="w-full px-4 py-3 text-gray-100 transition-all duration-300 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md"
            />
            <button type="submit" className="w-full py-3 font-medium text-white transition-all duration-300 rounded-md shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-xl">
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full overflow-hidden shadow-2xl h-72 md:h-96 rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.556611945835!2d76.96242117477455!3d11.016844092130465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cd7d9c5ed9%3A0x4aee018a6f85e924!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694713600000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Ready Tech Location"
          />
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Offices</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc, idx) => (
              <div key={idx} className="p-6 transition transform bg-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <div className="flex justify-center mb-4 text-3xl text-indigo-400">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">{loc.city}</h4>
                <p className="text-sm text-gray-300">{loc.address}</p>
                <p className="mt-2 text-sm font-medium text-indigo-400">{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="max-w-6xl px-6 py-20 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-white">Why Choose Ready Tech?</h2>
        <p className="mb-6 text-gray-300">
          Ready Tech Solutions has been empowering businesses and students since 2019. With expert developers, trainers, and designers, we deliver top-notch IT solutions, innovative training programs, and premium services tailored for your growth.
        </p>
        <p className="mb-6 text-gray-300">
          Our approach combines creativity, technology, and practical strategies to help clients achieve measurable results. Trusted by hundreds of companies and thousands of students, we focus on delivering excellence every step of the way.
        </p>
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {[
            { icon: <FaGlobe />, title: "Global Standards", desc: "We maintain international standards in all services and training programs." },
            { icon: <FaLaptopCode />, title: "Expert Team", desc: "Our team consists of industry professionals with years of experience." },
            { icon: <FaBullseye />, title: "Client Focused", desc: "We customize solutions to meet the unique needs of every client." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 transition transform bg-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
              <div className="mx-auto mb-4 text-3xl text-indigo-400">{item.icon}</div>
              <h4 className="mb-2 text-xl font-semibold text-white">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-3xl px-6 mx-auto text-center">
          <h3 className="text-2xl font-bold text-white">Subscribe for Updates</h3>
          <p className="mt-2 text-gray-300">Get the latest news, courses, and resources delivered to your inbox.</p>
          <form className="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
            <input type="email" placeholder="Enter your Gmail ID" className="w-full px-4 py-3 text-gray-100 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:w-auto"/>
            <button type="submit" className="px-6 py-3 font-medium text-white transition-all duration-300 rounded-md shadow-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-xl">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
