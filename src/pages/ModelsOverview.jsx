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
        <div>
          <div className="wix-grid-3">
            {modelsPage.models.map((model) => (
              <div key={model.id} className="wix-card">
                <span className="wix-card-pill">{model.pill}</span>
                <h3>{model.name}</h3>
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
        <div>
          <div className="wix-card" style={{ marginBottom: '20px' }}>
            <span className="wix-card-pill">{modelsPage.resourcesSection.pill}</span>
            <h3>{modelsPage.resourcesSection.title}</h3>
            <p>{modelsPage.resourcesSection.description}</p>

            <div className="wix-taglist">
              {modelsPage.resourcesSection.tags.map((tag, idx) => (
                <span key={idx} className="wix-tag">{tag}</span>
              ))}
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '16px' }}>
              {modelsPage.resourcesSection.note}
            </p>
          </div>

          <div className="wix-card">
            <h3>Fuentes web consultadas</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
              La revisión se contrastó con documentación sobre LORI, la Norma UNE 71362, COdA, Galvis, FURPS y las dimensiones pedagógicas de Reeves. Estas fuentes se utilizaron para precisar criterios, escalas, metodología e instrumentos.
            </p>
            <div style={{ marginTop: '12px' }}>
              {modelsPage.resourcesSection.webSources.map((source, idx) => (
                <p key={idx} style={{ margin: '6px 0' }}>
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold' }}
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
