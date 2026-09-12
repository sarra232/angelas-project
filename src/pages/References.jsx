import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function References() {
  const { referencesPage } = portfolioData;

  return (
    <div className="wix-page-section">
      <div className="wix-section-header">
        <span className="wix-section-badge">{referencesPage.kicker}</span>
        <h2 className="wix-section-title">{referencesPage.title}</h2>
        <p className="wix-section-lead">{referencesPage.lead}</p>
      </div>

      <div className="wix-card" style={{ marginBottom: '20px' }}>
        <p className="wix-ref-item">
          Cova, Á., Arrieta, X., & Aular de Durán, J. (2008). <em>Revisión de modelos para evaluación de software educativos</em>. Revista Electrónica de Estudios Telemáticos, 7(1), 93–114.
        </p>
        <p className="wix-ref-item">
          Pinto, M., Gómez-Camarero, C., & Fernández-Ramos, A. (2012). <em>Los recursos educativos electrónicos: perspectivas y herramientas de evaluación</em>. Perspectivas em Ciência da Informação, 17(3), 82–99.
        </p>
        <p className="wix-ref-item">
          Chinchilla, Z. (2016). <em>Recursos Educativos Digitales</em>. Universidad de Santander (CVUDES), Libro Electrónico Multimedial.
        </p>
        <p className="wix-note-text" style={{ marginTop: '14px' }}>
          {referencesPage.note}
        </p>
      </div>

      <div className="wix-card">
        <h3 className="wix-card-title">Enlaces de apoyo</h3>
        <div className="wix-sources-links">
          {referencesPage.supportLinks.map((link, idx) => (
            <p key={idx} className="wix-source-link-item">
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                • {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
