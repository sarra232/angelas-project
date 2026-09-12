/**
 * ==============================================================================
 * DATOS OFICIALES DEL PORTAFOLIO ACADÉMICO - EVALUACIÓN Y REDISEÑO DE RED
 * ==============================================================================
 * Estructurado a partir del documento oficial del portafolio.
 * Universidad de Santander (UDES) / Campus Virtual CVUDES
 */

export const portfolioData = {
  // PÁGINA 1: INICIO / PORTADA
  cover: {
    kicker: "Portafolio académico",
    activityTitle: "Evaluación y rediseño de un Recurso Educativo Digital",
    lead: "Un recorrido por los modelos de evaluación, los criterios de calidad y la aplicación de un instrumento para analizar y mejorar un RED.",
    university: "Universidad de Santander (UDES)",
    campus: "Campus Virtual CVUDES",
    logoUrl: "./images/udes-logo.png",
    logoSmUrl: "./images/udes-logo-sm.png",
    campusImgUrl: "./images/udes-campus.jpg",
    author: "Angela Castellanos de Salvador\nDaniel Castellanos de Salvador",
    authors: [
      "Angela Castellanos de Salvador",
      "Daniel Castellanos de Salvador"
    ],
    teacher: "Pedro Antonio Lopez Ramirez",
    program: "Maestría en Recursos Digitales Aplicados a la Educación",
    module: "Evaluación de Recursos Educativos Digitales"
  },

  // PÁGINA 2: MODELOS DE EVALUACIÓN Y RED
  modelsPage: {
    kicker: "Página 2",
    title: "Modelos de Evaluación y RED",
    lead: "Revisión de seis modelos identificados en la infografía suministrada y contrastados con fuentes web especializadas. La selección combina modelos pedagógicos, modelos específicos para objetos/materiales educativos digitales y modelos de calidad de software.",
    
    // SUBPÁGINA 2.1: SELECCIONANDO MODELOS (6 MODELOS OFICIALES)
    models: [
      {
        id: "lori",
        pill: "Modelo 1",
        name: "LORI · Learning Object Review Instrument",
        description: "Instrumento desarrollado para valorar objetos de aprendizaje multimedia desde dimensiones pedagógicas, de interacción y calidad técnica.",
        criterios: "Calidad de contenidos; alineación de objetivos; retroalimentación y adaptabilidad; motivación; diseño de presentación; usabilidad e interacción; accesibilidad; reusabilidad; cumplimiento de estándares.",
        metrica: "Escala de 1 a 5 por criterio, con posibilidad de comentarios y opción N/A cuando no aplica.",
        metodologia: "Revisión sistemática por uno o varios evaluadores, asignando puntuaciones y justificando las valoraciones.",
        instrumento: "Formulario/rúbrica LORI con los nueve criterios y espacio para observaciones."
      },
      {
        id: "reeves",
        pill: "Modelo 2",
        name: "Reeves · Dimensiones pedagógicas",
        description: "Modelo centrado en los aspectos del diseño y la implementación de la educación mediada por computador que afectan directamente al aprendizaje.",
        criterios: "14 dimensiones, entre ellas epistemología, filosofía pedagógica, psicología subyacente, orientación de objetivos, valor experiencial, rol docente, flexibilidad, valor de los errores, motivación, diferencias individuales, control del estudiante, actividad del usuario, aprendizaje cooperativo y sensibilidad cultural.",
        metrica: "Cada dimensión se representa como un continuo entre dos orientaciones opuestas; en aplicaciones del instrumento se ha utilizado una escala de 1 a 10.",
        metodologia: "Caracterizar y comparar el recurso o escenario educativo ubicándolo en cada continuo pedagógico; puede aplicarse mediante autoevaluación o evaluación de expertos.",
        instrumento: "Matriz/cuestionario de 14 dimensiones con continuos de valoración."
      },
      {
        id: "une71362",
        pill: "Modelo 3",
        name: "UNE 71362 · Calidad de materiales educativos digitales",
        description: "Norma española que proporciona un modelo para definir y evaluar cuantitativa y cualitativamente la calidad de los materiales educativos digitales.",
        criterios: "Descripción didáctica; calidad de contenidos; capacidad para generar aprendizaje; adaptabilidad; interactividad; motivación; formato y diseño; reusabilidad; portabilidad; robustez/estabilidad técnica; estructura del escenario; navegación; operabilidad; accesibilidad audiovisual y accesibilidad textual.",
        metrica: "Rúbrica con indicadores puntuables. La herramienta contempla perfiles de profesor y estudiante y permite obtener una valoración global.",
        metodologia: "Valoración sistemática de 15 criterios agrupados en eficacia didáctica, eficacia tecnológica y accesibilidad.",
        instrumento: "Rúbrica de evaluación de la Norma UNE 71362, adaptada al perfil del evaluador."
      },
      {
        id: "coda",
        pill: "Modelo 4",
        name: "COdA · Calidad de los Objetos de Aprendizaje",
        description: "Herramienta práctica para valorar y mejorar la efectividad didáctica y tecnológica de objetos de aprendizaje.",
        criterios: "Objetivos y coherencia didáctica; calidad de contenidos; reflexión, crítica e innovación; interactividad y adaptabilidad; motivación; formato y diseño; usabilidad; accesibilidad; reusabilidad; interoperabilidad.",
        metrica: "Escala Likert de 1 a 5: 1 muy deficiente, 2 deficiente, 3 aceptable, 4 bueno y 5 excelente. Puede utilizarse N/A.",
        metodologia: "Evaluación formativa durante la creación o sumativa después de la implementación, por autores, usuarios o evaluadores externos.",
        instrumento: "Formulario de 10 criterios acompañado de una guía de buenas prácticas."
      },
      {
        id: "furps",
        pill: "Modelo 5",
        name: "FURPS · Modelo de calidad de software",
        description: "Modelo de calidad de software propuesto por Hewlett-Packard y Robert Grady, útil para revisar atributos funcionales y no funcionales de un recurso digital.",
        criterios: "Functionality (funcionalidad), Usability (usabilidad), Reliability (fiabilidad), Performance (rendimiento) y Supportability (soportabilidad/mantenibilidad).",
        metrica: "No establece una única escala universal; se operacionaliza mediante requisitos, indicadores y métricas definidos para cada atributo.",
        metodologia: "Identificar requisitos del recurso, clasificarlos en las cinco categorías y verificar mediante pruebas o métricas si se cumplen.",
        instrumento: "Matriz o lista de comprobación de requisitos FURPS, con indicadores y evidencias por atributo."
      },
      {
        id: "galvis",
        pill: "Modelo 6",
        name: "Galvis · Evaluación de Materiales Educativos Computarizados",
        description: "Modelo de evaluación de materiales educativos computarizados orientado a producir información para la toma de decisiones sobre la calidad y viabilidad del recurso.",
        criterios: "Calidad educativa, calidad computacional y probabilidad de uso del recurso informático; contempla objetivos, contenidos, estrategias de instrucción, retroalimentación, interfaz, instrucciones, estructura de información y requerimientos.",
        metrica: "Valoración cualitativa con cinco opciones: excelente, bueno, regular, malo y no aplica.",
        metodologia: "Evaluación comprensiva mediante juicio de expertos y pruebas con estudiantes; puede incluir valoración por expertos en contenido y metodología y pruebas piloto/de campo.",
        instrumento: "Formularios de evaluación con variables, indicadores, criterios y espacios para observaciones y sugerencias."
      }
    ],

    quote: "Lectura comparativa: LORI, COdA y UNE 71362 son especialmente apropiados para valorar RED y objetos de aprendizaje; Reeves aporta una mirada pedagógica profunda; FURPS permite examinar la calidad funcional y técnica; y Galvis integra calidad educativa, computacional y viabilidad mediante juicio de expertos y participación de usuarios.",

    // SUBPÁGINA 2.2: RECURSOS EDUCATIVOS DIGITALES
    resourcesSection: {
      pill: "Recursos educativos digitales",
      title: "Relación entre modelos y selección de RED",
      description: "Para la selección y posterior evaluación de los RED de inglés, se priorizan modelos que permitan observar simultáneamente la calidad pedagógica y tecnológica. Por ello, LORI, COdA y UNE 71362 constituyen referencias centrales para el instrumento posterior, mientras que Reeves, FURPS y Galvis complementan el análisis.",
      tags: [
        "Calidad de contenidos",
        "Objetivos",
        "Actividades",
        "Interactividad",
        "Usabilidad",
        "Accesibilidad",
        "Reusabilidad",
        "Interoperabilidad",
        "Viabilidad"
      ],
      note: "Nota: la infografía adjunta identifica LORI, Reeves, UNE 71362, COdA, FURPS, McCall, Galvis y Boehm. Para esta versión se seleccionaron seis: LORI, Reeves, UNE 71362, COdA, FURPS y Galvis.",
      webSources: [
        {
          name: "INTEF · Evaluar recursos educativos según UNE 71362",
          url: "https://intef.es/formacion/educacion-digital-de-calidad/une-71362/"
        },
        {
          name: "Reeves · Evaluating What Really Matters in Computer-Based Education",
          url: "https://www.eduworks.com/Documents/Workshops/EdMedia1998/docs/reeves.html"
        },
        {
          name: "LORI · Learning Object Review Instrument",
          url: "https://laeremiddel.dk/wp-content/uploads/2012/07/Learning_Object_Review_Instrument_Evaluation_Criteria_LORI_1.4.pdf"
        }
      ]
    }
  },

  // PÁGINA 3: REDISEÑO
  redesignPage: {
    kicker: "Página 3",
    title: "Rediseño",
    lead: "El rediseño parte de los hallazgos de la evaluación y convierte las debilidades detectadas en oportunidades de mejora.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        desc: "Identificar fortalezas, debilidades, necesidades del usuario y barreras de acceso o comprensión."
      },
      {
        number: "02",
        title: "Priorización",
        desc: "Seleccionar los aspectos que tienen mayor impacto sobre el aprendizaje: contenido, actividades, navegación, retroalimentación y accesibilidad."
      },
      {
        number: "03",
        title: "Rediseño pedagógico",
        desc: "Alinear objetivos, contenidos, actividades y evaluación. Incorporar instrucciones claras y oportunidades de práctica."
      },
      {
        number: "04",
        title: "Rediseño visual y funcional",
        desc: "Mejorar jerarquía visual, legibilidad, navegación, integración de multimedia e interacción."
      },
      {
        number: "05",
        title: "Validación",
        desc: "Probar nuevamente el recurso con usuarios y recoger evidencias para realizar ajustes finales."
      }
    ],
    matrix: [
      {
        pill: "Antes",
        title: "Problema detectado",
        text: "[Describa aquí el aspecto que obtuvo una valoración baja.]"
      },
      {
        pill: "Cambio",
        title: "Acción de rediseño",
        text: "[Explique qué modificó: contenido, actividad, navegación, diseño, accesibilidad, etc.]"
      },
      {
        pill: "Después",
        title: "Resultado esperado",
        text: "[Explique cómo el cambio mejora la experiencia o el aprendizaje.]"
      }
    ]
  },

  // PÁGINA 4: APLICACIÓN DE MODELO DE EVALUACIÓN
  evaluationPage: {
    kicker: "Página 4",
    title: "Aplicación de modelo de evaluación",
    lead: "Se propone una valoración integrada basada en las dimensiones recurrentes identificadas en la revisión de modelos.",
    scaleNote: "Escala sugerida: 1 = Muy bajo · 2 = Bajo · 3 = Básico · 4 = Alto · 5 = Muy alto",
    scores: [
      { criterion: "1. Calidad y pertinencia de los contenidos", score: "__/5" },
      { criterion: "2. Coherencia entre objetivos, contenidos y actividades", score: "__/5" },
      { criterion: "3. Calidad de la evaluación y retroalimentación", score: "__/5" },
      { criterion: "4. Interactividad y participación del estudiante", score: "__/5" },
      { criterion: "5. Usabilidad y navegación", score: "__/5" },
      { criterion: "6. Diseño visual y comunicación", score: "__/5" },
      { criterion: "7. Accesibilidad y atención a la diversidad", score: "__/5" },
      { criterion: "8. Adecuación al contexto educativo", score: "__/5" },
      { criterion: "9. Viabilidad técnica", score: "__/5" }
    ],
    analysis: [
      {
        title: "Fortalezas",
        text: "[Registre los principales resultados positivos.]"
      },
      {
        title: "Aspectos por mejorar",
        text: "[Registre los criterios con menor valoración.]"
      },
      {
        title: "Decisión final",
        text: "[Mantener / ajustar / rediseñar / reemplazar el recurso, justificando la decisión.]"
      }
    ],
    quote: "Pregunta orientadora: ¿El RED es pertinente, usable, accesible y pedagógicamente eficaz para estos estudiantes, en este contexto y para estos objetivos de aprendizaje?"
  },

  // PÁGINA 5: REFERENCIAS
  referencesPage: {
    kicker: "Página 5",
    title: "Referencias",
    lead: "Fuentes utilizadas como fundamento para la revisión de modelos y la construcción de los criterios de evaluación.",
    citations: [
      {
        id: 1,
        text: "Cova, Á., Arrieta, X., & Aular de Durán, J. (2008). Revisión de modelos para evaluación de software educativos. Revista Electrónica de Estudios Telemáticos, 7(1), 93–114."
      },
      {
        id: 2,
        text: "Pinto, M., Gómez-Camarero, C., & Fernández-Ramos, A. (2012). Los recursos educativos electrónicos: perspectivas y herramientas de evaluación. Perspectivas em Ciência da Informação, 17(3), 82–99."
      },
      {
        id: 3,
        text: "Chinchilla, Z. (2016). Recursos Educativos Digitales. Universidad de Santander (CVUDES), Libro Electrónico Multimedial."
      }
    ],
    note: "Además, se recomienda incluir aquí las referencias específicas del RED seleccionado, su autor, plataforma, fecha de consulta y cualquier herramienta de IA utilizada durante el rediseño.",
    supportLinks: [
      {
        name: "Wix · Creador de portafolios",
        url: "https://www.wix.com/portfolio-website"
      },
      {
        name: "Wix · Plantillas para educación",
        url: "https://es.wix.com/website/templates/html/education"
      }
    ]
  }
};
