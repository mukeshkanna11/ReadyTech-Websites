export default function Contact() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Banner */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Banner"
          className="absolute inset-0 object-cover w-full h-full opacity-95"
        />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Get in Touch with <span className="text-yellow-400">Ready Tech</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-100 md:text-xl">
            Have a project in mind? We’d love to hear from you. Let’s build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="grid max-w-6xl gap-6 px-6 py-20 mx-auto sm:grid-cols-1 md:grid-cols-3">
        {[
          { title: "Call Us", info: "+91 7010797721" },
          { title: "Email Us", info: "info@readytechsolutions.in" },
          { title: "Address", info: "Coimbatore - 641004, Tamil Nadu, India" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center p-6 text-center transition bg-white shadow rounded-xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-indigo-600">{item.title}</h3>
            <p className="text-lg text-gray-600">{item.info}</p>
          </div>
        ))}
      </section>

      {/* Contact Form + Map */}
      <section className="grid max-w-6xl gap-12 px-6 py-20 mx-auto sm:grid-cols-1 md:grid-cols-2">
        {/* Form */}
        <div className="p-6 bg-white shadow-lg md:p-8 rounded-xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Send a Message</h2>
          <p className="mb-6 text-gray-600">Fill out the form below and we will get back to you as soon as possible.</p>
          <form className="space-y-4">
            <input type="text" placeholder="First Name" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <select className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Select Subject</option>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Collaboration</option>
            </select>
            <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            <button type="submit" className="w-full py-3 font-medium text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700">Send Message</button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full overflow-hidden shadow-lg h-72 md:h-96 rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.556611945835!2d76.96242117477455!3d11.016844092130465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cd7d9c5ed9%3A0x4aee018a6f85e924!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694713600000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            title="Ready Tech Location"
          />
        </div>
      </section>

      {/* Free Courses/Promo Section */}
      <section className="relative py-20 overflow-hidden text-center text-white bg-indigo-600">
        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <h2 className="text-3xl font-extrabold md:text-4xl">Register Today</h2>
          <p className="mt-4 text-lg md:text-xl">Get 50+ online courses for free! Offer ends 15 Sep 2025.</p>
          <div className="grid gap-4 mt-8 sm:grid-cols-2">
            <input type="text" placeholder="First Name" className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none"/>
            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none"/>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none"/>
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 text-gray-900 rounded-md focus:outline-none"/>
          </div>
          <button className="px-6 py-3 mt-6 font-bold text-indigo-900 transition bg-yellow-400 rounded-md hover:bg-yellow-500">Register Now</button>
        </div>
        <div className="absolute inset-0 bg-indigo-700/40"></div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl px-6 mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">Subscribe Us</h3>
          <p className="mt-2 text-gray-600">Get the latest news, articles, and resources delivered to your inbox.</p>
          <form className="flex flex-col justify-center gap-4 mt-6 sm:flex-row">
            <input type="email" placeholder="Enter your Gmail ID" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:w-auto"/>
            <button type="submit" className="px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700">Subscribe</button>
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
              No 149, 2nd Floor, Sri Nagar, Hopes, Coimbatore - 641004, Behind Hope College Stop, Srinagar.
            </p>
            <p className="mt-4 text-sm font-poppins">
              <strong>Phone:</strong> <a href="tel:+917010797721" className="hover:underline">+91 70107 97721</a><br/>
              <strong>Email:</strong> <a href="mailto:info@readytechsolutions.in" className="hover:underline">info@readytechsolutions.in</a>
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
              <a href="https://www.facebook.com/SoftwareOrganisation/" target="_blank" rel="noreferrer" className="hover:text-white">🌐</a>
              <a href="https://www.linkedin.com/company/readytechsolutions/people/" target="_blank" rel="noreferrer" className="hover:text-white">💼</a>
              <a href="https://www.instagram.com/explore/locations/218009922476192/ready-tech-solutions/" target="_blank" rel="noreferrer" className="hover:text-white">🐦</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700">
          <div className="px-6 py-6 mx-auto text-sm text-center text-gray-400 max-w-7xl lg:px-8">
            © {new Date().getFullYear()} Ready Tech Solutions — Prototype by Mukesh
          </div>
        </div>
      </footer>
    </div>
  );
}
