export default function Development() {
  return (
    <div className="min-h-screen bg-white">

      {/* Top Banner */}
      <section className="relative bg-gray-700 text-white h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80"
          alt="Development Banner"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative px-6 text-center">
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Empowering Development with <span className="text-yellow-400">Ready Tech Solutions</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-100 md:text-xl">
            We develop software and hardware projects across advanced platforms to optimize operational efficiency and create innovative solutions for your business.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Are We Developing</h2>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-600">
          Ready Tech Solutions is an innovative development company. We develop, create, and modify computer applications and specialised utility programs. We analyse user needs and develop software solutions with the aim of optimising operational efficiency.
        </p>
        <p className="max-w-3xl mx-auto mt-4 leading-relaxed text-gray-600">
          Our work includes analysing and designing databases, working individually, or coordinating database development as part of a team. We work on software and hardware projects across advanced platforms, following proper development processes.
        </p>
      </section>

      {/* Our Developments */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Developments</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {/* Mobile */}
          <DevelopmentCard
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
            title="Mobile Development"
            description="Build responsive and user-friendly mobile apps for iOS and Android platforms."
          />
          {/* Web */}
          <DevelopmentCard
            image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80"
            title="Web Development"
            description="Web applications with responsive design, cross-platform compatibility, and scalable architecture."
          />
          {/* Others */}
          <DevelopmentCard
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            title="Other Projects"
            description="Custom software solutions, enterprise applications, and innovative technology projects."
          />
        </div>
      </section>

      {/* Detailed Development Services */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Development Services</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2">
          <ServiceCard
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80"
            title="Web Development"
            description="Build scalable web applications, integrate APIs, and provide cross-platform solutions for businesses."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80"
            title="PHP Development"
            description="Develop high-performance, user-friendly PHP websites and applications with ongoing updates for best performance."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=200&q=80"
            title="CMS Web Development"
            description="End-to-end CMS solutions including custom CMS websites and website migration for easier content management."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            title="Ecommerce Development"
            description="Feature-rich and reliable eCommerce websites tailored for your unique business requirements."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            title="Angular JS Development"
            description="Build robust, secure Angular applications with high-speed performance and rich features."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
            title="Node JS Development"
            description="High-performance, scalable Node.js backend applications with enterprise-grade features."
          />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">Subscribe Us</h3>
          <p className="mt-2 text-gray-600">Get the latest news, articles, and resources delivered to your inbox.</p>
          <form className="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your Gmail ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        
      </section>
      {/* Footer */}
<footer className="mt-12 text-gray-300 bg-gray-900">
  <div className="grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl lg:px-8 md:grid-cols-4">
    
    {/* Company Info */}
    <div>
      <h3 className="text-xl font-semibold text-white font-poppins">Ready Tech Solutions</h3>
      <p className="mt-4 text-sm leading-relaxed font-poppins">
        No 149, 2nd Floor, Sri Nagar,  
        Hopes, Coimbatore - 641004,  
        Behind Hope College Stop, Srinagar.
      </p>
      <p className="mt-4 text-sm font-poppins">
        <strong>Phone:</strong> <a href="tel:+917010797721" className="hover:underline">+91 70107 97721</a>  
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:info@readytechsolutions.in" className="hover:underline">
          info@readytechsolutions.in
        </a>
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Quick Links</h4>
      <ul className="space-y-2 text-sm font-poppins">
        <li><a href="#about" className="hover:text-white">About Us</a></li>
        <li><a href="#services" className="hover:text-white">Services</a></li>
        <li><a href="#careers" className="hover:text-white">Careers</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Our Services</h4>
      <ul className="space-y-2 text-sm">
        <li>Web Development</li>
        <li>Mobile Applications</li>
        <li>UI/UX Design</li>
        <li>Cloud Solutions</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="mb-4 text-lg font-semibold text-white">Connect With Us</h4>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/SoftwareOrganisation/" target="_blank" className="hover:text-white">🌐</a>
        <a href="https://www.linkedin.com/company/readytechsolutions/people/" target="_blank" className="hover:text-white">💼</a>
        <a href="https://www.instagram.com/explore/locations/218009922476192/ready-tech-solutions/" target="_blank" className="hover:text-white">🐦</a>
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="mt-10 border-t border-gray-700">
    <div className="px-6 py-6 mx-auto text-sm text-center text-gray-400 max-w-7xl lg:px-8">
      © {new Date().getFullYear()} Ready Tech Solutions — Prototype by Mukesh
    </div>
  </div>
</footer>
    </div>
  );
}

// Components
function DevelopmentCard({ image, title, description }) {
  return (
    <div className="relative overflow-hidden transition shadow rounded-xl hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48"
      />
      <div className="p-6 bg-white">
        <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center gap-6 p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg md:flex-row">
      <img
        src={image}
        alt={title}
        className="object-cover w-32 h-32 rounded-lg"
      />
      <div>
        <h4 className="text-xl font-semibold text-indigo-600">{title}</h4>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      
    </div>
    
  );
  
}
