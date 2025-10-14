import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWordpress, FaDrupal, FaMagento, FaJoomla, FaMobileAlt, FaLock, FaChartLine, FaServer } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import bannerImg from "../../assets/images/bg1.jpg";

export default function CMSDevelopment() {
  const navigate = useNavigate();

  const processSteps = [
    { step: "Requirement Gathering", desc: "We analyze your business needs, audience, and content management goals." },
    { step: "CMS Platform Selection", desc: "Recommend WordPress, Drupal, Joomla, Magento, or custom CMS depending on requirements." },
    { step: "Design & UX/UI", desc: "Craft modern, responsive, and user-friendly interfaces for better engagement." },
    { step: "Development & Integration", desc: "Develop CMS backend, integrate plugins, APIs, and third-party systems." },
    { step: "Testing & Quality Assurance", desc: "Ensure seamless performance, security, and cross-browser/device compatibility." },
    { step: "Deployment & Support", desc: "Launch your CMS on live server and provide ongoing maintenance and support." },
  ];

  const clientBenefits = [
    "Tailored solutions for US business standards",
    "SEO-friendly and optimized CMS for Google",
    "Responsive design for mobile-first audiences",
    "Robust security & GDPR/CCPA compliance",
    "Easy-to-manage admin panel for content updates",
    "High-performance and scalable architecture",
    "Integration with analytics & marketing tools",
    "24/7 support & US-friendly communication hours",
  ];

  const cmsFeatures = [
    { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Seamless experience across all devices." },
    { icon: <FaLock />, title: "Secure CMS", desc: "Data security and user access management." },
    { icon: <FaChartLine />, title: "SEO & Analytics", desc: "Built-in SEO optimization & analytics dashboards." },
    { icon: <FaServer />, title: "Fast & Scalable", desc: "High performance CMS to handle growth and traffic spikes." },
  ];

  const industriesServed = [
    "E-commerce & Retail",
    "Healthcare & Medical",
    "Finance & Banking",
    "Education & eLearning",
    "Travel & Hospitality",
    "Media & Entertainment",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      {/* SEO */}
      <Helmet>
        <title>CMS Development Services | Ready Tech Solution</title>
        <meta
          name="description"
          content="Ready Tech Solution provides CMS development services to help businesses manage their content effectively."
        />
        <meta
          name="keywords"
          content="Ready Tech, CMS Development, WordPress, Drupal, Joomla, Magento, US Clients, IT Solutions, Coimbatore, Bangalore"
        />
      </Helmet>

      {/* Hero Banner */}
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
            End-to-end CMS solutions tailored for US clients. Custom websites, migrations, and fully managed content systems.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Comprehensive CMS Development</h2>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          We provide scalable CMS solutions that allow US clients to manage, update, and publish content efficiently. Platforms like WordPress, Drupal, Joomla, and Magento are used to create high-performing websites for business growth.
        </p>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-700">
          Our team focuses on security, speed, usability, and SEO optimization to deliver websites that satisfy US client expectations.
        </p>
      </section>

      {/* Platforms */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-900">CMS Platforms We Work With</h3>
        <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-4">
          {[{icon: FaWordpress, name: "WordPress", desc:"Flexible & widely used CMS."},
            {icon: FaDrupal, name:"Drupal", desc:"Secure & enterprise-ready."},
            {icon: FaJoomla, name:"Joomla", desc:"Dynamic & interactive websites."},
            {icon: FaMagento, name:"Magento", desc:"Robust eCommerce CMS."}
          ].map((platform, i)=>(
            <div key={i} className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
              <platform.icon className="w-12 h-12 text-indigo-600" />
              <h4 className="mt-4 font-semibold text-gray-800">{platform.name}</h4>
              <p className="mt-2 text-sm text-center text-gray-600">{platform.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-indigo-50 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Our CMS Development Process</h3>
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {processSteps.map((step, i)=>(
            <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg">
              <h4 className="mb-2 text-xl font-semibold text-indigo-600">{step.step}</h4>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900">Advanced CMS Features</h3>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {cmsFeatures.map((feature, i)=>(
            <div key={i} className="p-6 text-center bg-white shadow rounded-xl hover:shadow-lg">
              <div className="flex justify-center mb-4 text-3xl text-indigo-600">{feature.icon}</div>
              <h4 className="font-semibold text-black">{feature.title}</h4>
              <p className="mt-2 text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-gray-100 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Why US Clients Choose Us</h3>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {clientBenefits.map((benefit, i)=>(
            <div key={i} className="p-6 text-center bg-white shadow rounded-xl hover:shadow-lg">
              <FaChartLine className="w-10 h-10 mx-auto mb-3 text-indigo-500" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900">Industries We Serve</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {industriesServed.map((industry, i)=>(
            <span key={i} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full">{industry}</span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl px-6 py-16 mx-auto bg-indigo-50 rounded-xl">
        <h3 className="text-3xl font-bold text-center text-gray-900">Client Success Stories</h3>
        <div className="mt-10 space-y-6 text-center text-gray-700">
          <p>"Ready Tech Solutions delivered a CMS platform that improved our content management, SEO, and website speed dramatically. Highly recommend for US businesses!" – <strong>Michael S., New York</strong></p>
          <p>"Professional team, excellent communication, and timely delivery. Our WordPress site has never been better!" – <strong>Emily R., San Francisco</strong></p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center text-white bg-indigo-600">
        <h2 className="text-3xl font-bold">Let's Build Your CMS Solution</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-white/90">
          Partner with Ready Tech Solution to build a secure, scalable, and modern CMS tailored for your business.
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
