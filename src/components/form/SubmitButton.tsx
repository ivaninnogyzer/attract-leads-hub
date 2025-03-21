
import React from 'react';
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  disabled = false
}) => {
  return (
    <div className="pt-4">
      <Button 
        type="submit" 
        className="w-full bg-utility-blue hover:bg-utility-blue/90 text-white text-lg py-6"
        disabled={isSubmitting || disabled}
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
  );
};

export default SubmitButton;
