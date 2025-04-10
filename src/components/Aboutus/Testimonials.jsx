import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Qloron completely revamped our online strategy. Their innovative approach made a significant difference.",
    name: "Rajesh Iyer",
    company: "SmartData Enterprise",
    image: "/images/unknown.jpg"
  },
  {
    quote: "Partnering with Qloron was one of the best decisions for our growth. Their team is highly skilled and proactive.",
    name: "Priya Mehta",
    company: "Tech Mahindra",
    image: "/images/unknown.jpg"
  },
  {
    quote: "Qloron's dedication and technical expertise helped us scale quickly and efficiently.",
    name: "Arjun Malhotra",
    company: "Brainium",
    image: "/images/unknown.jpg"
  }
];


const Testimonials = () => {
  return (
    <div className="py-20 bg-white">
      <section className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 p-8 rounded-xl relative border border-gray-200 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-cyan-400 text-3xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;