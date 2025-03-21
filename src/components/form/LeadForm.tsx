
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import PrivacyCheckbox from './PrivacyCheckbox';
import SubmitButton from './SubmitButton';
import { stateOptions, fleetSizeOptions } from '@/data/formOptions';

const LeadForm: React.FC = () => {
  const { toast } = useToast();
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
    }, 1000);
  };

  return (
    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DHr00000KvcPl" 
          method="POST" 
          onSubmit={handleSubmit}
          className="space-y-4">
      <input type="hidden" name="oid" value="00DHr00000KvcPl" />
      <input type="hidden" name="retURL" value="https://attract-leads-hub.lovable.app/gracias" />
      <input type="hidden" name="00NHr00001YjnIL" value={formData['00NHr00001YjnIL']} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="first_name"
          name="first_name"
          label="Nombre"
          placeholder="Tu nombre"
          onChange={handleChange}
          required
        />
        
        <FormInput
          id="last_name"
          name="last_name"
          label="Apellidos"
          placeholder="Tus apellidos"
          onChange={handleChange}
          required
        />
      </div>
      
      <FormInput
        id="email"
        name="email"
        label="Correo electrónico"
        placeholder="tu@email.com"
        type="email"
        onChange={handleChange}
        required
      />
      
      <FormInput
        id="phone"
        name="phone"
        label="Teléfono"
        placeholder="+52 (55) 1234-5678"
        onChange={handleChange}
        required
      />
      
      <FormSelect
        id="00NHr00001YjnIB"
        name="00NHr00001YjnIB"
        label="Estado"
        options={stateOptions}
        placeholder="Selecciona un estado"
        onValueChange={(value) => handleSelectChange('00NHr00001YjnIB', value)}
      />
      
      <FormInput
        id="city"
        name="city"
        label="Ciudad"
        placeholder="Tu ciudad"
        onChange={handleChange}
        required
      />
      
      <FormInput
        id="company"
        name="company"
        label="Compañía"
        placeholder="Nombre de tu empresa"
        onChange={handleChange}
        required
      />
      
      <FormSelect
        id="00NHr00001YjnIG"
        name="00NHr00001YjnIG"
        label="Tamaño de Flota"
        options={fleetSizeOptions}
        placeholder="Selecciona una opción"
        onValueChange={(value) => handleSelectChange('00NHr00001YjnIG', value)}
      />
      
      <PrivacyCheckbox 
        checked={acceptPrivacy}
        onCheckedChange={handlePrivacyChange}
      />
      
      <SubmitButton 
        isSubmitting={isSubmitting}
        disabled={!acceptPrivacy}
      />
    </form>
  );
};

export default LeadForm;
