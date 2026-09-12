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
      {/* Encabezado Superior con Logo Institucional UDES */}
      <div className="wix-header-banner">
        <div className="wix-header-inner">
          <div className="wix-header-left" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={cover.logoUrl} 
              alt="Universidad de Santander UDES" 
              className="wix-header-logo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="wix-header-text">
              <h1>UNIVERSIDAD DE SANTANDER — UDES</h1>
              <span>CAMPUS VIRTUAL CVUDES · MAESTRÍA EN RECURSOS DIGITALES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Navegación */}
      <nav className="wix-navbar">
        <div className="wix-navbar-inner">
          <button 
            className={`wix-nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => navigateTo('home')}
          >
            Inicio
          </button>
          
          <button 
            className={`wix-nav-link ${['models', 'models-selection', 'models-resources'].includes(activePage) ? 'active' : ''}`}
            onClick={() => navigateTo('models')}
          >
            Modelos de Evaluación y RED
          </button>
          
          <button 
            className={`wix-nav-link ${activePage === 'redesign' ? 'active' : ''}`}
            onClick={() => navigateTo('redesign')}
          >
            Rediseño
          </button>
          
          <button 
            className={`wix-nav-link ${activePage === 'evaluation' ? 'active' : ''}`}
            onClick={() => navigateTo('evaluation')}
          >
            Aplicación de Modelos de Evaluación
          </button>
          
          <button 
            className={`wix-nav-link ${activePage === 'references' ? 'active' : ''}`}
            onClick={() => navigateTo('references')}
          >
            Referencias
          </button>
        </div>
      </nav>
    </header>
  );
}
