import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { BarChart3, Trophy, CheckCircle, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EvaluationApplication() {
  const { evaluation } = portfolioData;
  const [activeRedIndex, setActiveRedIndex] = useState(0);

  const currentRecord = evaluation.records[activeRedIndex];

  return (
    <div>
      <PageHeader
        category="Página 4"
        badge="Resultados"
        title="Aplicación del Modelo de Evaluación"
        description={`Instrumentación cuantitativa y cualitativa del modelo ${evaluation.appliedModel} a los Recursos Educativos Digitales.`}
      />

      {/* Selector de RED a evaluar */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {evaluation.records.map((rec, idx) => (
          <button
            key={rec.id}
            className={`subnav-pill ${activeRedIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveRedIndex(idx)}
          >
            {rec.redId} - {rec.redName.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Resumen de Calificación Global */}
      {currentRecord && (
        <>
          <div className="hero-card" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ maxWidth: '650px' }}>
                <span className="tag tag-blue">{evaluation.appliedModel}</span>
                <span className="tag tag-teal">{currentRecord.redId}</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                  {currentRecord.redName}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginTop: '0.4rem' }}>
                  {currentRecord.summary}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Nivel de Calidad: <strong>{currentRecord.level}</strong>
                </p>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Trophy size={34} color="#1d4ed8" />
                <div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                    {currentRecord.finalScore.toFixed(2)}
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}> / 5.0</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Calificación Global</span>
                </div>
              </div>
            </div>
          </div>

          {/* Métricas Detalladas por Criterio LORI */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">
              <BarChart3 size={20} color="#1d4ed8" />
              Rúbrica de Valoración Cuantitativa por Criterio
            </h2>

            <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="academic-card">
                {currentRecord.metrics.map((item, idx) => (
                  <div key={idx} className="score-metric">
                    <div className="score-metric-header">
                      <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                      <span style={{ color: 'var(--primary)' }}>
                        {item.score.toFixed(1)} / 5.0 ({item.percentage}%)
                      </span>
                    </div>
                    <div className="score-bar-bg">
                      <div className="score-bar-fill" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                      <em>Evidencia / Justificación:</em> {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Conclusiones de la Evaluación */}
      <section>
        <h2 className="section-title">
          <CheckCircle size={20} color="#1d4ed8" />
          Síntesis Evaluativa Comparativa
        </h2>

        <div className="academic-callout">
          <strong>Conclusiones Generales del Estudio:</strong> Los tres Recursos Educativos Digitales evaluados demuestran un alto rigor científico y pertinencia temática. La aplicación del instrumento <strong>LORI</strong> permitió identificar que las dimensiones pedagógicas obtienen las calificaciones más sobresalientes, mientras que la <strong>accesibilidad digital (WCAG)</strong> y la <strong>flexibilidad de la retroalimentación</strong> representan los ejes primordiales para la optimización y rediseño de estos entornos de aprendizaje.
        </div>
      </section>
    </div>
  );
}
