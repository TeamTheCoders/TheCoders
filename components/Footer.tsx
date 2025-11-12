const Footer = () => { 
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-white"></i>
              </div>
              <span className="text-xl font-bold font-display">The Coders</span>
            </div>
            <p className="text-gray-400">Creating digital experiences that inspire and innovate.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold  mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><i className="fas fa-map-marker-alt mr-2 "></i>Garden west Karachi</li>
              
                <a href="https://api.whatsapp.com/send/?phone=923708667427&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                 <li><i className="fas fa-phone mr-2"></i>+923708667427</li>
                 </a>
             
             
             
              <a href="mailto:new2200527@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              
              <li><i className="fas fa-envelope mr-2"></i>team@thecoders</li>
              </a>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2022 The Coders. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

