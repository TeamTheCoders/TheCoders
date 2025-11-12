'use client'
import { useEffect } from 'react';

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      image: 'https://picsum.photos/seed/person1/50/50.jpg',
      text: '"The Coders transformed our online presence completely. Their attention to detail and creativity exceeded our expectations."'
    },
    {
      id: 2,
      name: 'Mike Chen',
      position: 'Founder, InnovateCo',
      image: 'https://picsum.photos/seed/person2/50/50.jpg',
      text: '"Professional, creative, and reliable. They delivered our project on time and the results were outstanding!"'
    },
    {
      id: 3,
      name: 'Emily Davis',
      position: 'Marketing Director, GrowthHub',
      image: 'https://picsum.photos/seed/person3/50/50.jpg',
      text: '""The best decision we made was choosing The Coders. Our conversion rates have doubled since the redesign!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      <div className="blob w-64 h-64 bg-white opacity-10 top-10 right-10"></div>
      <div className="blob w-96 h-96 bg-white opacity-10 bottom-10 left-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white font-display">
            What Our <span className="text-yellow-300">Clients Say</span>
          </h2>
          <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass p-8 rounded-2xl reveal">
              <div className="flex mb-4">
                <i className="fas fa-star text-yellow-300"></i>
                <i className="fas fa-star text-yellow-300"></i>
                <i className="fas fa-star text-yellow-300"></i>
                <i className="fas fa-star text-yellow-300"></i>
                <i className="fas fa-star text-yellow-300"></i>
              </div>
              <p className="text-white mb-6  ">{testimonial.text} </p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white opacity-80 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
