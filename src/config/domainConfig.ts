/**
 * Domain configuration for Munilex ecosystem
 */

export const DOMAINS = {
  ACADEMY: 'munilexacademy.es',
  CORPORATE: 'munilex.es'
};

/**
 * Checks if the current environment is the Academy domain
 */
export const isAcademyDomain = () => {
  // Check for build-time override first
  const mode = import.meta.env.VITE_SITE_MODE;
  if (mode === 'academy') return true;
  if (mode === 'corporate') return false;

  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLowerCase();
  return hostname.includes('munilexacademy') || 
         (hostname === 'localhost' && (window.location.port === '5173' || window.location.port === '4173'));
};

/**
 * Returns the base path for navigation
 * On academy domain, paths are at root (/)
 * On other domains, academy starts at /academy
 */
export const getAcademyPath = (path: string = '') => {
  const isAcademy = isAcademyDomain();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (isAcademy) {
    // If we have a forced academy mode, we want clean roots
    const finalPath = cleanPath.startsWith('academy/') ? cleanPath.slice(8) : cleanPath;
    return `/${finalPath}`;
  }
  
  return `/academy/${cleanPath}`;
};
