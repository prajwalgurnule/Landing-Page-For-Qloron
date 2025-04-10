import React, { useState } from "react";
import "../../index.css";
import clients from "../../data/clients";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ClientsPagination = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 4; // Two rows, two columns each

  // Calculate indices for slicing clients array
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
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
            Our <span className="text-cyan-300">Valued</span> Clients
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Trusted by innovative businesses across industries
          </motion.p>
        </section>
      </div>

      {/* Clients Grid */}
      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentClients.map((client) => (
            <div
              data-aos="fade-up"
              data-aos-delay={client.id * 100}
              key={client.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500 group overflow-hidden relative"
            >
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-16 h-16 object-contain"
                      width="64"
                      height="64"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {client.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {client.description}
                </p>
                
                <div className="flex justify-center">
                  <button
                    onClick={() => window.open(client.linkWebsite, "_blank")}
                    className="btn-primary flex items-center"
                  >
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div 
          data-aos="slide-up"
          data-aos-delay="400"
          className="mt-12 flex justify-center space-x-2"
        >
          {Array.from(
            { length: Math.ceil(clients.length / clientsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200"
                } transition-colors duration-300`}
              >
                {i + 1}
              </button>
            )
          )}
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
                    Want to join our success stories?
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xl max-w-2xl mx-auto mb-8"
                  >
                    Partner with us for innovative digital solutions that drive results.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                  >
                    <button onClick={handleContactClick} className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Become Our Client
                    </button>
                  </motion.div>
                </div>
              </motion.section>
    </div>
  );
};

export default ClientsPagination;