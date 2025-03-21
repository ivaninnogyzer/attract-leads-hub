
import React, { useEffect } from 'react';
import LeftSection from '@/components/LeftSection';
import FormSection from '@/components/FormSection';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Utility | Experimenta nuestra solución completa de servicios empresariales';
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <LeftSection />
      <FormSection />
    </div>
  );
};

export default Index;
