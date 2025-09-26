import React from "react";
import { CheckCircle } from "lucide-react";
import {Helmet} from "react-helmet-async";

export default function BusinessIntelligence() {
  const services = [
    "BI Analytics",
    "Data Warehousing",
    "Data Modeling",
    "Custom Visualization",
    "ETL (Extract, Transform, Load)",
    "Predictive Analytics",
    "Dashboarding",
    "Cloud BI",
    "BI Architect",
    "Cloud BI Migration",
    "Self-Service BI",
  ];

  const benefits = [
    "Informed decision-making",
    "Enhanced sales and marketing performance",
    "Improved customer experience",
    "Boosted productivity",
    "Optimized inventory control",
    "Data accuracy and compliance",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">

        <Helmet>  
          <title>Business Intelligence (BI) Services | ReadyTech Solutions</title>  
        </Helmet>
        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Business Intelligence (BI)
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Transform your raw data into actionable insights and strategic
            decisions with <span className="font-semibold text-indigo-500">ReadyTech BI Solutions</span>.
          </p>
        </div>

        {/* Service Description */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p>
            Business Intelligence (BI) services help companies gain deep
            visibility into their business processes and improve decision-making
            with consolidated analytics. BI transforms raw data into actionable
            insights to identify new opportunities and strategic improvements.
          </p>
          <p>
            From SME to enterprise, our BI solutions simplify data analytics,
            streamline operations, and help teams make informed decisions in
            real time. Mobile BI solutions allow monitoring and tracking of
            business processes on the go, enhancing efficiency and productivity.
          </p>
        </div>

        {/* Services Offered */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Our BI Services
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

        {/* Benefits / Value */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
            Value of Business Intelligence
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
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
            Get Your BI Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
