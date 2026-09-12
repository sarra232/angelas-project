import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Home({ onNavigate }) {
  const { cover } = portfolioData;

  return (
    <div className="wix-page-section">
      <div className="wix-cover-box">
        {/* Logo oficial de la Universidad de Santander alineado a la izquierda */}
        <div className="wix-cover-logo-container-left">
          <img 
            src={cover.logoUrl} 
            alt="Universidad de Santander UDES" 
            className="wix-cover-logo-left"
          />
        </div>

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

        {/* Tabla de Presentación Institucional con leve desfase manual */}
        <div className="wix-table-wrapper-offset">
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
      </div>

      {/* Botón de acceso directo a la siguiente sección */}
      <div className="wix-home-cta-box">
        <button 
          className="wix-btn-start"
          onClick={() => onNavigate('models')}
        >
          Comenzar Revisión: Modelos de Evaluación y RED →
        </button>
      </div>
    </div>
  );
}
