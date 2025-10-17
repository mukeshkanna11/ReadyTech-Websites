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

  const plans = [
    {
      title: "Moderate Plan",
      price: "₹35,000 / month",
      highlight: "Best for small to mid-size businesses",
      color: "from-indigo-500 to-blue-500",
      services: [
        "SEO: On-page optimization (5-10 pages), basic keywords, meta tags, sitemap submission, monthly report.",
        "SMM: Manage 2-3 platforms (Instagram, Facebook), content calendar, engagement support.",
        "Social Media Posts: 15–20 static creatives, captions, festive posts, 1–2 short reels (optional).",
        "Designing Services: Creatives, 1–2 banners or flyers, minor revisions.",
        "Paid Ad Management (Add-on): Basic Facebook/Instagram campaigns with reports.",
        "Analytics & Reporting: Monthly insights, Google Analytics overview.",
        "Google Business Profile: Weekly updates, reviews, photo uploads.",
      ],
    },
    {
      title: "Rapid (Premium) Plan",
      price: "₹80,000 / month",
      highlight: "Comprehensive growth strategy for scaling brands",
      color: "from-purple-500 to-pink-500",
      services: [
        "Advanced SEO: Full keyword research, on-page & technical SEO, backlink building, local SEO, ranking reports.",
        "Full-Suite SMM: Manage 3–5 platforms (FB, IG, LinkedIn, YouTube), 20–40 posts/month, 4–6 reels.",
        "Paid Ad Management: Meta + Google Ads with A/B testing, optimization & conversion tracking.",
        "Creative & Design: 20–40 branded visuals, flyers, banners, animated posts, reels editing.",
        "Video & Photography (Optional): Short shoots, editing for ads, creative packaging.",
        "Website Support: Landing page, pop-ups, CTAs, banners, basic performance tracking.",
        "Business Development: CRM lead funnel, WhatsApp/Email campaigns, dashboards, proposal decks.",
        "Weekly & Monthly Reports: Competitor insights & growth suggestions.",
      ],
    },
    {
      title: "Custom Plan",
      price: "Tailored Pricing",
      highlight: "Perfect for personalized strategy & flexible budgets",
      color: "from-green-500 to-emerald-500",
      services: [
        "Choose your own services & platforms.",
        "Flexible budget as per goals.",
        "Dedicated account manager.",
        "On-demand design & posting support.",
        "Custom analytics and strategy planning.",
      ],
    },
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
        </Helmet>

        {/* Hero Section */}
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

        {/* Description */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            In today’s digital era, visibility means everything. At{" "}
            <strong>ReadyTech Solutions</strong>, we deliver data-driven,
            ROI-focused marketing solutions that help your brand connect,
            engage, and convert customers effectively.
          </p>
          <p>
            From startups to enterprises, our team empowers brands with
            measurable marketing outcomes — boosting traffic, conversions, and
            customer trust through creativity and strategy.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 text-gray-700">
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
            Our SEO experts focus on sustainable strategies to improve your
            visibility across search engines and bring long-term organic growth.
          </p>
          <div className="grid gap-4 text-gray-600 md:grid-cols-2">
            {seoFeatures.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Tools & Platforms We Use
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {marketingTools.map((tool, i) => (
              <div
                key={i}
                className="px-4 py-2 text-center transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="px-4 py-2 text-center transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

{/* 💰 Pricing Plans Section */}
<div className="mt-20">
  <h2 className="mb-10 text-3xl font-bold text-center text-indigo-700">
    Digital Marketing Plans – May 2025
  </h2>

  {/* 2-column grid for first two plans */}
  <div className="grid gap-10 md:grid-cols-2">
    {plans
      .filter((plan) => plan.title !== "Custom Plan")
      .map((plan, i) => (
        <div
          key={i}
          className={`relative rounded-2xl shadow-xl bg-gradient-to-br ${plan.color} p-[1px] transition-transform transform hover:scale-[1.02] hover:shadow-2xl`}
        >
          <div className="flex flex-col h-full p-6 bg-white rounded-2xl">
            {/* Highlight Badge */}
            {plan.title.includes("Rapid") && (
              <span className="absolute px-4 py-1 text-sm font-semibold text-white bg-indigo-600 rounded-full -top-4 left-6">
                ⭐ Popular Choice
              </span>
            )}

            {/* Header */}
            <h3 className="text-2xl font-semibold text-gray-800">
              {plan.title}
            </h3>
            <p className="mt-1 text-gray-500">{plan.highlight}</p>

            {/* Price */}
            <div className="mt-4 mb-4 text-3xl font-bold text-indigo-600">
              {plan.price}
            </div>

            {/* Service Breakdown (collapsible groups) */}
            <div className="mt-3 space-y-4">
              {plan.services.slice(0, 3).map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 pb-2 text-gray-700 border-b border-gray-100"
                >
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-indigo-500" />
                  <span>{service}</span>
                </div>
              ))}

              {/* Collapsible for extra content */}
              {plan.services.length > 3 && (
                <details className="mt-3 group">
                  <summary className="text-indigo-600 cursor-pointer hover:text-indigo-700">
                    View More Details
                  </summary>
                  <div className="mt-2 space-y-2 text-gray-700">
                    {plan.services.slice(3).map((extra, idx) => (
                      <div key={idx} className="flex gap-2">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-indigo-500" />
                        <span>{extra}</span>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>

            {/* Button */}
            <a
              href="/contact"
              className={`inline-block w-full py-3 mt-6 font-semibold text-center text-white transition rounded-full shadow-lg ${
                plan.title.includes("Rapid")
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-800 hover:bg-gray-900"
              }`}
            >
              Get Started
            </a>
          </div>
        </div>
      ))}
  </div>

  {/* 🌟 Centered Custom Plan */}
  <div className="flex justify-center mt-16">
    {plans
      .filter((plan) => plan.title === "Custom Plan")
      .map((plan, i) => (
        <div
          key={i}
          className={`relative w-full max-w-xl rounded-2xl shadow-xl bg-gradient-to-br ${plan.color} p-[1px] transition-transform transform hover:scale-[1.03] hover:shadow-2xl`}
        >
          <div className="flex flex-col h-full p-6 text-center bg-white rounded-2xl">
            <span className="absolute px-4 py-1 text-sm font-semibold text-white transform -translate-x-1/2 rounded-full bg-emerald-600 -top-4 left-1/2">
              💼 Fully Customizable
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-gray-800">
              {plan.title}
            </h3>
            <p className="mt-1 text-gray-500">{plan.highlight}</p>

            <div className="mt-4 mb-4 text-3xl font-bold text-emerald-600">
              {plan.price}
            </div>

            <ul className="mt-4 space-y-3 text-left text-gray-700 sm:text-center">
              {plan.services.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-start justify-center gap-2 sm:justify-center"
                >
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="inline-block w-full py-3 mt-6 font-semibold text-center text-white transition rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700"
            >
              Create My Plan
            </a>
          </div>
        </div>
      ))}
  </div>

  {/* Note */}
  <div className="max-w-3xl mx-auto mt-12 text-center text-gray-600">
    <p>
      💡 Every business is unique — our <span className="font-semibold text-emerald-600">Custom Plan</span> lets you pick services that fit your exact goals and budget.
    </p>
  </div>
</div>



   {/* 🌍 New Settler CTA Section */}
<div className="py-16 mt-24 text-center border border-gray-100 shadow-lg bg-gradient-to-b from-gray-50 to-white rounded-3xl">
  {/* Section Title */}
  <h3 className="mb-2 font-semibold tracking-widest text-indigo-600 uppercase">
    New Settler
  </h3>

  {/* Main Heading */}
  <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
    Let’s Build Your Next Digital Success Story 🚀
  </h2>

  {/* Subtitle */}
  <p className="max-w-2xl mx-auto mt-4 text-gray-600">
    Join our community of growing brands — get insights, updates, and strategies
    that help you lead in the digital world.
  </p>

  {/* Subscribe Form */}
  <form
    onSubmit={(e) => e.preventDefault()}
    className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row sm:gap-4"
  >
    <input
      type="email"
      placeholder="Enter your email address"
      required
      className="px-5 py-3 text-gray-800 border border-gray-300 rounded-full w-72 sm:w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button
      type="submit"
      className="px-8 py-3 font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
    >
      Subscribe
    </button>
  </form>

  {/* Small Footer CTA */}
  <div className="mt-8">
    <a
      href="/contact"
      className="inline-block px-8 py-3 font-semibold text-indigo-600 transition-transform transform border border-indigo-600 rounded-full hover:bg-indigo-50 hover:scale-105"
    >
      Let’s Get Started
    </a>
  </div>
</div>



      </div>
    </section>
  );
}
