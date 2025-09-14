export default function About() {
  return (
    <div className="pt-2 font-poppins">
      {/* Banner Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
          alt="Ready Tech Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/50">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Welcome to <span className="text-indigo-600">Ready Tech Solutions</span>
          </h1>
          <p className="max-w-3xl mt-4 text-base text-gray-200 md:text-lg">
            Delivering professional IT Training, Software Solutions, and Business Consulting since 2019
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative px-6 py-16 text-center text-black md:py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Hi, We Are <span className="text-indigo-600">Ready Tech Solutions</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-base leading-relaxed md:text-lg">
            Since 2019, we have been delivering <span className="font-semibold">professional IT training, software solutions, and business consulting</span> 
            in Coimbatore. Our goal is to empower individuals and organizations with the right technology and expertise.
          </p>
        </div>
      </section>

      {/* About + Experience */}
      <section className="grid items-center max-w-6xl gap-12 px-6 py-16 mx-auto md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Ready Tech Solutions is a team of experts delivering innovative IT services,
            combining <span className="font-medium text-indigo-600">design, development, training, and outsourcing</span>. 
            From <strong>web applications</strong> to <strong>digital marketing</strong> and <strong>BPO services</strong>,
            we craft solutions that drive business growth and learning excellence.
          </p>
          <div className="mt-6">
            <p className="text-3xl font-bold text-indigo-600 md:text-4xl">03+</p>
            <p className="text-gray-600">Years of Experience in IT Solutions</p>
          </div>
        </div>

        {/* Skill Progress */}
        <div className="space-y-6">
          {[{ label: "Development", value: 95 }, { label: "Training", value: 90 }, { label: "Services", value: 85 }].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 transition-all duration-1000 ease-in-out bg-indigo-600 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Why Choose Us?</h2>
          <p className="max-w-3xl mx-auto mt-4 text-sm text-gray-600 md:text-base">
            We are not just another IT company — we are your <strong>technology partner</strong>.
            With a strong foundation in training and IT solutions, we ensure 
            <span className="text-indigo-600"> value, trust, and innovation</span>.
          </p>

          <div className="grid gap-6 mt-10 text-left sm:grid-cols-1 md:grid-cols-3">
            {[{
              title: "Expert Trainers",
              desc: "Our seasoned professionals guide students and businesses with real-world knowledge."
            }, {
              title: "Cutting-edge Tech",
              desc: "We adopt the latest tools, frameworks, and methodologies to deliver future-ready solutions."
            }, {
              title: "Customer-Centric",
              desc: "We believe in long-term partnerships built on trust, performance, and quality services."
            }].map((card, i) => (
              <div key={i} className="p-6 transition border rounded-lg shadow bg-gray-50 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-indigo-600">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600 md:text-base">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-6 py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-1 md:grid-cols-3">
          <div className="p-6 transition bg-white border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Mission</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Facilitate our people in offering superior performance to our valued
              customers. Grow business at an accelerated pace. Foster an
              environment that enables growth and nurtures leaders.
            </p>
          </div>
          <div className="p-6 transition bg-white border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Vision</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Our greatest vision is{" "}
              <span className="font-semibold text-gray-800">
                "Manufacturing All Robotics for human and organizational needs."
              </span>
            </p>
          </div>
          <div className="p-6 transition bg-white border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Values</h3>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Outstanding training, development, and services</li>
              <li>Deliver premium value to students and customers</li>
              <li>Empowerment & Empathy</li>
              <li>Respect for personal aspirations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="relative px-6 py-16 text-center text-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white md:text-3xl">Subscribe Us</h3>
          <p className="mt-3 text-sm text-gray-200 md:text-base">
            Subscribe to get the latest news, articles, and resources directly in
            your inbox.
          </p>

          <div className="flex flex-col items-center justify-center gap-2 mt-6 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your Gmail ID"
              className="w-full px-4 py-3 text-gray-900 border-0 sm:w-64 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="w-full px-6 py-3 font-semibold text-gray-900 transition bg-yellow-400 rounded-md sm:w-auto hover:bg-yellow-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-1 text-gray-300 bg-gray-900">
        <div className="grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl lg:px-8 md:grid-cols-4">
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

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Quick Links</h4>
            <ul className="space-y-2 text-sm font-poppins">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

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
