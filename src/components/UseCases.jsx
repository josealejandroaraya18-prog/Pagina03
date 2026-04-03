import React from 'react';
import { ArrowRight } from 'lucide-react';
import './UseCases.css';

const cases = [
  {
    topic: "Atención al Cliente",
    title: "Soporte 24/7 sin latencia",
    problem: "Equipos saturados respondiendo faqs repetitivas, generando tiempos de espera.",
    sol: "Agente IA conectado al CRM que resuelve el 80% de los tickets instantáneamente."
  },
  {
    topic: "Ventas B2B",
    title: "Prospección Automatizada",
    problem: "Horas invertidas en calificar leads y enviar correos manuales.",
    sol: "Sistema que evalúa prospectos, envía correos hiper-personalizados y agenda reuniones."
  },
  {
    topic: "Operaciones",
    title: "Procesamiento de Documentos",
    problem: "Entrada manual de datos desde facturas o contratos a sistemas ERP.",
    sol: "Extracción automática de datos estructurados con un 99% de precisión."
  }
];

const UseCases = () => {
  return (
    <section className="use-cases" id="casos">
      <div className="container">
        <h2 className="section-title">Casos de <span className="text-gradient">Uso</span></h2>
        
        <div className="cases-list">
          {cases.map((c, idx) => (
            <div key={idx} className="case-card glass-card">
              <div className="case-badge">{c.topic}</div>
              <h3>{c.title}</h3>
              <div className="case-content">
                <div className="case-col">
                  <h5>Antes</h5>
                  <p>{c.problem}</p>
                </div>
                <div className="case-divider"><ArrowRight size={20} className="divider-icon"/></div>
                <div className="case-col p-sol">
                  <h5>Con NEXUS IA</h5>
                  <p>{c.sol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
