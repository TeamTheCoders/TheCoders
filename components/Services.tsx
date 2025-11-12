'use client'
import { useEffect } from 'react';

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
      icon: 'fas fa-code',
      gradient: 'from-blue-500 to-purple-600',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Deployment']
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that delight users and drive engagement across all platforms.',
      icon: 'fas fa-paint-brush',
      gradient: 'from-pink-500 to-purple-600',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences on any device.',
      icon: 'fas fa-mobile-alt',
      gradient: 'from-green-500 to-purple-600',
      features: ['React Native', 'Flutter', 'App Store Optimization']
    },
      {
      id: 4,
      title: 'Digital Marketing',
      description: 'Boost your brand’s online presence with data-driven digital marketing strategies that attract, engage, and convert audiences',
      icon: 'fas fa-digital',
      gradient: 'from-green-500 to-purple-600',
      features: ['Social Media Marketing', ' SEO & Content Strategy', 'App Store Optimization']
    },
      {
      id: 5,
      title: 'Graphic Designing',
      description: 'Creative and impactful designs that communicate your brand’s story with clarity and style.',
      icon: 'fas fa-paint-brush',
      gradient: 'from-green-500 to-purple-600',
      features: ['Photoshop', 'Illustrator', 'After Effects']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-display">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card bg-white p-8 rounded-2xl shadow-xl reveal">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform`}>
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <i className="fas fa-check-circle text-purple-600 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;