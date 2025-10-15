import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Rtech1-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll direction + background change
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY || window.scrollY < 50);
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Active + double hover line animation
  const getLinkClass = (path) =>
    `relative px-1 py-1 transition-colors duration-300 ${
      location.pathname === path
        ? "text-yellow-400 font-semibold"
        : "text-gray-300 hover:text-yellow-400"
    }
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0
    before:origin-left before:transition-transform before:duration-300
    after:content-[''] after:absolute after:left-0 after:-top-0.5
    after:w-full after:h-[2px] after:bg-yellow-400 after:scale-x-0
    after:origin-right after:transition-transform after:duration-300
    hover:before:scale-x-100 hover:after:scale-x-100`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 backdrop-blur-md ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "bg-gradient-to-r from-gray-900/95 via-gray-950/95 to-black/95 shadow-xl border-b border-gray-800"
          : "bg-gradient-to-b from-black/90 via-gray-950/80 to-gray-900/80"
      }`}
    >
      <div className="flex items-center justify-between w-full px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Ready Tech" className="object-contain w-10 h-10" />
          <span className="text-lg font-bold tracking-wide text-white font-poppins">
            ReadyTech Solutions
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-8 font-medium md:flex">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/services" className={getLinkClass("/services")}>
            Services
          </Link>
          <Link to="/development" className={getLinkClass("/development")}>
            Development
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Dashboard Button */}
        <div className="hidden space-x-4 md:flex">
          <Link
            to="/dashboard"
            className="px-4 py-2 font-semibold text-yellow-400 transition-all duration-300 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:scale-105"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-200 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-gray-200 border-t border-gray-700 shadow-lg bg-black/95 md:hidden animate-slideDown">
          <div className="px-6 pt-4 pb-6 space-y-4 font-medium">
            <Link to="/" className="block hover:text-yellow-400">
              Home
            </Link>
            <Link to="/services" className="block hover:text-yellow-400">
              Services
            </Link>
            <Link to="/development" className="block hover:text-yellow-400">
              Development
            </Link>
            <Link to="/about" className="block hover:text-yellow-400">
              About
            </Link>
            <Link to="/contact" className="block hover:text-yellow-400">
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="block py-2 text-center text-yellow-400 transition-all duration-300 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:shadow-lg"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
