import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaSearch, FaExternalLinkAlt, FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  };

  const currentUrl = window.location.href;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Project categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "saas", name: "SaaS Platforms" }
  ];

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardHoverVariants = {
    hover: { 
      y: -10,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Qloron | Our Projects</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful projects. See how Qloron delivers innovative digital solutions for businesses across industries." 
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      {/* Hero Section with parallax effect */}
      <motion.div 
        className="relative bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-28 overflow-hidden"
        style={{ scale, opacity, y }}
      >
        {/* Floating bubbles background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-40 h-40 rounded-full mix-blend-overlay ${
                i % 3 === 0 ? 'bg-cyan-400' : i % 2 === 0 ? 'bg-blue-500' : 'bg-white'
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                rotate: [0, Math.random() * 360]
              }}
              transition={{
                duration: 15 + Math.random() * 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <motion.section 
          className="container relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-cyan-300">Projects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Explore our collection of successful projects and digital solutions
          </motion.p>
        </motion.section>
      </motion.div>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured <motion.span 
                className="text-cyan-600 inline-block"
                whileInView={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
              >
                Projects
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Discover how we've helped businesses transform with our digital solutions
            </motion.p>
          </motion.div> */}

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Category Filters with staggered animation */}
              <motion.div 
                className="flex flex-wrap justify-center gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    variants={itemVariants}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </motion.div>
              
              {/* Search Bar with typing animation */}
              <motion.div 
                className="relative w-full md:w-auto"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <FaSearch className="text-gray-400" />
                  </motion.div>
                </div>
                <motion.input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ 
                    scale: 1.05,
                    boxShadow: "0 0 0 2px rgba(8, 145, 178, 0.5)"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Grid with staggered animations */}
          {filteredProjects.length > 0 ? (
            <motion.div 
              className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Project Image with zoom effect */}
                  <motion.div 
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                    {project.featured && (
                      <motion.div 
                        className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 500,
                          damping: 15
                        }}
                        viewport={{ once: true }}
                      >
                        Featured
                      </motion.div>
                    )}
                  </motion.div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <motion.div 
                      className="flex items-center gap-2 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.category === 'web' && <FaServer className="text-cyan-500" />}
                      {project.category === 'mobile' && <FaMobileAlt className="text-blue-500" />}
                      {project.category === 'ecommerce' && <FaCode className="text-purple-500" />}
                      {project.category === 'saas' && <FaServer className="text-indigo-500" />}
                      <span className="text-sm font-medium text-gray-500 uppercase">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {project.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Technologies with staggered animation */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      {project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          variants={itemVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Project Links with arrow animation */}
                    <motion.div 
                      className="flex justify-between items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center"
                      >
                        View Live 
                        <motion.span
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FaExternalLinkAlt className="ml-1" />
                        </motion.span>
                      </a>
                      <a
                        href={project.caseStudyUrl}
                        className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
                      >
                        Case Study 
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity 
                          }}
                        >
                          <FaArrowRight className="ml-1" />
                        </motion.span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-gray-600">No projects found matching your criteria</h3>
              <motion.button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section with floating elements */}
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
        
        <div className="container text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Let's discuss how we can bring your digital vision to life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              onClick={handleContactClick}
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 300
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  delay: 1,
                  duration: 1.5,
                  repeat: Infinity 
                }}
              >
                <FaArrowRight className="ml-2" />
              </motion.span>
            </motion.button>
            
            {/* <motion.button 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-full flex items-center justify-center"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button> */}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ProjectsPage;