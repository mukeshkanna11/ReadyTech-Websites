import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedServices: [],
  });

  const [loading, setLoading] = useState(false);

  const servicesOptions = [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "BPO Solutions",
    "IoT Solutions",
    "AI Solutions",
    "Domain & Hosting",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email, and Message fields.");
      return;
    }

    if (formData.selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(response.data.msg); // Success message from backend

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        selectedServices: [],
      });
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.msg || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <>
    <Helmet>
      <title>Free Consultation Demo | Ready Tech Solutions</title>
      <meta
        name="description"
        content="Book a free consultation with Ready Tech Solutions."
      />
    </Helmet>

    <section className="min-h-screen text-white bg-slate-950">
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid items-center mb-28 gap-14 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex px-4 py-2 mb-6 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/20 bg-cyan-500/10">
              🚀 Free Consultation
            </span>

            <h1 className="text-5xl font-black leading-tight lg:text-5xl">
              Build Your
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                Next Digital Success
              </span>
            </h1>

            <p className="max-w-xl mt-8 text-lg leading-relaxed text-slate-400">
              We help startups and businesses build powerful websites,
              mobile applications, AI solutions, digital marketing systems
              and scalable technology platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-12">
              {[
                ["50+", "Projects Delivered"],
                ["98%", "Client Satisfaction"],
                ["24/7", "Support"],
                ["100%", "Custom Solutions"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="p-6 border rounded-3xl bg-slate-900 border-slate-800"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {value}
                  </h3>
                  <p className="mt-2 text-slate-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid gap-4 mt-12">
              {[
                "Dedicated Technical Team",
                "Transparent Project Workflow",
                "Modern Technology Stack",
                "Long-Term Support & Maintenance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-8 border shadow-2xl bg-slate-900 rounded-3xl border-slate-800 md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Request Free Demo
              </h2>

              <p className="mt-2 text-slate-400">
                Tell us about your requirements and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 text-white border rounded-2xl bg-slate-950 border-slate-800 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 text-white border rounded-2xl bg-slate-950 border-slate-800 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 text-white border rounded-2xl bg-slate-950 border-slate-800 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
              />

              {/* Services */}
              <div>
                <p className="mb-4 font-medium text-slate-300">
                  Services Required
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {servicesOptions.map((service) => (
                    <label
                      key={service}
                      className={`cursor-pointer rounded-2xl border p-4 transition ${
                        formData.selectedServices.includes(service)
                          ? "border-cyan-500 bg-cyan-500/10"
                          : "border-slate-800 bg-slate-950"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={formData.selectedServices.includes(
                            service
                          )}
                          onChange={() =>
                            handleCheckboxChange(service)
                          }
                          className="accent-cyan-500"
                        />
                        <span className="text-sm text-slate-300">
                          {service}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 text-white border resize-none rounded-2xl bg-slate-950 border-slate-800 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl font-semibold transition ${
                  loading
                    ? "bg-slate-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90"
                }`}
              >
                {loading
                  ? "Sending Request..."
                  : "Book Free Consultation"}
              </button>
            </form>

            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800">
              <div className="p-3 text-xs text-center rounded-xl bg-slate-950 text-slate-400">
                🔒 Secure
              </div>

              <div className="p-3 text-xs text-center rounded-xl bg-slate-950 text-slate-400">
                ⚡ Fast Response
              </div>

              <div className="p-3 text-xs text-center rounded-xl bg-slate-950 text-slate-400">
                🎯 Experts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
}