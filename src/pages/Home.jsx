import React from 'react';
import { User, GraduationCap, Building2, BookOpen, Layers, RefreshCw, BarChart3, Bookmark, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Home({ onNavigate }) {
  const { cover } = portfolioData;

  return (
    <div className="home-container">
      {/* Portada Principal / Hero */}
      <section className="hero-card">
        <div className="hero-badge-container">
          <span className="hero-badge">{cover.moduleName}</span>
          <span className="tag tag-teal">{cover.programName}</span>
        </div>

        <h1 className="hero-title">
          {cover.activityTitle}
        </h1>

        <p className="hero-subtitle">
          {cover.summaryText}
        </p>

        {/* Metadatos Académicos de la Portada */}
        <div className="metadata-grid">
          {/* Autores */}
          <div className="meta-item">
            <span className="meta-label">
              <User size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Autor(es)
            </span>
            {cover.authors.map((author, idx) => (
              <div key={idx}>
                <span className="meta-value">{author.name}</span>
                <span className="meta-sub" style={{ display: 'block' }}>{author.role}</span>
              </div>
            ))}
          </div>

          {/* Profesor / Tutor */}
          <div className="meta-item">
            <span className="meta-label">
              <GraduationCap size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Docente / Tutor
            </span>
            <span className="meta-value">{cover.teacher.name}</span>
            <span className="meta-sub">{cover.teacher.title}</span>
          </div>

          {/* Institución Universitaria */}
          <div className="meta-item">
            <span className="meta-label">
              <Building2 size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Universidad
            </span>
            <span className="meta-value">{cover.institution}</span>
            <span className="meta-sub">{cover.campus}</span>
          </div>

          {/* Fecha de Entrega */}
          <div className="meta-item">
            <span className="meta-label">
              <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Periodo / Fecha
            </span>
            <span className="meta-value">{cover.date}</span>
            <span className="meta-sub">Año Académico 2026</span>
          </div>
        </div>
      </section>

      {/* Navegación y Estructura del Portafolio */}
      <section>
        <h2 className="section-title">
          <BookOpen size={20} color="#1d4ed8" />
          Estructura del Portafolio Digital
        </h2>

        <div className="card-grid">
          {/* Card Página 2 */}
          <div className="academic-card">
            <div className="card-icon-wrapper">
              <Layers size={22} />
            </div>
            <h3 className="card-heading">2. Modelos de Evaluación y RED</h3>
            <p className="card-body-text">
              Marco conceptual de calidad educativa, criterios de selección entre modelos clásicos y contemporáneos, y caracterización de los RED evaluados.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span className="tag tag-blue">2.1 Seleccionando modelos</span>
              <span className="tag tag-teal">2.2 Recursos RED</span>
            </div>
            <button className="card-action-btn" onClick={() => onNavigate('models')}>
              Explorar modelos y RED <ArrowRight size={15} />
            </button>
          </div>

          {/* Card Página 3 */}
          <div className="academic-card">
            <div className="card-icon-wrapper">
              <RefreshCw size={22} />
            </div>
            <h3 className="card-heading">3. Rediseño</h3>
            <p className="card-body-text">
              Propuestas de intervención pedagógica, tecnológica y de accesibilidad universal para potenciar los recursos evaluados.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span className="tag tag-gray">Mejora continua</span>
              <span className="tag tag-gray">Antes vs. Después</span>
            </div>
            <button className="card-action-btn" onClick={() => onNavigate('redesign')}>
              Ver propuestas de rediseño <ArrowRight size={15} />
            </button>
          </div>

          {/* Card Página 4 */}
          <div className="academic-card">
            <div className="card-icon-wrapper">
              <BarChart3 size={22} />
            </div>
            <h3 className="card-heading">4. Aplicación de Modelo</h3>
            <p className="card-body-text">
              Instrumentación práctica con el modelo LORI, métricas cuantitativas por criterio, barras de logro y análisis de resultados.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span className="tag tag-blue">Instrumento LORI</span>
              <span className="tag tag-teal">Calificación cuantitativa</span>
            </div>
            <button className="card-action-btn" onClick={() => onNavigate('evaluation')}>
              Ver aplicación y resultados <ArrowRight size={15} />
            </button>
          </div>

          {/* Card Página 5 */}
          <div className="academic-card">
            <div className="card-icon-wrapper">
              <Bookmark size={22} />
            </div>
            <h3 className="card-heading">5. Referencias</h3>
            <p className="card-body-text">
              Sustentación teórica con bibliografía citada bajo directrices de la norma APA 7.ª edición y repositorios consultados.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span className="tag tag-gray">Normas APA 7</span>
              <span className="tag tag-gray">Bases indexadas</span>
            </div>
            <button className="card-action-btn" onClick={() => onNavigate('references')}>
              Consultar referencias <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
