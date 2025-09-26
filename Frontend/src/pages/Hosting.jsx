import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Hosting() {
  const hostingFeatures = [
    "Secure your personal information & website data",
    "Easy to use Control Panel",
    "Firewall Protection",
    "Bulk domain name search facility",
    "Facility to book Premium Domains",
    "Secure your domain from hijacking risks with domain lock",
    "Free URL Forwarding",
    "Choose Domain TLDs that matches your profession (like .photo, .music, .photography)",
    "Multiple year registration",
  ];

  const domainServices = [
    "Best Dedicated Servers Hosting",
    "WordPress Hosting",
    "VPS Hosting",
    "Windows Hosting",
    "Linux Reseller Hosting",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>  
          <title>Domain & Hosting Services | Ready Tech Solutions</title>        
          <meta name="description" content="Ready Tech Solutions provides domain and hosting services to help businesses establish a strong online presence." />        
          <meta name="keywords" content="Ready Tech, Domain & Hosting Services, IT Solutions, Training, Coimbatore, Bangalore" />
        </Helmet>
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Domain & Hosting Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Ready Tech Solution provides certified, secure, and reliable web hosting and domain services with dedicated support to ensure your online presence thrives.
          </p>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-4 text-gray-700">
          <p>
            With dedicated servers in the USA and India, we provide both shared and individual web hosting services. Our control panel allows easy management of all hosting activities. We host websites on Linux and Windows servers suitable for static and dynamic websites, supporting platforms like PHP, ASP, ASP.net, Java, and more.
          </p>
          <p>
            Web hosting ensures your website is accessible online. Servers, internet connection, and data centers work together to keep your site live and reachable by your users.
          </p>
        </div>

        {/* Hosting Features */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Hosting Features
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hostingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Services */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our Domain Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {domainServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Started with Domain & Hosting
          </a>
        </div>
      </div>
    </section>
  );
}
