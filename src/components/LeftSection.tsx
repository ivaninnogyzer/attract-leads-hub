
import React from 'react';
import { CheckIcon } from "lucide-react";

const LeftSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-utility-darkBlue p-6 md:p-8 lg:p-12 flex flex-col justify-start">
      <div className="w-full max-w-lg mx-auto">
        <div className="mb-6 md:mb-8">
          <img 
            src="/lovable-uploads/af180f94-fe07-449d-8254-507824d2c054.png" 
            alt="Utility Logo" 
            className="w-32 md:w-40 mb-6"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Líderes en equipos de transporte en México
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Con 30 años de experiencia, somos distribuidor exclusivo de Utility Trailers en México y Centroamérica.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Nuestros productos:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Cajas Secas",
              "Cajas Refrigeradas",
              "Plataformas",
              "Encortinados marca Utility"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
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
