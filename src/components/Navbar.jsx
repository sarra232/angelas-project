import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Layers, RefreshCw, BarChart3, Bookmark, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isModelSection = ['models', 'models-selection', 'models-resources'].includes(activePage);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-brand" onClick={() => navigateTo('home')}>
          <BookOpen size={20} color="#1d4ed8" />
          <span>Portafolio RED</span>
          <span className="nav-brand-badge">Académico</span>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Alternar menú"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <button
              className={`nav-item-btn ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => navigateTo('home')}
            >
              1. Inicio
            </button>
          </li>

          <li className="nav-dropdown" ref={dropdownRef}>
            <button
              className={`nav-item-btn ${isModelSection ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Layers size={16} />
              <span>2. Modelos y RED</span>
              <ChevronDown size={14} />
            </button>

            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button
                    className={`dropdown-item ${activePage === 'models' ? 'active' : ''}`}
                    onClick={() => navigateTo('models')}
                  >
                    Visión General (Pág. 2)
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${activePage === 'models-selection' ? 'active' : ''}`}
                    onClick={() => navigateTo('models-selection')}
                  >
                    2.1 Seleccionando modelos
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${activePage === 'models-resources' ? 'active' : ''}`}
                    onClick={() => navigateTo('models-resources')}
                  >
                    2.2 Recursos educativos digitales
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className={`nav-item-btn ${activePage === 'redesign' ? 'active' : ''}`}
              onClick={() => navigateTo('redesign')}
            >
              <RefreshCw size={16} />
              <span>3. Rediseño</span>
            </button>
          </li>

          <li>
            <button
              className={`nav-item-btn ${activePage === 'evaluation' ? 'active' : ''}`}
              onClick={() => navigateTo('evaluation')}
            >
              <BarChart3 size={16} />
              <span>4. Aplicación</span>
            </button>
          </li>

          <li>
            <button
              className={`nav-item-btn ${activePage === 'references' ? 'active' : ''}`}
              onClick={() => navigateTo('references')}
            >
              <Bookmark size={16} />
              <span>5. Referencias</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
