'use client'
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Generate particles
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particlesRef.current.appendChild(particle);
      }
    }

    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-display">
            Let's Create <span className="text-gradient-2">Something Amazing</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/40 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="animated-bg p-12 text-white/40 relative">
                <div ref={particlesRef} className="particles"></div>
                <h3 className="text-3xl font-bold mb-8">Start Your Project</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center glass p-4 rounded-xl">
                    <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                    <div>
                      <p className="font-semibold">Visit Our Office</p>
                      <p className="opacity-90 capitalize">garden west,karachi,pakistan | 75550</p>
                    </div> 
                  </div>
                  
                  <a  href="https://api.whatsapp.com/send/?phone=923708667427&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center glass p-4 rounded-xl text-gray-300 hover:text-green-400 transition-colors duration-300 ">
                    <i className="fas fa-phone text-2xl mr-4"></i>
                    <div>
                      <p className="font-semibold">Whatsapp Now</p>
                     <span>+92 370-8667427</span>
           
                    </div>
                  </a>
                  
                  <a href="mailto:new2200527@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center glass p-4 rounded-xl">
                    <i className="fas fa-envelope text-2xl mr-4"></i>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="opacity-90">team@thecoders</p>
                    </div>
                  </a>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/40 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition transform hover:scale-110">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/40 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition transform hover:scale-110">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/40 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition transform hover:scale-110">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/40 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition transform hover:scale-110">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              
              <div className="p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition" required />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition" required />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition">
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>Mobile App</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition" required></textarea>
                  </div>
                  
                  <button type="submit" className="btn-glow w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Send Message <i className="fas fa-paper-plane ml-2"></i>
                  </button>
                </form>
                
                {formSubmitted && (
                  <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">
                    <i className="fas fa-check-circle mr-2"></i> Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
