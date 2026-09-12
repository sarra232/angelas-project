import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function EvaluationApplication() {
  const { evaluationPage } = portfolioData;

  return (
    <div className="wix-page-section">
      <div className="wix-section-header">
        <span className="wix-section-badge">{evaluationPage.kicker}</span>
        <h2 className="wix-section-title">{evaluationPage.title}</h2>
        <p className="wix-section-lead">{evaluationPage.lead}</p>
      </div>

      {/* Tabla del Instrumento de Evaluación */}
      <div className="wix-card" style={{ marginBottom: '22px' }}>
        <h3 className="wix-card-title">Instrumento de valoración</h3>
        <p className="wix-note-text" style={{ marginBottom: '14px' }}>
          {evaluationPage.scaleNote}
        </p>

        <table className="wix-score-table">
          <thead>
            <tr>
              <th>Criterio Evaluado</th>
              <th style={{ width: '130px', textAlign: 'center' }}>Puntuación</th>
            </tr>
          </thead>
          <tbody>
            {evaluationPage.scores.map((item, idx) => (
              <tr key={idx}>
                <td><strong>{item.criterion}</strong></td>
                <td style={{ textAlign: 'center' }}>
                  <span className="wix-score-badge">{item.score}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Análisis cualitativo */}
      <div className="wix-grid-3">
        {evaluationPage.analysis.map((item, idx) => {
          const analysisClass = idx === 0 ? 'wix-analysis-fortalezas' : idx === 1 ? 'wix-analysis-mejoras' : 'wix-analysis-decision';
          return (
            <div key={idx} className={`wix-card ${analysisClass}`}>
              <h3 className="wix-card-title">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* Pregunta orientadora */}
      <div className="wix-quote-box" style={{ marginTop: '24px' }}>
        <strong>Pregunta orientadora:</strong> {evaluationPage.quote.replace('Pregunta orientadora: ', '')}
      </div>
    </div>
  );
}
