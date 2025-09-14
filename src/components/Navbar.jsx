import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Rtech-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get current path

  const menuItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/training", label: "TRAINING" },
    { path: "/hire-trainee", label: "HIRE & TRAINEE" },
    { path: "/development", label: "DEVELOPMENT" },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Ready Tech Solutions" className="object-contain w-10 h-10" />
            <span className="ml-2 text-lg font-semibold tracking-wide text-black">
              Ready Tech Solutions
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 font-medium text-black md:flex font-poppins">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative group transition duration-300 ${
                    isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 font-medium text-gray-800">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={`block py-2 px-2 rounded transition ${
                    isActive ? "bg-indigo-100 text-indigo-700 font-bold" : "hover:bg-indigo-100 hover:text-indigo-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
