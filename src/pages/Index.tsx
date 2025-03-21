
import React, { useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80, // Offset for the fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animate elements on scroll
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-reveal');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Update document title
    document.title = 'Utility | Soluciones para la gestión de servicios empresariales';
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <AnimatedBackground />
      <NavBar />
      
      <main>
        <Hero />
        
        <section id="beneficios" className="py-20 px-6 md:px-10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-16 reveal-on-scroll" style={{ '--reveal-delay': 0 } as React.CSSProperties}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-utility-blue text-sm font-medium mb-4">
                Beneficios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-utility-darkBlue">
                Optimiza recursos y maximiza resultados
              </h2>
              <p className="text-lg text-gray-600">
                Al trabajar con Utility, tu empresa obtiene ventajas competitivas inmediatas. Estas son algunas de las razones por las que nuestros clientes confían en nosotros.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: 'Reducción de costos',
                  description: 'Optimizamos tus recursos para reducir gastos operativos hasta en un 30% en servicios básicos.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  delay: 1
                },
                {
                  title: 'Eficiencia energética',
                  description: 'Implementamos soluciones para reducir el consumo energético y minimizar el impacto ambiental.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  delay: 2
                },
                {
                  title: 'Monitoreo en tiempo real',
                  description: 'Accede a información actualizada sobre el consumo y estado de tus servicios en cualquier momento.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  delay: 3
                },
                {
                  title: 'Mantenimiento predictivo',
                  description: 'Anticipamos necesidades de mantenimiento para prevenir fallas y minimizar tiempos de inactividad.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  delay: 4
                },
                {
                  title: 'Escalabilidad',
                  description: 'Nuestras soluciones crecen con tu empresa, adaptándose a tus necesidades cambiantes.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  delay: 5
                },
                {
                  title: 'Tecnología de vanguardia',
                  description: 'Implementamos las soluciones más innovadoras para garantizar resultados óptimos.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  delay: 6
                },
              ].map((benefit, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-8 rounded-2xl cursor-default reveal-on-scroll"
                  style={{ '--reveal-delay': benefit.delay } as React.CSSProperties}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-utility-blue">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-utility-darkBlue">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Features />
        
        <section className="py-20 px-6 md:px-10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll" style={{ '--reveal-delay': 0 } as React.CSSProperties}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-utility-blue text-sm font-medium mb-4">
                Confianza
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-utility-darkBlue">
                Empresas que confían en Utility
              </h2>
              <p className="text-lg text-gray-600">
                Nos enorgullece trabajar con compañías líderes de diversos sectores que han optimizado sus servicios con nuestras soluciones.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div 
                  key={idx} 
                  className="h-20 flex items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 reveal-on-scroll" 
                  style={{ '--reveal-delay': Math.floor(idx / 4) + 1 } as React.CSSProperties}
                >
                  <div className="text-2xl font-bold text-gray-300">LOGO {idx + 1}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center reveal-on-scroll" style={{ '--reveal-delay': 3 } as React.CSSProperties}>
              <a 
                href="#contacto" 
                className="utility-button"
              >
                Sé parte de nuestros casos de éxito
              </a>
            </div>
          </div>
        </section>
        
        <LeadForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
