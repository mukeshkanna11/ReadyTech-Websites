import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function GraphicDesign() {
  const services = [
    "Logo Design & Brand Identity",
    "Pamphlet, Brochure & Catalogue Design",
    "Banner, Poster & Billboard Design",
    "Packaging & Label Design",
    "UI/UX Branding & Product Design",
    "Corporate Presentation & Flyer Design",
    "Infographic & Data Visualization Design",
    "Social Media Creative Design",
    "Business Card & Stationery Mockups",
    "Portfolio Design",
    "Mascot & Illustration Design",
    "Sales Videos & Motion Graphics",
  ];

  const advantages = [
    "Creative storytelling that visually represents your brand’s message.",
    "Customized concepts tailored for both digital and print media.",
    "Affordable, high-quality visuals that outperform competitors.",
    "Designed for scalability — from startups to global enterprises.",
    "Deep understanding of marketing psychology & brand positioning.",
    "Built with brand consistency — maintaining tone, colors, and identity.",
    "Optimized for engagement on all platforms (Web, Social, Print).",
  ];

  const process = [
    "Understanding client goals & brand values",
    "Market & competitor research",
    "Concept creation & visual mood boards",
    "Design development & refinement",
    "Client feedback integration",
    "Final delivery with multiple formats (AI, PNG, PDF, etc.)",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>
          <title>Graphic Design | ReadyTech Solutions</title>
          <meta
            name="description"
            content="ReadyTech Solutions offers creative graphic design services including logo, brochure, poster, UI branding, and package design that elevate your brand’s identity."
          />
          <meta
            name="keywords"
            content="Graphic Design, Logo Design, Brochure Design, Branding, UI Design, Poster Design, ReadyTech Solutions, Coimbatore, Bangalore"
          />
        </Helmet>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Graphic Design Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Build a lasting visual identity with{" "}
            <span className="font-semibold text-indigo-500">
              Lilac Designs by ReadyTech Solutions
            </span>
            — where creativity meets strategy.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            In today’s competitive market, visuals speak louder than words.
            <strong> Graphic Design</strong> is not just about aesthetics — it’s about
            communicating your brand’s message, creating emotions, and inspiring action.
          </p>
          <p>
            At ReadyTech Solutions, our creative team blends innovation and strategy to
            design visuals that leave a strong, memorable impression. From startup
            branding to enterprise marketing assets, our designs reflect your unique
            story and connect with your audience.
          </p>
          <p>
            Every design we create is backed by research, creativity, and purpose —
            ensuring your visuals don’t just look good but also deliver measurable
            business impact.
          </p>
        </div>

        {/* Services Offered */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our Graphic Design Services
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Why Choose Our Design Team?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="p-4 text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mb-2 text-indigo-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our Design Process
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-center text-gray-700">
            We follow a structured design workflow that ensures clarity, creativity,
            and collaboration — delivering results that align with your vision.
          </p>
          <div className="grid gap-4 text-gray-600 sm:grid-cols-2 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={index}
                className="p-4 text-center transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Your Custom Design
          </a>
        </div>
      </div>
    </section>
  );
}
