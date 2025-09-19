import React from "react";
import { Users, Headset, ClipboardList, TrendingUp } from "lucide-react";

export default function Bpo() {
  const services = [
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Customer Support",
      description:
        "24/7 multi-channel customer support for your clients with trained representatives ensuring high satisfaction.",
    },
    {
      icon: <Headset className="w-6 h-6 text-indigo-500" />,
      title: "Telemarketing",
      description:
        "Targeted telemarketing campaigns to boost sales and strengthen brand presence across multiple regions.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-indigo-500" />,
      title: "Back-office Services",
      description:
        "Efficient data entry, order processing, payroll, and other administrative operations handled with accuracy.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
      title: "Lead Generation & Sales Support",
      description:
        "We help businesses generate quality leads, manage pipelines, and support the sales team for better conversions.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Hero Section */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            BPO Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Streamline operations, improve customer engagement, and increase
            business efficiency with our{" "}
            <span className="font-semibold text-indigo-500">ReadyTech BPO Services</span>.
          </p>
        </div>

        {/* Floating Illustration */}
        <div className="relative z-0 flex justify-center w-full my-12">
          <Users className="absolute w-16 h-16 text-indigo-400 animate-bounce-slow -top-4 left-20" />
          <Headset className="absolute w-20 h-20 text-indigo-500 animate-spin-slow top-10 right-24" />
          <ClipboardList className="absolute w-16 h-16 text-indigo-300 bottom-10 left-32 animate-bounce-slow" />
          <TrendingUp className="absolute w-24 h-24 text-indigo-200 bottom-5 right-16 animate-pulse-slow" />
        </div>

        {/* Description */}
        <div className="relative z-10 mt-12 space-y-6 text-gray-700">
          <p>
            Our BPO services are designed to provide end-to-end solutions for businesses of all sizes. 
            From customer support to telemarketing, back-office operations, and lead generation, we ensure high efficiency and quality output.
          </p>
          <p>
            We leverage advanced tools, skilled professionals, and best practices to help organizations focus on their core competencies while we manage the operational aspects seamlessly.
          </p>
          <p>
            Whether it’s a startup looking for scalable operations or a large enterprise aiming to improve customer satisfaction, our BPO solutions are tailored to meet your unique business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-full">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-indigo-600">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="relative z-10 mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Your BPO Services
          </a>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-bounce-slow { animation: bounce-slow 4s infinite; }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spin-slow 10s linear infinite; }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          .animate-pulse-slow { animation: pulse-slow 5s infinite; }
        `}
      </style>
    </section>
  );
}
