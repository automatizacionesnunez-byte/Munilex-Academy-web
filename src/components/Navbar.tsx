import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftItems = [
    { name: 'Inicio', path: '/' },
    { 
      name: 'Nuestros Servicios', 
      path: '#',
      subItems: [
        { name: 'Munilex Función Pública', path: '/funcionarios' },
        { name: 'Munilex Academy', path: '/academy' },
        { name: 'Munilex Corporate', path: '/corporate' },
      ]
    },
  ];

  const rightItems = [
    { name: 'Precios', path: '/precios' },
    { 
      name: 'Compañía', 
      path: '#',
      subItems: [
        { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
        { name: 'Contacto', path: '/contacto' },
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 font-inter ${
      isScrolled 
        ? 'bg-white/5 backdrop-blur-xl border-b border-surface-variant/10 py-4 shadow-sm' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1680px] mx-auto px-10 flex justify-between items-center relative">
        
        {/* Left Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant z-10">
          {leftItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-1.5 transition-all duration-300 hover:text-primary-container ${isActive && item.path !== '#' ? 'text-primary-container' : ''}`
                }
              >
                {item.name}
                {item.subItems && <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:rotate-180 transition-transform" />}
              </NavLink>

              {item.subItems && (
                <div className="absolute top-full left-0 mt-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-64 z-50">
                  <div className="bg-white rounded-3xl shadow-premium border border-surface-variant/20 p-4 flex flex-col gap-1">
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path}
                        className="px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary-container hover:bg-surface-low rounded-2xl transition-all"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex justify-center z-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/munilex_logo_transparent.png" 
              alt="Munilex" 
              className={`${isScrolled ? 'h-10' : 'h-14'} w-auto transition-all duration-500 group-hover:scale-105`}
            />
          </Link>
        </div>
        
        {/* Right Menu & Compact CTA */}
        <div className="hidden lg:flex items-center gap-8 z-10">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
            {rightItems.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    `flex items-center gap-1.5 transition-all duration-300 hover:text-primary-container ${isActive && item.path !== '#' ? 'text-primary-container' : ''}`
                  }
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:rotate-180 transition-transform" />}
                </NavLink>

                {item.subItems && (
                  <div className="absolute top-full right-0 mt-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-64 z-50">
                    <div className="bg-white rounded-3xl shadow-premium border border-surface-variant/20 p-4 flex flex-col gap-1">
                      {item.subItems.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          to={subItem.path}
                          className="px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary-container hover:bg-surface-low rounded-2xl transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5 ml-2">
            <a 
              href="#"
              className="bg-primary-container text-white px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-[9px] shadow-premium hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-center whitespace-nowrap"
            >
              Funcionarios
            </a>
            <Link 
              to="/academy"
              className="px-5 py-2.5 rounded-xl border-2 border-on-surface/5 text-on-surface font-black uppercase tracking-widest text-[9px] hover:bg-primary hover:text-police-gold hover:border-police-gold active:scale-95 transition-all duration-300 text-center whitespace-nowrap"
            >
              Academy
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-surface-variant/30 overflow-hidden"
          >
            <div className="px-10 py-12 flex flex-col gap-8">
              {[...leftItems, ...rightItems].map((item) => (
                <div key={item.name} className="flex flex-col gap-4">
                  <Link 
                    to={item.path}
                    className="text-2xl font-black text-secondary tracking-tighter uppercase"
                    onClick={() => { if(!item.subItems) setIsMobileMenuOpen(false); }}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="flex flex-col gap-4 ml-4 border-l-2 border-primary-container/20 pl-6 py-2">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="text-on-surface-variant font-black text-sm uppercase tracking-widest"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a 
                  href="#"
                  className="bg-primary-container text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs text-center shadow-lg"
                >
                  Regístrate Funcionarios
                </a>
                <Link 
                  to="/academy"
                  className="bg-on-surface/5 text-on-surface py-5 rounded-2xl font-black uppercase tracking-widest text-xs text-center border-2 border-on-surface/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ir a la Academia
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
