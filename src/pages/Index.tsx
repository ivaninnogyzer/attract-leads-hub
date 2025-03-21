
import React, { useEffect, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CheckIcon } from "lucide-react";

const Index: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    posicion: '',
    email: '',
    telefono: '',
    empresa: '',
    empleados: '',
    pais: 'México',
  });

  useEffect(() => {
    document.title = 'Utility | Experimenta nuestra solución completa de servicios empresariales';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    console.log("Datos del formulario:", formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulario enviado con éxito",
        description: "Un representante se pondrá en contacto contigo pronto.",
      });
      
      // Restablecer formulario
      setFormData({
        nombre: '',
        apellidos: '',
        posicion: '',
        email: '',
        telefono: '',
        empresa: '',
        empleados: '',
        pais: 'México',
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sección izquierda - Información */}
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
      
      {/* Sección derecha - Formulario */}
      <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-utility-darkBlue">
              Regístrate para comenzar tu prueba gratuita
            </h2>
            <p className="text-gray-600 mt-2">
              Rellene el siguiente formulario y, en breve, un representante se pondrá en contacto con usted.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apellidos">Apellidos</Label>
                <Input
                  id="apellidos"
                  name="apellidos"
                  placeholder="Tus apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="posicion">Posición</Label>
              <Input
                id="posicion"
                name="posicion"
                placeholder="Tu cargo en la empresa"
                value={formData.posicion}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                name="telefono"
                placeholder="+52 (55) 1234-5678"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa</Label>
              <Input
                id="empresa"
                name="empresa"
                placeholder="Nombre de tu empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="empleados">Cantidad de empleados</Label>
              <Select 
                value={formData.empleados} 
                onValueChange={(value) => handleSelectChange('empleados', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 empleados</SelectItem>
                  <SelectItem value="11-50">11-50 empleados</SelectItem>
                  <SelectItem value="51-200">51-200 empleados</SelectItem>
                  <SelectItem value="201-500">201-500 empleados</SelectItem>
                  <SelectItem value="501+">Más de 500 empleados</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pais">País/Región</Label>
              <Select 
                value={formData.pais} 
                onValueChange={(value) => handleSelectChange('pais', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="México">México</SelectItem>
                  <SelectItem value="Estados Unidos">Estados Unidos</SelectItem>
                  <SelectItem value="Colombia">Colombia</SelectItem>
                  <SelectItem value="Argentina">Argentina</SelectItem>
                  <SelectItem value="Chile">Chile</SelectItem>
                  <SelectItem value="Perú">Perú</SelectItem>
                  <SelectItem value="España">España</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-utility-blue hover:bg-utility-blue/90 text-white text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Contacto'
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
