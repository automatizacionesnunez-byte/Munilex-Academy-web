import Hero from '../../components/Hero';

import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import { ArrowUpRight, ShieldCheck, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <>
      <Hero />
      




      {/* División Explicativa de las Variantes */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="mb-24 text-balance border-b border-slate-100 pb-16">
            <h2 className="text-[#002B5B] text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1] uppercase">
              Nuestras <span className="text-[#0066FF] italic">Vertientes</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              El ecosistema Munilex se despliega en dos grandes líneas de actuación diseñadas para aportar la máxima seguridad jurídica, tanto a las administraciones públicas en ejercicio como al ámbito formativo y académico nacional.
            </p>
          </div>

          <div className="space-y-32">
            {/* Función Pública */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-[#002B5B]/10 mix-blend-multiply" />
                  <img src="/ayuntamiento_con_bandera.png" alt="Ayuntamiento con Bandera" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] font-black uppercase tracking-widest text-[10px] rounded-full mb-8">
                  <ShieldCheck className="w-4 h-4" /> Institucional & B2G
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-[#002B5B] mb-8 tracking-tighter uppercase leading-[0.9]">
                  Munilex <br/><span className="text-[#0066FF]">Función Pública</span>
                </h3>
                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                  <p>
                    Nuestra división <i>core</i> está estrictamente orientada al servicio de los <strong>Ayuntamientos y Entidades Locales</strong>. Proveemos a los Secretarios, Interventores y Técnicos de Administración General de una herramienta de IA entrenada puramente bajo el rigor del Derecho Local.
                  </p>
                  <p>
                    Proporciona acceso inmediato a fundamentos jurídicos, jurisprudencia consolidada y resoluciones prácticas, blindando las decisiones de los funcionarios públicos y reduciendo drásticamente los tiempos de investigación legal y tramitación burocrática.
                  </p>
                  <ul className="space-y-5 text-base font-bold text-[#002B5B] mt-10">
                    <li className="flex gap-4 items-start">
                      <ArrowUpRight className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" /> 
                      Entrenamiento en base a la estricta jurisprudencia y doctrina local.
                    </li>
                    <li className="flex gap-4 items-start">
                      <ArrowUpRight className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" /> 
                      Cumplimiento riguroso del Esquema Nacional de Seguridad (ENS).
                    </li>
                    <li className="flex gap-4 items-start">
                      <ArrowUpRight className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" /> 
                      Auditoría total: se garantizan citas legales exactas (Ley, RD, BOE) en cada respuesta técnica.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Munilex Academy */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d4af37]/10 text-[#d4af37] font-black uppercase tracking-widest text-[10px] rounded-full mb-8">
                  <GraduationCap className="w-4 h-4" /> Ecosistema Educativo
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[0.9]">
                  Munilex <br/><span className="text-[#d4af37]">Academy</span>
                </h3>
                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                  <p>
                    <strong>Munilex Academy</strong> es la traslación de nuestra potencia algorítmica al ecosistema formativo. Ha sido diseñada para maximizar el rendimiento académico de los alumnos mediante el análisis de progreso y un motor inagotable de pruebas, simulacros y material didáctico avanzado.
                  </p>
                  <p>
                    El sistema estructura sus operaciones transversalmente en tres áreas clave de formación y consultoría:
                  </p>
                  
                  <div className="mt-8 mb-8 space-y-6 border-l-4 border-[#d4af37] pl-8 py-2">
                    <div>
                      <strong className="text-black uppercase text-sm tracking-widest block mb-1">Corporate (Academias)</strong>
                      <span className="text-base">Acuerdos B2B de licenciamiento y <i>marca blanca</i> para integrar nuestro motor de IA como herramienta pedagógica de alto prestigio en academias privadas.</span>
                    </div>
                    <div>
                      <strong className="text-black uppercase text-sm tracking-widest block mb-1">Oposiciones</strong>
                      <span className="text-base">Mantenemos plataformas verticales enfocadas al opositor independiente en selectos cuerpos: Habilitados, AGE, Policía Nacional, Guardia Civil o IIPP.</span>
                    </div>
                    <div>
                      <strong className="text-black uppercase text-sm tracking-widest block mb-1">Centros de Formación (FP)</strong>
                      <span className="text-base">Provisión de plataforma centralizada en Institutos de Formación Profesional para dar soporte a sus áreas de Derecho y Administración Pública.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-[#d4af37]/20 mix-blend-multiply" />
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" alt="Munilex Academy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      
      {/* 6. Final Conversion CTA - Aligned with Munilex Corporate Branding */}
      <section className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#0066FF]/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="mb-12 text-[#002B5B] text-5xl md:text-6xl leading-tight tracking-tight">¿Está listo para formar parte de la <span className="text-[#0066FF] italic">Revolución</span>?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/academy" className="px-10 py-5 bg-[#002B5B] text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-premium">
              ¿Eres opositor o academia? Accede a Munilex Academy
            </Link>
            <Link to="/funcionarios" className="px-10 py-5 border-2 border-[#002B5B]/10 text-[#002B5B] font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-[#002B5B]/5 transition-all">
              ¿Eres funcionario? Entra aquí, pruébalo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
