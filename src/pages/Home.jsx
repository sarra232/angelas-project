import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Home({ onNavigate }) {
  const { cover } = portfolioData;

  return (
    <div className="wix-page-section">
      <div className="wix-cover-box">
        {/* Logo oficial de la Universidad de Santander */}
        <img 
          src={cover.logoUrl} 
          alt="Universidad de Santander UDES" 
          className="wix-cover-logo-center"
        />

        <div className="wix-section-badge">PORTAFOLIO ACADÉMICO DIGITAL</div>

        <h1 className="wix-cover-title">
          EVALUACIÓN Y REDISEÑO DE UN RECURSO EDUCATIVO DIGITAL
        </h1>

        <div className="wix-cover-subtitle">
          MODELOS DE EVALUACIÓN DE RED
        </div>

        <p className="wix-cover-lead">
          {cover.lead}
        </p>

        {/* Tabla de Presentación Institucional */}
        <table className="wix-meta-table">
          <tbody>
            <tr>
              <th>Autores:</th>
              <td>
                <strong>Angela Castellanos de Salvador</strong><br />
                <strong>Daniel Castellanos de Salvador</strong>
              </td>
            </tr>
            <tr>
              <th>Profesor Tutor:</th>
              <td>{cover.teacher}</td>
            </tr>
            <tr>
              <th>Institución:</th>
              <td>{cover.university} — {cover.campus}</td>
            </tr>
            <tr>
              <th>Programa:</th>
              <td>{cover.program}</td>
            </tr>
            <tr>
              <th>Módulo:</th>
              <td>{cover.module}</td>
            </tr>
            <tr>
              <th>Año:</th>
              <td>2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bloque resumen de navegación */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          className="wix-subtab-btn active" 
          style={{ padding: '12px 28px', fontSize: '15px' }}
          onClick={() => onNavigate('models')}
        >
          Comenzar Revisión: Modelos de Evaluación y RED →
        </button>
      </div>
    </div>
  );
}
