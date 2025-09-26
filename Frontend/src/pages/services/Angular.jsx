import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCogs, FaRocket, FaCode, FaLayerGroup, FaServer } from "react-icons/fa";
import {Helmet} from "react-helmet-async";
export default function Angular() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
<Helmet>  
        <title>Angular JS Development | Ready Tech Solutions</title>        
        <meta name="description" content="Ready Tech Solutions provides Angular JS development services to help businesses build robust, scalable, and high-performance applications." />        
        <meta name="keywords" content="Ready Tech, Angular JS Development, IT Solutions, Training, Coimbatore, Bangalore" />
      </Helmet>
      {/* Top Banner */}
      <section className="relative bg-indigo-600 text-white h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/03/53/angular-1869236_1280.png"
          alt="Angular Banner"
          className="absolute inset-0 object-contain w-full h-full opacity-20"
        />
        <div className="relative px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Angular JS Development
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Build robust, scalable, and high-performance Angular applications with Ready Tech Solutions.
          </p>
          <button
            onClick={() => navigate("/demo")}
            className="px-8 py-3 mt-6 font-semibold text-indigo-600 transition transform bg-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
          >
            🚀 Book a Free Demo
          </button>
        </div>
      </section>

      {/* About AngularJS Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          About Angular JS
        </h2>
        <div className="mt-8 md:flex md:items-center md:gap-10">
          <img
            src="https://angular.io/assets/images/logos/angular/angular.svg"
            alt="Angular Logo"
            className="w-48 mx-auto md:w-64 md:mx-0"
          />
          <div className="mt-6 md:mt-0 md:flex-1">
            <p className="text-lg leading-relaxed">
              AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and extends HTML's syntax to express your application's components clearly.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              With AngularJS, you can build single-page applications with two-way data binding, dependency injection, and a modular architecture that simplifies development and testing.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Angular JS Features</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaRocket className="w-6 h-6 text-indigo-600" />}
            title="Speedy Development"
            description="Fast development cycles with reusable components and optimized code structure."
          />
          <FeatureCard
            icon={<FaCogs className="w-6 h-6 text-indigo-600" />}
            title="Powerful Features"
            description="Highly interactive layouts, responsive UI, and real-time programming capabilities."
          />
          <FeatureCard
            icon={<FaArrowRight className="w-6 h-6 text-indigo-600" />}
            title="Seamless UX"
            description="Optimized web & mobile applications for a smooth and consistent user experience."
          />
          <FeatureCard
            icon={<FaCode className="w-6 h-6 text-indigo-600" />}
            title="Two-way Data Binding"
            description="Synchronize model and view automatically for rapid UI development."
          />
          <FeatureCard
            icon={<FaLayerGroup className="w-6 h-6 text-indigo-600" />}
            title="Modular Architecture"
            description="Write clean, maintainable, and testable code with Angular modules and components."
          />
          <FeatureCard
            icon={<FaServer className="w-6 h-6 text-indigo-600" />}
            title="Dependency Injection"
            description="Inject services and components efficiently, enhancing testability and scalability."
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose Angular JS?</h2>
        <ul className="mt-8 space-y-4 text-lg list-disc list-inside md:text-xl">
          <li>Efficient development with reusable components.</li>
          <li>Two-way data binding reduces boilerplate code.</li>
          <li>Strong community support and continuous updates.</li>
          <li>Ideal for Single Page Applications (SPA).</li>
          <li>Cross-platform compatibility for web, mobile, and desktop.</li>
          <li>Improved maintainability with modular code structure.</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Angular JS Use Cases</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaRocket className="w-6 h-6 text-indigo-600" />}
            title="E-Commerce Apps"
            description="Build scalable, feature-rich online stores and marketplaces."
          />
          <FeatureCard
            icon={<FaCogs className="w-6 h-6 text-indigo-600" />}
            title="Enterprise Dashboards"
            description="Create complex dashboards with real-time data updates."
          />
          <FeatureCard
            icon={<FaArrowRight className="w-6 h-6 text-indigo-600" />}
            title="Social Platforms"
            description="Develop social networking apps with interactive UI components."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center text-white bg-indigo-600">
        <h2 className="text-3xl font-bold">Ready to Build Your Angular Application?</h2>
        <p className="mt-4 text-lg">Let’s turn your idea into a robust, scalable web app.</p>
        <button
          onClick={() => navigate("/demo")}
          className="px-8 py-3 mt-6 font-semibold text-indigo-600 transition transform bg-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl"
        >
          🚀 Book a Free Demo
        </button>
      </section>

    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 transition transform bg-white shadow rounded-xl hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
