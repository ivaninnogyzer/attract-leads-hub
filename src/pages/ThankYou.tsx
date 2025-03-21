
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";

const ThankYou: React.FC = () => {
  useEffect(() => {
    document.title = 'Utility | Gracias por contactarnos';
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sección izquierda - Información (mantenida igual que en Index) */}
      <div className="w-full md:w-1/2 bg-utility-darkBlue p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-lg mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/6ad712de-1728-4de8-b0c5-79ee1b243f96.png" 
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
      
      {/* Sección derecha - Mensaje de agradecimiento */}
      <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center">
        <AnimatedBackground />
        <div className="w-full max-w-md text-center">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
            <CheckIcon className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-utility-darkBlue mb-4">
            ¡Gracias por contactarnos!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Hemos recibido tu información correctamente. Uno de nuestros representantes se pondrá en contacto contigo en breve para brindarte toda la información que necesitas.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-utility-darkBlue mb-3">Mientras tanto...</h3>
              <p className="text-gray-600 mb-5">
                Te invitamos a conocer más sobre nuestras soluciones y cómo podemos ayudar a tu empresa a crecer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-utility-blue hover:bg-utility-blue/90 text-white"
                  asChild
                >
                  <a href="https://utility.com.mx/soluciones" target="_blank" rel="noopener">
                    Nuestras soluciones
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-utility-blue text-utility-blue hover:bg-utility-blue/10"
                  asChild
                >
                  <a href="https://utility.com.mx/casos" target="_blank" rel="noopener">
                    Casos de éxito
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/" className="text-utility-blue hover:text-utility-darkBlue underline">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
