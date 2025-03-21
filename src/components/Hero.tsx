
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition * 0.003);
      const translateY = scrollPosition * 0.5;
      
      heroRef.current.style.opacity = Math.max(0, opacity).toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 text-center transition-all duration-300 ease-out">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-40 md:w-56 md:h-56 bg-utility-blue/10 rounded-full filter blur-3xl animate-pulse-slow" />
        
        <span className="inline-block animate-fade-in px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-utility-blue text-sm font-medium border border-utility-blue/20 mb-6 shadow-sm">
          Servicios y soluciones para empresas
        </span>
        
        <h1 className="animate-slide-down text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-utility-darkBlue leading-tight text-shadow-sm">
          Simplificamos la <br className="hidden sm:block" />
          <span className="text-utility-blue">gestión de servicios</span> para empresas
        </h1>
        
        <p className="animate-slide-down animation-delay-100 max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
          En Utility ofrecemos soluciones integrales para optimizar tus recursos, reducir costos y maximizar la eficiencia de tu negocio.
        </p>
        
        <div className="animate-slide-up animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contacto" 
            className="utility-button group w-full sm:w-auto"
          >
            Solicitar una cotización
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="#servicios" 
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-utility-darkBlue font-medium border border-gray-200 transition-all duration-200 hover:border-utility-blue hover:shadow-md focus:outline-none focus:ring-2 focus:ring-utility-blue/30"
          >
            Conoce nuestros servicios
          </a>
        </div>
        
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
