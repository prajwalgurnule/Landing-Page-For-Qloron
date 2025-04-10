import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptopCode, FaServer, FaGlobe } from "react-icons/fa";
import { TechCard, mobileTech, webTech, desktopTech, backendTech } from "../data/Stack.jsx";
import { useNavigate } from "react-router-dom";

const Technology = () => {
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  };
  
  const techCategories = [
    {
      id: 1,
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      technologies: mobileTech
    },
    {
      id: 2,
      title: "Web App Development",
      icon: <FaGlobe className="text-4xl text-green-500" />,
      technologies: webTech
    },
    {
      id: 3,
      title: "Desktop App Development",
      icon: <FaLaptopCode className="text-4xl text-indigo-500" />,
      technologies: desktopTech
    },
    {
      id: 4,
      title: "Backend Development",
      icon: <FaServer className="text-4xl text-cyan-500" />,
      technologies: backendTech
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qloron | Technology Stack</title>
        <meta 
          name="description" 
          content="Explore our comprehensive technology stack for mobile, web, desktop, and backend development. See the tools and frameworks we use to build innovative solutions." 
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      {/* Hero Section */}
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
            Our <span className="text-cyan-300">Technology</span> Stack
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            The powerful tools and frameworks we use to build innovative digital solutions
          </motion.p>
        </section>
      </div>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-12"
          >
            {techCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 flex items-center gap-4">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-cyan-600">
                    {category.title}
                  </h2>
                </div>
                
                {/* Technologies Grid */}
                <div data-aos="fade-up" data-aos-delay="300" className="py-8">
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                      >
                        <TechCard tech={tech} />
                      </motion.div>
                    ))}
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            Want to Build With These Technologies?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Let's discuss how we can leverage the right tech stack for your project.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button onClick={handleContactClick} className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button onClick={handleContactClick} className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105">
              Contact Our Experts
            </button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Technology;