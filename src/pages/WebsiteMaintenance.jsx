import React from "react";
import { CheckCircle } from "lucide-react";

export default function WebsiteMaintenance() {
  const features = [
    "24/7 website monitoring & uptime checks",
    "Bug fixing & patch updates",
    "SEO & performance optimization",
    "Regular backups & disaster recovery",
    "Security scans & vulnerability fixes",
    "Content & design updates on request",
    "Modification, deletion, addition of website content & pages",
    "Replacement of images and banners",
    "Email creation & configuration on local client",
    "Fixing system bugs & troubleshooting",
  ];

  const industries = [
    "Insurance",
    "Healthcare",
    "Manufacturing",
    "IT & Telecom",
    "Legal",
    "FMCG & Retail",
    "eCommerce",
    "Learning & Education",
    "M-Governance",
    "Finance & Banking",
    "Media & Entertainment",
    "Transportation & Logistics",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Website Maintenance
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Ensure your website stays secure, optimized, and fully functional with{" "}
            <span className="font-semibold text-indigo-500">ReadyTech Solutions</span>.
          </p>
        </div>

        {/* Full Description */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            The website maintenance is the prerequisite for a business to harness a vibrant and
            long-lasting online presence. Constantly updated, quality-rich content improves the
            interest of the viewers and maintains a good flow of traffic. Your website must be
            checked regularly for bugs, page functionality, images, and more, which can only be
            managed by professionals.
          </p>
          <p>
            Our team can update websites, modify, delete, or add content and pages, replace images,
            maintain email lists, upload PDFs, and much more. We analyze your website design,
            content, images, meta titles, descriptions, CSS, HTML coding, and fix system bugs to
            enhance speed and user experience.
          </p>
          <p>
            With over a decade of experience providing best-in-class website maintenance services
            in India and globally, we support both static and responsive websites to ensure
            optimal performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-4 py-2 text-center transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {industry}
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
            Get Your Site Maintained
          </a>
        </div>
      </div>
    </section>
  );
}
