import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="bg-glow-sphere"></div>
      
      <div className="container hero-container">
        <div className="hero-badge glass-card">
          <Sparkles size={16} className="badge-icon" />
          <span>Evolución Tecnológica</span>
        </div>
        
        <h1 className="hero-title">
          Revoluciona tu Negocio con <br />
          <span className="text-gradient">Inteligencia Artificial</span>
        </h1>
        
        <p className="hero-subtitle">
          Agencia especializada en automatizaciones, agentes personalizados y consultoría para escalar resultados. Implementamos IA práctica, orientada a rentabilidad.
        </p>
        
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary">
            Agenda una Auditoría <ArrowRight size={18} style={{marginLeft: '8px'}} />
          </a>
          <a href="#servicios" className="btn btn-outline">
            Descubre Servicios
          </a>
        </div>
        
        <div className="hero-data">
          <div className="data-item">
            <span className="data-number">10x</span>
            <span className="data-text">Productividad</span>
          </div>
          <div className="data-divider"></div>
          <div className="data-item">
            <span className="data-number">24/7</span>
            <span className="data-text">Operativa Autómata</span>
          </div>
          <div className="data-divider"></div>
          <div className="data-item">
            <span className="data-number">ROI</span>
            <span className="data-text">Comprobable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
