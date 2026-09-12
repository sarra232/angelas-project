import React from 'react';
import PageHeader from '../components/PageHeader';
import { RefreshCw, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Redesign() {
  const { redesign } = portfolioData;

  return (
    <div>
      <PageHeader
        category="Página 3"
        badge="Propuesta"
        title="Propuestas de Rediseño"
        description="Planteamiento de mejoras instruccionales, metodológicas y tecnológicas derivadas de los resultados de la evaluación."
      />

      <div className="academic-callout">
        <strong>Objetivo del Rediseño:</strong> {redesign.objective}
      </div>

      {/* Propuestas Detalladas */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 className="section-title">
          <Lightbulb size={20} color="#1d4ed8" />
          Diagnóstico y Propuestas de Rediseño por Recurso
        </h2>

        <div className="card-grid">
          {redesign.proposals.map((item) => (
            <div key={item.id} className="academic-card">
              <span className="tag tag-blue">{item.dimension}</span>
              <h3 className="card-heading" style={{ marginTop: '0.5rem' }}>
                {item.redName}
              </h3>

              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', color: '#b45309', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                  <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Oportunidad de Mejora:</strong> {item.findings}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', color: 'var(--success)', fontSize: '0.875rem' }}>
                  <CheckCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Propuesta de Intervención:</strong>
                    <div style={{ whiteSpace: 'pre-line', marginTop: '0.25rem' }}>
                      {item.solution}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabla Comparativa Antes vs Después */}
      <section>
        <h2 className="section-title">
          <RefreshCw size={20} color="#1d4ed8" />
          Comparativa Conceptual: Estado Inicial vs. Estado Rediseñado
        </h2>

        <div className="table-container">
          <table className="academic-table">
            <thead>
              <tr>
                <th>Criterio Evaluado</th>
                <th>Estado Original (Antes)</th>
                <th>Propuesta con Rediseño (Después)</th>
                <th>Impacto Pedagógico / Técnico</th>
              </tr>
            </thead>
            <tbody>
              {redesign.comparisonTable.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.criterion}</strong></td>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                  <td>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
