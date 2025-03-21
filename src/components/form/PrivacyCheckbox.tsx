
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface PrivacyCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  required?: boolean;
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({
  checked,
  onCheckedChange,
  required = true
}) => {
  return (
    <div className="flex items-center space-x-2 my-4">
      <Checkbox 
        id="privacy" 
        checked={checked} 
        onCheckedChange={onCheckedChange}
        required={required}
      />
      <Label htmlFor="privacy" className="text-sm text-gray-700">
        Acepto el aviso de privacidad y políticas de uso de datos
      </Label>
    </div>
  );
};

export default PrivacyCheckbox;
