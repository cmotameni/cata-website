import React from 'react';
import logoWhite from '../../assets/logo-white.png';
import linkedin from '../../assets/linkedin.jpg';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A2A5C] py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoWhite} alt="Cata Logo" className="h-8 w-auto mr-2" />
        </div>
        {/* Links and LinkedIn */}
        <div className="flex items-center space-x-8">
          <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white text-base font-medium cursor-pointer">Benefits</button>
          <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white text-base font-medium cursor-pointer">Features</button>
          <a href="https://www.linkedin.com/company/catatools" target="_blank" rel="noopener noreferrer" className="ml-2 cursor-pointer">
            <img src={linkedin} alt="LinkedIn" className="h-7 w-7 rounded" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 