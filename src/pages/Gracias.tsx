
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LeftSection from '@/components/LeftSection';

const Gracias: React.FC = () => {
  useEffect(() => {
    document.title = 'Gracias | Utility - Solicitud recibida';
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sección izquierda - Usando el mismo componente que en Index */}
      <LeftSection />
      
      {/* Sección derecha - Mensaje de Confirmación */}
      <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md text-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckIcon className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-utility-darkBlue mb-4">
              ¡Gracias por contactarnos!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hemos recibido tu solicitud correctamente. Un representante de nuestro equipo se pondrá en contacto contigo en breve para ofrecerte la información que necesitas.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg text-utility-darkBlue mb-3">Mientras tanto, puedes:</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Explorar nuestros recursos y guías</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Conocer más sobre nuestras soluciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Leer los casos de éxito de nuestros clientes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Link to="/">
              <Button 
                className="bg-utility-blue hover:bg-utility-blue/90 text-white text-lg py-6 px-8 w-full md:w-auto"
              >
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gracias;
