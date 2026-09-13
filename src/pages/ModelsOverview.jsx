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
          {/* Tablas de Caracterización de los RED Seleccionados */}
          {modelsPage.resourcesSection.redItems && modelsPage.resourcesSection.redItems.map((red) => (
            <div key={red.id} className="wix-red-table-container">
              <table className="wix-red-spec-table">
                <thead>
                  <tr>
                    <th colSpan="2" className="wix-red-table-header">
                      {red.titleHeader}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="wix-red-label-col">RED:</td>
                    <td className="wix-red-value-col">{red.redName}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Área de conocimiento:</td>
                    <td className="wix-red-value-col">{red.knowledgeArea}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Nivel o grado de aplicación:</td>
                    <td className="wix-red-value-col">{red.applicationLevel}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Datos del autor(es):</td>
                    <td className="wix-red-value-col">{red.authorData}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Enlace al repositorio:</td>
                    <td className="wix-red-value-col">
                      <a 
                        href={red.repositoryUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="wix-table-link"
                      >
                        {red.repositoryUrl}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Enlace al RED:</td>
                    <td className="wix-red-value-col">
                      <a 
                        href={red.redUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="wix-table-link"
                      >
                        {red.redUrl}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Descripción:</td>
                    <td className="wix-red-value-col">{red.description}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Características y posibilidades de uso:</td>
                    <td className="wix-red-value-col">{red.featuresAndUses}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Limitaciones:</td>
                    <td className="wix-red-value-col">{red.limitations}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Verificación de estándares:</td>
                    <td className="wix-red-value-col">{red.standardsVerification}</td>
                  </tr>
                  <tr>
                    <td className="wix-red-label-col">Captura de Pantalla:</td>
                    <td className="wix-red-value-col">
                      <div className="wix-screenshot-box">
                        <img 
                          src={red.screenshotUrl} 
                          alt={red.screenshotAlt}
                          className="wix-red-screenshot"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

          {/* Fuentes consultadas */}
          <div className="wix-card" style={{ marginTop: '22px' }}>
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
