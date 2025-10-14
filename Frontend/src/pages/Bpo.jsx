import React from "react";
import { Users, Headset,CheckCircle, ClipboardList, TrendingUp, FileText, PhoneCall, CalendarCheck, BarChart2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Bpo() {
  const bpoServices = [
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Customer Support",
      description:
        "24/7 multi-channel customer support including phone, chat, email, and social media, ensuring high client satisfaction.",
    },
    {
      icon: <Headset className="w-6 h-6 text-indigo-500" />,
      title: "Telemarketing",
      description:
        "Targeted outbound telemarketing campaigns to generate leads, boost sales, and enhance brand presence across regions.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-indigo-500" />,
      title: "Back-office Operations",
      description:
        "Efficient handling of data entry, document processing, payroll, accounting, HR administration, and other operational tasks.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
      title: "Lead Generation & Sales Support",
      description:
        "High-quality lead acquisition, CRM management, and sales team support to improve conversion rates and revenue.",
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-500" />,
      title: "Order & Invoice Management",
      description:
        "Manage orders, billing, and invoices efficiently to reduce errors and accelerate processing times.",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-indigo-500" />,
      title: "Appointment Scheduling",
      description:
        "Professional appointment setting and scheduling to improve customer engagement and service efficiency.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-indigo-500" />,
      title: "Survey & Feedback Management",
      description:
        "Collect customer insights, manage surveys, and analyze feedback to enhance service quality and client retention.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
      title: "Data Analytics & Reporting",
      description:
        "Detailed reports, KPIs, and analytics to help businesses make data-driven decisions and improve operational efficiency.",
    },
  ];

  const bpoBenefits = [
    "24/7 operational support to ensure uninterrupted services.",
    "Cost-effective solutions for startups, SMEs, and large enterprises.",
    "Enhanced customer satisfaction and loyalty.",
    "Scalable operations to meet fluctuating business needs.",
    "Expertly trained workforce with domain-specific knowledge.",
    "Advanced tools and technology to streamline business processes.",
    "Compliance with industry standards and data security protocols.",
    "Focused on ROI and business growth.",
  ];

  const bpoProcess = [
    "Understanding Client Requirements",
    "Workflow & Process Analysis",
    "Team Allocation & Training",
    "Technology Integration & Setup",
    "Operations Execution",
    "Monitoring, Reporting & Optimization",
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl px-6 mx-auto">
        <Helmet>
          <title>BPO Services | ReadyTech Solutions</title>
          <meta
            name="description"
            content="ReadyTech BPO Services: End-to-end solutions for Customer Support, Telemarketing, Back-office operations, Lead Generation, Data Analytics, and more."
          />
          <meta
            name="keywords"
            content="ReadyTech, BPO, Business Process Outsourcing, Customer Support, Telemarketing, Lead Generation, Back-office, Data Analytics, Appointment Scheduling, Order Management"
          />
        </Helmet>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
            Business Process Outsourcing (BPO)
          </h1>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            Streamline your business operations, enhance customer satisfaction, and boost efficiency with our comprehensive{" "}
            <span className="font-semibold text-indigo-500">ReadyTech BPO Services</span>.
          </p>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-6 leading-relaxed text-gray-700">
          <p>
            ReadyTech BPO provides end-to-end outsourcing solutions for businesses of all sizes. Our services cover customer support, telemarketing, back-office operations, data management, lead generation, and analytics. We focus on delivering cost-effective, scalable, and high-quality operations tailored to your unique business needs.
          </p>
          <p>
            With a trained workforce, advanced tools, and domain-specific expertise, we ensure your business can focus on its core activities while we manage operational efficiency, reduce costs, and maximize ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {bpoServices.map((service, index) => (
            <div
              key={index}
              className="p-6 transition transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 rounded-full">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-indigo-600">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Why Choose Our BPO Services</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bpoBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 text-gray-800 transition bg-white rounded-lg shadow hover:shadow-lg">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BPO Process */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Our BPO Process</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bpoProcess.map((step, index) => (
              <div key={index} className="p-4 font-medium text-center text-gray-700 transition bg-white rounded-lg shadow hover:shadow-lg">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                <span>{step}</span>
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
            Get Your BPO Solution Today
          </a>
        </div>
      </div>
    </section>
  );
}
