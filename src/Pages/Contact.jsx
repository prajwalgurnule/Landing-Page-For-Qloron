import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp 
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import ContactForm from "../components/Contact/ContactForm";
import TeamSupport from "../components/Contact/TeamSupport";

const Contact = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Qloron Technology | Contact Us</title>
        <meta
          name="description"
          content="Connect with Qloron Technology for innovative digital solutions. Reach out for inquiries, support, or partnership opportunities."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <TeamSupport />
      <CompanyLocations />
      <ContactMap />
    </>
  );
};

// ===== Contact Hero Section =====
const ContactHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
      </div>
      <section className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
          Let's Build Something <span className="text-cyan-300">Amazing</span>
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
          Whether you have a question about our services, need technical support, or want to discuss a potential project, we're here to help.
        </p>
        <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="#contact-form" 
            className="px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Send a Message
          </a>
          <a 
            href="tel:+919021419947" 
            className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

// ===== Contact Details Section =====
const ContactDetails = () => {
  return (
    <div className="py-20 bg-white">
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-500"
            data-aos="fade-up"
          >
            <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-6">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Headquarters</h3>
            <address className="text-gray-600 not-italic mb-4">
              Qloron Pvt Ltd<br />
              7th floor, Innov8 coworking space,<br />
              Pranava Business park, Kothaguda,<br />
              Hyderabad, Telangana, India 
            </address>
            <a 
              href="https://maps.app.goo.gl/u63ASrofPdmFML327" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-medium inline-flex items-center"
            >
              View on map <span className="ml-2">→</span>
            </a>
          </div>
          
          {/* Contact Info Card */}
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <MdSupportAgent className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+919021419947" className="hover:text-blue-600">+91 902 141 9947</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@qloron.com" className="hover:text-blue-600">info@qloron.com</a>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <a href="https://wa.me/9021419947" className="hover:text-blue-600">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media Card */}
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-6">
              <FaLinkedin className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Connect With Us</h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media to stay updated with our latest news and offerings.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1Gqbfb13dJ/?mibextid=wwXIfr" 
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://linkedin.com/company/qloron" 
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/qloron" 
                className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.instagram.com/qlorontechnology/" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ===== Company Locations Section =====
const CompanyLocations = () => {
  return (
    <div className="py-20 bg-white">
      <section className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="fade-up">
          Our Company Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nagpur Office */}
          <div 
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-cyan-500"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">NAGPUR</h3>
            </div>
            
            <address className="text-gray-600 not-italic mb-6">
              Qloron Pvt Ltd<br />
              Plot NO 92, Gajanan Nagar<br />
              Khobragade Layout, Omkar Nagar<br />
              Nagpur, Maharashtra, India - 440027
            </address>
            
            <a 
              href="https://maps.app.goo.gl/u63ASrofPdmFML327" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Get Location
            </a>
          </div>
          
          {/* Hyderabad Office */}
          <div 
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">HYDERABAD</h3>
            </div>
            
            <address className="text-gray-600 not-italic mb-6">
              Qloron Pvt Ltd<br />
              7th floor, Innov8 coworking space<br />
              Pranava Business park, Kothaguda<br />
              Hyderabad, Telangana 500084
            </address>
            
            <a 
              href="https://maps.app.goo.gl/u63ASrofPdmFML327" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// ===== Contact Map Section =====
const ContactMap = () => {
  return (
    <div className="py-16 bg-gray-50">
      <section className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
          Find Us On The Map
        </h2>
        <div 
          className="rounded-xl overflow-hidden shadow-xl border border-gray-200 h-96"
          data-aos="fade-up"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.314036867754!2d78.3678824!3d17.4612721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91612ab4721d%3A0x5b9ca42836fc8c3f!2sQloron%20Technology!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            title="Qloron Technology Location"
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="https://maps.app.goo.gl/u63ASrofPdmFML327" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
          >
            Open in Google Maps <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;