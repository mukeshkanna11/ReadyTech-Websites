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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      <Helmet>
        <title>Free Consultation Demo | Ready Tech Solutions</title>
        <meta
          name="description"
          content="Get a free consultation demo with Ready Tech Solutions for web development, digital marketing, UI/UX design, and IT services."
        />
        <meta
          name="keywords"
          content="Demo, Free Consultation, Ready Tech Solutions, Web Development, Digital Marketing"
        />
      </Helmet>

      {/* Background Illustration */}
      <div className="absolute top-0 transform -translate-x-1/2 pointer-events-none left-1/2 -translate-y-1/3 opacity-10">
        <img
          src="https://undraw.co/api/illustrations/9b4a5c45-42e8-4cbb-8f54-1d0f1e3cbb37" // Free undraw illustration
          alt="Illustration Background"
          className="w-[800px] md:w-[1000px]"
        />
      </div>

      <div className="relative max-w-4xl px-6 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 sm:text-5xl">
          Request a Free Demo
        </h1>
        <p className="mt-4 text-center text-gray-600 sm:text-lg">
          Let us understand your business requirements and provide the best
          solutions tailored for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 p-10 mt-12 space-y-6 bg-white shadow-2xl rounded-3xl md:p-16"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />

          {/* Services Selection */}
          <div>
            <p className="mb-3 font-semibold text-gray-700">
              Select Services:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {servicesOptions.map((service, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 shadow-sm cursor-pointer transition-all ${
                    formData.selectedServices.includes(service)
                      ? "bg-indigo-100 border-indigo-500 text-indigo-700"
                      : "bg-white hover:bg-indigo-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedServices.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="w-4 h-4 text-indigo-600 accent-indigo-600"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold text-white rounded-full shadow-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Sending..." : "Request Free Demo"}
          </button>
        </form>

        {/* Footer Note */}
        <p className="mt-6 text-sm text-center text-gray-500">
          We respect your privacy and will never share your contact information.
        </p>
      </div>
    </section>
  );
}
