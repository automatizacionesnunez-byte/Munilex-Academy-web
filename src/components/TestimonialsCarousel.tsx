import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "Desde que integramos Munilex en el flujo de trabajo, la redacción de informes técnicos ha pasado de horas a minutos. La precisión jurídica es impecable.",
    author: "E. García",
    role: "Secretario de Administración Local"
  },
  {
    content: "El temario actualizado al segundo es lo que marca la diferencia. Estudiar con la IA de Munilex me ha dado esa ventaja competitiva para conseguir mi plaza.",
    author: "M. Ruiz",
    role: "Opositor Policía Nacional"
  },
  {
    content: "Como centro de formación, nuestra marca se ha revalorizado. Ofrecer nuestra propia plataforma impulsada por Munilex nos ha permitido escalar de forma masiva.",
    author: "J.L. Martínez",
    role: "Dueño de Academia de FP"
  },
  {
    content: "El control de plazos y la vinculación automática con el BOE nos da una tranquilidad absoluta en la fiscalización diaria. Herramienta imprescindible.",
    author: "C. Sánchez",
    role: "Interventora Municipal"
  },
  {
    content: "Lo que más valoro es tener una respuesta jurídica fiable a cualquier duda a las 2 de la mañana. Es como tener un tutor de élite siempre disponible.",
    author: "A. López",
    role: "Opositora a Guardia Civil"
  },
  {
    content: "La opción de Marca Blanca fue la clave. Munilex nos da la tecnología de vanguardia y nosotros seguimos siendo los referentes para nuestros alumnos.",
    author: "I. Domínguez",
    role: "Director de Academia de Oposiciones"
  },
  {
    content: "El nivel de detalle de los temarios de IIPP en Munilex es superior a cualquier academia tradicional. He optimizado mi tiempo de estudio exponencialmente.",
    author: "R. Jiménez",
    role: "Opositor Instituciones Penitenciarias"
  }
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary text-4xl md:text-5xl leading-none mb-4 tracking-tight">
            Testimonios de nuestros <span className="italic text-primary-container">clientes</span>
          </h2>
        </div>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-secondary mb-10 italic">
                "{testimonials[index].content}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="font-black text-lg text-secondary tracking-tight mb-1">
                  {testimonials[index].author}
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-primary-container">
                  {testimonials[index].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0 md:-px-16">
            <button 
              onClick={prev} 
              className="pointer-events-auto p-3 rounded-full border border-outline-variant/50 text-secondary/20 hover:text-secondary hover:border-secondary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next} 
              className="pointer-events-auto p-3 rounded-full border border-outline-variant/50 text-secondary/20 hover:text-secondary hover:border-secondary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-16">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-primary-container' : 'w-2 bg-on-surface-variant/20'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
