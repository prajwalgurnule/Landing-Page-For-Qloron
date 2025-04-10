import React, { useState } from "react";
import { 
  FaSearch, FaLightbulb, FaUsers, FaStar, 
  FaRocket, FaShieldAlt, FaHandshake, FaChartLine,
  FaMagic, FaPuzzlePiece, FaCode, FaHeartbeat
} from "react-icons/fa";
import { GiSpiderWeb, GiProgression } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const WhyWeStandOut = () => {
  const [activeStep, setActiveStep] = useState(null);

  const journeySteps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Discovery",
      description: "We begin by understanding your vision and challenges",
      color: "from-blue-400 to-blue-600",
      shape: "circle",
      details: [
        "Comprehensive needs analysis",
        "Market research",
        "Competitor benchmarking"
      ]
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Ideation",
      description: "Brainstorming innovative solutions tailored for you",
      color: "from-purple-400 to-purple-600",
      shape: "hexagon",
      details: [
        "Creative workshops",
        "Solution prototyping",
        "Feasibility studies"
      ]
    },
    {
      icon: <GiSpiderWeb className="text-3xl" />,
      title: "Design",
      description: "Crafting intuitive experiences that delight users",
      color: "from-fuchsia-400 to-fuchsia-600",
      shape: "triangle",
      details: [
        "UX/UI design",
        "Information architecture",
        "Interactive prototypes"
      ]
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Development",
      description: "Building robust solutions with cutting-edge tech",
      color: "from-emerald-400 to-emerald-600",
      shape: "square",
      details: [
        "Agile development",
        "Continuous integration",
        "Quality assurance"
      ]
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: "Refinement",
      description: "Polishing every detail to perfection",
      color: "from-amber-400 to-amber-600",
      shape: "pentagon",
      details: [
        "User testing",
        "Performance optimization",
        "Accessibility checks"
      ]
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Launch",
      description: "Seamless deployment with maximum impact",
      color: "from-orange-400 to-orange-600",
      shape: "star",
      details: [
        "Go-to-market strategy",
        "Staged rollout",
        "Launch campaign"
      ]
    },
    {
      icon: <GiProgression className="text-3xl" />,
      title: "Growth",
      description: "Evolving with you for continuous success",
      color: "from-rose-400 to-rose-600",
      shape: "diamond",
      details: [
        "Analytics & insights",
        "Iterative improvements",
        "Feature expansion"
      ]
    }
  ];

  const shapeClasses = {
    circle: "rounded-full",
    hexagon: "clip-hexagon",
    triangle: "clip-triangle",
    square: "rounded-xl",
    pentagon: "clip-pentagon",
    star: "clip-star",
    diamond: "rotate-45 rounded-sm"
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
      {/* Animated background elements (softer version) */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-100 rounded-full"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Collaborative </span>Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transformative process from concept to market success
          </p>
        </motion.div>

        {/* Interactive Journey Map */}
        <div className="relative">
          {/* Animated path (softer color) - Updated to connect all steps */}
          <svg 
            className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M50,100 Q250,50 450,100 T850,100 L950,100"
              stroke="url(#journeyGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step connector for mobile */}
                {index !== 0 && (
                  <div className="absolute top-0 left-1/2 -ml-1 w-0.5 h-8 bg-gradient-to-b from-blue-300 to-purple-300 sm:hidden"></div>
                )}

                {/* Step indicator */}
                <motion.div
                  className={`w-16 h-16 ${shapeClasses[step.shape]} bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 group-hover:scale-110 z-10`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Step label */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>

                {/* Active step indicator */}
                {activeStep === index && (
                  <motion.div 
                    className="absolute -inset-2 rounded-xl border-2 border-blue-300 border-opacity-50 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        <AnimatePresence>
          {activeStep !== null && (
            <motion.div 
              className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`w-24 h-24 ${shapeClasses[journeySteps[activeStep].shape]} bg-gradient-to-br ${journeySteps[activeStep].color} flex items-center justify-center shadow-lg mb-6 md:mb-0 md:mr-8`}>
                    {journeySteps[activeStep].icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {journeySteps[activeStep].title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-6">
                      {journeySteps[activeStep].description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {journeySteps[activeStep].details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="bg-gray-50 rounded-lg p-4 text-gray-700 border border-gray-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${journeySteps[activeStep].color}`}></div>
                            {detail}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom shape clips */}
      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        .clip-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
    </div>
  );
};

export default WhyWeStandOut;