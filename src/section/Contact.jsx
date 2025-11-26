// src/section/Contact.jsx

import FloatingLines from "../components/FloatingLines";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const floatingLinesProps = {
    linesGradient: ["#4D4DFF", "#8A2BE2", "#E22BE2", "#4D4DFF"],
    enabledWaves: ["top", "middle", "bottom"],
    lineCount: [10, 15, 20],
    lineDistance: [8, 6, 4],
    bendRadius: 5.0,
    bendStrength: -0.5,
    interactive: true,
    parallax: true,
    animationSpeed: 1.0,
    bottomWavePosition: { x: 2.0, y: -0.7, rotate: 0.4 },
    mixBlendMode: 'normal' 
  };

  return (
        <section 
            className="relative flex items-center justify-center min-h-screen overflow-hidden bg-primary w-screen left-1/2 right-1/2" 
            style={{ 
                marginLeft: "-50vw",
                marginRight: "-50vw",
            }}
            id="contact"
        >
      
      {/* 1. Contenedor del FloatingLines (Fondo) */}
      <figure 
        className="absolute inset-0 z-0" 
      >
        <FloatingLines {...floatingLinesProps} />
      </figure>
      {/* ----------------------------------------------------------- */}

      {/* --- Contenido de Contacto (Capa superior) --- */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <ContactCard /> {/* <-- Usamos el componente aquí */}
      </div>
    </section>
  );
};

export default Contact;