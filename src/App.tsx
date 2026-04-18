import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import AcademyNavbar from './components/AcademyNavbar';
import Footer from './components/Footer';
import AcademyFooter from './components/AcademyFooter';

// Corporate Pages
import Home from './pages/munilex/Home';
import Services from './pages/munilex/Services';
import PricingPage from './pages/munilex/Pricing';
import About from './pages/munilex/About';
import Contacto from './pages/munilex/Contacto';
import AvisoLegalCorp from './pages/munilex/AvisoLegal';
import PrivacidadCorp from './pages/munilex/Privacidad';
import TerminosCorp from './pages/munilex/Terminos';

// Academy Pages
import AcademyHome from './pages/munilex-academy/Academy';
import AcademyPricing from './pages/munilex-academy/AcademyPricing';
import AcademyAbout from './pages/munilex-academy/AcademyAbout';
import AcademyContact from './pages/munilex-academy/AcademyContact';
import AcademyAge from './pages/munilex-academy/AcademyAge';
import AcademyHabilitados from './pages/munilex-academy/AcademyHabilitados';
import AcademyIIPP from './pages/munilex-academy/AcademyIIPP';
import AcademyPolicia from './pages/munilex-academy/AcademyPolicia';
import AcademyGuardiaCivil from './pages/munilex-academy/AcademyGuardiaCivil';
import AcademyCorporate from './pages/munilex-academy/AcademyCorporate';
import { AvisoLegal, Privacidad, Terminos } from './pages/munilex-academy/AcademyLegal';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';

// Theme controller to switch themes based on route
const ThemeController = () => {
  const { pathname } = useLocation();
  const { setMode } = useTheme();

  useEffect(() => {
    if (pathname.startsWith('/academy')) {
      setMode('academy');
    } else {
      setMode('corporate');
    }
  }, [pathname, setMode]);

  return null;
};

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Site Layout Manager
const SiteLayout = ({ children, scaleX }: { children: React.ReactNode, scaleX: any }) => {
  const { pathname } = useLocation();
  const isAcademySection = pathname.startsWith('/academy') || pathname.startsWith('/munilex-corporate');

  return (
    <div className="min-h-screen bg-surface">
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-[60] origin-left ${isAcademySection ? 'bg-secondary-cyan' : 'bg-primary-container'}`}
        style={{ scaleX }}
      />
      
      {isAcademySection ? <AcademyNavbar /> : <Navbar />}
      
      <main>
        {children}
      </main>

      {isAcademySection ? <AcademyFooter /> : <Footer />}
    </div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <ThemeController />
          <ScrollToTop />
          <SiteLayout scaleX={scaleX}>
            <Routes>
              {/* Corporate Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/funcionarios" element={<Services />} />
              <Route path="/precios" element={<PricingPage />} />
              <Route path="/sobre-nosotros" element={<About />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/aviso-legal" element={<AvisoLegalCorp />} />
              <Route path="/privacidad" element={<PrivacidadCorp />} />
              <Route path="/terminos" element={<TerminosCorp />} />

              {/* Academy Routes */}
              <Route path="/academy" element={<AcademyHome />} />
              <Route path="/academy/precios" element={<AcademyPricing />} />
              <Route path="/academy/sobre-nosotros" element={<AcademyAbout />} />
              <Route path="/academy/contacto" element={<AcademyContact />} />
              <Route path="/academy/age" element={<AcademyAge />} />
              <Route path="/academy/habilitados" element={<AcademyHabilitados />} />
              <Route path="/academy/iipp" element={<AcademyIIPP />} />
              <Route path="/academy/policia" element={<AcademyPolicia />} />
              <Route path="/academy/guardiacivil" element={<AcademyGuardiaCivil />} />
              <Route path="/munilex-corporate" element={<AcademyCorporate />} />
              <Route path="/academy/aviso-legal" element={<AvisoLegal />} />
              <Route path="/academy/privacidad" element={<Privacidad />} />
              <Route path="/academy/terminos" element={<Terminos />} />
              
              {/* Fallback for root routes if they are in academy */}
              <Route path="/precios-academia" element={<Navigate to="/academy/precios" replace />} />
            </Routes>
          </SiteLayout>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
