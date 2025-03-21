
import React from 'react';
import { CheckIcon } from "lucide-react";

const LeftSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-utility-darkBlue p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-screen">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/af180f94-fe07-449d-8254-507824d2c054.png" 
            alt="Utility Logo" 
            className="w-40 mb-8"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Líderes en equipos de transporte en México
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Con 30 años de experiencia, somos distribuidor exclusivo de Utility Trailers en México y Centroamérica.
          </p>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            Nuestros productos:
          </h2>
          
          {[
            "Cajas Secas para seguridad y protección de mercancías",
            "Cajas Refrigeradas para productos perecederos",
            "Plataformas para transporte de carga voluminosa",
            "Encortinados marca Utility con apertura lateral",
            "Dollys marca Óptima",
            "Tolvas para alimento marca KT-Pacer",
            "Graneleras marca Merritt",
            "Mulitas marca Kalmar"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-green-500 flex items-center justify-center">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <span className="text-white">{item}</span>
            </div>
          ))}
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Presencia nacional:
            </h2>
            <p className="text-white mb-4">
              3 centros integrales de venta de equipos, refacciones y servicio en:
            </p>
            <ul className="list-disc pl-5 text-white mb-4">
              <li>Cuautitlán Izcalli, Edo. Mex.</li>
              <li>Guadalajara, Jal.</li>
              <li>Monterrey, NL.</li>
            </ul>
            <p className="text-white">
              14 sucursales de venta de refacciones para remolques multimarcas en ubicaciones estratégicas por todo México.
            </p>
          </div>
          
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
