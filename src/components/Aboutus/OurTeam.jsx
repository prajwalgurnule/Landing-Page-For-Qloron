import React from "react";

const teamMembers = [
  {
    name: "Nikhilesh Mandal",
    role: "CEO & Founder",
    image: "../images/profile.jpg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    image: "../images/profile.jpg",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "../images/profile.jpg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "../images/profile.jpg",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

const OurTeam = () => {
  return (
    <div className="py-20 bg-gray-50">
      <section className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds behind Qloron's success
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="bg-white p-2 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-cyan-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            View All Team Members
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;