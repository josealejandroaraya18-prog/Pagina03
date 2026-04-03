import React from 'react';
import './FooterCTA.css';

const FooterCTA = () => {
  return (
    <footer className="footer-cta" id="contacto">
      <div className="container">
        <div className="cta-card glass-card">
          <h2>¿Listo para <span className="text-gradient">revolucionar</span> tu operación?</h2>
          <p>
            Agenda una llamada de diagnóstico de 15 minutos. Analizaremos si la IA es el siguiente paso correcto para tu empresa, sin compromisos.
          </p>
          <div className="cta-form-container">
            <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); alert('Aquí iría el enlace a Calendly o Formulario'); }}>
              Agendar Auditoría Gratuita
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="logo-text">NEXUS</span>
            <p className="copyright">© 2026 NEXUS Inteligencia Artificial. Todos los derechos reservados.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
