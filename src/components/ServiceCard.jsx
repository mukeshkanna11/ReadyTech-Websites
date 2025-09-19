import React from "react";

export default function ServiceCard({ service }) {
  if (!service) return null; // Safety check if service is undefined

  return (
    <div className="relative flex flex-col overflow-hidden transition bg-white shadow-lg rounded-xl group hover:shadow-2xl">
      {/* Image */}
      <img
        src={service.image || "https://via.placeholder.com/400x300"} // fallback image
        alt={service.title || "Service Image"}
        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"></div>

      {/* Card Content */}
      <div className="relative flex flex-col flex-1 p-6">
        <div className="mb-3">{service.icon}</div>
        <h4 className="text-lg font-semibold text-indigo-600">
          {service.title || "Service Title"}
        </h4>
        <p className="flex-1 mt-2 text-sm text-gray-600">
          {service.description || "Service description goes here."}
        </p>
        <div className="mt-4">
          <a
            href={service.link || "#"}
            className="inline-block w-full px-4 py-2 text-sm font-medium text-center text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}
