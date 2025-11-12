import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-display">
            We Are <span className="text-gradient">Digital Innovators</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <img src="./image1.png" alt="Team" className="rounded-2xl shadow-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl float-animation">
              2+ Years
            </div>
          </div>
          <div className="space-y-6 reveal">
            <h3 className="text-3xl font-bold text-gray-800">Crafting Digital Excellence Since 2022</h3>
            <p className="text-gray-600 leading-relaxed">
              The Coders is not just another web agency. We are a collective of passionate creators, developers, and designers who believe in pushing the boundaries of digital innovation. Our journey began with a simple mission: to transform ideas into extraordinary digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We combine cutting-edge technology with creative design to deliver solutions that not only look stunning but also drive results. Every project is a new opportunity to innovate and exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i className="fas fa-rocket text-3xl text-purple-600 mb-3"></i>
                <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Quick turnaround without compromising quality</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i className="fas fa-shield-alt text-3xl text-purple-600 mb-3"></i>
                <h4 className="font-bold text-lg mb-2">Secure Code</h4>
                <p className="text-gray-600 text-sm">Enterprise-level security for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
