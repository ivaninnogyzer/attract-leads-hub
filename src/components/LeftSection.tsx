
import React from 'react';
import { CheckIcon } from "lucide-react";

const LeftSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-utility-darkBlue p-8 md:p-12 flex flex-col justify-center">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/af180f94-fe07-449d-8254-507824d2c054.png" 
            alt="Utility Logo" 
            className="w-40 mb-8"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experimenta nuestra solución completa de servicios empresariales
          </h1>
          <p className="text-xl text-white/80 mb-10">
            Optimiza recursos y maximiza resultados con nuestra plataforma integral
          </p>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            Con Utility, obtienes:
          </h2>
          
          {[
            "Soluciones personalizadas para cada tipo de negocio",
            "Procesos, informes y dashboards pre-configurados",
            "Recorridos guiados para representantes y gerentes",
            "Guías y materiales sobre mejores prácticas",
            "Capacitación integrada y entrenamientos online",
            "Configuración de seguimiento de leads",
            "Herramientas para automatización de tareas",
            "Visión completa de rendimiento y estadísticas"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-green-500 flex items-center justify-center">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <span className="text-white">{item}</span>
            </div>
          ))}
          
          <div className="pt-4">
            <p className="text-white">
              ¿Tienes dudas? Contáctanos al teléfono: <span className="font-bold">+52 (55) 1234-5678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
