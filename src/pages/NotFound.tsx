
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <AnimatedBackground />
      <NavBar />
      
      <main className="pt-24 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center p-6 max-w-lg">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-utility-blue mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-utility-darkBlue">404</h1>
          <p className="text-xl text-gray-700 mb-8">La página que buscas no existe o no está disponible.</p>
          <a 
            href="/" 
            className="utility-button inline-flex items-center"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
