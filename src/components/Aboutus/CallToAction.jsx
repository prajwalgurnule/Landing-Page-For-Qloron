import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  };
  return (
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

      <section className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Let's discuss how Qloron Technology can help you achieve your digital goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={handleContactClick} className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get a Free Consultation
          </button>
          <button onClick={handleContactClick} className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300">
            Contact Our Team
          </button>
        </div>
      </section>
    </motion.section>
  );
};

export default CallToAction;