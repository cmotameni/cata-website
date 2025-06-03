import { useState, useEffect } from 'react';
import { PrimaryButton } from './Button';
import logoColor from '../../assets/logo-color.jpg';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling down
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
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking logo
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
      
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button 
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-12">
        <button onClick={() => scrollToSection('benefits')} className="text-gray-600 font-semibold hover:text-[#007AFF] cursor-pointer transition-colors">Benefits</button>
        <button onClick={() => scrollToSection('features')} className="text-gray-600 font-semibold hover:text-[#007AFF] cursor-pointer transition-colors">Features</button>
        <PrimaryButton onClick={() => scrollToSection('contact')}>Book a Demo</PrimaryButton>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="text-gray-600 font-semibold hover:text-[#007AFF] cursor-pointer transition-colors w-full text-center py-2"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 font-semibold hover:text-[#007AFF] cursor-pointer transition-colors w-full text-center py-2"
          >
            Features
          </button>
          <div className="w-full px-4 py-2 flex justify-center">
            <PrimaryButton onClick={() => scrollToSection('contact')} className="px-8 py-3 rounded-lg bg-[#007AFF] text-white hover:bg-[#0066CC] font-semibold">
              Book a Demo
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 