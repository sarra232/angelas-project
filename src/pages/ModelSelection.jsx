import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ModelSelection({ onNavigate }) {
  const { modelSelection } = portfolioData;
  const [selectedModelTab, setSelectedModelTab] = useState(modelSelection.selectedModelKey);

  const activeModel = modelSelection.models[selectedModelTab];

  return (
    <div>
      <PageHeader
        category="Subpágina 2.1"
        badge="Evaluación"
        title="Seleccionando Modelos de Evaluación"
        description="Análisis comparativo de modelos de evaluación de calidad de software y justificación del modelo seleccionado para el proyecto."
      />

      {/* Subnavegación */}
      <div className="subnav-container">
        <button className="subnav-pill" onClick={() => onNavigate('models')}>
          Visión General
        </button>
        <button className="subnav-pill active" onClick={() => onNavigate('models-selection')}>
          2.1 Seleccionando modelos
        </button>
        <button className="subnav-pill" onClick={() => onNavigate('models-resources')}>
          2.2 Recursos educativos digitales
        </button>
      </div>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 className="section-title">
          <Award size={20} color="#1d4ed8" />
          Modelos de Evaluación Analizados
        </h2>

        {/* Selector de Modelos */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {Object.entries(modelSelection.models).map(([key, data]) => (
            <button
              key={key}
              className={`subnav-pill ${selectedModelTab === key ? 'active' : ''}`}
              onClick={() => setSelectedModelTab(key)}
            >
              {data.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Ficha del Modelo Seleccionado */}
        {activeModel && (
          <div className="academic-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 className="card-heading" style={{ margin: 0 }}>
                  {activeModel.name}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Propuesto por: <strong>{activeModel.authors}</strong>
                </span>
              </div>
              <span className={`tag ${selectedModelTab === 'lori' ? 'tag-blue' : 'tag-gray'}`}>
                {activeModel.badge}
              </span>
            </div>

            <p style={{ marginTop: '0.85rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              <strong>Enfoque y Alcance:</strong> {activeModel.focus}
            </p>

            <div style={{ marginTop: '1.25rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Ventajas Principales:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {activeModel.advantages.map((adv, idx) => (
                  <li key={idx} style={{ marginBottom: '0.35rem' }}>{adv}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Limitaciones / Desventajas:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {activeModel.disadvantages.map((dis, idx) => (
                  <li key={idx} style={{ marginBottom: '0.35rem' }}>{dis}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Justificación de Elección */}
      <section>
        <h2 className="section-title">
          <FileCheck size={20} color="#1d4ed8" />
          Justificación del Modelo Seleccionado
        </h2>

        <div className="academic-callout">
          <strong>Justificación Académica del Modelo LORI:</strong> {modelSelection.justification}
        </div>
      </section>
    </div>
  );
}
