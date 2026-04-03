import React from 'react';
import { Target, Sliders, Settings2, ShieldCheck } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <div className="benefits-layout">
          <div className="benefits-text">
            <h2 className="section-title" style={{textAlign: 'left'}}>¿Por qué <span className="text-gradient">elegirnos?</span></h2>
            <p className="benefits-desc">
              No vendemos humo ni promesas abstractas. Implementamos IA con un único objetivo central: mejorar los KPIs de tu negocio incrementando la eficiencia operativa.
            </p>
            <div className="benefits-cta">
              <a href="#contacto" className="btn btn-outline">Saber Más</a>
            </div>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item glass-card">
              <Target className="benefit-icon" />
              <h4>Enfoque en Resultados</h4>
              <p>Métricas claras y ROI medible desde el primer mes de despliegue.</p>
            </div>
            <div className="benefit-item glass-card">
              <Sliders className="benefit-icon" />
              <h4>Soluciones a Medida</h4>
              <p>Sistemas diseñados específicamente para el contexto de tu empresa.</p>
            </div>
            <div className="benefit-item glass-card">
              <Settings2 className="benefit-icon" />
              <h4>IA Práctica</h4>
              <p>Soluciones útiles hoy, sin especulaciones sobre tecnología futura inestable.</p>
            </div>
            <div className="benefit-item glass-card">
              <ShieldCheck className="benefit-icon" />
              <h4>Acompañamiento Continuo</h4>
              <p>Soporte, mantenimiento y evolución constante de tus agentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
