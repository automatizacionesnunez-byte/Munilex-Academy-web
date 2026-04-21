import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  ArrowRight, 
  Clock, 
  Scale, 
  MessageSquare, 
  Trophy, 
  BarChart3,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

import policiaImg from '../../assets/spec/policia.png';
import secretarioImg from '../../assets/spec/secretario.png';
import iippImg from '../../assets/spec/iipp.png';
import guardiaImg from '../../assets/spec/guardia.png';

const Oposiciones = () => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Oposiciones | Preparación con IA | Munilex Academy</title>
        <meta name="description" content="Prepara tu oposición con la tecnología más avanzada. Tests adaptativos, chat jurídico con IA y seguimiento de racha para asegurar tu plaza." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-black uppercase tracking-widest mb-8"
          >
            <Zap className="w-4 h-4" />
            Método Munilex
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-12"
          >
            ASEGURA TU <br/>
            <span className="italic text-[#d4af37]">FUTURO PÚBLICO</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 font-medium max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            No estudies más, estudia mejor. Nuestra IA personaliza tu ruta de aprendizaje basándose en tus puntos débiles y fortalezas.
          </motion.p>
        </div>
      </section>

      {/* Method Title Section */}
      <section className="bg-[#131313] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center"
           >
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Nuestro método de trabajo:</h2>
              <div className="text-[#d4af37] italic font-black text-3xl md:text-5xl uppercase tracking-tighter">¿Por qué funcionamos?</div>
           </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0E0E0E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                t: "Tests de Casos Prácticos", 
                d: "Generación infinita de supuestos prácticos basados en exámenes reales y normativa vigente.", 
                icon: <Scale /> 
              },
              { 
                t: "Chat Jurídico IA", 
                d: "Un tutor 24/7 experto en tu oposición para resolver cualquier duda legislativa al instante.", 
                icon: <MessageSquare /> 
              },
              { 
                t: "Rachas y Gamificación", 
                d: "Sistema de motivación basado en objetivos diarios para mantener tu nivel de estudio al máximo.", 
                icon: <Trophy /> 
              },
              { 
                t: "Analítica de Progreso", 
                d: "Visualiza tu evolución por bloques y temas para saber exactamente dónde mejorar.", 
                icon: <BarChart3 /> 
              },
              { 
                t: "Actualizaciones", 
                d: "Tu temario siempre al día. Alerta inmediata ante cualquier cambio legislativo que te afecte.", 
                icon: <Clock /> 
              },
              { 
                t: "Comunidad de Élite", 
                d: "Compara tu rendimiento con el resto de opositores y prepárate para los mejores puestos.", 
                icon: <Users /> 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[3.5rem] hover:border-[#d4af37]/30 transition-all group"
              >
                <div className="w-16 h-16 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] mb-10 group-hover:scale-110 transition-transform">
                   {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{feature.t}</h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  {feature.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-40 bg-[#131313]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">ESPECIALIDADES <span className="text-[#d4af37] italic">ACTIVAS</span></h2>
            <div className="w-24 h-2 bg-[#d4af37] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Habilitados Nacionales", tag: "Administración Local", to: "/academy/habilitados", img: secretarioImg },
              { name: "Policía Nacional", tag: "Escala Básica", to: "/academy/policia", img: policiaImg },
              { name: "Administrativo AGE", tag: "Estado (C1/C2)", to: "/academy/age", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" },
              { name: "Ayudantes IIPP", tag: "Instituciones Penitenciarias", to: "/academy/iipp", img: iippImg },
              { name: "Guardia Civil", tag: "Cabos y Guardias", to: "/academy/guardiacivil", img: guardiaImg }
            ].map((spec, i) => (
              <Link 
                key={i} 
                to={spec.to}
                className="group relative h-[300px] rounded-3xl overflow-hidden border border-white/5"
              >
                <img 
                  src={spec.img} 
                  alt={spec.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em] mb-2">{spec.tag}</div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#d4af37] transition-colors">{spec.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#131313]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="bg-[#1C1B1B] border border-white/5 p-20 rounded-[4rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px]" />
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 relative z-10">¿EMPEZAMOS LA <span className="text-[#d4af37] italic">RACHA?</span></h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
              <a href="https://munilex.lovable.app/auth/register" className="inline-flex items-center gap-4 px-12 py-6 bg-[#d4af37] text-black font-black rounded-2xl text-xl hover:scale-105 transition-transform shadow-2xl shadow-[#d4af37]/20 uppercase tracking-widest">
                Crear cuenta gratis
                <ArrowRight className="w-7 h-7" />
              </a>
              <Link to="/academy/contacto" className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 text-white font-black rounded-2xl text-xl hover:bg-white/10 border border-white/10 transition-all uppercase tracking-widest">
                Hablar con un tutor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oposiciones;
