import { Link } from 'react-router-dom';

const AcademyFooter = () => {
  return (
    <footer className="bg-on-surface text-white py-32 relative overflow-hidden selection:bg-police-gold/20 selection:text-white">
      {/* Decorative gradients - Gold themed */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-police-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-police-gold/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="md:col-span-2">
          <Link to="/" className="text-4xl font-black tracking-tighter mb-10 inline-block uppercase">
            MUNILEX<span className="text-police-gold">ACADEMY</span>
          </Link>
          <p className="text-white/40 text-xl leading-relaxed max-w-sm font-semibold">
            Estudia menos, aprueba antes. La plataforma de preparación de oposiciones definitiva con <span className="text-white">IA de última generación</span>.
          </p>
          
          <div className="flex gap-4 mt-12">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-police-gold hover:text-on-surface transition-all duration-500 cursor-pointer shadow-sm group">
              <span className="text-[10px] font-black uppercase tracking-widest">TW</span>
            </div>
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-police-gold hover:text-on-surface transition-all duration-500 cursor-pointer shadow-sm group">
              <span className="text-[10px] font-black uppercase tracking-widest">IG</span>
            </div>
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-police-gold hover:text-on-surface transition-all duration-500 cursor-pointer shadow-sm group">
              <span className="text-[10px] font-black uppercase tracking-widest">LI</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-police-gold">Campus</h4>
          <ul className="space-y-6 font-black uppercase tracking-tight text-[13px]">
            <li><Link to="/academy" className="text-white/40 hover:text-white transition-colors">Inicio / Central</Link></li>
            <li><Link to="/munilex-corporate" className="text-white/40 hover:text-white transition-colors">Corporate Academy</Link></li>
            <li><Link to="/academy/precios" className="text-white/40 hover:text-white transition-colors">Planes & Tarifas</Link></li>
            <li><Link to="/academy/sobre-nosotros" className="text-white/40 hover:text-white transition-colors">Nuestra Misión</Link></li>
            <li><Link to="/academy/contacto" className="text-white/40 hover:text-white transition-colors">Atención Preparador</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-police-gold">Oposiciones</h4>
          <ul className="space-y-6 font-black uppercase tracking-tight text-[11px]">
            <li><Link to="/academy/habilitados" className="text-white/40 hover:text-police-gold transition-colors">Habilitados Nacionales</Link></li>
            <li><Link to="/academy/age" className="text-white/40 hover:text-police-gold transition-colors">Administración del Estado</Link></li>
            <li><Link to="/academy/policia" className="text-white/40 hover:text-police-gold transition-colors">Cuerpo Nacional de Policía</Link></li>
            <li><Link to="/academy/guardiacivil" className="text-white/40 hover:text-police-gold transition-colors">Guardia Civil / Élite</Link></li>
            <li><Link to="/academy/iipp" className="text-white/40 hover:text-police-gold transition-colors">Instituciones Penitenciarias</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-32 pt-16 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-[11px] text-white/20 font-black uppercase tracking-[0.2em]">© 2026 Munilex Academy. El éxito es táctico. Innovación Legal.</p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/20">
          <Link to="/academy/aviso-legal" className="hover:text-police-gold transition-colors">Aviso Legal</Link>
          <Link to="/academy/privacidad" className="hover:text-police-gold transition-colors">Privacidad</Link>
          <Link to="/academy/terminos" className="hover:text-police-gold transition-colors">Condiciones</Link>
        </div>
      </div>
    </footer>
  );
};

export default AcademyFooter;
