import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ModelsOverview({ onNavigate }) {
  const { modelsOverview } = portfolioData;

  return (
    <div>
      <PageHeader
        category="Página 2"
        badge="Marco Teórico"
        title="Modelos de Evaluación y RED"
        description={modelsOverview.subtitle}
      />

      {/* Subnavegación rápida */}
      <div className="subnav-container">
        <button className="subnav-pill active" onClick={() => onNavigate('models')}>
          Visión General
        </button>
        <button className="subnav-pill" onClick={() => onNavigate('models-selection')}>
          2.1 Seleccionando modelos
        </button>
        <button className="subnav-pill" onClick={() => onNavigate('models-resources')}>
          2.2 Recursos educativos digitales
        </button>
      </div>

      <div className="academic-callout">
        <strong>Importancia de la Evaluación de Calidad:</strong> {modelsOverview.calloutText}
      </div>

      <div className="card-grid">
        <div className="academic-card">
          <div className="card-icon-wrapper">
            <Award size={22} />
          </div>
          <h3 className="card-heading">Subpágina 2.1: Seleccionando Modelos</h3>
          <p className="card-body-text">
            Análisis comparativo entre modelos de evaluación de calidad de software y de objetos de aprendizaje (LORI, McCall, COdA, FURPS). Justificación de la adopción de LORI.
          </p>
          <button 
            className="card-action-btn"
            onClick={() => onNavigate('models-selection')}
          >
            Ir a Selección de Modelos <ArrowRight size={15} />
          </button>
        </div>

        <div className="academic-card">
          <div className="card-icon-wrapper">
            <Layers size={22} />
          </div>
          <h3 className="card-heading">Subpágina 2.2: Recursos Educativos Digitales</h3>
          <p className="card-body-text">
            Conceptualización, características didácticas esenciales (reusabilidad, interoperabilidad, accesibilidad) y catálogo de los 3 RED objeto de evaluación.
          </p>
          <button 
            className="card-action-btn"
            onClick={() => onNavigate('models-resources')}
          >
            Ir a Recursos Educativos <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2 className="section-title">
          <CheckCircle2 size={20} color="#1d4ed8" />
          Dimensiones Clave de Evaluación en RED
        </h2>

        <div className="table-container">
          <table className="academic-table">
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>Criterios Evaluados</th>
                <th>Impacto en el Proceso de Aprendizaje</th>
              </tr>
            </thead>
            <tbody>
              {modelsOverview.dimensions.map((dim) => (
                <tr key={dim.id}>
                  <td><strong>{dim.name}</strong></td>
                  <td>{dim.criteria}</td>
                  <td>{dim.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
