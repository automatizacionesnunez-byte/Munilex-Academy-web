import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'corporate' | 'academy';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('corporate');

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'academy') {
      root.style.setProperty('--primary', '#002B5B');
      root.style.setProperty('--primary-container', '#06D3AA'); // Cyan as primary for academy
      root.style.setProperty('--secondary-cyan', '#046BD2'); // Swap colors for vibrancy
    } else {
      root.style.setProperty('--primary', '#002B5B');
      root.style.setProperty('--primary-container', '#046BD2');
      root.style.setProperty('--secondary-cyan', '#06D3AA');
    }
  }, [mode]);

  const toggleMode = () => setMode(prev => prev === 'corporate' ? 'academy' : 'corporate');

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
