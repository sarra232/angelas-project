import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Sparkles, 
  BookOpen, 
  AlertCircle, 
  ListChecks, 
  BarChart3, 
  Workflow, 
  ClipboardCheck, 
  Bookmark, 
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export default function Redesign() {
  const { redesignPage } = portfolioData;

  // Estado interactivo para el Instrumento de Evaluación
  const [scores, setScores] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  });

  const handleScoreChange = (criterionNum, value) => {
    setScores(prev => ({
      ...prev,
      [criterionNum]: value
    }));
  };

  const handleResetScores = () => {
    setScores({
      1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null
    });
  };

  // Calcular promedio de criterios con puntuación numérica (excluyendo "NA" y null)
  const evaluatedEntries = Object.values(scores).filter(val => val !== null && val !== 'NA');
  const evaluatedCount = evaluatedEntries.length;
  const totalScore = evaluatedEntries.reduce((acc, curr) => acc + Number(curr), 0);
  const averageScore = evaluatedCount > 0 ? (totalScore / evaluatedCount).toFixed(2) : null;

  return (
    <div className="wix-page-section">
      {/* 1. Encabezado Principal */}
      <div className="wix-section-header" style={{ marginBottom: '24px' }}>
        <span className="wix-section-badge">{redesignPage.kicker}</span>
        <h2 className="wix-section-title" style={{ fontSize: '1.45rem', lineHeight: '1.3' }}>
          {redesignPage.title}
        </h2>
        <div className="wix-academic-callout" style={{ 
          marginTop: '14px', 
          background: '#f0fdf4', 
          borderLeft: '4px solid #16a34a',
          padding: '12px 18px',
          borderRadius: '4px',
          fontSize: '13.5px',
          lineHeight: '1.6',
          color: '#166534'
        }}>
          <strong>Propósito del Modelo:</strong> {redesignPage.purpose}
        </div>
      </div>

      {/* 2. Sección: Referentes */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner">
          • {redesignPage.referents.title} Teóricos del Modelo
        </div>
        <div className="wix-eval-block-body">
          <p style={{ marginBottom: '14px' }}>
            {redesignPage.referents.intro}
          </p>

          <table className="wix-comp-advantages-table" style={{ marginTop: '10px' }}>
            <thead>
              <tr>
                <th style={{ width: '32%', background: '#c5e0b4', color: '#000000', border: '1px solid #000000', padding: '8px 12px' }}>
                  Modelo de Referencia
                </th>
                <th style={{ background: '#c5e0b4', color: '#000000', border: '1px solid #000000', padding: '8px 12px' }}>
                  Aportes Esenciales a PERT-RED
                </th>
              </tr>
            </thead>
            <tbody>
              {redesignPage.referents.items.map((ref, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 'bold', border: '1px solid #000000', padding: '10px 12px', background: '#f8fafc', verticalAlign: 'top' }}>
                    {ref.model}
                  </td>
                  <td style={{ border: '1px solid #000000', padding: '10px 14px', verticalAlign: 'top' }}>
                    {ref.contributions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Sección: Problemática que motiva el Rediseño del Modelo */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner">
          • {redesignPage.problematic.title}
        </div>
        <div className="wix-eval-block-body">
          {redesignPage.problematic.paragraphs.map((para, pIdx) => {
            const isQuestionPara = para.includes('¿qué tan pertinente');
            if (isQuestionPara) {
              return (
                <div 
                  key={pIdx} 
                  style={{
                    margin: '18px 0',
                    background: '#eff6ff',
                    borderLeft: '4px solid #2563eb',
                    padding: '14px 18px',
                    borderRadius: '4px',
                    fontStyle: 'italic',
                    color: '#1e3a8a',
                    fontWeight: '500'
                  }}
                >
                  {para}
                </div>
              );
            }
            return (
              <p key={pIdx} style={{ marginBottom: '12px' }}>
                {para}
              </p>
            );
          })}
        </div>
      </div>

      {/* 4. Sección: Criterios de Evaluación */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner">
          • {redesignPage.criteriaSection.title} de PERT-RED
        </div>
        <div className="wix-eval-block-body">
          <p style={{ marginBottom: '14px' }}>
            {redesignPage.criteriaSection.intro}
          </p>

          <table className="wix-comp-advantages-table">
            <thead>
              <tr>
                <th style={{ width: '32%', background: '#c5e0b4', color: '#000000', border: '1px solid #000000', padding: '8px 12px' }}>
                  Criterio de Evaluación
                </th>
                <th style={{ background: '#c5e0b4', color: '#000000', border: '1px solid #000000', padding: '8px 12px' }}>
                  Alcance y Aspectos Valorados
                </th>
              </tr>
            </thead>
            <tbody>
              {redesignPage.criteriaSection.items.map((crit) => (
                <tr key={crit.num}>
                  <td style={{ fontWeight: 'bold', border: '1px solid #000000', padding: '10px 12px', background: '#f8fafc', verticalAlign: 'top' }}>
                    {crit.num}. {crit.name}
                  </td>
                  <td style={{ border: '1px solid #000000', padding: '10px 14px', verticalAlign: 'top' }}>
                    {crit.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Sección: Métrica o Escala de Valoración */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner">
          • {redesignPage.scaleSection.title}
        </div>
        <div className="wix-eval-block-body">
          <p style={{ marginBottom: '14px' }}>
            {redesignPage.scaleSection.intro}
          </p>

          <table className="wix-comp-advantages-table" style={{ marginBottom: '14px' }}>
            <thead>
              <tr>
                <th style={{ width: '25%', background: '#c5e0b4', color: '#000000', border: '1px solid #000000', padding: '8px 12px' }}>
                  Nivel de Calificación
                </th>
                <th style={{ background: '#c5e0b4', color: '#000000', border: '1px solid #000000', padding: '8px 12px' }}>
                  Descripción Operativa
                </th>
              </tr>
            </thead>
            <tbody>
              {redesignPage.scaleSection.levels.map((lvl, lIdx) => (
                <tr key={lIdx}>
                  <td style={{ fontWeight: 'bold', border: '1px solid #000000', padding: '8px 12px', background: '#f8fafc' }}>
                    {lvl.level}
                  </td>
                  <td style={{ border: '1px solid #000000', padding: '8px 14px' }}>
                    {lvl.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{
            background: '#fefce8',
            border: '1px solid #fde047',
            padding: '10px 14px',
            borderRadius: '4px',
            fontSize: '13px',
            color: '#854d0e',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <BarChart3 size={18} color="#ca8a04" />
            <span><strong>Regla de cálculo:</strong> {redesignPage.scaleSection.calculation}</span>
          </div>
        </div>
      </div>

      {/* 6. Sección: Metodología de Aplicación */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner">
          • {redesignPage.methodologySection.title} en Cinco Fases
        </div>
        <div className="wix-eval-block-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {redesignPage.methodologySection.steps.map((step) => (
              <div 
                key={step.number}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '12px 14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px'
                }}
              >
                <div style={{
                  background: '#166534',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  {step.number}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#0f172a' }}>
                    {step.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.55', color: '#334155' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Sección: Instrumento de Evaluación (Plantilla Interactiva) */}
      <div className="wix-eval-section-block" style={{ marginBottom: '32px' }}>
        <div className="wix-eval-green-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>• {redesignPage.instrumentSection.title} (Plantilla Interactiva)</span>
          <button 
            type="button" 
            onClick={handleResetScores}
            style={{
              background: '#ffffff',
              border: '1px solid #166534',
              color: '#166534',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '11.5px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            title="Reiniciar selecciones del instrumento"
          >
            <RotateCcw size={12} /> Limpiar
          </button>
        </div>
        <div className="wix-eval-block-body">
          <p style={{ marginBottom: '14px' }}>
            {redesignPage.instrumentSection.intro}
          </p>

          {/* Panel de resultados interactivos en tiempo real */}
          {evaluatedCount > 0 && (
            <div style={{
              marginBottom: '16px',
              padding: '10px 16px',
              background: '#ecfdf5',
              border: '1px solid #10b981',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <span style={{ fontSize: '13px', color: '#065f46' }}>
                  Criterios evaluados: <strong>{evaluatedCount} de 8</strong> | Suma: <strong>{totalScore} pts</strong>
                </span>
              </div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#047857' }}>
                Promedio obtenido: {averageScore} / 5.0
              </div>
            </div>
          )}

          <div style={{ overflowX: 'auto' }}>
            <table className="wix-red-spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ background: '#385723', color: '#ffffff', padding: '10px 12px', textAlign: 'left', border: '1px solid #000000', width: '42%' }}>
                    Criterios y Preguntas Guía
                  </th>
                  {redesignPage.instrumentSection.columns.map((col, cIdx) => (
                    <th 
                      key={cIdx} 
                      style={{ 
                        background: '#385723', 
                        color: '#ffffff', 
                        padding: '8px 4px', 
                        textAlign: 'center', 
                        border: '1px solid #000000',
                        fontSize: '12px',
                        width: '9.5%'
                      }}
                    >
                      {col} {cIdx < 5 ? `(${cIdx + 1})` : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {redesignPage.instrumentSection.items.map((item) => {
                  const currentScore = scores[item.num];

                  return (
                    <tr key={item.num} style={{ background: item.num % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                      <td style={{ border: '1px solid #000000', padding: '10px 12px', verticalAlign: 'middle' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#0f172a', marginBottom: '3px' }}>
                          {item.num}. {item.criterion}
                        </div>
                        <div style={{ fontSize: '12.5px', color: '#475569', fontStyle: 'italic' }}>
                          {item.question}
                        </div>
                      </td>

                      {/* Opciones 1 a 5 */}
                      {[1, 2, 3, 4, 5].map((val) => {
                        const isSelected = currentScore === val;
                        return (
                          <td 
                            key={val} 
                            onClick={() => handleScoreChange(item.num, val)}
                            style={{ 
                              border: '1px solid #000000', 
                              textAlign: 'center', 
                              verticalAlign: 'middle',
                              cursor: 'pointer',
                              background: isSelected ? '#dcfce7' : 'inherit',
                              transition: 'background-color 0.1s ease'
                            }}
                            title={`Calificar criterio ${item.num} como ${val}`}
                          >
                            <span style={{ 
                              display: 'inline-block',
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              border: isSelected ? '2px solid #16a34a' : '1.5px solid #94a3b8',
                              background: isSelected ? '#16a34a' : 'transparent',
                              color: isSelected ? '#ffffff' : '#64748b',
                              fontSize: '11px',
                              lineHeight: '16px',
                              fontWeight: 'bold',
                              textAlign: 'center'
                            }}>
                              {isSelected ? '✓' : ''}
                            </span>
                          </td>
                        );
                      })}

                      {/* Opción No Aplica */}
                      <td 
                        onClick={() => handleScoreChange(item.num, 'NA')}
                        style={{ 
                          border: '1px solid #000000', 
                          textAlign: 'center', 
                          verticalAlign: 'middle',
                          cursor: 'pointer',
                          background: currentScore === 'NA' ? '#f1f5f9' : 'inherit'
                        }}
                        title={`Marcar criterio ${item.num} como No Aplica`}
                      >
                        <span style={{ 
                          display: 'inline-block',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: currentScore === 'NA' ? '2px solid #64748b' : '1.5px solid #94a3b8',
                          background: currentScore === 'NA' ? '#64748b' : 'transparent',
                          color: '#ffffff',
                          fontSize: '11px',
                          lineHeight: '16px',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {currentScore === 'NA' ? '✓' : ''}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 8. Sección: Referencias Bibliográficas */}
      <div className="wix-eval-section-block" style={{ marginBottom: '20px' }}>
        <div className="wix-eval-green-banner">
          • {redesignPage.referencesSection.title}
        </div>
        <div className="wix-eval-block-body">
          {redesignPage.referencesSection.items.map((ref, rIdx) => (
            <p key={rIdx} className="wix-ref-item" style={{ marginBottom: '12px' }}>
              <strong>{ref.author}</strong> <em>{ref.work}</em> {ref.publisher}{' '}
              {ref.url && (
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="wix-table-link"
                >
                  {ref.url}
                </a>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
