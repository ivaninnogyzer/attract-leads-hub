
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-10 px-6 md:px-10 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <a href="/" className="text-2xl font-bold text-utility-darkBlue flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-utility-blue flex items-center justify-center">
                <span className="text-white font-semibold text-xl">U</span>
              </div>
              <span>Utility</span>
            </a>
            <p className="text-gray-600">
              Soluciones integrales para la gestión de servicios y recursos en empresas de todos los tamaños.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-utility-blue hover:text-white transition-colors duration-200"
                  aria-label={platform}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {platform === 'facebook' && <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />}
                    {platform === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
                    {platform === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                    {platform === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-utility-darkBlue mb-6">Servicios</h3>
            <ul className="space-y-4">
              {[
                'Gestión Energética',
                'Telecomunicaciones',
                'Gestión de Agua',
                'Mantenimiento Preventivo',
                'Soluciones Sustentables',
                'Consultoría Especializada'
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#servicios" className="text-gray-600 hover:text-utility-blue transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-utility-darkBlue mb-6">Empresa</h3>
            <ul className="space-y-4">
              {[
                'Sobre nosotros',
                'Equipo',
                'Testimonios',
                'Blog',
                'Casos de éxito',
                'Trabaja con nosotros'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-utility-blue transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-utility-darkBlue mb-6">Recursos</h3>
            <ul className="space-y-4">
              {[
                'Centro de ayuda',
                'Preguntas frecuentes',
                'Documentación',
                'Política de privacidad',
                'Términos de servicio',
                'Contacto'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-utility-blue transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Utility. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-utility-blue transition-colors duration-200">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-utility-blue transition-colors duration-200">
              Términos de servicio
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-utility-blue transition-colors duration-200">
              Mapa del sitio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
