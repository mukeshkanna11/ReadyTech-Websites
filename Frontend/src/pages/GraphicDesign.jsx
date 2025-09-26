import React from "react";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function GraphicDesign() {
  const services = [
    "Graphic Designing",
    "Logo Design",
    "Pamphlet Designing",
    "Brochure Design",
    "Banner / Poster Design",
    "Mascot Design",
    "Visual Design",
    "Corporate Flyer Design",
    "Portfolio Design",
    "Business Stationery Mockups",
    "UI Branding Design",
    "Package Designing",
    "Sales Video",
  ];

  const advantages = [
    "Creative designs beyond technical abilities",
    "Highly compatible for printing & publishing",
    "Affordable designs that outshine competitors",
    "Attracts customer attention & boosts conversions",
    "Analysis of business goals, services, customer behavior & industry standards",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>  
          <title>Graphic Design | Ready Tech Solutions</title>        
          <meta name="description" content="Ready Tech Solutions provides expert graphic design services to help businesses grow and succeed in the digital world." />        
          <meta name="keywords" content="Ready Tech, Graphic Design, IT Solutions, Training, Coimbatore, Bangalore" />
        </Helmet>
        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Graphic Design
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Create visually stunning designs that communicate your brand’s
            story effectively with{" "}
            <span className="font-semibold text-indigo-500">Lilac Designs</span>.
          </p>
        </div>

        {/* Service Description */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            Graphic design plays a crucial role in a competitive market as a
            tool for communication. An impressive design combines text and
            visuals to express your business ideas effectively. Our unique
            approach transforms your brand identity into memorable visuals and
            symbolism.
          </p>
          <p>
            Your branding is more than a color palette or logo—it's what sets
            your business apart. We ensure that your brand identity resonates
            with your target audience and drives engagement.
          </p>
        </div>

        {/* Services Offered */}
        <div className="mt-12">
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
            Why Graphic Designing With Us
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

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white transition-transform transform bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Get Your Graphic Design
          </a>
        </div>
      </div>
    </section>
  );
}
