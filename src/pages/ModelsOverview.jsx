import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ModelsOverview() {
  const { modelsPage } = portfolioData;
  const [activeTab, setActiveTab] = useState('evaluation-models'); // 'evaluation-models' (2.1), 'resources' (2.2)
  const [isModelsExpanded, setIsModelsExpanded] = useState(false);
  const [isSubpage21Expanded, setIsSubpage21Expanded] = useState(false);

  const displayedModels = isModelsExpanded 
    ? modelsPage.models 
    : modelsPage.models.slice(0, 3);

  const displayedSubpage21Models = isSubpage21Expanded
    ? modelsPage.subpage21Models
    : [];

  return (
    <div className="wix-page-section">
      {/* Encabezado Principal de Página 2 */}
      <div className="wix-section-header">
        <span className="wix-section-badge">{modelsPage.kicker}</span>
        <h2 className="wix-section-title">{modelsPage.title}</h2>
      </div>

      {/* Sección Plegable / Expandible de Modelos Teóricos (1 al 6) */}
      <div className="wix-models-collapsible-section">
        <div className="wix-models-section-top">
          <div className="wix-models-section-title-wrap">
            <h3 className="wix-models-section-title">
              📚 Modelos Teóricos de Evaluación
            </h3>
            <span className="wix-models-badge-count">
              {isModelsExpanded ? 'Mostrando 6 de 6 modelos' : 'Vista previa: 3 de 6 modelos'}
            </span>
          </div>
          <button 
            type="button"
            className="wix-models-toggle-btn"
            onClick={() => setIsModelsExpanded(!isModelsExpanded)}
            title={isModelsExpanded ? "Contraer cuadros de modelos" : "Expandir todos los cuadros de modelos"}
          >
            {isModelsExpanded ? '▲ Contraer modelos' : '▼ Expandir todos (6)'}
          </button>
        </div>

        <div className={`wix-grid-3 ${!isModelsExpanded ? 'wix-grid-preview' : 'wix-grid-expanded'}`}>
          {displayedModels.map((model, idx) => (
            <div 
              key={model.id} 
              className={`wix-card wix-card-col-${(idx % 6) + 1} ${!isModelsExpanded ? 'wix-card-preview-mode' : 'wix-card-full-mode'}`}
              onClick={!isModelsExpanded ? () => setIsModelsExpanded(true) : undefined}
              style={{ cursor: !isModelsExpanded ? 'pointer' : 'default' }}
              title={!isModelsExpanded ? "Clic para expandir y ver todos los detalles" : undefined}
            >
              <div className="wix-card-head-compact">
                <span className="wix-card-pill">{model.pill}</span>
                <h3 className="wix-card-title">{model.name}</h3>
              </div>
              <p className={!isModelsExpanded ? "wix-card-desc-clamp" : ""}>
                <strong>Descripción:</strong> {model.description}
              </p>

              {/* Solo se muestran estos 4 campos cuando está expandido */}
              {isModelsExpanded && (
                <div className="wix-card-more-details">
                  <p><strong>Criterios:</strong> {model.criterios}</p>
                  <p><strong>Métrica:</strong> {model.metrica}</p>
                  <p><strong>Metodología:</strong> {model.metodologia}</p>
                  <p><strong>Instrumento:</strong> {model.instrumento}</p>
                </div>
              )}

              {!isModelsExpanded && (
                <div className="wix-card-click-hint">
                  <span>Clic para ver detalles completos →</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="wix-models-toggle-footer">
          <button 
            type="button"
            className="wix-models-toggle-footer-btn"
            onClick={() => setIsModelsExpanded(!isModelsExpanded)}
          >
            {isModelsExpanded ? (
              <span>▲ Contraer vista (mostrar solo vista previa de 3 modelos)</span>
            ) : (
              <span>▼ Expandir y ver los 6 modelos completos con criterios, métrica e instrumentos</span>
            )}
          </button>
        </div>
      </div>

      {/* Pestañas Subnavegación estilo Wix */}
      <div className="wix-subtabs">
        <button 
          className={`wix-subtab-btn ${activeTab === 'evaluation-models' ? 'active' : ''}`}
          onClick={() => setActiveTab('evaluation-models')}
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

      {/* SUBPÁGINA 2.1: MODELOS DE EVALUACIÓN (LORI 1 y 2, CODA 1 y 2, GALVIS 1 y 2) */}
      {activeTab === 'evaluation-models' && (
        <div className="wix-tab-content">
          {/* Tabla Comparativa: Ventajas y Desventajas de los Modelos (Antes de los Modelos) */}
          {modelsPage.subpage21ComparisonTable && (
            <div className="wix-comparison-table-wrapper" style={{ marginBottom: '36px' }}>
              <div className="wix-eval-green-banner">
                • Comparativa de modelos, ventajas vs desventajas
              </div>
              <table className="wix-comp-advantages-table">
                <thead>
                  <tr>
                    <th className="wix-comp-th-model">Modelo</th>
                    <th className="wix-comp-th-adv">Ventajas</th>
                    <th className="wix-comp-th-disadv">Desventajas</th>
                  </tr>
                </thead>
                <tbody>
                  {modelsPage.subpage21ComparisonTable.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="wix-comp-td-model">
                        <strong>{row.model}</strong>
                      </td>
                      <td className="wix-comp-td-adv">{row.advantages}</td>
                      <td className="wix-comp-td-disadv">{row.disadvantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Botón de Expansión para ver las evaluaciones completas */}
          <div className="wix-models-toggle-footer" style={{ marginTop: '14px', marginBottom: '22px' }}>
            <button 
              type="button"
              className="wix-models-toggle-footer-btn"
              onClick={() => setIsSubpage21Expanded(!isSubpage21Expanded)}
            >
              {isSubpage21Expanded ? (
                <span>▲ Contraer evaluaciones</span>
              ) : (
                <span>▼ Expandir y ver las 6 evaluaciones de modelos completas (LORI, COdA y Galvis)</span>
              )}
            </button>
          </div>

          {displayedSubpage21Models && displayedSubpage21Models.map((modelItem) => (
            <div key={modelItem.id} className="wix-detailed-eval-container" style={{ marginBottom: '35px' }}>
              {/* Título de Cabecera del Modelo */}
              <div className="wix-eval-main-heading">
                <h4>{modelItem.mainTitle}</h4>
                {modelItem.subTitle && (
                  <h5 style={{ margin: '3px 0 0 0', fontSize: '13px', color: '#1e3a8a', fontWeight: 'bold' }}>
                    {modelItem.subTitle}
                  </h5>
                )}
                <h3>{modelItem.modelName}</h3>
              </div>

              {/* 1. Tabla de Metadatos del RED */}
              <div className="wix-eval-table-wrapper">
                <table className="wix-meta-table-eval">
                  <tbody>
                    <tr>
                      <td className="wix-meta-blue-label">Nombre del recurso educativo digital:</td>
                      <td className="wix-meta-white-val">{modelItem.metadata.redName}</td>
                    </tr>
                    <tr>
                      <td className="wix-meta-blue-label">Grado de aplicación:</td>
                      <td className="wix-meta-white-val">{modelItem.metadata.grade}</td>
                    </tr>
                    <tr>
                      <td className="wix-meta-blue-label">Área de conocimiento:</td>
                      <td className="wix-meta-white-val">{modelItem.metadata.area}</td>
                    </tr>
                    <tr>
                      <td className="wix-meta-blue-label">Objetivos de aprendizaje:</td>
                      <td className="wix-meta-white-val">{modelItem.metadata.objectives}</td>
                    </tr>
                    <tr>
                      <td className="wix-meta-blue-label">Nombre del repositorio:</td>
                      <td className="wix-meta-white-val">{modelItem.metadata.repositoryName}</td>
                    </tr>
                    <tr>
                      <td className="wix-meta-blue-label">URL del recurso educativo digital:</td>
                      <td className="wix-meta-white-val">
                        <a 
                          href={modelItem.metadata.redUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="wix-table-link"
                        >
                          {modelItem.metadata.redUrl}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 2. Sección: Descripción del recurso educativo digital */}
              <div className="wix-eval-section-block">
                <div className="wix-eval-green-banner">• Descripción del recurso educativo digital</div>
                <div className="wix-eval-block-body">
                  <p style={{ whiteSpace: 'pre-line' }}>{modelItem.redDescription}</p>
                </div>
              </div>

              {/* 3. Sección: Modelo de evaluación */}
              <div className="wix-eval-section-block">
                <div className="wix-eval-green-banner">• Modelo de evaluación</div>
                <div className="wix-eval-block-body">
                  <p><strong>{modelItem.modelInfo.title}</strong></p>
                  <p style={{ marginTop: '6px' }}><strong>Descripción del modelo:</strong></p>
                  <p style={{ marginTop: '4px' }}>{modelItem.modelInfo.description}</p>
                </div>
              </div>

              {/* 4. Sección: Criterios de evaluación del modelo */}
              <div className="wix-eval-section-block">
                <div className="wix-eval-green-banner">• Criterios de evaluación del modelo</div>
                <div className="wix-eval-criteria-container">
                  {modelItem.criteria.map((c) => (
                    <React.Fragment key={c.num}>
                      {c.dimensionHeader && (
                        <div className="wix-dimension-header-banner">
                          {c.dimensionHeader}
                        </div>
                      )}
                      <table className="wix-criterion-card-table">
                        <tbody>
                          <tr>
                            <td className="wix-criterion-text-cell">
                              <strong>{c.num}. {c.title}{c.desc ? ':' : ''}</strong> {c.desc}
                            </td>
                            <td className="wix-criterion-score-cell">
                              <table className="wix-score-matrix-table">
                                <thead>
                                  <tr>
                                    <th colSpan="6" className="wix-score-matrix-top-header">Puntaje</th>
                                  </tr>
                                  <tr className="wix-score-matrix-cols">
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>N/A</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="wix-score-matrix-val-row">
                                    <td>{c.score === 1 ? 'X' : ''}</td>
                                    <td>{c.score === 2 ? 'X' : ''}</td>
                                    <td>{c.score === 3 ? 'X' : ''}</td>
                                    <td>{c.score === 4 ? 'X' : ''}</td>
                                    <td>{c.score === 5 ? 'X' : ''}</td>
                                    <td>{c.isNA ? 'X' : ''}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          {c.notes && (
                            <tr className="wix-criterion-notes-row">
                              <td colSpan="2" className="wix-criterion-notes-cell">
                                <strong>{c.notesLabel || 'Notas:'}</strong> {c.notes}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 5. Sección: Resultados de la evaluación */}
              <div className="wix-eval-section-block">
                <div className="wix-eval-green-banner">• Resultados de la de evaluación</div>
                <div className="wix-eval-block-body">
                  <p className="wix-final-score-bold">
                    <strong>{modelItem.results.totalScoreText}</strong>
                  </p>
                  <p style={{ marginTop: '8px' }}><strong>Conclusiones de la evaluación:</strong></p>
                  {modelItem.results.conclusions.map((concl, cIdx) => (
                    <p key={cIdx} style={{ marginTop: '8px' }}>{concl}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {isSubpage21Expanded && (
            <div className="wix-models-toggle-footer" style={{ marginTop: '10px', marginBottom: '25px' }}>
              <button 
                type="button"
                className="wix-models-toggle-footer-btn"
                onClick={() => setIsSubpage21Expanded(false)}
              >
                <span>▲ Contraer evaluaciones</span>
              </button>
            </div>
          )}

          {/* Sección de Video de Sustentación al final de los modelos */}
          <div className="wix-eval-section-block wix-multimedia-player-card" style={{ marginTop: '28px', marginBottom: '20px' }}>
            <div className="wix-eval-green-banner">
              • Video de Sustentación / Registro de la Evaluación
            </div>
            <div className="wix-eval-block-body">
              <div className="wix-media-box-inner">
                <div className="wix-media-info">
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '14.5px', color: '#1e3a8a', fontWeight: 'bold' }}>
                    🎥 Video Explicativo de los Modelos de Evaluación
                  </h4>
                  <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
                    Reproduzca a continuación el video explicativo y sustentación sobre la aplicación de los modelos de evaluación y el análisis de los Recursos Educativos Digitales seleccionados:
                  </p>
                </div>
                <div className="wix-video-player-container">
                  <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    className="wix-video-player"
                  >
                    <source src="./video/sustentacion_modelos.mp4" type="video/mp4" />
                    <source src="./video/WhatsApp Video 2026-09-13 at 22.09.01.mp4" type="video/mp4" />
                    <source src="./video/WhatsApp%20Video%202026-09-13%20at%2022.09.01.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción directa de este video en formato MP4.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBPÁGINA 2.2: RECURSOS EDUCATIVOS DIGITALES */}
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
        </div>
      )}
    </div>
  );
}
