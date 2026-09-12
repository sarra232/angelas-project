import React from 'react';
import PageHeader from '../components/PageHeader';
import { Layers, Globe, Sparkles, ExternalLink, Bookmark } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function DigitalResources({ onNavigate }) {
  const { digitalResources } = portfolioData;

  return (
    <div>
      <PageHeader
        category="Subpágina 2.2"
        badge="Recursos"
        title="Recursos Educativos Digitales (RED)"
        description="Concepto, características esenciales y catálogo de recursos educativos seleccionados para la evaluación y rediseño."
      />

      {/* Subnavegación */}
      <div className="subnav-container">
        <button className="subnav-pill" onClick={() => onNavigate('models')}>
          Visión General
        </button>
        <button className="subnav-pill" onClick={() => onNavigate('models-selection')}>
          2.1 Seleccionando modelos
        </button>
        <button className="subnav-pill active" onClick={() => onNavigate('models-resources')}>
          2.2 Recursos educativos digitales
        </button>
      </div>

      <div className="academic-callout">
        <strong>Concepto de RED:</strong> {digitalResources.concept}
      </div>

      {/* Características de un RED */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 className="section-title">
          <Sparkles size={20} color="#1d4ed8" />
          Características Esenciales de los RED
        </h2>

        <div className="card-grid">
          {digitalResources.characteristics.map((char, idx) => (
            <div key={idx} className="academic-card">
              <h3 className="card-heading">{char.title}</h3>
              <p className="card-body-text">{char.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catálogo de RED Seleccionados */}
      <section>
        <h2 className="section-title">
          <Globe size={20} color="#1d4ed8" />
          Catálogo de Recursos Educativos Digitales Seleccionados
        </h2>

        <div className="card-grid">
          {digitalResources.items.map((red) => (
            <div key={red.id} className="academic-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="tag tag-blue">{red.code}</span>
                <span className="tag tag-gray">{red.format}</span>
              </div>
              
              <h3 className="card-heading" style={{ marginTop: '0.75rem' }}>
                {red.name}
              </h3>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                <div><strong>Área / Asignatura:</strong> {red.subject}</div>
                <div><strong>Población Objetivo:</strong> {red.targetLevel}</div>
                <div><strong>Repositorio:</strong> {red.repository}</div>
              </div>

              <p className="card-body-text">
                {red.description}
              </p>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a 
                  href={red.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-action-btn"
                >
                  Visitar Recurso <ExternalLink size={14} />
                </a>

                <button 
                  className="subnav-pill"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                  onClick={() => onNavigate('evaluation')}
                >
                  Ver Evaluación (Pág. 4)
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
