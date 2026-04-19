import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-surface-dim/30 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <Link to="/">
            <img 
              src="/munilex_logo_transparent.png" 
              alt="Munilex" 
              className="h-10 w-auto mb-8" 
            />
          </Link>
          <p className="text-primary/60 text-lg leading-relaxed max-w-sm font-inter">
            El ecosistema definitivo de IA Jurídica para la Administración Local. Rigor y vanguardia tecnológica a través de nuestras verticales Academy, Corporate y FP.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary/40">Navegación</h4>
          <ul className="space-y-4 text-primary font-semibold">
            <li><Link to="/" className="hover:text-primary-container transition-colors">Home</Link></li>
            <li><Link to="/funcionarios" className="hover:text-primary-container transition-colors">Función Pública</Link></li>
            <li><Link to="/academy" className="hover:text-primary-container transition-colors">Munilex Academy</Link></li>
            <li><Link to="/precios" className="hover:text-primary-container transition-colors">Precios</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-primary-container transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-primary-container transition-colors">Contacto</Link></li>
            <li><Link to="/aviso-legal" className="hover:text-primary-container transition-colors">Aviso Legal</Link></li>
            <li><Link to="/privacidad" className="hover:text-primary-container transition-colors">Privacidad</Link></li>
            <li><Link to="/terminos" className="hover:text-primary-container transition-colors">Términos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary/40">Contacto</h4>
          <p className="text-primary font-bold mb-2">administracion@munilex.es</p>
          <p className="text-primary/60 text-sm">C/ Doctor Fleming 12, 10001, Cáceres.</p>
          <p className="text-primary/60 text-sm">Disponible en toda España.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-20 pt-8 border-t border-surface-variant/30 text-center">
        <p className="text-sm text-primary/40 font-medium font-inter">© 2026 Munilex IA Jurídica. El Jurista Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
