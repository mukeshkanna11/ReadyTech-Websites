// App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Development from "./pages/Development";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Service Detail Pages
import WebsiteMaintenance from "./pages/WebsiteMaintenance";
import DigitalMarketing from "./pages/DigitalMarketing";
import GraphicDesign from "./pages/GraphicDesign";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Hosting from "./pages/Hosting";
import Bpo from "./pages/Bpo";
import IoTSolutions from "./pages/IoTSolutions";

// Development Service Pages
import Nodejs from "./pages/services/Nodejs";
import Reactjs from "./pages/services/Reactjs";
import CMSDevelopment from "./pages/services/CMSDevelopment";
import Php from "./pages/services/Php";
import EcommerceDevelopment from "./pages/services/EcommerceDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import Angular from "./pages/services/Angular";

export default function App() {
  const location = useLocation(); // Get current route

  // Check if current route is login
  const hideFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* Scroll to top */}
      <ScrollToTop />

      {/* Page content */}
      <main className="flex-1 pt-20">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/development" element={<Development />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Service Detail Pages */}
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/services/iot-solutions" element={<IoTSolutions />} />
          <Route path="/services/domain-hosting" element={<Hosting />} />
          <Route path="/services/bpo-solutions" element={<Bpo />} />

          {/* Development Pages */}
          <Route path="/services/nodejs" element={<Nodejs />} />
          <Route path="/services/reactjs" element={<Reactjs />} />
          <Route path="/services/cms-development" element={<CMSDevelopment />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/angular" element={<Angular />} />
          <Route path="/services/php-development" element={<Php />} />
        </Routes>
      </main>

      {/* Footer visible only if not on login page */}
      {!hideFooter && <Footer />}
    </div>
  );
}
