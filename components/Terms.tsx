'use client'
import { useEffect } from 'react';

const Terms = () => {
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

  const terms = [
    {
      id: 1,
      title: 'Agreement Terms',
      content: 'By accessing our services, you agree to be bound by these Terms and Conditions. If you disagree with any part, you may not access our services.',
      borderColor: 'border-purple-600'
    },
    {
      id: 2,
      title: 'Service License',
      content: 'Permission is granted to temporarily use our services for personal, non-commercial purposes only. This license does not include any resale or commercial use of our services.',
      borderColor: 'border-pink-600'
    },
    {
      id: 3,
      title: 'Privacy & Data',
      content: 'We respect your privacy and are committed to protecting your personal data. Your information is used solely to provide and improve our services.',
      borderColor: 'border-purple-600'
    },
    {
      id: 4,
      title: 'Payment Terms',
      content: 'All payments must be made as per the agreed terms. We accept various payment methods and provide invoices for all transactions.',
      borderColor: 'border-pink-600'
    }
  ];

  return (
    <section id="terms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Legal</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-display">
            Terms & <span className="text-gradient">Conditions</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 reveal">
          <div className="space-y-8">
            {terms.map((term) => (
              <div key={term.id} className={`border-l-4 ${term.borderColor} pl-6`}>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{term.id}. {term.title}</h3>
                <p className="text-gray-600 leading-relaxed">{term.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;