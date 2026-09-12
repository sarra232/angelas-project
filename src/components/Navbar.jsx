import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage }) {
  const { cover } = portfolioData;

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      {/* Barra superior institucional UDES */}
      <div className="wix-top-header">
        <div className="wix-top-inner">
          <div className="wix-brand-container" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={cover.logoUrl} 
              alt="Logo Universidad de Santander" 
              className="wix-logo"
            />
            <div className="wix-site-title">
              <span className="wix-site-name">UNIVERSIDAD DE SANTANDER — UDES</span>
              <span className="wix-site-sub">CAMPUS VIRTUAL CVUDES · MAESTRÍA EN RECURSOS DIGITALES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menú de navegación estilo Wix */}
      <nav className="wix-nav-bar">
        <div className="wix-nav-inner">
          <button 
            className={`wix-nav-btn ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => navigateTo('home')}
          >
            Inicio
          </button>
          
          <button 
            className={`wix-nav-btn ${['models', 'models-selection', 'models-resources'].includes(activePage) ? 'active' : ''}`}
            onClick={() => navigateTo('models')}
          >
            Modelos de Evaluación y RED
          </button>
          
          <button 
            className={`wix-nav-btn ${activePage === 'redesign' ? 'active' : ''}`}
            onClick={() => navigateTo('redesign')}
          >
            Rediseño
          </button>
          
          <button 
            className={`wix-nav-btn ${activePage === 'evaluation' ? 'active' : ''}`}
            onClick={() => navigateTo('evaluation')}
          >
            Aplicación de Modelos de Evaluación
          </button>
          
          <button 
            className={`wix-nav-btn ${activePage === 'references' ? 'active' : ''}`}
            onClick={() => navigateTo('references')}
          >
            Referencias
          </button>
        </div>
      </nav>
    </header>
  );
}
