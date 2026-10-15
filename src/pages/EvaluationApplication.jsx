import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Sparkles, 
  User 
} from 'lucide-react';

export default function EvaluationApplication() {
  const { evaluationApplicationPage } = portfolioData;
  const { presentation, formatSection } = evaluationApplicationPage;

  // Estados del visor de diapositivas
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showThumbs, setShowThumbs] = useState(false);

  // Estado del formato expandible
  const [isExpanded, setIsExpanded] = useState(false);

  const totalSlides = presentation.slides.length;
  const currentSlide = presentation.slides[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleSelectSlide = (idx) => {
    setCurrentSlideIndex(idx);
  };

  // Renderizado fiel al diseño y estilo de la presentación
  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(56, 189, 248, 0.15)', 
              color: '#38bdf8', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              fontWeight: 700, 
              marginBottom: '16px' 
            }}>
              <Sparkles size={14} /> UNIVERSIDAD DE SANTANDER — CVUDES
            </div>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#ffffff', lineHeight: '1.2', marginBottom: '12px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              {slide.title}
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#93c5fd', marginBottom: '22px', fontWeight: 500 }}>
              {slide.subtitle}
            </p>
            <div className="wix-slide-cover-authors" style={{ display: 'inline-block', textAlign: 'left', minWidth: '320px' }}>
              <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px' }}>
                Autores de la propuesta
              </div>
              {slide.authors.map((author, i) => (
                <div key={i} style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={14} color="#38bdf8" /> {author}
                </div>
              ))}
              <div style={{ fontSize: '12.5px', color: '#cbd5e1', marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{slide.faculty}</span>
                <span style={{ fontWeight: 700, color: '#38bdf8' }}>{slide.year}</span>
              </div>
            </div>
          </div>
        );

      case 'cycle':
        return (
          <div>
            <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '18px', background: 'rgba(255,255,255,0.06)', padding: '12px 16px', borderRadius: '6px', borderLeft: '3px solid #38bdf8' }}>
              {slide.lead}
            </p>
            <div className="wix-slide-step-grid">
              {slide.steps.map((st, i) => (
                <div key={i} className="wix-slide-step-card">
                  <div className="wix-slide-step-num">{st.num}</div>
                  <div className="wix-slide-step-title">{st.title}</div>
                  <div className="wix-slide-step-desc">{st.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '14px' }}>
              <span style={{ background: '#0284c7', color: '#ffffff', fontSize: '11.5px', fontWeight: 700, padding: '4px 14px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                • {slide.badge} •
              </span>
            </div>
          </div>
        );

      case 'context':
        return (
          <div>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.55', marginBottom: '18px' }}>
              {slide.lead}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {slide.dimensions.map((dim, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '16px', borderRadius: '8px' }}>
                  <div style={{ display: 'inline-block', background: '#e0f2fe', color: '#0369a1', fontWeight: 800, fontSize: '11px', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                    {dim.label}
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '6px' }}>{dim.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.45' }}>{dim.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'movements':
        return (
          <div>
            <p style={{ fontSize: '0.96rem', color: '#cbd5e1', lineHeight: '1.55', marginBottom: '18px', background: 'rgba(56, 189, 248, 0.1)', padding: '10px 16px', borderRadius: '6px' }}>
              <strong>Propósito central:</strong> {slide.lead}
            </p>
            <div className="wix-slide-step-grid">
              {slide.movements.map((mov, i) => (
                <div key={i} className="wix-slide-step-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 800, fontSize: '12px', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {mov.num}
                    </span>
                    <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600 }}>MOVIMIENTO</span>
                  </div>
                  <div className="wix-slide-step-title">{mov.title}</div>
                  <div className="wix-slide-step-desc">{mov.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'lenses':
        return (
          <div>
            <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: '1.55', marginBottom: '18px' }}>
              {slide.lead}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px' }}>
              {slide.lenses.map((lens, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '16px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8', marginBottom: '4px' }}>
                    {lens.name}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#fef08a', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>
                    {lens.badge}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.45' }}>
                    {lens.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'criteria':
        return (
          <div>
            <div className="wix-slide-crit-grid">
              {slide.criteriaList.map((crit, i) => (
                <div key={i} className="wix-slide-crit-item">
                  <span className="wix-slide-crit-code">{crit.code}</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{crit.name}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.84rem', color: '#94a3b8', fontStyle: 'italic', marginTop: '14px', textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '8px 14px', borderRadius: '4px' }}>
              ℹ {slide.footer}
            </p>
          </div>
        );

      case 'roadmap':
        return (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '18px' }}>
              {slide.stages.map((st, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderTop: '3px solid #38bdf8', padding: '12px 10px', borderRadius: '4px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 800 }}>FASE {st.step}</div>
                  <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, margin: '4px 0' }}>{st.title}</div>
                  <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>{st.detail}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#0284c7', color: '#ffffff', padding: '10px 16px', borderRadius: '6px', textAlign: 'center', fontSize: '11.5px', fontWeight: 800, letterSpacing: '0.4px' }}>
              {slide.pipeline}
            </div>
          </div>
        );

      case 'results':
        return (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              {slide.cards.map((card, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '18px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase' }}>RECURSO {i + 1}</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 2px' }}>{card.name}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '10px' }}>{card.resource}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '2.1rem', fontWeight: 900, color: '#facc15', lineHeight: 1 }}>{card.score}</span>
                    <span style={{ fontSize: '1rem', color: '#94a3b8' }}>{card.max}</span>
                    <span style={{ marginLeft: 'auto', background: '#16a34a', color: '#ffffff', fontWeight: 800, fontSize: '11px', padding: '3px 10px', borderRadius: '12px' }}>
                      Nivel {card.level}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.45' }}>{card.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>
              * {slide.lead}
            </p>
          </div>
        );

      case 'scale':
        return (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: '10px', marginBottom: '16px' }}>
              {slide.levels.map((lvl, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 10px', borderRadius: '6px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#38bdf8' }}>{lvl.num}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 4px' }}>{lvl.name}</div>
                  <div style={{ fontSize: '0.73rem', color: '#cbd5e1', lineHeight: '1.3' }}>{lvl.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderLeft: '3px solid #facc15', padding: '10px 14px', borderRadius: '4px', fontSize: '0.82rem', color: '#fef08a' }}>
              <strong>Regla N/A:</strong> {slide.rule}
            </div>
          </div>
        );

      case 'tuning':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
            {slide.axes.map((ax, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', padding: '16px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#38bdf8', marginBottom: '6px', letterSpacing: '0.5px' }}>
                  {ax.verb}
                </div>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.45' }}>
                  {ax.desc}
                </p>
              </div>
            ))}
          </div>
        );

      case 'closure':
        return (
          <div style={{ textAlign: 'center', margin: 'auto 0' }}>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.65', maxWidth: '680px', margin: '0 auto 22px' }}>
              {slide.lead}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {slide.actions.map((act, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ background: '#0284c7', color: '#ffffff', fontWeight: 800, fontSize: '12px', padding: '8px 18px', borderRadius: '20px', letterSpacing: '0.8px', boxShadow: '0 4px 10px rgba(2, 132, 199, 0.4)' }}>
                    {act}
                  </span>
                  {i < slide.actions.length - 1 && <span style={{ color: '#38bdf8', fontWeight: 900 }}>·</span>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'references':
        return (
          <div style={{ maxHeight: '280px', overflowY: 'auto', paddingRight: '8px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {slide.citations.map((cit, i) => (
                <li key={i} style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  {cit}
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="wix-page-section">
      {/* Encabezado General de la Página */}
      <div className="wix-section-header" style={{ marginBottom: '24px' }}>
        <span className="wix-section-badge">{evaluationApplicationPage.kicker}</span>
        <h2 className="wix-section-title" style={{ fontSize: '1.45rem', lineHeight: '1.3' }}>
          {evaluationApplicationPage.title}
        </h2>
        <p className="wix-section-lead" style={{ marginTop: '8px', marginBottom: '14px' }}>
          {evaluationApplicationPage.lead}
        </p>
      </div>

      {/* ====================================================================
          1. PRESENTACIÓN: SUSTENTACIÓN DEL MODELO PERT-RED
          Con el formato, fidelidad y estilo visual propio de la presentación
          ==================================================================== */}
      <div className="wix-ppt-container" id="presentacion-pert-red">
        {/* Barra superior con contador y títulos */}
        <div className="wix-ppt-topbar">
          <div className="wix-ppt-badge-group">
            <span className="wix-ppt-counter-badge">
              Diapositiva {currentSlideIndex + 1} de {totalSlides}
            </span>
            <span className="wix-ppt-topbar-title">
              {presentation.title}
            </span>
          </div>

          <div className="wix-ppt-actions">
            <button 
              className={`wix-ppt-action-btn ${showThumbs ? 'active' : ''}`}
              onClick={() => setShowThumbs(!showThumbs)}
              title="Ver todas las diapositivas"
            >
              <Grid size={14} /> Diapositivas
            </button>
          </div>
        </div>

        {/* Drawer de Miniaturas (si showThumbs está activo) */}
        {showThumbs && (
          <div className="wix-ppt-thumbs-drawer">
            {presentation.slides.map((s, idx) => (
              <button 
                key={s.id}
                className={`wix-ppt-thumb ${currentSlideIndex === idx ? 'active' : ''}`}
                onClick={() => handleSelectSlide(idx)}
              >
                <div className="wix-ppt-thumb-num">Diapositiva {idx + 1}</div>
                <div className="wix-ppt-thumb-title">{s.title}</div>
              </button>
            ))}
          </div>
        )}

        {/* Lienzo de la Diapositiva con estilo de presentación */}
        <div className="wix-ppt-stage-wrapper">
          <div className="wix-ppt-slide-card">
            <div className="wix-slide-header">
              <span className="wix-slide-kicker">{currentSlide.kicker}</span>
              <h3 className="wix-slide-title">{currentSlide.title}</h3>
              {currentSlide.subtitle && (
                <div className="wix-slide-subtitle">{currentSlide.subtitle}</div>
              )}
            </div>

            <div className="wix-slide-body">
              {renderSlideContent(currentSlide)}
            </div>
          </div>
        </div>

        {/* Controles de la presentación */}
        <div className="wix-ppt-controls">
          <button 
            className="wix-ppt-ctrl-btn" 
            onClick={handlePrevSlide}
          >
            <ChevronLeft size={16} /> Anterior
          </button>

          {/* Indicadores de puntos */}
          <div className="wix-ppt-dots">
            {presentation.slides.map((_, idx) => (
              <button 
                key={idx}
                className={`wix-ppt-dot ${currentSlideIndex === idx ? 'active' : ''}`}
                onClick={() => handleSelectSlide(idx)}
                title={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            className="wix-ppt-ctrl-btn" 
            onClick={handleNextSlide}
          >
            Siguiente <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ====================================================================
          2. FORMATO DE DISEÑO MODELO DE EVALUACIÓN
          Ubicado debajo de la presentación con estilo simple y sobrio
          ==================================================================== */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner">
          • {formatSection.title}
        </div>

        <div className="wix-eval-block-body">
          {/* Bloque resumen inicial sobrio */}
          <div style={{ background: '#f8fafc', border: '1px solid #000000', padding: '14px 18px', marginBottom: '16px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '6px', color: '#000000' }}>
              {formatSection.title}
            </div>
            <div style={{ fontSize: '13px', color: '#334155', marginBottom: '6px' }}>
              Autores: <strong>{formatSection.metadata.authors.join(' · ')}</strong>
            </div>
            <div style={{ fontSize: '12.5px', color: '#475569' }}>
              {formatSection.metadata.institution} — {formatSection.metadata.faculty} ({formatSection.metadata.year})
            </div>
          </div>

          {/* Botón simple de Expandir / Contraer */}
          <div style={{ textAlign: 'center', margin: '14px 0' }}>
            <button 
              className="wix-simple-toggle-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '▲ Contraer información' : '▼ Expandir para ver más'}
            </button>
          </div>

          {/* Contenido Completo del Formato (Solo cuando está expandido) */}
          {isExpanded && (
            <div className="wix-simple-doc-content">
              
              {/* Encabezado del Formato */}
              <div style={{ border: '1px solid #000000', padding: '18px', background: '#f8fafc', marginBottom: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#000000', marginBottom: '6px' }}>
                  {formatSection.title}
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 'bold', margin: '10px 0' }}>
                  {formatSection.metadata.authors.map((a, i) => <div key={i}>{a}</div>)}
                </div>
                <div style={{ fontSize: '12.5px', color: '#334155' }}>
                  <div>{formatSection.metadata.institution}</div>
                  <div>{formatSection.metadata.faculty}</div>
                  <div>{formatSection.metadata.program}</div>
                  <div>{formatSection.metadata.city} — {formatSection.metadata.year}</div>
                </div>
              </div>

              {/* 1. Introducción */}
              <div className="wix-simple-subheading">
                1. Introducción
              </div>
              {formatSection.sections.introduccion.map((par, i) => (
                <p key={i} style={{ marginBottom: '12px', textAlign: 'justify' }}>{par}</p>
              ))}

              {/* 2. Problema y Justificación */}
              <div className="wix-simple-subheading">
                2. Problema y Justificación
              </div>
              {formatSection.sections.problemaJustificacion.map((par, i) => (
                <p key={i} style={{ marginBottom: '12px', textAlign: 'justify' }}>{par}</p>
              ))}

              {/* 3. Objetivos */}
              <div className="wix-simple-subheading">
                3. Objetivos
              </div>
              
              <div style={{ border: '1px solid #000000', background: '#f8fafc', padding: '12px 14px', marginBottom: '14px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#000000' }}>
                  Objetivo General:
                </div>
                <p style={{ margin: 0 }}>
                  {formatSection.sections.objetivos.general}
                </p>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
                  Objetivos Específicos:
                </div>
                <ul style={{ paddingLeft: '22px', margin: 0 }}>
                  {formatSection.sections.objetivos.especificos.map((obj, i) => (
                    <li key={i} style={{ marginBottom: '6px', textAlign: 'justify' }}>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Marco Conceptual */}
              <div className="wix-simple-subheading">
                4. Marco Conceptual
              </div>
              {formatSection.sections.marcoConceptual.intro.map((par, i) => (
                <p key={i} style={{ marginBottom: '12px', textAlign: 'justify' }}>{par}</p>
              ))}

              {/* Modelos de referencia LORI, COdA, Galvis */}
              <table className="wix-simple-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Modelo de Referencia</th>
                    <th>Aportes Conceptuales</th>
                  </tr>
                </thead>
                <tbody>
                  {formatSection.sections.marcoConceptual.referentes.map((ref, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 'bold', background: '#f8fafc' }}>{ref.nombre}</td>
                      <td>{ref.texto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p style={{ marginBottom: '14px', textAlign: 'justify' }}>
                {formatSection.sections.marcoConceptual.sintesis}
              </p>

              {/* Modelo PERT-RED y criterios */}
              <div style={{ border: '1px solid #000000', padding: '14px', background: '#f8fafc', marginBottom: '16px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
                  Estructura del Modelo PERT-RED:
                </div>
                <p style={{ marginBottom: '8px' }}>
                  {formatSection.sections.marcoConceptual.modeloPertRed.definicion}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px', margin: '8px 0' }}>
                  {formatSection.sections.marcoConceptual.modeloPertRed.criterios.map((c, i) => (
                    <div key={i} style={{ border: '1px solid #000000', background: '#ffffff', padding: '6px 10px', fontSize: '12.5px' }}>
                      {c}
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '8px', marginBottom: '4px', fontSize: '13px' }}>
                  {formatSection.sections.marcoConceptual.modeloPertRed.mejoraContinua}
                </p>
                <p style={{ margin: 0, fontSize: '13px' }}>
                  {formatSection.sections.marcoConceptual.modeloPertRed.contextoAtencion}
                </p>
              </div>

              <div style={{ fontWeight: 'bold', marginTop: '14px', marginBottom: '6px' }}>
                ¿De qué manera permite evaluar adecuadamente un RED?
              </div>
              {formatSection.sections.marcoConceptual.deQueManera.map((par, i) => (
                <p key={i} style={{ marginBottom: '10px', textAlign: 'justify' }}>{par}</p>
              ))}

              <div style={{ fontWeight: 'bold', marginTop: '14px', marginBottom: '6px' }}>
                Ventajas potenciales frente a otros modelos
              </div>
              {formatSection.sections.marcoConceptual.ventajasPotenciales.map((par, i) => (
                <p key={i} style={{ marginBottom: '10px', textAlign: 'justify' }}>{par}</p>
              ))}

              {/* 5. Metodología */}
              <div className="wix-simple-subheading">
                5. Metodología
              </div>
              <p style={{ marginBottom: '12px' }}>{formatSection.sections.metodologia.intro}</p>

              {formatSection.sections.metodologia.fases.map((f, i) => (
                <div key={i} style={{ marginBottom: '16px' }}>
                  <div style={{ fontWeight: 'bold', color: '#000000', marginBottom: '4px' }}>
                    {f.fase}
                  </div>
                  <p style={{ marginBottom: '8px', textAlign: 'justify' }}>{f.contenido}</p>

                  {/* Tabla 1 de Promedios */}
                  {f.tablaPromedios && (
                    <div style={{ margin: '10px 0' }}>
                      <table className="wix-simple-table">
                        <thead>
                          <tr>
                            <th>Recurso educativo digital</th>
                            <th style={{ width: '22%' }}>Promedio</th>
                            <th style={{ width: '25%' }}>Nivel según PERT-RED</th>
                          </tr>
                        </thead>
                        <tbody>
                          {f.tablaPromedios.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td style={{ fontWeight: 'bold' }}>{row.recurso}</td>
                              <td style={{ fontWeight: 'bold' }}>{row.promedio}</td>
                              <td>{row.nivel}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {f.conclusion && (
                        <p style={{ fontSize: '12.5px', fontStyle: 'italic', color: '#475569', marginTop: '4px' }}>
                          {f.conclusion}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Tabla 2 de Mejoras */}
                  {f.tablaMejoras && (
                    <div style={{ margin: '10px 0' }}>
                      <table className="wix-simple-table">
                        <thead>
                          <tr>
                            <th style={{ width: '25%' }}>Recurso</th>
                            <th style={{ width: '38%' }}>Necesidad identificada</th>
                            <th>Acción de mejora propuesta</th>
                          </tr>
                        </thead>
                        <tbody>
                          {f.tablaMejoras.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td style={{ fontWeight: 'bold', background: '#f8fafc' }}>{row.recurso}</td>
                              <td>{row.necesidad}</td>
                              <td>{row.accion}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {f.conclusion && (
                        <p style={{ fontSize: '12.5px', fontStyle: 'italic', color: '#475569', marginTop: '4px' }}>
                          {f.conclusion}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* 6. Métrica o Escala de Valoración */}
              <div className="wix-simple-subheading">
                6. Métrica o Escala de Valoración
              </div>
              <p style={{ marginBottom: '10px' }}>{formatSection.sections.metricaEscala.intro}</p>

              <table className="wix-simple-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>Nivel</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {formatSection.sections.metricaEscala.niveles.map((niv, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 'bold' }}>{niv.nivel}</td>
                      <td>{niv.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p style={{ margin: '10px 0', fontSize: '13px' }}>
                {formatSection.sections.metricaEscala.opcionNA}
              </p>

              <div style={{ fontWeight: 'bold', marginTop: '14px', marginBottom: '4px' }}>
                Cálculo del resultado e interpretación:
              </div>
              <p style={{ marginBottom: '10px', fontSize: '13px' }}>
                {formatSection.sections.metricaEscala.calculo}
              </p>

              <table className="wix-simple-table">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Promedio</th>
                    <th style={{ width: '25%' }}>Interpretación</th>
                    <th>Orientación</th>
                  </tr>
                </thead>
                <tbody>
                  {formatSection.sections.metricaEscala.interpretacionRangos.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 'bold' }}>{row.rango}</td>
                      <td style={{ fontWeight: 'bold' }}>{row.interpretacion}</td>
                      <td>{row.orientacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ border: '1px solid #000000', background: '#fffbeb', padding: '10px 14px', margin: '12px 0', fontSize: '12.5px' }}>
                <strong>Nota metodológica:</strong> {formatSection.sections.metricaEscala.advertencia}
              </div>

              {/* 7. Instrumento de Evaluación Rediseñado */}
              <div className="wix-simple-subheading">
                7. Instrumento de Evaluación Rediseñado
              </div>
              <p style={{ marginBottom: '10px' }}>{formatSection.sections.instrumentoRedisenado.intro}</p>

              <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
                Aplicación resumida a los recursos seleccionados:
              </div>

              <table className="wix-simple-table">
                <thead>
                  <tr>
                    <th>Criterio</th>
                    <th style={{ width: '24%', textAlign: 'center' }}>British Council</th>
                    <th style={{ width: '24%', textAlign: 'center' }}>READ</th>
                  </tr>
                </thead>
                <tbody>
                  {formatSection.sections.instrumentoRedisenado.tablaResumen.map((row, i) => {
                    const isTotal = row.criterio.includes('TOTAL') || row.criterio.includes('NIVEL');
                    return (
                      <tr key={i} style={isTotal ? { background: '#f8fafc', fontWeight: 'bold' } : {}}>
                        <td style={isTotal ? { fontWeight: 'bold' } : {}}>{row.criterio}</td>
                        <td style={{ textAlign: 'center', fontWeight: isTotal ? 'bold' : 'normal' }}>
                          {row.bc}
                        </td>
                        <td style={{ textAlign: 'center', fontWeight: isTotal ? 'bold' : 'normal' }}>
                          {row.read}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div style={{ fontWeight: 'bold', marginTop: '16px', marginBottom: '6px' }}>
                Ajustes que necesita el propio modelo:
              </div>
              {formatSection.sections.instrumentoRedisenado.ajustesModelo.map((par, i) => (
                <p key={i} style={{ marginBottom: '10px', textAlign: 'justify' }}>{par}</p>
              ))}

              {/* 8. Referencias */}
              <div className="wix-simple-subheading">
                8. Referencias
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0' }}>
                {formatSection.sections.referencias.map((ref, i) => (
                  <li key={i} style={{ fontSize: '12.5px', lineHeight: '1.55', marginBottom: '8px', paddingLeft: '20px', textIndent: '-20px' }}>
                    {ref}
                  </li>
                ))}
              </ul>

              {/* Botón inferior simple para contraer */}
              <div style={{ textAlign: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed #cbd5e1' }}>
                <button 
                  className="wix-simple-toggle-btn"
                  onClick={() => setIsExpanded(false)}
                >
                  ▲ Contraer información
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
