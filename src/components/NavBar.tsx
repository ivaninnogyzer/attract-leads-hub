
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10", 
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-utility-darkBlue flex items-center gap-2 no-tap-highlight">
            <div className="w-10 h-10 rounded-lg bg-utility-blue flex items-center justify-center">
              <span className="text-white font-semibold text-xl">U</span>
            </div>
            <span className="hidden sm:block">Utility</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#servicios" className="text-gray-700 hover:text-utility-blue transition-colors duration-200 font-medium no-tap-highlight">
            Servicios
          </a>
          <a href="#beneficios" className="text-gray-700 hover:text-utility-blue transition-colors duration-200 font-medium no-tap-highlight">
            Beneficios
          </a>
          <a href="#contacto" className="text-gray-700 hover:text-utility-blue transition-colors duration-200 font-medium no-tap-highlight">
            Contacto
          </a>
        </nav>
        
        <div>
          <a 
            href="#contacto" 
            className="px-5 py-2.5 rounded-lg bg-utility-blue text-white font-medium transition-all duration-200 transform hover:shadow-md hover:bg-utility-blue/90 focus:outline-none focus:ring-2 focus:ring-utility-blue/50 no-tap-highlight"
          >
            Solicitar Información
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
