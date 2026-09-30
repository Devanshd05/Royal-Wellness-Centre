import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetPath?: string) => {
    if (!targetPath || location.pathname === targetPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
          isScrolled 
            ? "h-[60px] bg-brand-dark border-brand-dark shadow-md" 
            : "h-[80px] bg-brand-light border-brand-border"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <NavLink to="/" className="flex flex-col" onClick={() => handleNavClick('/')}>
              <span className={clsx(
                "font-serif text-xl tracking-wider uppercase leading-none transition-colors duration-500",
                (isScrolled || isMobileMenuOpen) ? "text-brand-light" : "text-brand-dark"
              )}>
                Royal
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold mt-1">
                Wellness Centre
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {['Home', 'About', 'Services'].map((item) => {
              const target = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={target}
                  onClick={() => handleNavClick(target)}
                  className={({ isActive }) => clsx(
                    "relative text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300 group",
                    isScrolled 
                      ? (isActive ? "text-brand-gold" : "text-brand-light/70 hover:text-brand-light")
                      : (isActive ? "text-brand-dark" : "text-brand-gray hover:text-brand-dark")
                  )}
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      {/* Underline for active state */}
                      <span className={clsx(
                        "absolute -bottom-2 left-0 h-[2px] bg-brand-gold transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}></span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center z-50">
            <NavLink 
              to="/contact" 
              onClick={() => handleNavClick('/contact')}
              className={clsx(
                "px-6 py-2 border transition-all duration-300 font-bold uppercase tracking-widest text-[11px]",
                isScrolled 
                  ? "border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark" 
                  : "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-light"
              )}
            >
              Get In Touch
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-light" />
            ) : (
              <Menu className={clsx("w-6 h-6", isScrolled ? "text-brand-light" : "text-brand-dark")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-brand-dark z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center px-12",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col space-y-8 mt-12">
          {['Home', 'About', 'Services'].map((item) => {
            const target = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={target}
                onClick={() => handleNavClick(target)}
                className={({ isActive }) => clsx(
                  "text-3xl font-serif tracking-widest uppercase transition-colors duration-300",
                  isActive ? "text-brand-gold" : "text-brand-light hover:text-brand-gold/70"
                )}
              >
                {item}
              </NavLink>
            );
          })}
          <NavLink 
            to="/contact" 
            onClick={() => handleNavClick('/contact')}
            className="text-xl font-sans font-bold tracking-[0.2em] uppercase text-brand-light hover:text-brand-gold transition-colors duration-300 mt-8"
          >
            Get In Touch
          </NavLink>
        </nav>
      </div>
    </>
  );
}
