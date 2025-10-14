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
    "Marketing Automation - Streamline repetitive tasks & improve efficiency",
    "Analytics & Reporting - Data-driven insights for better decision-making",
  ];

  const seoFeatures = [
    "On-Page Optimization - Keyword, content, meta tags, internal linking",
    "Off-Page Optimization - Backlinks, authority building, social signals",
    "White-hat SEO practices - Ethical & sustainable growth",
    "Content Optimization - Relevant, engaging, and conversion-focused",
    "Technical SEO - Speed optimization, schema markup, XML sitemaps",
    "Local SEO - Google My Business optimization for location-based traffic",
    "E-Commerce SEO - Product visibility & sales growth optimization",
    "Analytics & Reporting - Track ROI and keyword performance metrics",
  ];

  const marketingTools = [
    "Google Analytics & Search Console",
    "Google Ads Manager & Meta Ads",
    "LinkedIn Campaign Manager",
    "Ahrefs / SEMrush / Moz Tools",
    "Mailchimp & HubSpot for automation",
    "Canva, CapCut & Adobe tools for creatives",
    "Hotjar & Crazy Egg for behavior tracking",
  ];

  const industries = [
    "E-commerce",
    "Healthcare",
    "Real Estate",
    "Education & EdTech",
    "IT & Software",
    "Manufacturing",
    "Finance & Banking",
    "Retail & FMCG",
    "Tourism & Hospitality",
    "Automotive",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>
          <title>Digital Marketing | ReadyTech Solutions</title>
          <meta
            name="description"
            content="ReadyTech Solutions provides comprehensive digital marketing services including SEO, SMM, PPC, Email Marketing, and Conversion Optimization to grow your business digitally."
          />
          <meta
            name="keywords"
            content="Digital Marketing, SEO, SMM, PPC, Email Campaigns, Branding, ReadyTech Solutions, Marketing Services, Coimbatore, Bangalore"
          />
        </Helmet>

        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Digital Marketing Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Expand your reach, grow your brand, and maximize ROI with{" "}
            <span className="font-semibold text-indigo-500">
              ReadyTech Solutions
            </span>.
          </p>
        </div>

        {/* Service Description */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            In today’s fast-paced digital landscape, visibility means everything.
            At <strong>ReadyTech Solutions</strong>, we create data-driven, ROI-focused
            digital marketing strategies to help your brand connect, engage, and convert.
            Whether you want to boost your SEO ranking, run paid campaigns, or build
            a loyal community — our experts craft a holistic digital growth roadmap.
          </p>
          <p>
            From startups to global enterprises, we empower brands with measurable
            marketing outcomes — increasing traffic, conversions, and customer trust
            through creative and strategic approaches.
          </p>
        </div>

        {/* Core Services */}
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
            SEO (Search Engine Optimization)
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-center text-gray-700">
            Our SEO experts focus on sustainable strategies to improve your visibility
            across search engines. We follow modern SEO best practices that bring
            long-term organic growth.
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

        {/* Tools & Technology Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Tools & Platforms We Use
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {marketingTools.map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 text-center transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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

        {/* CTA Section */}
        <div className="mt-20 text-center">
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
