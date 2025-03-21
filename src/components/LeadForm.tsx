
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const LeadForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Gestión Energética'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      console.log('Lead form submitted:', formData);
      
      toast({
        title: "Solicitud enviada con éxito",
        description: "Un asesor se pondrá en contacto contigo próximamente.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Gestión Energética'
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 px-6 md:px-10 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-utility-blue text-sm font-medium mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-utility-darkBlue">
            ¿Listo para optimizar tus servicios?
          </h2>
          <p className="text-lg text-gray-600">
            Completa el formulario y un asesor especializado se pondrá en contacto contigo para brindarte toda la información que necesitas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-utility-darkBlue">
                ¿Por qué elegir Utility?
              </h3>
              
              <ul className="space-y-4">
                {[
                  'Soluciones personalizadas para cada negocio',
                  'Equipo de expertos con amplia experiencia',
                  'Tecnología de vanguardia a tu servicio',
                  'Atención al cliente 24/7',
                  'Resultados medibles y garantizados'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-utility-blue/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-utility-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-utility-darkBlue">
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-utility-blue/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-utility-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="text-utility-darkBlue font-medium">+52 (55) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-utility-blue/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-utility-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-utility-darkBlue font-medium">contacto@utility.com.mx</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-utility-blue/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-utility-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dirección</p>
                    <p className="text-utility-darkBlue font-medium">Ciudad de México, México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="utility-input"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="utility-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="utility-input"
                    placeholder="+52 (55) 1234-5678"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="utility-input"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="utility-input"
                    required
                  >
                    <option value="Gestión Energética">Gestión Energética</option>
                    <option value="Telecomunicaciones">Telecomunicaciones</option>
                    <option value="Gestión de Agua">Gestión de Agua</option>
                    <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
                    <option value="Soluciones Sustentables">Soluciones Sustentables</option>
                    <option value="Consultoría Especializada">Consultoría Especializada</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="utility-input resize-none"
                    placeholder="Cuéntanos más sobre tus necesidades..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm text-gray-500">
                  Campos marcados con * son obligatorios
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="utility-button min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar solicitud'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
