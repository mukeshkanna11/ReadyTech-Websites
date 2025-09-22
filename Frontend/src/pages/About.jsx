import React from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaTools, FaBullseye, FaLightbulb, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutReadyTech() {
  const locations = [
    { city: "Coimbatore", address: "149 2nd Floor, Hopes, Coimbatore, Tamil Nadu", phone: " +91 7010797721" },
    { city: "Coimbatore", address: "Tidel Park, Peelamedu, B.R. Puram Industrial Estate, Coimbatore, Tamil Nadu 641014", phone: " +91 7010797721" },
    { city: "Bangalore", address: "2nd floor, Hanumanthappa building, 21/8, Konanakunte Cross Rd, Vasanthapura, Bikasipura, Bangalore, Karnataka", phone: " +91 7010797721" },
  ];

  return (
    <div className="min-h-screen text-gray-100 bg-gray-900">

      {/* Glowing Animated Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden text-white">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(270deg, #6C63FF, #00C8FF, #FF6EC7, #FFD700)`,
            backgroundSize: "600% 600%",
            animation: "gradientShift 20s ease infinite",
          }}
        ></div>

        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl drop-shadow-lg">
            Hi, We Are Ready Tech Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200/90">
            Since 2019, Ready Tech Solutions has been offering professional training and innovative IT solutions. We specialize in web design, programming, networking, accounting, and more.
          </p>
        </div>

        <style>
          {`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </section>

      {/* About Section */}
      <section className="max-w-6xl px-6 py-20 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">Our Expertise & Innovation</h2>
            <p className="mb-6 leading-relaxed text-gray-300">
              Ready Tech Solutions brings you a team of experts delivering innovative web solutions that combine captivating design and flawless functionality. Our multipurpose HTML template is user-friendly and ready for immediate deployment, making us different from others with unique concepts and a polished final look.
            </p>
            <p className="mb-6 leading-relaxed text-gray-300">
              We provide end-to-end IT services, including software development, cloud solutions, mobile applications, digital marketing, and technical training. Our team ensures seamless integration of technology and business objectives for sustainable growth.
            </p>
            <p className="leading-relaxed text-gray-300">
              Our passion is to empower students and businesses with premium training, IT development, and unmatched services that accelerate growth and achieve superior results. We thrive on innovation, creativity, and delivering measurable outcomes for every client.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://opendoodles.s3-us-west-1.amazonaws.com/loving.svg"
              alt="Team Illustration"
              className="h-auto mx-auto shadow-lg rounded-xl w-72"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Impact</h2>
          <div className="grid gap-12 md:grid-cols-3">
            <StatCard icon={<FaLaptopCode />} title="Development" value={95} />
            <StatCard icon={<FaChalkboardTeacher />} title="Training" value={90} />
            <StatCard icon={<FaTools />} title="Services" value={85} />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid max-w-6xl gap-12 px-6 py-20 mx-auto md:grid-cols-2">
        <div className="p-8 bg-gray-800 shadow rounded-xl">
          <h3 className="flex items-center gap-2 mb-4 text-2xl font-bold text-indigo-400">
            <FaBullseye /> Mission
          </h3>
          <p className="leading-relaxed text-gray-300">
            Facilitate our people in offering superior performance to our valued customers. Grow business at an accelerated pace. Foster an environment that enables growth and nurtures leaders.
          </p>
        </div>
        <div className="p-8 bg-gray-800 shadow rounded-xl">
          <h3 className="flex items-center gap-2 mb-4 text-2xl font-bold text-indigo-400">
            <FaLightbulb /> Vision
          </h3>
          <p className="leading-relaxed text-gray-300">
            Our greatest vision is "Manufacturing All Robotics for our human and organizational needs." We aim to innovate, empower, and lead in IT solutions and training.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ValueCard icon={<FaHeart />} title="Empowerment" description="We empower our students and clients to achieve excellence and grow continuously." />
            <ValueCard icon={<FaHeart />} title="Empathy" description="Understanding and catering to the unique needs of every learner and customer." />
            <ValueCard icon={<FaHeart />} title="Respect" description="Respect for personal aspirations and individual growth is the backbone of our culture." />
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Our Locations</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc, idx) => (
              <div key={idx} className="p-6 transition transform bg-gray-700 shadow rounded-xl hover:shadow-xl hover:-translate-y-1">
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

      <style>
        {`
          @keyframes glowGrid {
            0% { background-position: 0 0, 0 0; }
            50% { background-position: 100px 100px, -50px -50px; }
            100% { background-position: 0 0, 0 0; }
          }
        `}
      </style>
    </div>
  );
}

// Stats and Values Cards
function StatCard({ icon, title, value }) {
  return (
    <div className="p-6 bg-gray-700 shadow rounded-xl">
      <div className="flex items-center justify-center mb-4 text-4xl text-indigo-400">{icon}</div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="mt-2 text-gray-300">{value}%</p>
      <div className="h-2 mt-2 bg-gray-600 rounded-full">
        <div className="h-2 bg-indigo-400 rounded-full" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="p-6 transition transform bg-gray-700 shadow rounded-xl hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-center mb-4 text-3xl text-indigo-400">{icon}</div>
      <h4 className="mb-2 text-xl font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
