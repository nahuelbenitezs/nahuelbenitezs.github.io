// src/components/ContactCard.jsx

import React from 'react';

const ContactCard = () => {
  return (
    <div className="mx-auto max-w-sm sm:max-w-md"> 
      {/* Contenedor principal de la tarjeta con estilos de 'vidrio' */}
      <div className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-gray-700/50">
        
        {/* Imagen de Perfil */}
        <div 
          className="w-full aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-white/10"
        >
          <img 
            src="/assets/socials/perfil.jpg" 
            alt="Foto de Perfil" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        {/* Título y Corazón */}
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-3xl font-bold text-white tracking-wider">Contactos</h2>
          <button aria-label="Me gusta" className="text-white hover:text-red-500 transition-colors">
            <span className="text-2xl">❤️</span>
          </button>
        </div>
        
        {/* Barra de Progreso y Tiempos */}
        <div className="relative w-full h-1 bg-white/20 rounded-full mt-4 mb-2">
          <div className="h-full bg-white rounded-full" style={{ width: "25%" }}></div>
          <div className="absolute w-3 h-3 bg-white rounded-full -mt-2 -ml-1 border-2 border-gray-900/40" style={{ left: "25%", transform: "translateX(-50%)" }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-300">
          <span>1:10</span>
          <span>4:05</span>
        </div>
        
        {/* Controles y Redes Sociales */}
        <div className="flex items-center justify-between pt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/assets/socials/github.svg" alt="GitHub" className="w-10 h-10  rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
          </a>
          <div className="flex items-center space-x-4">
            <button aria-label="Anterior" className="text-white opacity-70 hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
            </button>
            <button aria-label="Reproducir" className="text-white bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors shadow-lg">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <button aria-label="Siguiente" className="text-white opacity-70 hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6v12h2V6zM9.5 17l8.5-6-8.5-6z"/></svg>
            </button>
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-10 h-10  rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;