import { Link } from 'react-router-dom';

const AcademyFooter = () => {
  return (
    <footer className="bg-black text-white py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <Link to="/academy" className="text-3xl font-black tracking-tighter mb-8 inline-block text-white">
            MUNILEX<span className="text-[#d4af37]">ACADEMY</span>
          </Link>
          <p className="text-white/50 text-xl leading-relaxed max-w-sm font-manrope">
            Parte del ecosistema integral Munilex. Metodología táctica e IA para opositores de élite en nuestras verticales de Academy, Corporate y FP.
          </p>
          
          <div className="flex gap-4 mt-12">
            {/* Social placeholder buttons */}
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer">
              <span className="text-xs font-bold">TW</span>
            </div>
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer">
              <span className="text-xs font-bold">IG</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-secondary-cyan">Campus</h4>
          <ul className="space-y-4 font-bold text-lg">
            <li><Link to="/academy" className="text-white/60 hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/academy/precios" className="text-white/60 hover:text-white transition-colors">Planes y Precios</Link></li>
            <li><Link to="/academy/sobre-nosotros" className="text-white/60 hover:text-white transition-colors">Sobre la Academia</Link></li>
            <li><Link to="/academy/contacto" className="text-white/60 hover:text-white transition-colors">Contacto Alumnos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-secondary-cyan">Oposiciones</h4>
          <ul className="space-y-4 font-bold">
            <li><Link to="/academy/habilitados" className="text-white/60 hover:text-white transition-colors text-sm">Habilitados Nacionales</Link></li>
            <li><Link to="/academy/age" className="text-white/60 hover:text-white transition-colors text-sm">Administración AGE</Link></li>
            <li><Link to="/academy/policia" className="text-white/60 hover:text-white transition-colors text-sm">Policía Nacional</Link></li>
            <li><Link to="/academy/guardiacivil" className="text-white/60 hover:text-white transition-colors text-sm">Guardia Civil</Link></li>
            <li><Link to="/academy/iipp" className="text-white/60 hover:text-white transition-colors text-sm">Prisiones (IIPP)</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-24 pt-12 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[13px] text-white/40 font-medium">© 2026 Munilex Academy. El éxito es táctico. Todos los derechos reservados.</p>
        <div className="flex gap-8 text-[13px] font-bold text-white/30">
          <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
          <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          <Link to="/terminos" className="hover:text-white transition-colors">Términos</Link>
        </div>
      </div>
    </footer>
  );
};

export default AcademyFooter;
