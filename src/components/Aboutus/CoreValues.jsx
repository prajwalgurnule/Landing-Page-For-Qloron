import React from "react";
import { FiShield, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

const CoreValues = () => {
  const values = [
    {
      icon: <FiZap className="text-3xl text-cyan-500" />,
      title: "Innovation",
      description: "We push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <FiShield className="text-3xl text-blue-500" />,
      title: "Integrity",
      description: "Honesty and transparency guide every decision we make and every relationship we build."
    },
    {
      icon: <FiUsers className="text-3xl text-cyan-400" />,
      title: "Collaboration",
      description: "We believe the best solutions come from teamwork and diverse perspectives."
    },
    {
      icon: <FiTrendingUp className="text-3xl text-blue-400" />,
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients grow."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <section className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do at Qloron Technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-500"
            >
              <div className="mb-5">{value.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoreValues;