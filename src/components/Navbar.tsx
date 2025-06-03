import React, { useState, useEffect } from 'react';
import { PrimaryButton } from './Button';
import logoColor from '../../assets/logo-color.jpg';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 px-6 py-4 flex items-center justify-between bg-white transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${window.scrollY > 0 ? 'border-b border-gray-100' : ''}`}
    >
      {/* Logo */}
      <button onClick={scrollToTop} className="cursor-pointer">
        <img src={logoColor} alt="Cata Logo" className="h-8 w-auto" />
      </button>
      
      {/* Navigation items */}
      <div className="flex items-center space-x-12">
        <button onClick={() => scrollToSection('benefits')} className="text-gray-600 font-semibold hover:text-[#007AFF] cursor-pointer transition-colors">Benefits</button>
        <button onClick={() => scrollToSection('features')} className="text-gray-600 font-semibold hover:text-[#007AFF] cursor-pointer transition-colors">Features</button>
        <PrimaryButton onClick={() => scrollToSection('contact')}>Book a Demo</PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar; 