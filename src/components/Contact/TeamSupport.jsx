import React from "react";
import { FaHeadset, FaClock, FaUserTie } from "react-icons/fa";

const TeamSupport = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
      <section className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="fade-up">
          Our Support Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mx-auto mb-6">
              <FaHeadset className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Technical Support</h3>
            <p className="text-gray-600">
              Our expert team is available round the clock to resolve any technical issues you might encounter.
            </p>
          </div>
          <div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response Time</h3>
            <p className="text-gray-600">
              We guarantee a response within 2 hours for all priority support requests.
            </p>
          </div>
          <div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mx-auto mb-6">
              <FaUserTie className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Account Managers</h3>
            <p className="text-gray-600">
              For enterprise clients, we provide dedicated account managers for personalized support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSupport;