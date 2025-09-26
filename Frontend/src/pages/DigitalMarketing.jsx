import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function DigitalMarketing() {
  const features = [
    "SEO - Improve search ranking & organic traffic",
    "Social Media Marketing - Build engagement & brand awareness",
    "Pay-Per-Click (PPC) - Drive targeted traffic quickly",
    "E-mail Marketing - Nurture leads & retain customers",
    "Video Marketing - Enhance brand storytelling and visibility",
    "Conversion Optimization - Maximize ROI on campaigns",
    "Lead Generation - Acquire new prospects efficiently",
    "Comprehensive Digital Strategy - Tailored to your objectives",
  ];

  const seoFeatures = [
    "On-Page Optimization - Keyword, content, meta tags, internal linking",
    "Off-Page Optimization - Backlinks, authority building, social signals",
    "White-hat SEO practices - Ethical & sustainable growth",
    "Content Optimization - Relevant, engaging, and conversion-focused",
    "Analytics & Reporting - Track ROI and performance metrics",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>  
          <title>Digital Marketing | Ready Tech Solutions</title>        
          <meta name="description" content="Ready Tech Solutions provides expert digital marketing services to help businesses grow and succeed in the digital world." />        
          <meta name="keywords" content="Ready Tech, Digital Marketing, IT Solutions, Training, Coimbatore, Bangalore" />
        </Helmet>
        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Digital Marketing
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Expand your reach, grow your brand, and maximize ROI with{" "}
            <span className="font-semibold text-indigo-500">ReadyTech Solutions</span>.
          </p>
        </div>

        {/* Service Description */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            Digital marketing services provide businesses of all sizes with an opportunity to market
            their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location
            companies, we help you reach your target audience and maintain strong customer relationships.
          </p>
          <p>
            Online Sales, Lead Generation, or Conversion Optimization — whatever your objective,
            our team develops a comprehensive strategy and executes it efficiently. We balance
            investment of time and money against ROI to achieve your digital goals.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* SEO Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            SEO - Search Engine Optimization
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-center text-gray-700">
            Good SEO means higher visibility and better organic traffic. We focus on ethical,
            white-hat strategies to improve search ranking and optimize customer journey.
          </p>
          <div className="grid gap-4 text-gray-600 md:grid-cols-2">
            {seoFeatures.map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {item}
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
            Start Your Digital Campaign
          </a>
        </div>
      </div>
    </section>
  );
}
