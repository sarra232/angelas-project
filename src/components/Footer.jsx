import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            Portafolio Académico Digital
          </p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>
            Modelos de Evaluación de Calidad de Software y Recursos Educativos Digitales (RED)
          </p>
        </div>
        <div className="footer-links">
          <a href="#top" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            Inicio
          </a>
          <a href="#models" onClick={(e) => { e.preventDefault(); onNavigate('models'); }}>
            Modelos
          </a>
          <a href="#redesign" onClick={(e) => { e.preventDefault(); onNavigate('redesign'); }}>
            Rediseño
          </a>
          <a href="#evaluation" onClick={(e) => { e.preventDefault(); onNavigate('evaluation'); }}>
            Evaluación
          </a>
          <a href="#references" onClick={(e) => { e.preventDefault(); onNavigate('references'); }}>
            Referencias
          </a>
        </div>
      </div>
    </footer>
  );
}
