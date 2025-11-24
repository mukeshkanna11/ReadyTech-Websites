// App.jsx
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// 🧩 Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Newsletter from "./components/Newsletter";
import HelpdeskChat from "./components/HelpdeskChat";

// 🏠 Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Development from "./pages/Development";
import Demo from "./pages/Demo";
import Register from "./pages/Register";
import PaymentSection from "./pages/PaymentSection";
import Login from "./pages/Login";

// 📊 Dashboard Pages
import Dashboard from "./pages/Dashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// 🧠 Service Detail Pages
import WebsiteMaintenance from "./pages/WebsiteMaintenance";
import DigitalMarketing from "./pages/DigitalMarketing";
import GraphicDesign from "./pages/GraphicDesign";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Hosting from "./pages/Hosting";
import Bpo from "./pages/Bpo";
import IoTSolutions from "./pages/IoTSolutions";

// 💻 Development Service Pages
import Nodejs from "./pages/services/Nodejs";
import Reactjs from "./pages/services/Reactjs";
import CMSDevelopment from "./pages/services/CMSDevelopment";
import Php from "./pages/services/Php";
import EcommerceDevelopment from "./pages/services/EcommerceDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import Angular from "./pages/services/Angular";

/* -----------------------------------------------------------
 🔐 PROTECTED ROUTE
----------------------------------------------------------- */
const PrivateRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) return <Navigate to="/login" replace />;

  if (allowedRole && user.role !== allowedRole)
    return <Navigate to="/dashboard" replace />;

  return children;
};

/* -----------------------------------------------------------
 🌐 MAIN APPLICATION ROOT
----------------------------------------------------------- */
export default function App() {
  const location = useLocation();

  /* Hide Navbar / Footer / Chat on specific pages */
  const hideNavbarRoutes = ["/register", "/payment", "/login"];
  const hideFooterRoutes = [
    "/dashboard",
    "/register",
    "/payment",
    "/employee-dashboard",
    "/admin-dashboard",
    "/login",
    "/newsletter",
  ];

  const hideChatRoutes = [
    "/login",
    "/register",
    "/payment",
    "/dashboard",
    "/employee-dashboard",
    "/admin-dashboard",
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);
  const hideFooter = hideFooterRoutes.includes(location.pathname);
  const hideChat = hideChatRoutes.includes(location.pathname);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <ScrollToTop />

      <main className={`flex-1 ${!hideNavbar ? "pt-20" : "pt-0"}`}>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/development" element={<Development />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<PaymentSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newsletter" element={<Newsletter />} />

          {/* SMART DASHBOARD REDIRECT */}
          <Route
            path="/dashboard"
            element={
              token && user ? (
                user.role === "admin" ? (
                  <Navigate to="/admin-dashboard" replace />
                ) : (
                  <Navigate to="/employee-dashboard" replace />
                )
              ) : (
                <Dashboard />
              )
            }
          />

          {/* EMPLOYEE DASHBOARD */}
          <Route
            path="/employee-dashboard"
            element={
              <PrivateRoute allowedRole="employee">
                <EmployeeDashboard />
              </PrivateRoute>
            }
          />

          {/* ADMIN DASHBOARD */}
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute allowedRole="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* SERVICE DETAIL PAGES */}
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/services/iot-solutions" element={<IoTSolutions />} />
          <Route path="/services/domain-hosting" element={<Hosting />} />
          <Route path="/services/bpo-solutions" element={<Bpo />} />

          {/* DEVELOPMENT PAGES */}
          <Route path="/services/nodejs" element={<Nodejs />} />
          <Route path="/services/reactjs" element={<Reactjs />} />
          <Route path="/services/cms-development" element={<CMSDevelopment />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/angular" element={<Angular />} />
          <Route path="/services/php-development" element={<Php />} />

          {/* 404 → HOME */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* FOOTER */}
      {!hideFooter && <Newsletter />}
      {!hideFooter && <Footer />}

      {/* 💬 HELP DESK CHAT (Visible on Public Pages Only) */}
      {!hideChat && <HelpdeskChat />}
    </div>
  );
}
