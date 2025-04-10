// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationDot,
// } from "react-icons/fa6";
// import { MdPhone } from "react-icons/md";
// import { IoMail } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import links from "../data/links";
// import MailIcon from "@mui/icons-material/Mail";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-black/90 text-slate-300 w-[auto] h-auto">
//         <section className="container px-4">
//           <div className="grid md:grid-cols-2 py-5">
//             {/* Company Details */}
//             <div data-aos="fade-up" data-aos-delay="300" className="py-8">
//               <div className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
//                 <a
//                   href="/"
//                   className="flex items-center gap-3 text-2xl text-black font-semibold"
//                 >
//                   <h1 className="text-cyan-400 footerlogo mb-3 font-extrabold tracking-wide drop-shadow-lg">
//                     <span className="animate-pulse">QLORON</span>
//                   </h1>

//                 </a>
//               </div>
//               <p className="text-sm">
//                 Welcome to{" "}
//                 <span className="font-semibold">
//                   Qloron For Software Development
//                 </span>
//                 , your partner in digital growth. We specialize in reliable and
//                 secure web hosting, website development and deployment, and
//                 innovative digital marketing strategies.
//               </p>
//               <br />
//               {/* Social Media handles */}
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//                 className="flex items-center gap-4 mt-2"
//               >
//                 <a
//                   href="https://mail.google.com/mail/?view=cm&fs=1&to=info@qloron.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="scale-100 hover:scale-110 duration-300"
//                 >
//                   <MailIcon className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
//                 </a>
//                 <a
//                   href="https://www.facebook.com/share/1Gqbfb13dJ/?mibextid=wwXIfr"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="scale-100 hover:scale-110 duration-300"
//                 >
//                   <FaFacebook className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
//                 </a>
//                 <a
//                   href="https://in.linkedin.com/company/qloron"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="scale-100 hover:scale-110 duration-300"
//                 >
//                   <FaLinkedin className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/qlorontechnology/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="scale-100 hover:scale-110 duration-300"
//                 >
//                   <FaInstagram className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
//                 </a>

