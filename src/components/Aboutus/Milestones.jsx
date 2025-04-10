import React from "react";

const Milestones = () => {
  const milestones = [
    { year: "2019", event: "Qloron Technology Founded", description: "Started our journey with a small team of passionate developers" },
    { year: "2020", event: "First Enterprise Client", description: "Secured our first Fortune 500 client" },
    { year: "2021", event: "Expanded Globally", description: "Opened offices in 3 new countries" },
    { year: "2022", event: "AI Division Launched", description: "Established our artificial intelligence research team" },
    { year: "2023", event: "60+ Team Members", description: "Grew to over 60 talented professionals" },
    { year: "2024", event: "1000+ Projects", description: "Worked on 1000+ various full stack projects" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
      <section className="container">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-white/30 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
              >
                <div className="w-full md:w-1/2 px-4">
                  <div className={`p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-2">{milestone.event}</h3>
                    <p className="text-blue-100">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold relative z-10 shadow-lg">
                  {milestone.year}
                </div>
                
                <div className="w-full md:w-1/2 px-4"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-blue-200 max-w-3xl mx-auto">
            From our founding in 2019 to today, Qloron Technology has consistently pushed boundaries in 
            <span className="font-semibold text-white"> AI research</span>, 
            <span className="font-semibold text-white"> data analytics</span>, and 
            <span className="font-semibold text-white"> software innovation</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Milestones;