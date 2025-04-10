import React, { useState } from "react";
import services from "../../data/services";
import { FaArrowRight, FaRegLightbulb, FaRocket, FaChartLine, FaShieldAlt, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();
    const handleContactClick = () => {
      navigate("/contact-us");
    };
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  // Categorize services
  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "marketing", name: "Marketing" },
    { id: "strategy", name: "Strategy" }
  ];

  // Filter services based on active tab
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="bg-white">
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-28 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-40 h-40 rounded-full mix-blend-overlay ${
                i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-500'
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <section className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-cyan-300">Digital</span> Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <button onClick={handleContactClick} className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 px-8 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get a Free Consultation <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </section>
      </div>

      {/* Floating Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container relative -mt-12 z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "1000+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "60+", label: "Expert Team Members" },
            { number: "6+", label: "Years Experience" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-cyan-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Our <span className="text-cyan-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of digital services to help your business grow and succeed in the digital landscape.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeTab === category.id
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  service.comingSoon ? "opacity-70" : ""
                } border border-gray-100 relative overflow-hidden`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                
                <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
               <img
                    src={service.icon}
                    alt={`${service.name} icon`}
                    className="w-16 h-16 object-contain"
                    width="64"
                    height="64"
                  />
                </div>
                </div>
                
                <h2 className="text-center text-xl font-semibold mb-3 text-gray-800">
                  {service.name}
                </h2>
                
                <p className="text-center text-gray-600 mb-5">{service.expand}</p>
                
                {service.comingSoon && (
                <div className="text-center mt-4">
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    Coming Soon
                  </span>
                </div>
              )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
              className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Floating abstract shapes */}
                      <motion.div 
                        className="absolute inset-0 opacity-10"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 60,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-300 mix-blend-overlay"></div>
                        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-400 mix-blend-overlay"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-white mix-blend-overlay"></div>
                      </motion.div>

        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Let's discuss how we can help you achieve your digital goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started <FaArrowRight className="ml-2" />
            </button>
            <button onClick={handleContactClick} className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;