
import React from 'react';
import { CheckIcon, TruckIcon, BadgeCheckIcon, MapPinIcon } from "lucide-react";

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
        
        <div className="space-y-5">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Nuestros productos:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Cajas Secas",
              "Cajas Refrigeradas",
              "Plataformas",
              "Encortinados marca Utility",
              "Dollys marca Óptima",
              "Tolvas para alimento"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <TruckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium">Servicio Integral</h3>
                <p className="text-white/80 text-sm">Ofrecemos asesoría, venta de equipos, refacciones y servicio técnico especializado.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BadgeCheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium">Calidad Garantizada</h3>
                <p className="text-white/80 text-sm">Todos nuestros productos cumplen con los más altos estándares de calidad y seguridad.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium">Presencia Nacional</h3>
                <p className="text-white/80 text-sm">3 centros integrales en CDMX, Guadalajara y Monterrey, y 14 sucursales en todo México.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5 pt-3 border-t border-white/20">
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
