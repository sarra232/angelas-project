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
      <div className="wix-card" style={{ marginBottom: '25px' }}>
        <h3>Instrumento de valoración</h3>
        <p style={{ color: 'var(--text-light)', fontSize: '13px', marginBottom: '15px' }}>
          {evaluationPage.scaleNote}
        </p>

        <table className="wix-score-table">
          <thead>
            <tr>
              <th>Criterio Evaluado</th>
              <th style={{ width: '120px', textAlign: 'center' }}>Puntuación</th>
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
        {evaluationPage.analysis.map((item, idx) => (
          <div key={idx} className="wix-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Pregunta orientadora */}
      <div className="wix-quote-box" style={{ marginTop: '25px' }}>
        <strong>Pregunta orientadora:</strong> {evaluationPage.quote.replace('Pregunta orientadora: ', '')}
      </div>
    </div>
  );
}
