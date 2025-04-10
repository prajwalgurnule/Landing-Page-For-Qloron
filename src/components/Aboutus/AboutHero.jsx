import React from "react";
import { useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();
  
    const handleExploreServicesClick = () => {
      navigate("/our-services");
    };
    const handleOurProjectClick = () => {
      navigate("/projects");
    };

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-cyan-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
      </div>

      <section className="container relative py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div 
              data-aos="fade-right"
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
            >
              <span className="text-cyan-300 font-medium">Innovating Since 2019</span>
            </div>
            
            <h1 
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Crafting Digital <span className="text-cyan-300">Excellence</span>
            </h1>
            
            <p 
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-xl text-blue-100"
            >
              At Qloron Technology, we don't just build solutions - we create digital experiences that transform businesses and exceed expectations.
            </p>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex gap-4"
            >
              <button onClick={handleExploreServicesClick} className="px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button onClick={handleOurProjectClick} className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
                Our Projects
              </button>
            </div>
          </div>
          
          <div data-aos="zoom-in" data-aos-delay="400" className="relative" >
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold text-cyan-600">6+</div>
                <div className="text-blue-900 font-medium">Years of<br/>Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;