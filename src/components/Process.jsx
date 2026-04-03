import React from 'react';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';
import './Process.css';

const steps = [
  {
    num: "01",
    icon: <Search className="step-icon" />,
    title: "Diagnóstico",
    desc: "Analizamos tus procesos actuales y detectamos oportunidades de mejora con IA."
  },
  {
    num: "02",
    icon: <PenTool className="step-icon" />,
    title: "Diseño de Solución",
    desc: "Arquitectamos un plan a medida, seleccionando las herramientas y modelos óptimos."
  },
  {
    num: "03",
    icon: <Rocket className="step-icon" />,
    title: "Implementación",
    desc: "Desarrollamos e integramos la solución sin interrumpir tu operatividad actual."
  },
  {
    num: "04",
    icon: <BarChart className="step-icon" />,
    title: "Optimización",
    desc: "Monitoreamos resultados, ajustamos parámetros y escalamos el impacto."
  }
];

const Process = () => {
  return (
    <section className="process" id="proceso">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">Metodología de <span className="text-gradient">Trabajo</span></h2>
          <p className="process-subtitle">Un enfoque estructurado garantiza resultados predecibles y escalables en corto tiempo.</p>
        </div>
        
        <div className="process-steps">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card glass-card">
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                {step.icon}
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
