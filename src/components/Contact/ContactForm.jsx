import React, { useRef, useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_6dfg8xu', // YOUR_SERVICE_ID
      'template_67zne1h', // YOUR_TEMPLATE_ID
      form.current, 
      'v2J5a5xaZFSvqYOsH' // YOUR_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <div id="contact-form" className="py-20 bg-white">
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to discuss a project? Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                  <FaPaperPlane />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Quick Response</h4>
                  <p className="text-gray-600">Typically replies within 2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Secure Communication</h4>
                  <p className="text-gray-600">Your information is protected</p>
                </div>
              </div>
            </div>
          </div>
          
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="space-y-6" 
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                required
              ></textarea>
            </div>
            <div className="flex items-center gap-4">
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSuccess 
                    ? 'bg-green-500 cursor-default' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSuccess ? (
                  <>
                    <FaCheck className="mr-2" /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
              {(isSuccess || isSubmitting) && (
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Send another message
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;