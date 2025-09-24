import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe, SiPaytm, SiFlipkart } from "react-icons/si";

export default function PaymentSection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, formData } = location.state || {};
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-900">
        <p className="text-xl">No plan selected!</p>
        <button
          className="px-4 py-2 mt-4 bg-indigo-600 rounded-lg"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    const amount = plan.price.replace("$", "");
    const upiId = "yourupiid@upi"; // Replace with your UPI ID
    let upiLink = "";

    switch (selectedPayment) {
      case "UPI":
        upiLink = `upi://pay?pa=${upiId}&pn=YourCompany&am=${amount}&cu=INR`;
        break;
      case "PhonePe":
        upiLink = `https://phonepe.com/pay?pa=${upiId}&pn=YourCompany&am=${amount}&cu=INR`;
        break;
      case "Paytm":
        upiLink = `https://paytm.com/upi/pay?pa=${upiId}&pn=YourCompany&am=${amount}&cu=INR`;
        break;
      case "Flipkart":
        upiLink = `https://www.flipkart.com/`; // Placeholder
        break;
      default:
        alert(`Payment via ${selectedPayment} coming soon!`);
        return;
    }

    window.location.href = upiLink;
  };

  const paymentOptions = [
    { name: "UPI", icon: <FaGooglePay size={24} /> },
    { name: "PhonePe", icon: <SiPhonepe size={24} /> },
    { name: "Paytm", icon: <SiPaytm size={24} /> },
    { name: "Flipkart", icon: <SiFlipkart size={24} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white bg-gray-900">
      {/* Main Container */}
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-extrabold">{plan.name} Plan</h1>
          <p className="text-gray-300">{plan.tagline}</p>
          <p className="text-3xl font-bold">{plan.price}</p>
        </div>

        {/* User Info & Services */}
        <div className="p-6 space-y-4 bg-gray-800 rounded-xl">
          <p className="font-medium text-gray-300">Customer Info:</p>
          <p>Name: <span className="font-semibold text-white">{formData?.name}</span></p>
          <p>Email: <span className="font-semibold text-white">{formData?.email}</span></p>
          {formData?.phone && <p>Phone: <span className="font-semibold text-white">{formData.phone}</span></p>}

          <p className="mt-4 font-medium text-gray-300">Selected Services:</p>
          <ul className="text-gray-300 list-disc list-inside">
            {formData?.selectedServices?.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Payment Options */}
        <div className="p-6 space-y-6 bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold">Choose Payment Method</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {paymentOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => setSelectedPayment(option.name)}
                className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-all text-lg font-medium ${
                  selectedPayment === option.name
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-200 hover:bg-indigo-500 hover:text-white"
                }`}
              >
                {option.icon} {option.name}
              </button>
            ))}
          </div>

          {/* QR Code for UPI */}
          {["UPI", "PhonePe", "Paytm"].includes(selectedPayment) && (
            <div className="flex flex-col items-center mt-6">
              <p className="mb-2 text-gray-300">Scan to pay via {selectedPayment}</p>
              <QRCode
                value={`upi://pay?pa=yourupiid@upi&pn=YourCompany&am=${plan.price.replace("$", "")}&cu=INR`}
                size={160}
                bgColor="#1F2937"
                fgColor="#4F46E5"
              />
            </div>
          )}

          {/* Pay Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handlePayment}
              className="w-full px-6 py-3 text-xl font-bold transition transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105"
            >
              Pay {plan.price}
            </button>
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <img src="https://img.icons8.com/ios-filled/50/4F46E5/lock.png" alt="Secure" className="h-8"/>
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8"/>
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="h-8"/>
          </div>
          <p className="mt-2 text-sm text-center text-gray-400">100% Secure Payment</p>
        </div>
      </div>
    </div>
  );
}
