import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
export default function DigitalMarketing() {

  const navigate = useNavigate();
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
      color: "from-indigo-500 via-blue-500 to-cyan-500",
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
      color: "from-purple-500 via-pink-500 to-red-500",
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
      color: "from-emerald-500 via-teal-500 to-green-500",
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
    <section className="relative py-24 bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="max-w-6xl px-6 mx-auto">

        <Helmet>
          <title>Digital Marketing | ReadyTech Solutions</title>
        </Helmet>

        {/* ================= HERO ================= */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl">
            Digital Marketing Services
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600">
            Expand your reach, grow your brand, and maximize ROI with{" "}
            <span className="font-semibold text-indigo-600">
              ReadyTech Solutions
            </span>.
          </p>
        </div>

     


{/* ================= PRICING ================= */}
<div className="mb-24">
  <h2 className="mb-3 text-3xl font-extrabold text-center text-indigo-700">
    Pricing Plans
  </h2>

  <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
    Choose a plan that fits your business goals and scale your growth with
    performance-driven marketing solutions.
  </p>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {plans.map((plan, i) => (
      <div
        key={i}
        className={`relative p-[2px] rounded-3xl bg-gradient-to-br ${plan.color} shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1`}
      >
        <div className="flex flex-col h-full p-6 bg-white rounded-3xl">

          {/* HEADER */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {plan.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {plan.highlight}
            </p>

            <div className="mt-4 text-2xl font-extrabold text-indigo-600">
              {plan.price}
            </div>
          </div>

          {/* SERVICES (LIMITED FOR CLEAN UI) */}
          <div className="flex-1 mt-6 space-y-2">
            {plan.services.slice(0, 4).map((s, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 w-4 h-4 mt-1 text-indigo-500" />
                <span className="text-xs leading-relaxed text-gray-700">
                  {s}
                </span>
              </div>
            ))}

            {/* EXPAND OPTION */}
            {plan.services.length > 4 && (
              <details className="mt-2">
                <summary className="text-xs text-indigo-600 cursor-pointer hover:text-indigo-700">
                  View more services
                </summary>

                <div className="mt-2 space-y-2">
                  {plan.services.slice(4).map((s, idx) => (
                    <div key={idx} className="flex gap-2">
                      <CheckCircle className="flex-shrink-0 w-4 h-4 mt-1 text-indigo-500" />
                      <span className="text-xs text-gray-700">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>

          {/* CTA BUTTON (ALWAYS SAME POSITION) */}
          <div className="mt-6">
            <button
              onClick={() => navigate("/demo")}
              className="w-full py-3 text-sm font-semibold text-white transition shadow-md rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl"
            >
              Request a Demo
            </button>
          </div>

        </div>
      </div>
    ))}

  </div>
</div>

        {/* ================= CORE SERVICES ================= */}
<div className="mb-24">
  <h2 className="mb-3 text-3xl font-extrabold text-center text-gray-800">
    What We Offer
  </h2>

  <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
    End-to-end digital marketing solutions designed to increase visibility,
    generate leads, and grow your business consistently.
  </p>

  <div className="grid gap-6 md:grid-cols-2">
    {features.map((item, i) => (
      <div key={i} className="relative group">

        {/* Soft Glow Background */}
        <div className="absolute inset-0 transition duration-300 opacity-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md group-hover:opacity-20"></div>

        {/* Card */}
        <div className="relative flex gap-4 p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200">

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
            </div>
          </div>

          {/* Content */}
          <span className="leading-relaxed text-gray-700 transition group-hover:text-indigo-600">
            {item}
          </span>

        </div>
      </div>
    ))}
  </div>
</div>

        {/* ================= SEO ================= */}
<div className="mb-24">
  <h2 className="mb-3 text-3xl font-extrabold text-center text-gray-800">
    SEO (Search Engine Optimization)
  </h2>

  <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600">
    We focus on sustainable SEO strategies that improve rankings, drive
    organic traffic, and build long-term search visibility for your business.
  </p>

  <div className="grid gap-5 md:grid-cols-2">
    {seoFeatures.map((item, i) => (
      <div key={i} className="relative group">

        {/* Glow Background */}
        <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur group-hover:opacity-20"></div>

        {/* Card */}
        <div className="relative p-5 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200">

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-indigo-600 rounded-full">
                ✓
              </span>
            </div>

            <span className="leading-relaxed text-gray-700 transition group-hover:text-indigo-600">
              {item}
            </span>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

        {/* ================= TOOLS ================= */}
<div className="mb-24">
  <h2 className="mb-3 text-3xl font-extrabold text-center text-gray-800">
    Tools & Platforms We Use
  </h2>

  <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
    We use industry-leading marketing tools to analyze, optimize and scale your business performance effectively.
  </p>

  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {marketingTools.map((tool, i) => (
      <div key={i} className="relative group">

        {/* Glow Background */}
        <div className="absolute inset-0 transition duration-300 opacity-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md group-hover:opacity-20"></div>

        {/* Card */}
        <div className="relative p-4 text-center transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200">
          <span className="text-sm font-medium text-gray-700 transition group-hover:text-indigo-600">
            {tool}
          </span>
        </div>

      </div>
    ))}
  </div>
</div>

        {/* ================= INDUSTRIES ================= */}
<div className="mt-20">
  <h2 className="mb-3 text-3xl font-extrabold text-center text-gray-800">
    Industries We Serve
  </h2>

  <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
    We deliver tailored digital marketing strategies across multiple industries
    to maximize reach, conversions, and brand growth.
  </p>

  <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
    {industries.map((ind, i) => (
      <div
        key={i}
        className="relative group"
      >
        <div className="absolute inset-0 transition duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40"></div>

        <div className="relative p-4 text-center transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-1">
          <span className="font-medium text-gray-700 transition group-hover:text-indigo-600">
            {ind}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}