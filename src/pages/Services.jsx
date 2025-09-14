import { 
  FaDatabase, 
  FaMobileAlt, 
  FaCloud, 
  FaChartLine, 
  FaLaptopCode, 
  FaLightbulb, 
  FaProjectDiagram, 
  FaRobot, 
  FaServer, 
  FaHeadset 
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Data Analytics",
      description: "Our data management & analytics capabilities bring context and insights to help you make informed business decisions.",
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Website Maintenance",
      description: "Ensure your website runs smoothly, remains secure, and provides a vibrant online presence for long-term success.",
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "IT Consulting",
      description: "Build and implement strategic IT solutions to optimize operations and drive business growth.",
      icon: <FaLightbulb className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Marketing",
      description: "Market your brand 24/7 with SEO, social media, content marketing, and performance-based campaigns.",
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Graphic Design",
      description: "Create visually appealing designs that communicate your brand message effectively.",
      icon: <FaLightbulb className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Business Intelligence",
      description: "Gain deep visibility into business processes and leverage insights to make data-driven decisions.",
      icon: <FaDatabase className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Artificial Intelligence",
      description: "Implement AI and Machine Learning solutions for automation, analytics, and smarter business operations.",
      icon: <FaRobot className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "IoT",
      description: "Internet of Things services including requirements analysis, process modeling, and platform integration.",
      icon: <FaMobileAlt className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Domain & Hosting",
      description: "Certified domain registration and hosting services following all standards for secure online presence.",
      icon: <FaServer className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Project Management",
      description: "Focus on bringing new products to market or developing existing ones with efficient project management.",
      icon: <FaProjectDiagram className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "BPO Solutions",
      description: "Complete customer support, telemarketing, and business process outsourcing services for your company.",
      icon: <FaHeadset className="text-4xl text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-2 bg-gray-50">
      {/* Banner */}
      <section className="relative bg-gray-900 text-white h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          alt="Services Banner"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative px-6 text-center">
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Explore Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-100 md:text-xl">
            Ready Tech combines creativity, technology, and performance to boost your business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl px-6 py-20 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-600">
          Explore our wide range of services designed to help businesses achieve their goals efficiently.
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden transition bg-white shadow rounded-xl hover:shadow-lg group">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col items-start p-6">
                <div className="mb-2">{service.icon}</div>
                <h4 className="text-lg font-semibold text-indigo-600">{service.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
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
