
import React from 'react';
import { cn } from '@/lib/utils';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}> = ({ title, description, icon, className }) => {
  return (
    <div 
      className={cn(
        "group h-full rounded-2xl bg-white border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-utility-blue transition-all duration-300 group-hover:bg-utility-blue group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="servicios" className="py-20 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-utility-blue text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-utility-darkBlue">
            Soluciones integrales para tu empresa
          </h2>
          <p className="text-lg text-gray-600">
            Optimizamos la gestión de tus servicios para que puedas enfocarte en lo que realmente importa: hacer crecer tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Gestión Energética"
            description="Optimizamos tu consumo eléctrico para reducir costos y asegurar eficiencia energética en tus instalaciones."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <FeatureCard
            title="Telecomunicaciones"
            description="Implementamos soluciones de conectividad confiables y seguras adaptadas a las necesidades específicas de tu empresa."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            }
          />
          <FeatureCard
            title="Gestión de Agua"
            description="Monitoreo y optimización del consumo de agua para reducir costos y promover la sustentabilidad en tu organización."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
          />
          <FeatureCard
            title="Mantenimiento Preventivo"
            description="Servicio integral de mantenimiento para garantizar el óptimo funcionamiento de tus instalaciones y equipos."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          <FeatureCard
            title="Soluciones Sustentables"
            description="Implementación de tecnologías ecoamigables que reducen el impacto ambiental y optimizan el uso de recursos."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <FeatureCard
            title="Consultoría Especializada"
            description="Asesoramiento experto para identificar oportunidades de mejora y optimización en la gestión de tus servicios."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#beneficios" 
            className="inline-flex items-center text-utility-blue hover:text-utility-blue/80 font-medium"
          >
            Descubre nuestros beneficios
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
