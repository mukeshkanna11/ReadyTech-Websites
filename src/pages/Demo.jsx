import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Demo() {
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
    { name: "Basic", price: "$99", features: ["1 Project", "Email Support"] },
    { name: "Standard", price: "$199", features: ["3 Projects", "Priority Email Support"] },
    { name: "Premium", price: "$299", features: ["Unlimited Projects", "24/7 Support"] },
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
    setFormData((prev) => {
      if (prev.selectedServices.includes(service)) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service],
        };
      }
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || formData.selectedServices.length === 0) {
      alert("Please fill in your name, email, and select at least one service.");
      return;
    }

    if (!selectedPlan) {
      alert("Please select a payment plan before submitting.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          services: formData.selectedServices.join(", "),
          message: formData.message,
          plan: selectedPlan?.name,
          amount: selectedPlan?.price,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Your request has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            selectedServices: [],
            message: "",
          });
          setSelectedPlan(null);
        },
        () => {
          alert("Oops! Something went wrong, please try again.");
        }
      );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-4xl px-6 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 sm:text-5xl">
          Request a Demo & Payment
        </h1>
        <p className="mt-4 text-center text-gray-700 sm:text-lg">
          Fill out the form below and select a payment plan. Our team will reach out to you!
        </p>

        {/* Form */}
        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Services */}
          <div>
            <p className="mb-2 font-semibold text-gray-700">Select Services:</p>
            <div className="grid gap-2 md:grid-cols-2">
              {servicesOptions.map((service, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg cursor-pointer hover:bg-indigo-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedServices.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="w-4 h-4 text-indigo-500 accent-indigo-500"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Additional requirements or queries..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
          ></textarea>

          {/* Payment Plans */}
<div className="mt-12">
  <p className="mb-6 text-2xl font-bold text-center text-gray-800">
    Choose a Payment Plan
  </p>

  <div className="grid gap-6 md:grid-cols-3">
    {paymentPlans.map((plan) => (
      <div
        key={plan.name}
        onClick={() => setSelectedPlan(plan)}
        className={`relative p-6 border rounded-2xl cursor-pointer transition-all duration-500
          ${
            selectedPlan?.name === plan.name
              ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-2xl scale-105"
              : "bg-white/50 backdrop-blur-md border-gray-200 shadow hover:scale-105 hover:shadow-xl"
          }`}
      >
        {/* Ribbon Badge for Selected Plan */}
        {selectedPlan?.name === plan.name && (
          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white bg-yellow-400 rounded-bl-lg">
            Selected
          </div>
        )}

        {/* Plan Name */}
        <h3 className="mb-2 text-xl font-bold text-gray-700">{plan.name}</h3>

        {/* Plan Price */}
        <p className="mb-4 text-3xl font-extrabold text-gray-700">{plan.price}</p>

        {/* Features */}
        <ul className="mb-4 space-y-2 text-sm">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700">
              <span className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Choose Button */}
        <button
          onClick={() => setSelectedPlan(plan)}
          className={`w-full py-2 mt-2 font-semibold rounded-lg transition-all duration-300
            ${
              selectedPlan?.name === plan.name
                ? "bg-yellow-400 text-gray-800 hover:bg-yellow-300"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
        >
          {selectedPlan?.name === plan.name ? "Selected" : "Choose Plan"}
        </button>
      </div>
    ))}
  </div>

  <p className="mt-6 text-sm text-center text-gray-500">
    *All payments are secure and encrypted. You can upgrade or cancel anytime.
  </p>
</div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 mt-6 font-semibold text-white transition-transform transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105"
          >
            Submit Request & Pay
          </button>
        </form>
      </div>
    </section>
  );
}
