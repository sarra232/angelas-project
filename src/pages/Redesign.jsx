import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Redesign() {
  const { redesignPage } = portfolioData;

  return (
    <div className="wix-page-section">
      <div className="wix-section-header">
        <span className="wix-section-badge">{redesignPage.kicker}</span>
        <h2 className="wix-section-title">{redesignPage.title}</h2>
        <p className="wix-section-lead">{redesignPage.lead}</p>
      </div>

      {/* Línea de tiempo metodológica */}
      <div className="wix-timeline">
        {redesignPage.steps.map((step, idx) => (
          <div key={idx} className="wix-step">
            <h4>{step.number} · {step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Matriz de diagnóstico y propuesta */}
      <div className="wix-grid-3" style={{ marginTop: '24px' }}>
        {redesignPage.matrix.map((item, idx) => {
          const matrixClass = idx === 0 ? 'wix-matrix-antes' : idx === 1 ? 'wix-matrix-cambio' : 'wix-matrix-despues';
          return (
            <div key={idx} className={`wix-card ${matrixClass}`}>
              <span className="wix-card-pill">{item.pill}</span>
              <h3 className="wix-card-title">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
