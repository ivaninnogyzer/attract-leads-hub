
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import { Checkbox } from "@/components/ui/checkbox";

const FormSection: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    '00NHr00001YjnIG': '',
    '00NHr00001YjnIB': '',
    city: '',
    '00NHr00001YjnIL': 'No',
  });
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

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

  const handlePrivacyChange = (checked: boolean) => {
    setAcceptPrivacy(checked);
    setFormData(prev => ({
      ...prev,
      '00NHr00001YjnIL': checked ? 'Sí' : 'No'
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    
    // Solo para mostrar un toast y redirigir, el formulario manejará el envío real
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulario enviado con éxito",
        description: "Un representante se pondrá en contacto contigo pronto.",
      });
      
      // La redirección se hará a través del parámetro retURL del formulario
    }, 1000);
  };

  return (
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
        
        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DHr00000KvcPl" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-4">
          <input type="hidden" name="oid" value="00DHr00000KvcPl" />
          <input type="hidden" name="retURL" value="https://attract-leads-hub.lovableproject.com/gracias" />
          <input type="hidden" name="00NHr00001YjnIL" value={formData['00NHr00001YjnIL']} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">Nombre</Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="Tu nombre"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="last_name">Apellidos</Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Tus apellidos"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+52 (55) 1234-5678"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="00NHr00001YjnIB">Estado</Label>
            <Select 
              onValueChange={(value) => handleSelectChange('00NHr00001YjnIB', value)}
              name="00NHr00001YjnIB"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ninguno">--Ninguno--</SelectItem>
                <SelectItem value="Aguascalientes">Aguascalientes</SelectItem>
                <SelectItem value="Baja California">Baja California</SelectItem>
                <SelectItem value="Baja California Sur">Baja California Sur</SelectItem>
                <SelectItem value="Campeche">Campeche</SelectItem>
                <SelectItem value="Chiapas">Chiapas</SelectItem>
                <SelectItem value="Chihuahua">Chihuahua</SelectItem>
                <SelectItem value="Ciudad de México">Ciudad de México</SelectItem>
                <SelectItem value="Coahuila">Coahuila</SelectItem>
                <SelectItem value="Colima">Colima</SelectItem>
                <SelectItem value="Durango">Durango</SelectItem>
                <SelectItem value="Estado de México">Estado de México</SelectItem>
                <SelectItem value="Guanajuato">Guanajuato</SelectItem>
                <SelectItem value="Guerrero">Guerrero</SelectItem>
                <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                <SelectItem value="Jalisco">Jalisco</SelectItem>
                <SelectItem value="Michoacán">Michoacán</SelectItem>
                <SelectItem value="Morelos">Morelos</SelectItem>
                <SelectItem value="Nayarit">Nayarit</SelectItem>
                <SelectItem value="Nuevo León">Nuevo León</SelectItem>
                <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                <SelectItem value="Puebla">Puebla</SelectItem>
                <SelectItem value="Querétaro">Querétaro</SelectItem>
                <SelectItem value="Quintana Roo">Quintana Roo</SelectItem>
                <SelectItem value="San Luis Potosí">San Luis Potosí</SelectItem>
                <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                <SelectItem value="Sonora">Sonora</SelectItem>
                <SelectItem value="Tabasco">Tabasco</SelectItem>
                <SelectItem value="Tamaulipas">Tamaulipas</SelectItem>
                <SelectItem value="Tlaxcala">Tlaxcala</SelectItem>
                <SelectItem value="Veracruz">Veracruz</SelectItem>
                <SelectItem value="Yucatán">Yucatán</SelectItem>
                <SelectItem value="Zacatecas">Zacatecas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">Ciudad</Label>
            <Input
              id="city"
              name="city"
              placeholder="Tu ciudad"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Compañía</Label>
            <Input
              id="company"
              name="company"
              placeholder="Nombre de tu empresa"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="00NHr00001YjnIG">Tamaño de Flota</Label>
            <Select 
              onValueChange={(value) => handleSelectChange('00NHr00001YjnIG', value)}
              name="00NHr00001YjnIG"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ninguno">--Ninguno--</SelectItem>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="10-50">10-50</SelectItem>
                <SelectItem value="50-100">50-100</SelectItem>
                <SelectItem value="Más de 100">Más de 100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2 my-4">
            <Checkbox 
              id="privacy" 
              checked={acceptPrivacy} 
              onCheckedChange={handlePrivacyChange}
              required
            />
            <Label htmlFor="privacy" className="text-sm text-gray-700">
              Acepto el aviso de privacidad y políticas de uso de datos
            </Label>
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-utility-blue hover:bg-utility-blue/90 text-white text-lg py-6"
              disabled={isSubmitting || !acceptPrivacy}
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
  );
};

export default FormSection;
