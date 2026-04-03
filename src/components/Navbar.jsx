import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Cpu className="logo-icon" />
          <span className="logo-text">NEXUS</span>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
          <a href="#casos" onClick={() => setMobileMenuOpen(false)}>Casos de Uso</a>
          <a href="#contacto" className="btn btn-outline nav-btn" onClick={() => setMobileMenuOpen(false)}>
            Contactar
          </a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