//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 md:pl-10">
//               {/* Site Navigation Column */}
//               <div data-aos="fade-up" data-aos-delay="300">
//                 <div className="py-8">
//                   <h1 className="text-xl font-bold mb-3">Site Navigation</h1>
//                   <ul className="space-y-3">
//                     {links.map((link) => (
//                       <li
//                         key={link.title}
//                         className="cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary space-x-1 text-white/80"
//                       >
//                         <NavLink to={link.path}>{link.title}</NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              
//               {/* Contact Column */}
//               <div>
//                 <div data-aos="fade-up" data-aos-delay="500" className="py-8">
//                   <h1 className="text-xl font-bold mb-3">Contact</h1>
//                   <ul className="space-y-3">
//                     <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
//                       <FaLocationDot className="text-xl sm:text-2xl" />
//                       <a
//                         href="https://www.google.co.in/maps/place/Qloron+Technology/@19.2143779,76.0962879,7z/data=!4m7!3m6!1s0x3bcb91612ab4721d:0x5b9ca42836fc8c3f!8m2!3d17.4346327!4d78.3881142!15sCg5xbG9yb24gcHZ0IGx0ZJIBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbuABAA!16s%2Fg%2F11l6vbydqc?entry=tts"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Qloron Pvt Ltd, Plot NO 92, Gajanan Nagar, Khobragade Layout, Nagpur
//                       </a>
//                     </li>
//                     <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
//                       <IoMail className="text-xl sm:text-2xl" />
//                       <a
//                         href="https://mail.google.com/mail/?view=cm&fs=1&to=info@qloron.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         info@qloron.com
//                       </a>
//                     </li>
//                     <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
//                       <MdPhone className="text-xl sm:text-2xl" />
//                       <a
//                         href="tel:+9021419947"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         +91 9021419947
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className="border-t-2 border-gray-300/50 py-6 text-center"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               data-aos-once="true"
//             >
//               <span>Copyright © 2025 | </span>
//               <a className="" href="/">
//                 QLORON
//               </a>
//               <span> All Rights Reserved</span>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import links from "../data/links";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const policyContent = {
    terms: `
      <div class="text-left">
        <h2 class="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-400 pb-2">Terms of Use</h2>
        <p class="text-lg mb-4">Welcome to Qloron! By accessing and using our website and app services, you agree to comply with these Terms of Use.</p>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">1. Introduction</h3>
            <p>Welcome to Qloron! By accessing and using our website and app services, you agree to comply with these Terms of Use.</p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">2. Services Provided</h3>
            <p>Qloron provides website development, tech support, and app development services including:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Custom website development</li>
              <li>E-commerce solutions</li>
              <li>Mobile app development</li>
              <li>Digital marketing services</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">3. Use of the Service</h3>
            <p>You agree to use our Service in accordance with all applicable laws and regulations.</p>
          </div>
        </div>
      </div>
    `,
    privacy: `
      <div class="text-left">
        <h2 class="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-400 pb-2">Privacy Policy</h2>
        <p class="text-lg mb-4">Qloron is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">1. Information We Collect</h3>
            <p>We may collect the following types of information when you use our services:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Contact information (name, email, phone)</li>
              <li>Business information</li>
              <li>Payment details</li>
              <li>Usage data</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Communicate with you</li>
              <li>Process transactions</li>
              <li>Enhance security</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    cookies: `
      <div class="text-left">
        <h2 class="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-400 pb-2">Cookies Policy</h2>
        <p class="text-lg mb-4">We use cookies to enhance your experience on our website and app.</p>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">1. What Are Cookies?</h3>
            <p>Cookies are small text files stored on your device that allow us to enhance your user experience.</p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">2. Why We Use Cookies</h3>
            <p>We use cookies to:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Remember user preferences</li>
              <li>Analyze site traffic</li>
              <li>Improve site functionality</li>
              <li>Enable certain features</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  };

  return (
    <>
      <div className="bg-black/90 text-slate-300 w-full">
        <section className="container mx-auto px-6 py-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div data-aos="fade-up" data-aos-delay="300" className="py-8">
              <div className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                   <a
                  href="/"
                  className="flex items-center gap-3 text-2xl text-black font-semibold"
                >
                  <h1 className="text-cyan-400 footerlogo mb-3 font-extrabold tracking-wide drop-shadow-lg">
                    <span className="animate-pulse">QLORON</span>
                  </h1>

                </a>
              </div>
              <p className="text-sm">
                Welcome to{" "}
                <span className="font-semibold">
                  Qloron For Software Development
                </span>
                , your partner in digital growth. We specialize in reliable and
                secure web hosting, website development and deployment, and
                innovative digital marketing strategies.
              </p>
              <br />
              {/* Social Media handles */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex items-center gap-4 mt-2"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@qloron.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <MailIcon className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Gqbfb13dJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <FaFacebook className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://in.linkedin.com/company/qloron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <FaLinkedin className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/qlorontechnology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scale-100 hover:scale-110 duration-300"
                >
                  <FaInstagram className="text-2xl hover:text-secondary scale-100 hover:scale-110 duration-300" />
                </a>

              </div>
            </div>

            
            {/* Site Navigation */}
            <div className="space-y-4">
            <div data-aos="fade-up" data-aos-delay="300" className="py-8">
              <h2 className="text-xl font-bold mb-3 border-b border-cyan-400 pb-2">Site Navigation</h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <NavLink 
                      to={link.path} 
                      className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2"
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Contact & Legal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div data-aos="fade-up" data-aos-delay="300" className="py-8">
              {/* Legal */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-3 border-b border-cyan-400 pb-2">Legal</h2>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => openModal("Terms of Use", policyContent.terms)}
                      className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2"
                    >
                      Terms of Use
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => openModal("Privacy Policy", policyContent.privacy)}
                      className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => openModal("Cookies Policy", policyContent.cookies)}
                      className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2"
                    >
                      Cookies Policy
                    </button>
                  </li>
                </ul>
                </div>
              </div>

              {/* Contact */}
              <div>
              <div data-aos="fade-up" data-aos-delay="500" className="py-8">
               <h1 className="text-xl font-bold mb-3 border-b border-cyan-400 pb-2">Contact</h1>
                <ul className="space-y-3">
                   <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                     <FaLocationDot className="text-xl sm:text-2xl" />
                     <a
                        href="https://www.google.co.in/maps/place/Qloron+Technology/@19.2143779,76.0962879,7z/data=!4m7!3m6!1s0x3bcb91612ab4721d:0x5b9ca42836fc8c3f!8m2!3d17.4346327!4d78.3881142!15sCg5xbG9yb24gcHZ0IGx0ZJIBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbuABAA!16s%2Fg%2F11l6vbydqc?entry=tts"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Qloron Pvt Ltd, 7th floor, Innov8 coworking space, Kothaguda, Hyderabad
                      </a>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <IoMail className="text-xl sm:text-2xl" />
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@qloron.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@qloron.com
                      </a>
                    </li>
                    <li className="flex cursor-pointer hover:translate-x-1 duration-300 hover:text-secondary items-center text-slate-300 gap-2">
                      <MdPhone className="text-xl sm:text-2xl" />
                      <a
                        href="tel:+9021419947"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 9021419947
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
          </div>

          {/* Copyright */}
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <span>Copyright © 2025 | </span><a className="" href="/">QLORON</a><span> All Rights Reserved</span>
          </div>
        </section>
      </div>

      {/* Creative Dialog Box */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
            <div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-gray-200 transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dialog Header */}
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-5 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white drop-shadow-md">
                    {modalContent.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 focus:outline-none transition transform hover:rotate-90 duration-300"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Dialog Content */}
              <div 
                className="p-6 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-100 bg-white"
                dangerouslySetInnerHTML={{ __html: modalContent.content }}
              ></div>
              
              {/* Dialog Footer */}
              <div className="bg-gray-50 p-5 border-t border-gray-200 flex justify-between items-center rounded-b-lg">
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1Gqbfb13dJ/?mibextid=wwXIfr" className="text-gray-600 hover:text-cyan-500 transition">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="https://in.linkedin.com/company/qloron" className="text-gray-600 hover:text-cyan-500 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://www.instagram.com/qlorontechnology/" className="text-gray-600 hover:text-cyan-500 transition">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition duration-200 font-semibold shadow-md hover:shadow-lg"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Footer;