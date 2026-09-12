import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ModelsOverview() {
  const { modelsPage } = portfolioData;
  const [activeTab, setActiveTab] = useState('models'); // 'models', 'resources'

  return (
    <div className="wix-page-section">
      <div className="wix-section-header">
        <span className="wix-section-badge">{modelsPage.kicker}</span>
        <h2 className="wix-section-title">{modelsPage.title}</h2>
        <p className="wix-section-lead">{modelsPage.lead}</p>
      </div>

      {/* Pestañas Subnavegación estilo Wix */}
      <div className="wix-subtabs">
        <button 
          className={`wix-subtab-btn ${activeTab === 'models' ? 'active' : ''}`}
          onClick={() => setActiveTab('models')}
        >
          2.1 Modelos de Evaluación
        </button>
        <button 
          className={`wix-subtab-btn ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          2.2 Recursos Educativos Digitales
        </button>
      </div>

      {/* PESTAÑA 2.1: SELECCIONANDO MODELOS (LOS 6 MODELOS) */}
      {activeTab === 'models' && (
        <div className="wix-tab-content">
          <div className="wix-grid-3">
            {modelsPage.models.map((model, idx) => (
              <div key={model.id} className={`wix-card wix-card-col-${(idx % 6) + 1}`}>
                <span className="wix-card-pill">{model.pill}</span>
                <h3 className="wix-card-title">{model.name}</h3>
                <p><strong>Descripción:</strong> {model.description}</p>
                <p><strong>Criterios:</strong> {model.criterios}</p>
                <p><strong>Métrica:</strong> {model.metrica}</p>
                <p><strong>Metodología:</strong> {model.metodologia}</p>
                <p><strong>Instrumento:</strong> {model.instrumento}</p>
              </div>
            ))}
          </div>

          <div className="wix-quote-box">
            <strong>Lectura comparativa:</strong> {modelsPage.quote.replace('Lectura comparativa: ', '')}
          </div>
        </div>
      )}

      {/* PESTAÑA 2.2: RECURSOS EDUCATIVOS DIGITALES */}
      {activeTab === 'resources' && (
        <div className="wix-tab-content">
          <div className="wix-card" style={{ marginBottom: '20px' }}>
            <span className="wix-card-pill">{modelsPage.resourcesSection.pill}</span>
            <h3 className="wix-card-title">{modelsPage.resourcesSection.title}</h3>
            <p>{modelsPage.resourcesSection.description}</p>

            {/* Lista de componentes/criterios con tamaños y desalineación manual */}
            <div className="wix-taglist-human">
              {modelsPage.resourcesSection.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`wix-tag-human wix-tag-item-${idx + 1}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="wix-note-text" style={{ marginTop: '14px' }}>
              {modelsPage.resourcesSection.note}
            </p>
          </div>

          <div className="wix-card">
            <h3 className="wix-card-title">Fuentes web consultadas</h3>
            <p className="wix-card-description">
              La revisión se contrastó con documentación sobre LORI, la Norma UNE 71362, COdA, Galvis, FURPS y las dimensiones pedagógicas de Reeves. Estas fuentes se utilizaron para precisar criterios, escalas, metodología e instrumentos.
            </p>
            <div className="wix-sources-links">
              {modelsPage.resourcesSection.webSources.map((source, idx) => (
                <p key={idx} className="wix-source-link-item">
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    • {source.name}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
