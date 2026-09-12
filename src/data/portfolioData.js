/**
 * ==============================================================================
 * DATOS EDITABLES DEL PORTAFOLIO ACADÉMICO
 * ==============================================================================
 * Puedes modificar libremente este archivo con la información real de tu entrega.
 * Todos los cambios realizados aquí se reflejarán automáticamente en el sitio.
 */

export const portfolioData = {
  // PÁGINA 1: INICIO / PORTADA
  cover: {
    activityTitle: "Evaluación de Recursos Educativos Digitales y Modelos de Calidad",
    moduleName: "Módulo: Evaluación de Recursos Educativos Digitales",
    programName: "Maestría en Recursos Digitales Aplicados a la Educación",
    institution: "Universidad de Santander (UDES)",
    campus: "Campus Virtual CVUDES",
    date: "Septiembre de 2026",
    authors: [
      {
        name: "Ángela María Gómez Pérez",
        role: "Maestrante / Autora",
        email: "angela.gomez@cvudes.edu.co"
      }
    ],
    teacher: {
      name: "Mg. Carlos Alberto Rodríguez Mora",
      role: "Docente Consultor / Tutor",
      title: "Magíster en Informática Educativa"
    },
    summaryText: "Este portafolio digital consolida el estudio riguroso de los modelos de calidad de software y materiales educativos, analizando criterios de selección, diagnóstico de recursos educativos digitales (RED), propuestas de rediseño instruccional y la aplicación práctica del instrumento de evaluación LORI."
  },

  // PÁGINA 2: MODELOS DE EVALUACIÓN Y RED
  modelsOverview: {
    title: "Modelos de Evaluación de Calidad y Recursos Educativos Digitales (RED)",
    subtitle: "Marco teórico y contextual sobre la importancia de evaluar la calidad técnica y pedagógica de los materiales didácticos digitales.",
    calloutText: "La evaluación sistemática de los RED permite a los docentes seleccionar, adaptar y diseñar experiencias educativas significativas que aseguren el logro de los objetivos de aprendizaje y la accesibilidad de todos los estudiantes.",
    dimensions: [
      {
        id: "pedagogica",
        name: "Dimensión Pedagógica y Didáctica",
        criteria: "Coherencia curricular, calidad de contenidos, interactividad formativa, adaptabilidad y retroalimentación.",
        impact: "Garantiza el aprendizaje significativo, la motivación intrínseca y la pertinencia según el nivel educativo."
      },
      {
        id: "tecnologica",
        name: "Dimensión Tecnológica y de Software",
        criteria: "Rendimiento, portabilidad, modularidad, estabilidad técnica y tiempo de respuesta.",
        impact: "Permite una navegación fluida sin caídas de servicio, asegurando la interoperabilidad con plataformas LMS."
      },
      {
        id: "accesibilidad",
        name: "Dimensión de Accesibilidad y Diseño Visual",
        criteria: "Cumplimiento de estándares WCAG 2.1, contraste de color, textos alternativos y navegación por teclado.",
        impact: "Garantiza el principio de educación inclusiva para estudiantes con diversidad funcional o limitaciones técnicas."
      }
    ]
  },

  // SUBPÁGINA 2.1: SELECCIONANDO MODELOS
  modelSelection: {
    selectedModelKey: "lori",
    justification: "Se seleccionó el modelo LORI (Learning Object Review Instrument) porque fue formulado específicamente para objetos y recursos educativos digitales. A diferencia de modelos puramente tecnológicos (McCall, Boehm, FURPS), LORI integra de forma equilibrada 9 criterios que cubren desde el rigor pedagógico y la motivación, hasta la accesibilidad y el cumplimiento de estándares abiertos.",
    models: {
      lori: {
        id: "lori",
        name: "Modelo LORI (Learning Object Review Instrument)",
        authors: "Nesbit, Belfer y Leacock (2007)",
        focus: "Evaluación cuantitativa y cualitativa específica para Recursos Educativos Digitales.",
        badge: "Modelo Seleccionado",
        advantages: [
          "Específicamente diseñado para objetos de aprendizaje y recursos educativos.",
          "Estructura clara de 9 criterios con escala de 1 a 5 estrellas.",
          "Evalúa tanto la dimensión pedagógica (objetivos, motivación, feedback) como técnica (accesibilidad, estándares).",
          "Facilita la comparación objetiva entre múltiples recursos."
        ],
        disadvantages: [
          "Requiere que el evaluador posea tanto criterio didáctico como familiaridad técnica con pautas WCAG."
        ]
      },
      mccall: {
        id: "mccall",
        name: "Modelo de McCall",
        authors: "McCall, Richards y Walters (1977)",
        focus: "Calidad de software general organizada en: Operación, Transición y Revisión.",
        badge: "Modelo Clásico de Software",
        advantages: [
          "Pionero en descomponer la calidad en Factores, Criterios y Métricas cuantificables.",
          "Gran rigor en factores técnicos como mantenibilidad, fiabilidad y corrección."
        ],
        disadvantages: [
          "Enfocado en la ingeniería de sistemas tradicional, no contempla variables pedagógicas ni didácticas de los RED."
        ]
      },
      coda: {
        id: "coda",
        name: "Modelo COdA",
        authors: "Fernández-Pampillón, Domínguez y De Armas (2012)",
        focus: "Herramienta de evaluación de calidad de Objetos de Aprendizaje orientada a docentes.",
        badge: "Modelo Didáctico",
        advantages: [
          "Diseñado para que profesores sin perfil informático avanzado puedan evaluar sus propios recursos.",
          "10 criterios didácticos y tecnológicos bien explicados."
        ],
        disadvantages: [
          "Menor difusión y estandarización internacional en comparación con el modelo LORI."
        ]
      },
      furps: {
        id: "furps",
        name: "Modelo FURPS",
        authors: "Robert Grady / Hewlett-Packard (1987)",
        focus: "Clasificación de requerimientos: Funcionalidad, Usabilidad, Confiabilidad, Desempeño y Soporte.",
        badge: "Modelo de Requerimientos",
        advantages: [
          "Distingue claramente entre requerimientos funcionales y atributos de calidad no funcionales.",
          "Fácil de auditar en fases de desarrollo de software."
        ],
        disadvantages: [
          "Omite aspectos clave del diseño instruccional, motivación y andamiaje pedagógico."
        ]
      }
    }
  },

  // SUBPÁGINA 2.2: RECURSOS EDUCATIVOS DIGITALES (RED)
  digitalResources: {
    concept: "Un Recurso Educativo Digital (RED) es todo tipo de material multimedia (texto, audio, video, interactivos, simuladores) diseñado con una intencionalidad pedagógica explícita, cuya estructura responde a objetivos de aprendizaje y se encuentra disponible a través de plataformas digitales bajo estándares abiertos.",
    characteristics: [
      {
        title: "Reusabilidad",
        desc: "Capacidad de ser utilizado múltiples veces en distintos contextos de aprendizaje y áreas del conocimiento."
      },
      {
        title: "Interoperabilidad",
        desc: "Facilidad de integración en diversas plataformas LMS (Moodle, Blackboard, Classroom) mediante estándares (SCORM, LTI)."
      },
      {
        title: "Accesibilidad",
        desc: "Diseño inclusivo que garantiza el acceso universal a estudiantes independientemente de sus capacidades físicas o de conectividad."
      },
      {
        title: "Durabilidad y Flexibilidad",
        desc: "Capacidad de mantenerse vigente en el tiempo y adaptarse a diferentes ritmos y estilos de aprendizaje."
      }
    ],
    items: [
      {
        id: 1,
        code: "RED-01",
        name: "Simulador Interactivo PhET: Ley de Faraday y Circuitos Eléctricos",
        repository: "Universidad de Colorado Boulder (PhET)",
        subject: "Ciencias Naturales / Física",
        targetLevel: "Educación Secundaria y Media (Grados 9° a 11°)",
        format: "HTML5 / Interactivo Web",
        url: "https://phet.colorado.edu/es/simulations/faradays-law",
        description: "Simulación interactiva basada en investigación que permite a los estudiantes manipular imanes, bobinas y voltímetros para descubrir las leyes del electromagnetismo mediante experimentación virtual segura y controlada."
      },
      {
        id: 2,
        code: "RED-02",
        name: "Objeto Virtual de Aprendizaje (OVA): Comprensión y Lectura Crítica",
        repository: "Portal Colombia Aprende (MEN)",
        subject: "Lengua Castellana y Humanidades",
        targetLevel: "Educación Básica Secundaria (Grado 8°)",
        format: "Paquete SCORM 1.2 / Web",
        url: "https://aprende.colombiaaprende.edu.co/",
        description: "Unidad didáctica digital estructurada con lecturas guiadas, identificación de premisas, argumentos falaces y ejercicios autoevaluativos con retroalimentación automática para el fortalecimiento de competencias comunicativas."
      },
      {
        id: 3,
        code: "RED-03",
        name: "Módulo Interactivo: Fundamentos de Pensamiento Computacional y Algoritmos",
        repository: "Code.org / CS Discoveries",
        subject: "Tecnología, Informática y Lógica",
        targetLevel: "Educación Básica y Media (Grados 6° a 10°)",
        format: "Plataforma Web Adaptativa",
        url: "https://code.org/",
        description: "Secuencia formativa gamificada con bloques visuales de programación tipo Blockly/Scratch, orientada al desarrollo de lógica algorítmica, resolución colaborativa de problemas y pensamiento estructurado."
      }
    ]
  },

  // PÁGINA 3: REDISEÑO
  redesign: {
    objective: "Formular propuestas concretas de mejora instruccional, didáctica y tecnológica para superar las limitaciones detectadas en los RED evaluados, potenciando su accesibilidad y efectividad de aprendizaje.",
    proposals: [
      {
        id: 1,
        redName: "RED 1: Simulador PhET - Faraday",
        dimension: "Pedagógica y Accesibilidad",
        findings: "El simulador carece de un sistema integrado de tutorial guiado inicial para estudiantes novatos y no ofrece navegación completa por teclado ni soporte para lectores de pantalla en las variables numéricas.",
        solution: "1. Integrar una capa de guía interactiva paso a paso con misiones graduales.\n2. Añadir descripciones de audio sonificadas (audiodescripción de voltaje) para estudiantes con discapacidad visual.\n3. Incorporar un cuaderno de notas digital exportable en PDF con las observaciones del estudiante."
      },
      {
        id: 2,
        redName: "RED 2: OVA Colombia Aprende - Lectura Crítica",
        dimension: "Tecnológica y Diseño Visual",
        findings: "La interfaz gráfica es estática y de ancho fijo (no responsiva), dificultando su uso en teléfonos móviles o tablets. Además, los textos de retroalimentación ante respuestas incorrectas son escuetos y no explican la causa del error.",
        solution: "1. Rediseñar la plantilla con arquitectura CSS responsive basada en diseño móvil primero.\n2. Reestructurar la retroalimentación formativa con explicaciones conceptuales y pistas progresivas.\n3. Incluir un sintetizador de voz (Text-to-Speech) para lectura auditiva de los textos largos."
      },
      {
        id: 3,
        redName: "RED 3: Módulo Code.org - Pensamiento Computacional",
        dimension: "Evaluación y Analítica del Aprendizaje",
        findings: "Aunque es altamente interactivo, el recurso no cuenta con un panel analítico detallado donde el docente pueda visualizar los patrones de error específicos y los tiempos de resolución por estudiante.",
        solution: "1. Crear una extensión de analítica del aprendizaje con gráficos de progreso y cuellos de botella.\n2. Añadir un banco de retos contextualizados a problemas del entorno local y ecológico del estudiante.\n3. Habilitar la opción de trabajo colaborativo en tiempo real en parejas (Pair Programming)."
      }
    ],
    comparisonTable: [
      {
        criterion: "Diseño Responsivo y Movilidad",
        before: "Vistas rígidas optimizadas únicamente para pantallas de escritorio a 1024x768.",
        after: "Diseño totalmente fluido compatible con smartphones, tablets y pizarras digitales interactivas.",
        impact: "Amplía el acceso al aprendizaje desde cualquier dispositivo móvil dentro y fuera del aula."
      },
      {
        criterion: "Retroalimentación Didáctica",
        before: "Mensajes binarios tipo 'Correcto / Incorrecto' sin orientación cognitiva.",
        after: "Retroalimentación formativa multinivel con pistas explicativas y refuerzo conceptual.",
        impact: "Disminuye la deserción en la actividad y fomenta la metacognición del estudiante."
      },
      {
        criterion: "Inclusión y Accesibilidad Universal",
        before: "Sin alternativas textuales en gráficos complejos ni soporte para lectores de pantalla.",
        after: "Cumplimiento estricto de WCAG 2.1 nivel AA (alto contraste, navegación por teclado y sonificación).",
        impact: "Garantiza una educación inclusiva efectiva para toda la diversidad del aula."
      },
      {
        criterion: "Seguimiento Docente y Analítica",
        before: "Calificación sumativa final sin trazabilidad del proceso.",
        after: "Dashboard con analítica de progreso, tiempos de respuesta y alertas de dificultad.",
        impact: "Permite al docente realizar intervenciones pedagógicas oportunas y personalizadas."
      }
    ]
  },

  // PÁGINA 4: APLICACIÓN DE MODELO DE EVALUACIÓN
  evaluation: {
    appliedModel: "Learning Object Review Instrument (LORI)",
    scoringScale: "Escala cuantitativa de 1.0 a 5.0 puntos (Mínimo: 1.0, Máximo: 5.0)",
    records: [
      {
        id: 1,
        redId: "RED-01",
        redName: "RED 1: Simulador PhET (Electromagnetismo)",
        finalScore: 4.42,
        level: "Nivel Sobresaliente / Calidad Alta",
        summary: "El simulador destaca extraordinariamente en motivación y calidad de contenidos, permitiendo una comprensión intuitiva de fenómenos físicos complejos. Sus áreas de oportunidad se concentran en la accesibilidad para invidentes y en la personalización de la retroalimentación.",
        metrics: [
          { name: "1. Calidad de los Contenidos", score: 4.9, percentage: 98, note: "Rigor conceptual exacto, libre de errores y respaldado por investigación científica." },
          { name: "2. Adecuación con los Objetivos de Aprendizaje", score: 4.7, percentage: 94, note: "Alineación clara con estándares de competencias en ciencias naturales." },
          { name: "3. Retroalimentación y Adaptación", score: 3.4, percentage: 68, note: "El recurso es abierto pero no emite sugerencias formativas cuando el estudiante se equivoca." },
          { name: "4. Motivación y Engagement", score: 4.9, percentage: 98, note: "Altamente interactivo y estimulante para la curiosidad científica." },
          { name: "5. Diseño y Presentación", score: 4.6, percentage: 92, note: "Gráficos limpios, controles intuitivos y estética clara sin elementos distractores." },
          { name: "6. Interacción y Usabilidad", score: 4.8, percentage: 96, note: "Manipulación de elementos en tiempo real con latencia prácticamente nula." },
          { name: "7. Accesibilidad", score: 3.3, percentage: 66, note: "Falta soporte nativo completo para navegación exclusiva mediante teclado." },
          { name: "8. Reusabilidad", score: 4.8, percentage: 96, note: "Se adapta fácilmente a múltiples grados y unidades curriculares de física." },
          { name: "9. Cumplimiento de Estándares", score: 4.4, percentage: 88, note: "HTML5 moderno ejecutable en cualquier navegador sin plugins adicionales." }
        ]
      },
      {
        id: 2,
        redId: "RED-02",
        redName: "RED 2: OVA Colombia Aprende (Lectura Crítica)",
        finalScore: 3.93,
        level: "Nivel Aceptable / Calidad Media-Alta",
        summary: "Presenta una excelente selección de textos y rigor pedagógico en sus actividades. No obstante, la experiencia de usuario se ve limitada por una maquetación no adaptativa a dispositivos móviles y retroalimentaciones poco detalladas.",
        metrics: [
          { name: "1. Calidad de los Contenidos", score: 4.6, percentage: 92, note: "Textos literarios y filosóficos de gran calidad y pertinencia formativa." },
          { name: "2. Adecuación con los Objetivos de Aprendizaje", score: 4.5, percentage: 90, note: "Objetivos didácticos explícitos al inicio de cada unidad." },
          { name: "3. Retroalimentación y Adaptación", score: 3.7, percentage: 74, note: "Calificación automática funcional pero con explicaciones breves." },
          { name: "4. Motivación y Engagement", score: 3.6, percentage: 72, note: "Estructura tradicional que podría enriquecerse con elementos de gamificación." },
          { name: "5. Diseño y Presentación", score: 3.5, percentage: 70, note: "Tipografía pequeña y elementos gráficos algo desactualizados." },
          { name: "6. Interacción y Usabilidad", score: 3.8, percentage: 76, note: "Navegación secuencial clara aunque rígida." },
          { name: "7. Accesibilidad", score: 3.1, percentage: 62, note: "Carencia de transcripciones de audio y contraste variable en algunos botones." },
          { name: "8. Reusabilidad", score: 4.3, percentage: 86, note: "Permite reutilizar fragmentos de texto en diversas asignaturas de humanidades." },
          { name: "9. Cumplimiento de Estándares", score: 4.3, percentage: 86, note: "Estructurado en paquete SCORM compatible con plataformas LMS." }
        ]
      },
      {
        id: 3,
        redId: "RED-03",
        redName: "RED 3: Módulo Code.org (Pensamiento Computacional)",
        finalScore: 4.64,
        level: "Nivel Excelente / Calidad Superior",
        summary: "Obtiene las puntuaciones más elevadas del estudio gracias a su arquitectura interactiva adaptativa, excelente retroalimentación guiada paso a paso y alto nivel de enganche para los estudiantes.",
        metrics: [
          { name: "1. Calidad de los Contenidos", score: 4.9, percentage: 98, note: "Progresión pedagógica impecable en lógica de algoritmos." },
          { name: "2. Adecuación con los Objetivos de Aprendizaje", score: 4.8, percentage: 96, note: "Desarrollo evidente de competencias digitales y pensamiento lógico." },
          { name: "3. Retroalimentación y Adaptación", score: 4.7, percentage: 94, note: "Detección precisa de bugs en el código del estudiante con pistas orientadoras." },
          { name: "4. Motivación y Engagement", score: 4.9, percentage: 98, note: "Logros, niveles progresivos y desafíos atractivos de alto impacto." },
          { name: "5. Diseño y Presentación", score: 4.8, percentage: 96, note: "Interfaz visual moderna, atractiva y coherente." },
          { name: "6. Interacción y Usabilidad", score: 4.7, percentage: 94, note: "Mecánica intuitiva de arrastrar y soltar bloques de programación." },
          { name: "7. Accesibilidad", score: 4.0, percentage: 80, note: "Buen contraste y opciones de tamaño de fuente; requiere soporte de lectores avanzados." },
          { name: "8. Reusabilidad", score: 4.5, percentage: 90, note: "Módulos independientes aplicables en diferentes niveles escolares." },
          { name: "9. Cumplimiento de Estándares", score: 4.5, percentage: 90, note: "Totalmente basado en estándares web abiertos." }
        ]
      }
    ]
  },

  // PÁGINA 5: REFERENCIAS (APA 7.ª EDICIÓN)
  references: [
    {
      id: 1,
      author: "Chinchilla, Z.",
      year: "2016",
      title: "Recursos Educativos Digitales: Conceptos y Criterios de Calidad.",
      source: "Centro de Educación Virtual CVUDES. Universidad de Santander.",
      category: "Recursos Educativos Digitales",
      link: "https://campusvirtual.udes.edu.co/"
    },
    {
      id: 2,
      author: "Nesbit, J., Belfer, K., & Leacock, T.",
      year: "2007",
      title: "Learning Object Review Instrument (LORI). Version 1.5.",
      source: "E-Learning Research and Development, Simon Fraser University.",
      category: "Modelos de Evaluación",
      link: "https://www.sfu.ca/"
    },
    {
      id: 3,
      author: "McCall, J. A., Richards, P. K., & Walters, G. F.",
      year: "1977",
      title: "Factors in Software Quality: Concept and definitions of software quality.",
      source: "National Technical Information Service. Vol. 1, No. NTIS AD/A-049-014.",
      category: "Calidad de Software",
      link: "https://apps.dtic.mil/"
    },
    {
      id: 4,
      author: "Ministerio de Educación Nacional (MEN).",
      year: "2012",
      title: "Recursos Educativos Digitales Abiertos (REDA).",
      source: "Guía práctica para la gestión y producción de contenidos educativos. Bogotá: MEN.",
      category: "Normatividad Educativa",
      link: "https://aprende.colombiaaprende.edu.co/"
    },
    {
      id: 5,
      author: "Fernández-Pampillón, A., Domínguez, E., & De Armas, I.",
      year: "2012",
      title: "Herramienta para la revisión de la Calidad de los Objetos de Aprendizaje (COdA). Guía para la producción y evaluación.",
      source: "Universidad Complutense de Madrid.",
      category: "Modelos de Evaluación",
      link: "https://eprints.ucm.es/"
    },
    {
      id: 6,
      author: "World Wide Web Consortium (W3C).",
      year: "2018",
      title: "Web Content Accessibility Guidelines (WCAG) 2.1.",
      source: "W3C Recommendation.",
      category: "Accesibilidad Web",
      link: "https://www.w3.org/TR/WCAG21/"
    }
  ]
};
