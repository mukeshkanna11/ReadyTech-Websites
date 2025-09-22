export default function HireTrainee() {
  return (
    <div className="pt-2 bg-gray-50 font-poppins">
      {/* Top Banner / Hero */}
      <section className="relative w-full h-[70vh] bg-cover bg-center" 
        style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
}}>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white bg-black bg-opacity-60">
          <h1 className="text-4xl font-bold md:text-5xl">Hire & Trainee</h1>
          <p className="max-w-2xl mt-4 text-lg text-gray-200">
            Transforming students into professionals with assured placement opportunities. 
            Partner with <span className="font-semibold">Ready Tech Solutions</span> 
            to hire top talent or train for a brighter career.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 mt-6 font-semibold text-gray-900 transition bg-yellow-400 rounded-lg shadow hover:bg-yellow-500"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Trainings Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 md:text-4xl">
          Our Trainings
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Assured job placement after training. We take you from{" "}
          <span className="font-medium text-yellow-600">Student</span> 
          to <span className="font-medium text-yellow-600">Professional</span>.
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          

  {/* Windows */}
  <div className="overflow-hidden transition transform bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
    <img
      src= "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
      alt="Windows Training"
      className="object-cover w-full h-40"
    />
    <div className="p-6">
      <h4 className="text-lg font-semibold text-gray-900">Windows</h4>
      <p className="mt-2 text-sm text-gray-600">
        Gain skills to install, configure, and manage Windows OS. Learn 
        enterprise-grade security, identity protection, and more.
      </p>
      <a
        href="#"
        className="inline-block mt-4 font-semibold text-yellow-600 hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>

  {/* Workshop */}
  <div className="overflow-hidden transition transform bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
      alt="Workshop"
      className="object-cover w-full h-40"
    />
    <div className="p-6">
      <h4 className="text-lg font-semibold text-gray-900">Workshop</h4>
      <p className="mt-2 text-sm text-gray-600">
        Explore one-day workshops for alumni, students, and staff. 
        Hands-on learning with practical applications.
      </p>
      <a
        href="#"
        className="inline-block mt-4 font-semibold text-yellow-600 hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>

  {/* Boot Camps */}
  <div className="overflow-hidden transition transform bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
    <img
      src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
      className="object-cover w-full h-40"
    />
    <div className="p-6">
      <h4 className="text-lg font-semibold text-gray-900">Boot Camps</h4>
      <p className="mt-2 text-sm text-gray-600">
        Intensive coding bootcamps designed for beginners. 
        Fast-paced, high-impact learning with industry mentors.
      </p>
      <a
        href="#"
        className="inline-block mt-4 font-semibold text-yellow-600 hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>

</div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Why Choose Ready Tech Solutions?
          </h3>
          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 transition rounded-lg shadow bg-gray-50 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-900">
                100% Placement Support
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Real-time projects, interview prep, and job opportunities.
              </p>
            </div>
            <div className="p-6 transition rounded-lg shadow bg-gray-50 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-900">
                Industry Mentors
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Learn from professionals with years of proven expertise.
              </p>
            </div>
            <div className="p-6 transition rounded-lg shadow bg-gray-50 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-900">
                Hands-On Training
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Work on real-world projects with latest technologies.
              </p>
            </div>
            <div className="p-6 transition rounded-lg shadow bg-gray-50 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-900">
                Career Transformation
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                We prepare you to be a confident, industry-ready professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner / Call to Action */}
      <section className="relative w-full h-[40vh] bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')` }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white bg-black bg-opacity-60">
          <h2 className="text-3xl font-bold md:text-4xl">
            Kickstart Your Career with Ready Tech Solutions
          </h2>
          <p className="max-w-2xl mt-3 text-gray-200">
            Join our training programs or hire our skilled professionals today. 
            Let’s shape the future together.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 mt-6 font-semibold text-gray-900 transition bg-yellow-400 rounded-lg shadow hover:bg-yellow-500"
          >
            Contact Us
          </a>
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
