
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-utility-blue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-utility-lightBlue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-sky-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '6s' }} />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[100px]" />
    </div>
  );
};

export default AnimatedBackground;
