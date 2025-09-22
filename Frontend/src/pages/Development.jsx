import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Development() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white bg-gray-950 font-poppins">
      {/* Banner */}
      <section className="relative flex items-center justify-center h-[500px] overflow-hidden">
  {/* Floating Lines Background */}
  <motion.div
    className="absolute inset-0"
    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  style={{
  backgroundImage: `
    linear-gradient(90deg, rgba(0, 200, 255, 0.6) 2px, transparent 2px),
    linear-gradient(180deg, rgba(255, 100, 255, 0.6) 2px, transparent 2px)
  `,
  backgroundSize: "60px 60px",
}}


  />
  
  {/* Soft Overlay to keep contrast balanced */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-gray-800/85 to-gray-900/95" />

  {/* Content */}
  <div className="relative z-10 px-6 text-center">
    <h1 className="text-4xl font-extrabold md:text-5xl drop-shadow-lg">
      Empowering Development with{" "}
      <span className="text-indigo-400">Ready Tech Solutions</span>
    </h1>
    <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
      Software & hardware innovations crafted to optimize operations and accelerate growth.
    </p>
  </div>
</section>


      {/* Intro Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400">What We Do</h2>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-400">
          Ready Tech Solutions develops, creates, and modifies applications to
          meet the demands of today’s businesses. From mobile apps to enterprise
          systems, we follow best practices and deliver scalable, reliable
          solutions.
        </p>
      </section>

      {/* Core Areas */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-400">
          Our Core Areas
        </h2>
        <div className="grid gap-8 mt-10 md:grid-cols-3">
          <GlowCard
            image="https://cdn-icons-png.flaticon.com/512/4727/4727424.png"
            title="Mobile Development"
            description="Cross-platform mobile apps designed for performance and usability."
          />
          <GlowCard
            image="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            title="Web Development"
            description="Full-stack web apps with responsive UI and scalable backends."
          />
          <GlowCard
            image="https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
            title="Custom Projects"
            description="Enterprise systems, IoT apps, and next-gen technology solutions."
          />
        </div>
      </section>

      {/* Detailed Services */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-400">
          Development Services
        </h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2">
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            title="Web Development"
            description="Scalable web applications with modern frameworks & API integration."
            onClick={() => navigate("/services/web-development")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/919/919830.png"
            title="PHP Development"
            description="Dynamic PHP-based apps, optimized for speed & functionality."
            onClick={() => navigate("/services/php-development")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            title="CMS Development"
            description="Custom CMS solutions for easy content management and migration."
            onClick={() => navigate("/services/cms-development")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            title="Ecommerce Development"
            description="Feature-rich eCommerce solutions with secure payment gateways."
            onClick={() => navigate("/services/ecommerce-development")}
          />
          <ServiceCard
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg"
            title="Angular JS Development"
            description="High-performance Angular apps with robust security and features."
            onClick={() => navigate("/services/angular")}
          />
          <ServiceCard
            image="https://cdn-icons-png.flaticon.com/512/919/919825.png"
            title="Node JS Development"
            description="Backend APIs and microservices using Node.js for scalability."
            onClick={() => navigate("/services/nodejs")}
          />
        </div>
      </section>
    </div>
  );
}

// Glowing Core Area Cards
function GlowCard({ image, title, description }) {
  return (
    <motion.div
      className="relative p-6 text-center bg-gray-900 border border-gray-800 shadow-xl rounded-xl"
      whileHover={{ scale: 1.05 }}
    >
      {/* Soft glowing background */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src={image}
        alt={title}
        className="relative z-10 object-contain w-20 h-20 mx-auto"
      />
      <h3 className="relative z-10 mt-4 text-lg font-semibold text-indigo-300">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-gray-400">{description}</p>
    </motion.div>
  );
}

// Service Card with Glow Button
function ServiceCard({ image, title, description, onClick }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 p-6 bg-gray-900 border border-gray-800 shadow-xl rounded-xl md:flex-row"
      whileHover={{ scale: 1.03 }}
    >
      <img src={image} alt={title} className="object-contain w-20 h-20" />
      <div>
        <h4 className="text-xl font-semibold text-indigo-300">{title}</h4>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(129,140,248,0.6)" }}
          className="px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  );
}
