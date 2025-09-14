import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Trainning";
import Contact from "./pages/Contact";
import ReadyTechTemplates from "./pages/ReadyTechTemplates";
import HireTrainee from "./pages/HireTrainee";
import Development from "./pages/Development";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 pt-20"> {/* pt-20 for navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-trainee" element={<HireTrainee />} />
          <Route path="/development" element={<Development />} />
          <Route path="/templates" element={<ReadyTechTemplates />} />
        </Routes>
      </main>
    </div>
  );
}
