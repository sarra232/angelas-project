import React from 'react';

export default function Footer() {
  return (
    <footer className="wix-footer">
      <div className="wix-footer-container">
        {/* Bloque 1: Alineado a la izquierda con tipografía institucional */}
        <div className="wix-footer-col wix-footer-left">
          <h4 className="wix-footer-inst-title">UNIVERSIDAD DE SANTANDER — UDES</h4>
          <p className="wix-footer-campus">Campus Virtual CVUDES</p>
          <p className="wix-footer-program">
            Maestría en Recursos Digitales Aplicados a la Educación
          </p>
          <p className="wix-footer-module">
            Módulo: Evaluación de Recursos Educativos Digitales
          </p>
        </div>

        {/* Bloque 2: Centrado con tipografía de portada / académica */}
        <div className="wix-footer-col wix-footer-center">
          <div className="wix-footer-badge">PORTAFOLIO ACADÉMICO DIGITAL</div>
          <div className="wix-footer-authors-box">
            <span className="wix-footer-role-label">Autores:</span>
            <p className="wix-footer-author-name">Angela Castellanos de Salvador</p>
            <p className="wix-footer-author-name">Daniel Castellanos de Salvador</p>
          </div>
          <p className="wix-footer-tutor">
            <strong>Profesor Tutor:</strong> Pedro Antonio Lopez Ramirez
          </p>
        </div>

        {/* Bloque 3: Alineado a la derecha con datos de ubicación */}
        <div className="wix-footer-col wix-footer-right">
          <h5 className="wix-footer-city-title">Manizales, Caldas, Colombia</h5>
          <p className="wix-footer-year-tag">Vigencia Académica: 2026</p>
          <p className="wix-footer-detail">Entorno de Aprendizaje Virtual</p>
          <p className="wix-footer-method">Enfoque: Modelos de Evaluación y RED</p>
        </div>
      </div>

      {/* Franja Inferior Separada con Licencia */}
      <div className="wix-footer-bottom">
        <div className="wix-footer-bottom-inner">
          <p className="wix-footer-cc-text">
            © 2026     Licencia Creative Commons  Atribución-NoComercial 4.0 Internacional      (CC BY-NC 4.0)
            <p className="wix-footer-sede-text">
              · Manizales, Colombia
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
}
