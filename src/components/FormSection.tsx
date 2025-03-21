
import React from 'react';
import LeadForm from './form/LeadForm';

const FormSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center overflow-y-auto max-h-screen">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-utility-darkBlue">
            Solicita información sobre nuestros productos
          </h2>
          <p className="text-gray-600 mt-2">
            Rellene el siguiente formulario y, en breve, un representante se pondrá en contacto con usted para brindarle una solución personalizada.
          </p>
        </div>
        
        <LeadForm />
      </div>
    </div>
  );
};

export default FormSection;
