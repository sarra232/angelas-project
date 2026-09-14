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
        <p className="wix-ref-item">
          Estrada, M. S. (2021). <em>Recursos educativos digitales: Intencionalidad didáctica, pedagógica y diseño</em>. Dialnet. <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=8578131" target="_blank" rel="noopener noreferrer" className="wix-table-link">https://dialnet.unirioja.es/servlet/articulo?codigo=8578131</a>
        </p>
        <p className="wix-ref-item">
          OER Commons. (s.f.) <em>OER Commons: Open Educational Resources</em>. Institute for the Study of Knowledge Management in Education (ISKME). <a href="https://www.oercommons.org/oer" target="_blank" rel="noopener noreferrer" className="wix-table-link">https://www.oercommons.org/oer</a>
        </p>
        <p className="wix-ref-item">
          OpenAI. (2026) <em>ChatGPT</em>. <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="wix-table-link">https://chatgpt.com</a> (OpenAI fue utilizado como herramienta de corrección ortográfica y de estilo.)
        </p>
        <p className="wix-ref-item">
          PBS LearningMedia. (s.f.) <em>PBS LearningMedia</em>. Public Broadcasting Service (PBS). <a href="https://www.pbslearningmedia.org/" target="_blank" rel="noopener noreferrer" className="wix-table-link">https://www.pbslearningmedia.org/</a>
        </p>
        <p className="wix-ref-item">
          Salazar Estrada, M. (2021). <em>Recursos educativos digitales. Intencionalidad didáctica, pedagógica y diseño</em>. Luciérnaga Comunicación, 13(25), 87–98. <a href="https://doi.org/10.33571/revistaluciernaga.v13n25a6" target="_blank" rel="noopener noreferrer" className="wix-table-link">https://doi.org/10.33571/revistaluciernaga.v13n25a6</a>
        </p>
      </div>
    </div>
  );
}
