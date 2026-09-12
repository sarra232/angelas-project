import React from 'react';
import PageHeader from '../components/PageHeader';
import { Bookmark, ExternalLink, BookCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function References() {
  const { references } = portfolioData;

  return (
    <div>
      <PageHeader
        category="Página 5"
        badge="Bibliografía"
        title="Referencias Bibliográficas"
        description="Fuentes académicas, normativas y literatura especializada citadas bajo la norma APA 7.ª edición."
      />

      <div className="academic-callout">
        <strong>Normas APA 7.ª Edición:</strong> Las referencias listadas a continuación sustentan teórica y metodológicamente 
        el estudio de los Recursos Educativos Digitales y los modelos de evaluación de calidad de software educativo implementados.
      </div>

      <section>
        <h2 className="section-title">
          <Bookmark size={20} color="#1d4ed8" />
          Listado de Referencias Bibliográficas
        </h2>

        <div>
          {references.map((ref) => (
            <div key={ref.id} className="reference-item">
              <div className="reference-number">{ref.id}</div>
              <div style={{ flex: 1 }}>
                <p className="reference-text">
                  <strong>{ref.author}</strong> ({ref.year}). <em>{ref.title}</em> {ref.source}
                </p>
                <div className="reference-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem' }}>
                  <span className="tag tag-gray">{ref.category}</span>
                  {ref.link && (
                    <a 
                      href={ref.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      Ver Fuente <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2.5rem' }}>
        <h2 className="section-title">
          <BookCheck size={20} color="#1d4ed8" />
          Bases de Datos y Repositorios Académicos Consultados
        </h2>

        <div className="card-grid">
          <div className="academic-card">
            <h3 className="card-heading">Portal Colombia Aprende</h3>
            <p className="card-body-text">
              Repositorio de contenidos y Objetos Virtuales de Aprendizaje (OVA) del Ministerio de Educación Nacional de Colombia.
            </p>
          </div>

          <div className="academic-card">
            <h3 className="card-heading">PhET Interactive Simulations</h3>
            <p className="card-body-text">
              Simulaciones interactivas de ciencias y matemáticas desarrolladas por la Universidad de Colorado Boulder.
            </p>
          </div>

          <div className="academic-card">
            <h3 className="card-heading">IEEE Xplore / Dialnet / SciELO</h3>
            <p className="card-body-text">
              Bases de datos bibliográficas indexadas para artículos científicos en evaluación de software y tecnología educativa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
