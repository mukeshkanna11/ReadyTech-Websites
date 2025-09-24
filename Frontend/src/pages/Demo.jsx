import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Demo() {
  const navigate = useNavigate();

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

  const paymentPlans = [
    {
      name: "Starter",
      price: "$99",
      tagline: "For small projects",
      features: ["1 Project", "Basic Support", "Email Updates"],
    },
    {
      name: "Professional",
      price: "$199",
      tagline: "Most Popular",
      features: ["3 Projects", "Priority Support", "Monthly Reports"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      tagline: "For growing businesses",
      features: ["Unlimited Projects", "24/7 Support", "Dedicated Manager"],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: [],
    message: "",
  });

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitRequest = () => {
    if (!formData.name || !formData.email || formData.selectedServices.length === 0) {
      alert("Please fill in your name, email, and select at least one service.");
      return;
    }

    if (!selectedPlan) {
      alert("Please select a payment plan before submitting.");
      return;
    }

    // Navigate to PaymentSection page with selected plan + form data
    navigate("/payment", { state: { plan: selectedPlan, formData } });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
      <div className="max-w-5xl px-6 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 sm:text-5xl">
          Get a Free Consultation & Choose Your Plan
        </h1>
        <p className="mt-4 text-center text-gray-600 sm:text-lg">
          Let’s understand your requirements and provide flexible pricing for your business.
        </p>

        {/* Form */}
        <form className="mt-12 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          />

          {/* Services */}
          <div>
            <p className="mb-3 font-semibold text-gray-700">Select Services:</p>
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

          <textarea
            name="message"
            placeholder="Additional notes / requirements..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            rows={4}
          ></textarea>
        </form>

        {/* Payment Plans */}
        <div className="mt-12">
          <p className="mb-6 text-2xl font-bold text-center text-gray-800">
            Select a Payment Plan
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {paymentPlans.map((plan) => (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan)}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-transform duration-500 ${
                  selectedPlan?.name === plan.name
                    ? "border-indigo-600 shadow-xl scale-105"
                    : "border-gray-200 bg-white hover:scale-105 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 px-3 py-1 text-xs font-bold text-white bg-indigo-600 rounded-tr-lg rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold text-indigo-700">{plan.name}</h3>
                <p className="mb-4 text-sm text-gray-500">{plan.tagline}</p>
                <p className="mb-6 text-3xl font-extrabold text-gray-900">{plan.price}</p>
                <ul className="mb-4 space-y-2 text-sm text-gray-600">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-indigo-500 rounded-full shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Submit Request Button */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={handleSubmitRequest}
              className="px-8 py-3 font-semibold text-white transition transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
