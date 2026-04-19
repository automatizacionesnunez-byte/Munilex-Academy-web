import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { 
      name: 'Munilex Academy', 
      path: '/academy',
      subItems: [
        { name: 'Habilitados Nacionales', path: '/academy/habilitados' },
        { name: 'Administración General (AGE)', path: '/academy/age' },
        { name: 'Policía Nacional', path: '/academy/policia' },
        { name: 'Guardia Civil', path: '/academy/guardiacivil' },
        { name: 'Instituciones Penitenciarias', path: '/academy/iipp' },
      ]
    },
    { name: 'Precios', path: '/precios' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 font-manrope ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-surface-variant/30 py-4 shadow-ambient' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/munilex_logo_new.png" 
            alt="Munilex" 
            className="h-10 w-auto" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-extrabold uppercase tracking-widest text-on-surface-variant">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-1 relative transition-all duration-300 hover:text-primary-container ${isActive ? 'text-primary-container' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {item.subItems && <ChevronDown className="w-4 h-4 ml-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary-container rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>

              {item.subItems && (
                <div className="absolute top-full left-0 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-64 z-50">
                  <div className="bg-white rounded-2xl shadow-premium border border-surface-variant/30 py-4 px-2 flex flex-col gap-1">
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path}
                        className="px-4 py-3 text-xs font-bold text-on-surface-variant hover:text-primary-container hover:bg-surface-low rounded-xl transition-colors block"
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

        <div className="flex items-center gap-4">
          <a 
            href="https://munilex.lovable.app/auth/login" 
            className="hidden sm:block text-sm font-bold text-on-surface-variant hover:text-primary transition-colors px-4 py-2"
          >
            Acceso
          </a>
          <a 
            href="https://munilex.lovable.app/auth/register"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm shadow-premium hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-center"
          >
            Prueba gratis
          </a>
          
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-surface-variant/30 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-lg font-bold text-on-surface"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="mt-4 ml-4 flex flex-col gap-3 border-l-2 border-surface-variant/30 pl-4">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="text-on-surface-variant font-medium text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
