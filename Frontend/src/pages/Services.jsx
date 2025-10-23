import React from "react";
import { 
  FaDatabase, 
  FaMobileAlt, 
  FaChartLine, 
  FaLaptopCode, 
  FaLightbulb, 
  FaRobot, 
  FaServer, 
  FaHeadset 
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website Maintenance",
      description: "Keep your website updated, secure, and optimized for the best performance with 24/7 support.",
      icon: <FaLaptopCode className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      link: "/services/website-maintenance",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, PPC, and content marketing campaigns that deliver results.",
      icon: <FaChartLine className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "/services/digital-marketing",
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals that strengthen your brand identity and connect with your audience.",
      icon: <FaLightbulb className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      link: "/services/graphic-design",
    },
    {
      title: "Business Intelligence",
      description: "Unlock powerful insights with BI solutions to make smart, data-driven decisions.",
      icon: <FaDatabase className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
      link: "/services/business-intelligence",
    },
    {
      title: "Artificial Intelligence",
      description: "Leverage AI & ML for smarter automation, analytics, and customer engagement.",
      icon: <FaRobot className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      link: "/services/artificial-intelligence",
    },
    {
      title: "IoT Solutions",
      description: "Connect devices with secure IoT solutions tailored to your business needs.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      link: "/services/iot-solutions",
    },
    {
      title: "Domain & Hosting",
      description: "Reliable hosting & domain solutions to keep your business online and running 24/7.",
      icon: <FaServer className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      link: "/services/domain-hosting",
    },
    {
      title: "BPO Solutions",
      description: "End-to-end outsourcing with customer support, telemarketing, and back-office services.",
      icon: <FaHeadset className="text-4xl text-white" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      link: "/services/bpo-solutions",
    },
  ];

  // Enhanced ServiceCard Component
  const ServiceCard = ({ service }) => (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col overflow-hidden text-gray-100 transition-transform transform bg-gray-800 shadow-lg rounded-2xl hover:shadow-2xl"
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute p-3 text-white bg-indigo-600 rounded-full shadow-lg bottom-4 left-4">
          {service.icon}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-semibold text-indigo-400">{service.title}</h3>
        <p className="flex-1 mt-2 text-sm text-gray-300">{service.description}</p>
        <button
          onClick={() => navigate(service.link)}
          className="px-4 py-2 mt-auto font-medium text-gray-900 transition bg-indigo-400 rounded-lg shadow-md hover:bg-indigo-500 hover:scale-105"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );

 return (
    <div className="relative min-h-screen overflow-hidden">
      <Helmet>
        <title>Services | Ready Tech Solutions</title>
      </Helmet>

      {/* ---------- Background Image ---------- */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-50 -z-20"
        style={{ backgroundImage: "url(/images/service3.jpg" }}
      ></div>

      {/* ---------- Services Banner with Animated Bubbles ---------- */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-[80vh] overflow-hidden text-white">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: [
                "rgba(168,85,247,0.4)",
                "rgba(236,72,153,0.4)",
                "rgba(250,204,21,0.3)",
              ][Math.floor(Math.random() * 3)],
              width: Math.random() * 35 + 20 + "px",
              height: Math.random() * 35 + 20 + "px",
              left: Math.random() * 100 + "vw",
              top: Math.random() * 100 + "vh",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            animate={{
              y: [0, -300],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6,
            }}
          />
        ))}

        <div className="relative z-10 px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            Our <span className="text-purple-400">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
            We deliver innovative solutions that help businesses thrive in the digital age.
          </p>
          <button
            onClick={() => navigate("/demo")}
            className="px-8 py-3 mt-6 text-lg font-semibold text-black transition rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 hover:scale-105"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* ---------- Services Grid ---------- */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-white">Our Services</h2>
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-300">
          Discover our range of services crafted to transform your business and provide measurable results.
        </p>

        <div className="grid gap-10 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
