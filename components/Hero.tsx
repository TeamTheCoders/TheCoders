'use client'
import { useEffect, useRef } from 'react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <section id="home" className="animated-bg min-h-screen flex items-center relative overflow-hidden">
      <div ref={particlesRef} className="particles"></div>
      <div className="blob w-96 h-96 bg-purple-500 top-0 right-0"></div>
      <div className="blob w-64 h-64 bg-pink-500 bottom-0 left-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
          
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              We Create <span className="text-yellow-300">Digital</span><br />
              <span className="typing">Masterpieces</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-lg">
              Transform your vision into reality with our cutting-edge web solutions. We craft stunning digital experiences that captivate, engage, and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-glow bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Project <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a href="#portfolio" className="glass text-white font-bold py-4 px-8 rounded-full text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                View Our Work
              </a>
            </div>
            <div className="flex items-center gap-8 mt-12">
              {/* <div>
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="opacity-80">Projects</p>
              </div> */}
              <div>
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="opacity-80">Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="opacity-80">Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="float-animation">
              <img src="./image.png" alt="Hero" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                     
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Client Happy!</p>
                    <p className="text-sm text-gray-600">We Happy!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;