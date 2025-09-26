// import { Star } from "lucide-react";

// export default function Training() {
//   const courses = [
//     {
//       category: "ScienceTech",
//       title: "IoT",
//       desc: "IoT is among the most important technologies of the 21st century that has made it possible to connect everyday objects over the internet.",
//       img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
//       rating: 4.8,
//       reviews: 1200,
//     },
//     {
//       category: "ScienceTech",
//       title: "AI",
//       desc: "Learn the basics of modern AI and applications such as Data Science, Machine Learning, and Neural Networks.",
//       img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
//       rating: 4.9,
//       reviews: "1.2k",
//     },
//     {
//       category: "DevelopmentTech",
//       title: "Java",
//       desc: "Practical skills training in Java programming with hands-on exercises to prepare you for real-world development.",
//       img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
//       rating: 4.7,
//       reviews: "980",
//     },
//     {
//       category: "DevelopmentTech",
//       title: "HTML",
//       desc: "HTML is the standard markup language for creating web pages, the foundation of web development.",
//       img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
//       rating: 4.6,
//       reviews: "850",
//     },
//     {
//       category: "DevelopmentTech",
//       title: "C",
//       desc: "C is the basic building block of programming. Strengthen your fundamentals and problem-solving skills.",
//       img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
//       rating: 4.5,
//       reviews: "720",
//     },
//     {
//       category: "DevelopmentTech",
//       title: "C++",
//       desc: "C++ is a powerful language for building efficient software. A strong foundation for your IT career.",
//       img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
//       rating: 4.7,
//       reviews: "910",
//     },
//     {
//       category: "HackingTech",
//       title: "Ethical Hacking",
//       desc: "Master the art of securing digital assets like websites, servers, and networks with ethical hacking.",
//       img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
//       rating: 4.9,
//       reviews: "1.5k",
//     },
//     {
//       category: "ComputerTech",
//       title: "Python",
//       desc: "From basics to advanced, Python training that helps you become industry-ready.",
//       img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
//       rating: 5.0,
//       reviews: "2k",
//     },
//   ];

//   return (
//     <div className="min-h-screen font-poppins bg-gradient-to-b from-gray-50 via-white to-gray-100">
//       {/* Banner Section */}
//       <section className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative flex flex-col items-center justify-center h-full px-6 text-center text-white">
//           <h1 className="text-4xl font-bold md:text-5xl">
//             Unlock Your Future with Our Training Programs
//           </h1>
//           <p className="max-w-2xl mt-4 text-lg text-gray-200">
//             Gain in-demand skills in Programming, AI, Networking, and Emerging Technologies with hands-on courses.
//           </p>
//           <a
//             href="#courses"
//             className="px-8 py-3 mt-6 font-semibold text-gray-900 transition bg-yellow-400 rounded-md shadow hover:bg-yellow-500"
//           >
//             Explore Courses
//           </a>
//         </div>
//       </section>

//       {/* Header */}
//       <section className="max-w-6xl px-6 py-16 mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
//           Training Programs
//         </h2>
//         <p className="max-w-3xl mx-auto mt-4 text-gray-600">
//           Ready Tech Solutions offers professional training across multiple
//           domains — from{" "}
//           <span className="font-medium text-indigo-600">Programming</span> to{" "}
//           <span className="font-medium text-indigo-600">Networking</span>,{" "}
//           <span className="font-medium text-indigo-600">Design</span>, and{" "}
//           <span className="font-medium text-indigo-600">
//             Emerging Technologies
//           </span>
//           .
//         </p>
//       </section>

