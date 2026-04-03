import React from 'react';
import { Bot, Zap, Network, BrainCircuit } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Zap className="service-icon" />,
    title: "Automatizaciones con IA",
    desc: "Eliminamos cuellos de botella mediante flujos de trabajo inteligentes que conectan tus herramientas y operan sin intervención humana."
  },
  {
    icon: <Bot className="service-icon" />,
    title: "Agentes Personalizados",
    desc: "Desarrollamos asistentes virtuales avanzados entrenados con tus propios datos empresariales para atención 24/7 y gestión operativa."
  },
  {
    icon: <BrainCircuit className="service-icon" />,
    title: "Consultoría Estratégica",
    desc: "Auditamos tus procesos para identificar las áreas con mayor potencial de rentabilidad mediante la implementación de Inteligencia Artificial."
  },
  {
    icon: <Network className="service-icon" />,
    title: "Integración de Sistemas",
    desc: "Hacemos que tus sistemas legacy hablen con la nueva generación de APIs y modelos de lenguaje de manera segura y eficiente."
  }
];

const Services = () => {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <h2 className="section-title">Nuestras <span className="text-gradient">Soluciones</span></h2>
        
        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card glass-card">
              <div className="icon-wrapper">
                {srv.icon}
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