//       {/* Courses Grid */}
//       <section id="courses" className="px-6 pb-20 mx-auto max-w-7xl">
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course, i) => (
//             <div
//               key={i}
//               className="overflow-hidden transition transform bg-white border rounded-lg shadow-sm hover:shadow-2xl hover:border-indigo-500 hover:-translate-y-1"
//             >
//               {/* Image */}
//               <img
//                 src={course.img}
//                 alt={course.title}
//                 className="object-cover w-full h-40"
//               />

//               {/* Content */}
//               <div className="p-6">
//                 <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
//                   {course.category}
//                 </span>
//                 <h4 className="mt-2 text-lg font-semibold text-gray-900">
//                   {course.title}
//                 </h4>
//                 <p className="mt-2 text-sm text-gray-600">{course.desc}</p>

//                 {/* Ratings */}
//                 <div className="flex items-center mt-4 space-x-1 text-yellow-500">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <Star
//                       key={index}
//                       size={16}
//                       fill={index < Math.round(course.rating) ? "#facc15" : "none"}
//                       strokeWidth={1.5}
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-gray-600">
//                     {course.rating} ({course.reviews}+ reviews)
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Subscribe Section */}
//       <section className="relative px-6 py-16 text-center text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
//         <div className="max-w-3xl mx-auto">
//           <h3 className="text-3xl font-bold">Subscribe Us</h3>
//           <p className="mt-3 text-gray-200">
//             Subscribe to get the latest news, articles, and resources from our
//             training programs.
//           </p>

//           <div className="flex justify-center mt-6">
//             <input
//               type="email"
//               placeholder="Enter your Gmail ID"
//               className="w-64 px-4 py-3 text-gray-900 border-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <button className="px-6 py-3 font-semibold text-gray-900 transition bg-yellow-400 rounded-r-md hover:bg-yellow-500">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
// <footer className="mt-12 text-gray-300 bg-gray-900">
//   <div className="grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl lg:px-8 md:grid-cols-4">
    
//     {/* Company Info */}
//     <div>
//       <h3 className="text-xl font-semibold text-white font-poppins">Ready Tech Solutions</h3>
//       <p className="mt-4 text-sm leading-relaxed font-poppins">
//         No 149, 2nd Floor, Sri Nagar,  
//         Hopes, Coimbatore - 641004,  
//         Behind Hope College Stop, Srinagar.
//       </p>
//       <p className="mt-4 text-sm font-poppins">
//         <strong>Phone:</strong> <a href="tel:+917010797721" className="hover:underline">+91 70107 97721</a>  
//         <br />
//         <strong>Email:</strong>{" "}
//         <a href="mailto:info@readytechsolutions.in" className="hover:underline">
//           info@readytechsolutions.in
//         </a>
//       </p>
//     </div>

//     {/* Quick Links */}
//     <div>
//       <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Quick Links</h4>
//       <ul className="space-y-2 text-sm font-poppins">
//         <li><a href="#about" className="hover:text-white">About Us</a></li>
//         <li><a href="#services" className="hover:text-white">Services</a></li>
//         <li><a href="#careers" className="hover:text-white">Careers</a></li>
//         <li><a href="#contact" className="hover:text-white">Contact</a></li>
//       </ul>
//     </div>

//     {/* Services */}
//     <div>
//       <h4 className="mb-4 text-lg font-semibold text-white font-poppins">Our Services</h4>
//       <ul className="space-y-2 text-sm">
//         <li>Web Development</li>
//         <li>Mobile Applications</li>
//         <li>UI/UX Design</li>
//         <li>Cloud Solutions</li>
//       </ul>
//     </div>

//     {/* Social Media */}
//     <div>
//       <h4 className="mb-4 text-lg font-semibold text-white">Connect With Us</h4>
//       <div className="flex space-x-4">
//         <a href="https://www.facebook.com/SoftwareOrganisation/" target="_blank" className="hover:text-white">🌐</a>
//         <a href="https://www.linkedin.com/company/readytechsolutions/people/" target="_blank" className="hover:text-white">💼</a>
//         <a href="https://www.instagram.com/explore/locations/218009922476192/ready-tech-solutions/" target="_blank" className="hover:text-white">🐦</a>
//       </div>
//     </div>
//   </div>

//   {/* Bottom Copyright */}
//   <div className="mt-10 border-t border-gray-700">
//     <div className="px-6 py-6 mx-auto text-sm text-center text-gray-400 max-w-7xl lg:px-8">
//       © {new Date().getFullYear()} Ready Tech Solutions — Prototype by Mukesh
//     </div>
//   </div>
// </footer>
//     </div>
//   );
// }
