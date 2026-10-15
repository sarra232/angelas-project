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
    program: "Especialización en Aplicación de TIC para la Enseñanza",
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

    // CUADRO COMPARATIVO: VENTAJAS Y DESVENTAJAS
    subpage21ComparisonTable: {
      title: "Cuadro Comparativo: Ventajas y Desventajas de los Modelos de Evaluación",
      columns: ["Modelo", "Ventajas", "Desventajas"],
      rows: [
        {
          model: "Modelo LORI",
          advantages: "Su principal fortaleza se basa en una evaluación que es cuantitativa, estructurada y estandarizada a través de algunos criterios, lo que facilita el trabajo colaborativo entre desarrolladores y educadores para medir aspectos clave como la reusabilidad, la accesibilidad y la motivación.",
          disadvantages: "Su mayor desventaja radica en la inflexibilidad de su formato estructurado y en que exige conocimientos informáticos relativamente avanzados por parte del evaluador para calificar aspectos complejos, además de que la opción de marcar criterios como \"No Aplica\" puede sesgar la calificación global final."
        },
        {
          model: "Modelo COdA",
          advantages: "Destaca por ser una herramienta sumamente accesible, ágil y práctica, específicamente diseñada para que docentes y estudiantes puedan evaluar la calidad pedagógica y tecnológica de los objetos de aprendizaje sin necesidad de contar con competencias informáticas avanzadas.",
          disadvantages: "Su limitación principal estriba en que su estructura simplificada favorece una mayor subjetividad en la interpretación de los criterios por parte de cada usuario, además de carecer de la profundidad técnica necesaria para analizar exhaustivamente la arquitectura del software."
        },
        {
          model: "Modelo Galvis",
          advantages: "Su mayor virtud es su enfoque multidimensional amplio, el cual abarca dimensiones pedagógicas, tecnológicas, comunicativas y organizativas que permiten valorar la verdadera pertinencia curricular del recurso y su adaptación a los objetivos de aprendizaje y al perfil del estudiante.",
          disadvantages: "Su desventaja más notoria es que cuenta con un instrumento extenso cuya aplicación requiere bastante tiempo y un análisis riguroso, sumado a que el resultado de la evaluación depende en gran medida de la mediación del docente y del contexto institucional en el que se aplique."
        }
      ]
    },

    // SUBPÁGINA 2.1: MODELOS DE EVALUACIÓN (TABLAS DETALLADAS)
    subpage21Models: [
      {
        id: "lori-1",
        mainTitle: "Modelo de Evaluación",
        modelName: "LORI",
        metadata: {
          redName: "Vocabulary Games, Daily Routine",
          grade: "6°",
          area: "Inglés",
          objectives: "Aprender vocabulario relacionado con actividades de la vida cotidiana",
          repositoryName: "LearnEnglish Teens",
          redUrl: "https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/daily-routine"
        },
        redDescription: "Es un Recurso Educativo Digital diseñado para facilitar y hacer más llamativo el aprendizaje del inglés como segunda lengua. Contiene herramientas para practicar todas las habilidades del idioma, y además se puede interactuar con personas de todo el mundo.",
        modelInfo: {
          title: "Modelo: LORI",
          description: "El modelo LORI, desarrollado por Nesbit y Leacock, se centra en la evaluación de objetos de aprendizaje digitales a partir de una perspectiva pedagógica, técnica y comunicativa. Este modelo proporciona un marco estructurado para revisar y valorar la calidad de un RED en entornos colaborativos, permitiendo mejorar su diseño instruccional. Se fundamenta en la revisión sistemática por expertos y usuarios finales, promoviendo una evaluación tanto cuantitativa como cualitativa."
        },
        criteria: [
          {
            num: 1,
            title: "Calidad de los contenidos",
            desc: "veracidad, exactitud presentación equilibrada de ideas, y nivel adecuado de detalle.",
            score: 5,
            isNA: false
          },
          {
            num: 2,
            title: "Adecuación de los objetivos de aprendizaje",
            desc: "coherencia entre los objetivos, actividades, evaluaciones y perfil del alumnado.",
            score: 5,
            isNA: false
          },
          {
            num: 3,
            title: "Feedback (retroalimentación) y adaptabilidad",
            desc: "contenido adaptativo o feedback dirigido en función de la respuesta de cada alumno/a y su estilo de aprendizaje.",
            score: 5,
            isNA: false
          },
          {
            num: 4,
            title: "Motivación",
            desc: "capacidad de motivar y generar interés en un grupo concreto de alumno/as.",
            score: 5,
            isNA: false
          },
          {
            num: 5,
            title: "Diseño y presentación",
            desc: "el diseño de la información audiovisual favorece el adecuado procesamiento de la información.",
            score: 5,
            isNA: false
          },
          {
            num: 6,
            title: "Usabilidad",
            desc: "facilidad de navegación, interfaz predictiva para el usuario y calidad de los recursos de ayuda de la interfaz.",
            score: 4,
            isNA: false
          },
          {
            num: 7,
            title: "Accesibilidad",
            desc: "el diseño de los controles y la presentación de la información está adaptada para personas en condición de discapacidad y dispositivos móviles.",
            score: 4,
            isNA: false
          },
          {
            num: 8,
            title: "Reusabilidad",
            desc: "capacidad para usarse en distintos escenarios de aprendizaje y con alumno/as de distintos bagajes.",
            score: 5,
            isNA: false
          },
          {
            num: 9,
            title: "Cumplimiento de estándares",
            desc: "adecuación a los estándares y especificaciones internacionales.",
            score: 5,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 43/45 Puntos",
          conclusions: [
            "El recurso Vocabulary Games, Daily Routine presenta una valoración excelente según los criterios del modelo LORI. Su principal fortaleza está en la calidad y pertinencia de los contenidos, ya que las actividades están directamente relacionadas con el aprendizaje del vocabulario y se encuentran organizadas de acuerdo con los niveles A1 y A2. También sobresale por la variedad de ejercicios y por las posibilidades que ofrece para el aprendizaje autónomo.",
            "La principal consideración corresponde a la usabilidad y a la necesidad de mediación docente. Debido a que LearnEnglish Teens contiene una gran cantidad de materiales, es conveniente que el docente seleccione previamente las actividades que se relacionen con los objetivos de aprendizaje de la clase. Esto coincide con la limitación identificada en el documento original, donde se señala que el recurso no constituye por sí mismo un curso completo con una secuencia obligatoria."
          ]
        }
      },
      {
        id: "lori-2",
        mainTitle: "MODELO DE EVALUACIÓN",
        modelName: "LORI 2",
        metadata: {
          redName: "Daily Routine",
          grade: "6°",
          area: "Inglés",
          objectives: "Comprender información específica de oraciones en inglés sobre hábitos y rutinas, identificando las acciones mencionadas y relacionándolas con su significado.",
          repositoryName: "READ Recursos Educativos Abiertos Digitales",
          redUrl: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2020/06/09/daily-routines-audios/"
        },
        redDescription: "El recurso Daily Routines (audios) está compuesto por grabaciones con oraciones en inglés relacionadas con las rutinas y las actividades cotidianas. Su propósito es apoyar el reconocimiento y la comprensión de expresiones que permiten describir acciones habituales, hablar de horarios y expresar la frecuencia de determinadas actividades.\n\nA diferencia de un recurso que califica automáticamente las respuestas, este material auditivo requiere que el docente diseñe actividades complementarias, como identificar acciones, relacionar oraciones con imágenes, completar espacios en blanco o producir oraciones propias. Su utilidad educativa depende, por tanto, de la calidad de las actividades que se desarrollen alrededor de los audios.",
        modelInfo: {
          title: "Modelo: LORI",
          description: "El modelo LORI, desarrollado por Nesbit y Leacock, se centra en la evaluación de objetos de aprendizaje digitales a partir de una perspectiva pedagógica, técnica y comunicativa. Este modelo proporciona un marco estructurado para revisar y valorar la calidad de un RED en entornos colaborativos, permitiendo mejorar su diseño instruccional. Se fundamenta en la revisión sistemática por expertos y usuarios finales, promoviendo una evaluación tanto cuantitativa como cualitativa."
        },
        criteria: [
          {
            num: 1,
            title: "Calidad de los contenidos",
            desc: "veracidad, exactitud presentación equilibrada de ideas, y nivel adecuado de detalle.",
            score: 4,
            isNA: false
          },
          {
            num: 2,
            title: "Adecuación de los objetivos de aprendizaje",
            desc: "coherencia entre los objetivos, actividades, evaluaciones y perfil de los estudiantes.",
            score: 3,
            isNA: false
          },
          {
            num: 3,
            title: "Feedback (retroalimentación) y adaptabilidad",
            desc: "No se especifica si cada respuesta incorrecta genera explicaciones individualizadas o si el contenido se adapta al desempeño del estudiante.",
            score: 3,
            isNA: false
          },
          {
            num: 4,
            title: "Motivación",
            desc: "Los audios permiten trabajar con situaciones cercanas a la vida cotidiana del estudiante. Sin embargo, la ficha no evidencia elementos adicionales de gamificación, recompensas o interacción que permitan asignar una puntuación más alta",
            score: 3,
            isNA: false
          },
          {
            num: 5,
            title: "Diseño y presentación",
            desc: "El formato auditivo es pertinente para practicar la comprensión oral. No obstante, la información disponible no permite valorar exhaustivamente su diseño visual.",
            score: 4,
            isNA: false
          },
          {
            num: 6,
            title: "Usabilidad",
            desc: "facilidad de navegación, interfaz predictiva para el usuario y calidad de los recursos de ayuda de la interfaz.",
            score: 4,
            isNA: false
          },
          {
            num: 7,
            title: "Accesibilidad",
            desc: "No se dispone de evidencia suficiente sobre transcripciones, subtítulos u otras alternativas que permitan acceder al contenido a estudiantes con diferentes necesidades.",
            score: 2,
            isNA: false
          },
          {
            num: 8,
            title: "Reusabilidad",
            desc: "capacidad para usarse en distintos escenarios de aprendizaje y con estudiantes de distintos bagajes.",
            score: 5,
            isNA: false
          },
          {
            num: 9,
            title: "Cumplimiento de estándares",
            desc: "Es posible relacionar la actividad con los Estándares Básicos de Competencias en Lenguas Extranjeras: Inglés. Sin embargo, el recurso no declara una alineación formal con un estándar específico, por lo que esta relación debe establecerla el docente.",
            score: 3,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 31/45 Puntos",
          conclusions: [
            "La evaluación mediante LORI muestra que Daily Routines (audios) tiene una fortaleza importante en su reusabilidad, puesto que puede utilizarse para desarrollar diferentes actividades de comprensión auditiva y producción lingüística. También ofrece ejemplos que permiten relacionar el aprendizaje del inglés con las experiencias cotidianas de los estudiantes. Asimismo, sería conveniente acompañar los audios con transcripciones, imágenes y guías de trabajo. Estas adaptaciones facilitarían el acceso al contenido y permitirían que los estudiantes trabajaran con distintos apoyos. Finalmente, la relación con los estándares y los DBA colombianos debe ser establecida por el docente al planear las actividades."
          ]
        }
      },
      {
        id: "coda-1",
        mainTitle: "MODELO DE EVALUACIÓN",
        modelName: "COdA 1",
        metadata: {
          redName: "Vocabulary Games, Daily Routine",
          grade: "6°",
          area: "Inglés",
          objectives: "Fomentar el aprendizaje de vocabulario relacionado con actividades de la vida cotidiana",
          repositoryName: "British Council LearnEnglish Teens",
          redUrl: "https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/daily-routine"
        },
        redDescription: "Recurso educativo digital orientado al aprendizaje del inglés y específicamente al desarrollo de vocabulario relacionado con las actividades de la rutina diaria. De acuerdo con la información presentada en el documento, el recurso ofrece materiales organizados según diferentes niveles de competencia lingüística y permite trabajar las habilidades de reading, listening, writing y speaking. Además, incorpora videos, audios, textos y ejercicios interactivos.",
        modelInfo: {
          title: "Modelo: COdA",
          description: "El modelo CODA se enfoca exclusivamente en la calidad de los objetivos de aprendizaje integrados en los RED. Evalúa la claridad, coherencia, pertinencia y alineación curricular de dichos objetivos, siendo útil para analizar su función dentro del diseño instruccional."
        },
        criteria: [
          {
            num: 1,
            title: "Objetivos y coherencia didáctica",
            desc: "",
            notes: "El contenido se relaciona directamente con el aprendizaje del vocabulario sobre la rutina diaria y puede ser utilizado con estudiantes de sexto grado. Existe correspondencia entre el contenido y las actividades propuestas.",
            score: 5,
            isNA: false
          },
          {
            num: 2,
            title: "Calidad de los contenidos",
            desc: "",
            notes: "Presenta contenidos específicos para el aprendizaje del inglés, organizados de acuerdo con niveles de competencia lingüística. La variedad de actividades permite abordar el vocabulario desde diferentes formas de interacción.",
            score: 5,
            isNA: false
          },
          {
            num: 3,
            title: "Capacidad de generar reflexión, críticas e innovación",
            desc: "",
            notes: "El recurso favorece principalmente la práctica y consolidación del vocabulario. Aunque permite interactuar con los contenidos, las actividades descritas están más orientadas a ejercitación que a procesos complejos de reflexión, análisis o innovación.",
            score: 3,
            isNA: false
          },
          {
            num: 4,
            title: "Interactividad y adaptabilidad",
            desc: "",
            notes: "Cuenta con ejercicios interactivos, recursos audiovisuales y actividades que permiten la participación activa del estudiante. Además, la organización por niveles facilita seleccionar materiales de acuerdo con las necesidades de aprendizaje.",
            score: 5,
            isNA: false
          },
          {
            num: 5,
            title: "Motivación",
            desc: "",
            notes: "El empleo de videos, audios, imágenes, textos y actividades interactivas hace que la práctica del inglés sea más dinámica. El contenido relacionado con las rutinas cotidianas también resulta cercano a los estudiantes.",
            score: 5,
            isNA: false
          },
          {
            num: 6,
            title: "Formato y diseño",
            desc: "",
            notes: "Combina diferentes formatos de presentación, como texto, audio, video y actividades interactivas. Esta variedad favorece una presentación dinámica de los contenidos.",
            score: 5,
            isNA: false
          },
          {
            num: 7,
            title: "Usabilidad",
            desc: "",
            notes: "El recurso puede ser utilizado de manera relativamente sencilla. Sin embargo, la gran cantidad de materiales disponibles en la plataforma hace necesaria la selección previa por parte del docente para orientar al estudiante hacia las actividades pertinentes.",
            score: 4,
            isNA: false
          },
          {
            num: 8,
            title: "Accesibilidad",
            desc: "",
            notes: "La variedad de formatos puede favorecer diferentes formas de acceso a la información. No obstante, la información disponible en el documento no permite comprobar completamente el cumplimiento de todos los criterios técnicos de accesibilidad para estudiantes con diferentes discapacidades.",
            score: 4,
            isNA: false
          },
          {
            num: 9,
            title: "Reusabilidad",
            desc: "",
            notes: "Puede utilizarse en diferentes momentos del proceso educativo: introducción de vocabulario, práctica, refuerzo, recuperación o trabajo autónomo. También puede incorporarse a diferentes secuencias didácticas.",
            score: 5,
            isNA: false
          },
          {
            num: 10,
            title: "Interoperabilidad",
            desc: "",
            notes: "Al tratarse de un recurso alojado en una plataforma web, puede incorporarse a diferentes contextos educativos digitales. Sin embargo, el documento señala que algunas actividades requieren conexión estable a Internet y dispositivos disponibles, lo cual puede limitar su utilización en determinados contextos.",
            score: 4,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 45/50 Puntos",
          conclusions: [
            "La aplicación del modelo COdA permite identificar que Vocabulary Games, Daily Routine presenta un alto nivel de calidad tanto en sus características didácticas como tecnológicas. Sus principales fortalezas están relacionadas con la calidad de los contenidos, la interactividad, la motivación, el diseño y la reusabilidad. La variedad de recursos permite que el docente utilice el RED de diferentes maneras dentro de una clase de inglés.",
            "Para desarrollar procesos de mayor complejidad cognitiva sería conveniente complementarlo con preguntas, situaciones comunicativas, producción oral o escrita y actividades diseñadas por el docente."
          ]
        }
      },
      {
        id: "coda-2",
        mainTitle: "MODELO DE EVALUACIÓN",
        modelName: "COdA 2",
        metadata: {
          redName: "Daily Routines",
          grade: "6°",
          area: "Inglés",
          objectives: "Comprender información específica de oraciones en inglés sobre hábitos y rutinas, identificando las acciones mencionadas y relacionándolas con su significado.",
          repositoryName: "READ Recursos Educativos Abiertos Digitales",
          redUrl: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2020/06/09/daily-routines-audios/"
        },
        redDescription: "El recurso Daily Routines (audios) está compuesto por grabaciones con oraciones en inglés relacionadas con las rutinas y las actividades cotidianas. Su propósito es apoyar el reconocimiento y la comprensión de expresiones que permiten describir acciones habituales, hablar de horarios y expresar la frecuencia de determinadas actividades.\n\nA diferencia de un recurso que califica automáticamente las respuestas, este material auditivo requiere que el docente diseñe actividades complementarias, como identificar acciones, relacionar oraciones con imágenes, completar espacios en blanco o producir oraciones propias. Su utilidad educativa depende, por tanto, de la calidad de las actividades que se desarrollen alrededor de los audios.",
        modelInfo: {
          title: "Modelo: COdA",
          description: "El modelo CODA se enfoca exclusivamente en la calidad de los objetivos de aprendizaje integrados en los RED. Evalúa la claridad, coherencia, pertinencia y alineación curricular de dichos objetivos, siendo útil para analizar su función dentro del diseño instruccional."
        },
        criteria: [
          {
            num: 1,
            title: "Objetivos y coherencia didáctica",
            desc: "",
            notes: "La actividad guarda relación con el aprendizaje de las rutinas diarias en inglés. Sin embargo, los objetivos específicos no aparecen formulados de manera explícita en la información suministrada.",
            score: 4,
            isNA: false
          },
          {
            num: 2,
            title: "Calidad de los contenidos",
            desc: "",
            notes: "El contenido se relaciona con situaciones cotidianas y vocabulario útil para estudiantes de grado sexto.",
            score: 4,
            isNA: false
          },
          {
            num: 3,
            title: "Capacidad de generar reflexión, críticas e innovación",
            desc: "",
            notes: "La actividad se concentra en seleccionar respuestas correctas. No hay evidencia suficiente de tareas que promuevan argumentación, resolución de problemas abiertos o creación de contenidos por parte del estudiante.",
            score: 2,
            isNA: false
          },
          {
            num: 4,
            title: "Interactividad y adaptabilidad",
            desc: "",
            notes: "El material se basa en grabaciones de audio y no presenta un sistema propio de interacción, calificación o adaptación automática.",
            score: 2,
            isNA: false
          },
          {
            num: 5,
            title: "Motivación",
            desc: "",
            notes: "No obstante, no se dispone de evidencia suficiente sobre mecanismos específicos de motivación incorporados en el recurso.",
            score: 3,
            isNA: false
          },
          {
            num: 6,
            title: "Formato y diseño",
            desc: "",
            notes: "El formato de audio es pertinente para practicar la comprensión oral.",
            score: 5,
            isNA: false
          },
          {
            num: 7,
            title: "Usabilidad",
            desc: "",
            notes: "La mecánica es sencilla. Para utilizarlo en línea, se requiere un dispositivo compatible y acceso a Internet.",
            score: 4,
            isNA: false
          },
          {
            num: 8,
            title: "Accesibilidad",
            desc: "",
            notes: "No se cuenta con información suficiente para confirmar el cumplimiento de criterios específicos de accesibilidad.",
            score: 3,
            isNA: false
          },
          {
            num: 9,
            title: "Reusabilidad",
            desc: "",
            notes: "Puede utilizarse en diferentes sesiones como actividad diagnóstica, práctica, refuerzo o evaluación formativa, y puede integrarse en secuencias didácticas distintas.",
            score: 5,
            isNA: false
          },
          {
            num: 10,
            title: "Interoperabilidad",
            desc: "",
            notes: "El recurso está disponible mediante una plataforma web. No obstante, la información del documento no permite comprobar su compatibilidad con diferentes sistemas de gestión del aprendizaje ni el cumplimiento de estándares técnicos de interoperabilidad.",
            score: 3,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 35/50 Puntos",
          conclusions: [
            "La aplicación de COdA permite reconocer que Daily Routines (audios) es un recurso que puede contribuir al aprendizaje del inglés, especialmente en el desarrollo de la comprensión auditiva y la familiarización con expresiones relacionadas con actividades cotidianas.",
            "Su mayor fortaleza corresponde a la reusabilidad, debido a que los audios pueden integrarse en diversas actividades sin limitarse a una única forma de enseñanza. Además, el recurso permite diseñar ejercicios que conecten la comprensión auditiva con la expresión oral y escrita.",
            "Para fortalecerlo, se propone acompañar los audios con una guía que incluya preguntas de comprensión, imágenes, ejercicios de completar oraciones y una actividad final en la que los estudiantes describan cinco actividades de su propia rutina diaria. También sería conveniente disponer de transcripciones y verificar las condiciones de descarga y reproducción, especialmente para su uso en instituciones educativas rurales."
          ]
        }
      },
      {
        id: "galvis-1",
        mainTitle: "INSTRUMENTO DE EVALUACIÓN MODELO GALVIS (2000)",
        subTitle: "UDES 2025",
        modelName: "Modelo Galvis 1",
        metadata: {
          redName: "Vocabulary Games, Daily Routine",
          grade: "6°",
          area: "Inglés",
          objectives: "Aprender y reforzar vocabulario relacionado con actividades de la vida cotidiana.",
          repositoryName: "LearnEnglish Teens",
          redUrl: "https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/daily-routine"
        },
        redDescription: "Recurso educativo digital orientado al aprendizaje del inglés y específicamente al desarrollo de vocabulario relacionado con las actividades de la rutina diaria. De acuerdo con la información presentada en el documento, el recurso ofrece materiales organizados según diferentes niveles de competencia lingüística y permite trabajar las habilidades de reading, listening, writing y speaking. Además, incorpora videos, audios, textos y ejercicios interactivos.",
        modelInfo: {
          title: "Modelo: Modelo Galvis (2000)",
          description: "Este modelo, propuesto por Á. Galvis, busca valorar la calidad integral de los recursos digitales educativos dentro de su contexto sociocultural. Se enfoca en tres dimensiones: técnica, pedagógica y comunicativa. Propone una evaluación con enfoque formativo y contextual, lo que permite analizar cómo el RED responde a las necesidades reales del entorno escolar latinoamericano."
        },
        criteria: [
          {
            num: 1,
            dimensionHeader: "Dimensión Pedagógica",
            title: "Claridad y coherencia de los objetivos pedagógicos",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Los objetivos implícitos están bien alineados con el nivel A1-A2 del MCER y el desarrollo del vocabulario de rutinas diarias.",
            score: 5,
            isNA: false
          },
          {
            num: 2,
            title: "Relación entre actividades, contenidos y evaluación",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Alta coherencia; las actividades de emparejamiento, completado y reordenamiento evalúan directamente el contenido presentado.",
            score: 5,
            isNA: false
          },
          {
            num: 3,
            title: "Nivel de adecuación al perfil y nivel del estudiante",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Muy adecuado para estudiantes de grado 6° por su enfoque visual, auditivo y grado de dificultad A1-A2.",
            score: 5,
            isNA: false
          },
          {
            num: 4,
            title: "Estímulo a la reflexión, pensamiento crítico y creatividad",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Las actividades son mayoritariamente de ejercitación, práctica mecánica y memorización de vocabulario.",
            score: 3,
            isNA: false
          },
          {
            num: 5,
            dimensionHeader: "Dimensión Tecnológica",
            title: "Funcionalidad y estabilidad técnica",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "La plataforma del British Council ofrece excelente estabilidad y tiempo de respuesta.",
            score: 5,
            isNA: false
          },
          {
            num: 6,
            title: "Compatibilidad con diferentes dispositivos y navegadores",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Funciona bien en diversos navegadores, aunque requiere conexión estable a Internet para audios e interactividad.",
            score: 4,
            isNA: false
          },
          {
            num: 7,
            title: "Calidad del diseño gráfico, multimedia y audiovisual",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Diseño limpio, atractivo, con imágenes claras, audio nítido y botones interactivos intuitivos.",
            score: 5,
            isNA: false
          },
          {
            num: 8,
            dimensionHeader: "Dimensión Comunicativa",
            title: "Claridad en el lenguaje, uso adecuado del vocabulario",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Lenguaje accesible, graduado y preciso para el nivel básico de inglés.",
            score: 5,
            isNA: false
          },
          {
            num: 9,
            title: "Diseño comunicativo orientado al aprendizaje significativo",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Las situaciones de \"rutina diaria\" son cercanas al contexto cotidiano del estudiante, favoreciendo la apropiación.",
            score: 4,
            isNA: false
          },
          {
            num: 10,
            title: "Coherencia entre los medios utilizados y los objetivos de aprendizaje",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Integración efectiva de texto, imágenes y audio para reforzar el aprendizaje multimodal.",
            score: 5,
            isNA: false
          },
          {
            num: 11,
            dimensionHeader: "Dimensión Organizativa",
            title: "Facilidad de navegación y estructura del recurso",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Estructura intuitiva con menús desplegables claros",
            score: 5,
            isNA: false
          },
          {
            num: 12,
            title: "Accesibilidad y disponibilidad del recurso",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Es de libre acceso web, aunque requiere conectividad a Internet constante.",
            score: 4,
            isNA: false
          },
          {
            num: 13,
            title: "Posibilidad de uso autónomo y reutilización en otros contextos",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Permite el trabajo autónomo del estudiante y la descarga de material complementario en PDF",
            score: 5,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 61/65 Puntos",
          conclusions: [
            "Es un recurso muy completo, accesible e intuitivo que facilita el aprendizaje autónomo de vocabulario en inglés, altamente adaptable al currículo de grado 6°."
          ]
        }
      },
      {
        id: "galvis-2",
        mainTitle: "INSTRUMENTO DE EVALUACIÓN MODELO GALVIS",
        modelName: "Modelo Galvis 2",
        metadata: {
          redName: "Daily Routines",
          grade: "6°",
          area: "Inglés",
          objectives: "Comprender información específica de oraciones en inglés sobre hábitos y rutinas, identificando las acciones mencionadas y relacionándolas con su significado.",
          repositoryName: "READ Recursos Educativos Abiertos Digitales",
          redUrl: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2020/06/09/daily-routines-audios/"
        },
        redDescription: "El recurso Daily Routines (audios) está compuesto por grabaciones con oraciones en inglés relacionadas con las rutinas y las actividades cotidianas. Su propósito es apoyar el reconocimiento y la comprensión de expresiones que permiten describir acciones habituales, hablar de horarios y expresar la frecuencia de determinadas actividades.\n\nA diferencia de un recurso que califica automáticamente las respuestas, este material auditivo requiere que el docente diseñe actividades complementarias, como identificar acciones, relacionar oraciones con imágenes, completar espacios en blanco o producir oraciones propias. Su utilidad educativa depende, por tanto, de la calidad de las actividades que se desarrollen alrededor de los audios.",
        modelInfo: {
          title: "Modelo: Modelo Galvis (2000)",
          description: "Este modelo, propuesto por Á. Galvis, busca valorar la calidad integral de los recursos digitales educativos dentro de su contexto sociocultural. Se enfoca en tres dimensiones: técnica, pedagógica y comunicativa. Propone una evaluación con enfoque formativo y contextual, lo que permite analizar cómo el RED responde a las necesidades reales del entorno escolar latinoamericano."
        },
        criteria: [
          {
            num: 1,
            dimensionHeader: "Dimensión Pedagógica",
            title: "Claridad y coherencia de los objetivos pedagógicos",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Definidos explícitamente en la ficha técnica y alineados con estándares educativos",
            score: 5,
            isNA: false
          },
          {
            num: 2,
            title: "Relación entre actividades, contenidos y evaluación",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Contextualiza bien el tema, pero requiere que el docente complemente con actividades de evaluación propia.",
            score: 4,
            isNA: false
          },
          {
            num: 3,
            title: "Nivel de adecuación al perfil y nivel del estudiante",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Adecuado para grado 6°, aunque puede requerir mediación del docente.",
            score: 4,
            isNA: false
          },
          {
            num: 4,
            title: "Estímulo a la reflexión, pensamiento crítico y creatividad",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "El recurso se centra en la explicación gramatical puntual; la creatividad depende de cómo el docente extienda la actividad.",
            score: 3,
            isNA: false
          },
          {
            num: 5,
            dimensionHeader: "Dimensión Tecnológica",
            title: "Funcionalidad y estabilidad técnica",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Excelente funcionamiento de los controles del reproductor.",
            score: 5,
            isNA: false
          },
          {
            num: 6,
            title: "Compatibilidad con diferentes dispositivos y navegadores",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Alta compatibilidad en la plataforma web, pero dependiente de un ancho de banda estable para la reproducción de video en HD.",
            score: 4,
            isNA: false
          },
          {
            num: 7,
            title: "Calidad del diseño gráfico, multimedia y audiovisual",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Excelente calidad de producción audiovisual, edición dinámica e imágenes atractivas para los estudiantes.",
            score: 5,
            isNA: false
          },
          {
            num: 8,
            dimensionHeader: "Dimensión Comunicativa",
            title: "Claridad en el lenguaje, uso adecuado del vocabulario",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Lenguaje claro y bien articulado",
            score: 5,
            isNA: false
          },
          {
            num: 9,
            title: "Diseño comunicativo orientado al aprendizaje significativo",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "El uso de situaciones cotidianas facilita la comprensión, aunque algunos referentes son muy anglosajones.",
            score: 4,
            isNA: false
          },
          {
            num: 10,
            title: "Coherencia entre los medios utilizados y los objetivos de aprendizaje",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "El recurso audiovisual resulta idóneo para ilustrar claramente el vocabulario necesario.",
            score: 5,
            isNA: false
          },
          {
            num: 11,
            dimensionHeader: "Dimensión Organizativa",
            title: "Facilidad de navegación y estructura del recurso",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Estructura intuitiva con menús desplegables claros",
            score: 5,
            isNA: false
          },
          {
            num: 12,
            title: "Accesibilidad y disponibilidad del recurso",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Acceso gratuito en línea; requiere conexión constante y puede presentar restricciones menores en algunos países.",
            score: 4,
            isNA: false
          },
          {
            num: 13,
            title: "Posibilidad de uso autónomo y reutilización en otros contextos",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "Sirve como complemento dentro de una secuencia didáctica, pero no reemplaza la guía docente para la evaluación",
            score: 4,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 57/65 Puntos",
          conclusions: [
            "La valoración muestra que Daily Routines (audios) presenta una pertinencia educativa favorable para trabajar la comprensión auditiva en inglés. Sin embargo, su aplicación exige mediación docente, preparación de actividades y verificación de las condiciones técnicas.",
            "La viabilidad depende de las condiciones tecnológicas de la institución. En un contexto rural, el docente debe prever alternativas para quienes no dispongan de conexión o dispositivos, por ejemplo, proyectar la actividad para resolverla en grupo o preparar una versión impresa cuando la plataforma lo permita.",
            "En cuanto a la interactividad, el recurso ofrece una participación sencilla, pero limitada. Por ello, se recomienda complementarlo con actividades que permitan a los estudiantes construir oraciones, organizar una rutina diaria y describir oralmente sus actividades."
          ]
        }
      }
    ],

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
      redItems: [
        {
          id: "red-1",
          titleHeader: "RECURSO EDUCATIVO DIGITAL 1",
          redName: "Vocabulary Games, Daily Routine",
          knowledgeArea: "Lengua Extranjera: Inglés.",
          applicationLevel: "6°",
          authorData: "El recurso es desarrollado y administrado por el British Council, organización internacional especializada en educación y enseñanza del inglés.",
          repositoryUrl: "https://learnenglishteens.britishcouncil.org/",
          redUrl: "https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/daily-routine",
          description: "Es un Recurso Educativo Digital diseñado para facilitar y hacer más llamativo el aprendizaje del inglés como segunda lengua. Contiene herramientas para practicar todas las habilidades del idioma, y además se puede interactuar con personas de todo el mundo.",
          featuresAndUses: "Entre sus principales características se pueden mencionar la presentación de recursos organizados de acuerdo con diferentes niveles de competencia lingüística, su capacidad para trabajar las cuatro habilidades del idioma (reading, listening, writing y speaking.), la calidad y cantidad de actividades de vocabulario y gramática que a su vez cuentan con videos, audios, textos y ejercicios interactivos. Algunas actividades proporcionan retroalimentación inmediata y permite que los estudiantes desarrollen actividades de manera autónoma.",
          limitations: "La plataforma ofrece una gran cantidad de materiales, pero no constituye un curso completo con una secuencia obligatoria. Por tal motivo, el docente debe realizar previamente una selección de las actividades que realmente respondan a sus objetivos de aprendizaje. El recurso puede apoyar el aprendizaje autónomo, pero no reemplaza el acompañamiento y la retroalimentación que proporciona el docente. También se debe tener en cuenta que algunas actividades requieren una conexión estable a Internet y dispositivos disponibles para los estudiantes, aspecto que puede representar una dificultad en algunos contextos educativos.",
          standardsVerification: "Este RED presenta una organización basada en los niveles del Marco Común Europeo de Referencia para las Lenguas (MCER). Esto permite relacionar las actividades con diferentes niveles de dominio del idioma y seleccionar materiales de acuerdo con las competencias que se espera desarrollar. Además, los contenidos están diseñados específicamente para el aprendizaje del inglés como lengua extranjera. Sin embargo, para utilizarlo en el contexto educativo colombiano es necesario realizar una articulación con los Estándares Básicos de Competencias en Lenguas Extranjeras, los Derechos Básicos de Aprendizaje (DBA) y los objetivos establecidos en la planeación institucional. De esta manera, el recurso puede integrarse de forma más pertinente al currículo.",
          screenshotUrl: "./images/red1-british-council.png",
          screenshotAlt: "Captura de pantalla RED 1: Daily Routine - British Council LearnEnglish Teens"
        },
        {
          id: "red-2",
          titleHeader: "RECURSO EDUCATIVO DIGITAL 2",
          redName: "Daily Routines",
          knowledgeArea: "Lengua Extranjera: Inglés.",
          applicationLevel: "6°",
          authorData: "De acuerdo con la ficha técnica del recurso, los datos son los siguientes:\n\nAutoría institucional: Cultura y Deportes del Gobierno de Canarias, UCTICEE y Consejería de Educación, Universidades.\n\nEntidad editora: Consejería de Educación, Formación Profesional, Actividad Física y Deportes del Gobierno de Canarias.",
          repositoryUrl: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/",
          redUrl: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2020/06/09/daily-routines-audios/",
          description: "Daily Routines (audios) es un recurso educativo digital basado en grabaciones de audio con oraciones de ejemplo en inglés relacionadas con las rutinas y actividades cotidianas. Su finalidad es ayudar a los estudiantes a reconocer y comprender expresiones que pueden utilizar para describir acciones habituales, hablar de horarios y expresar la frecuencia con la que realizan determinadas actividades. A diferencia de una actividad interactiva que califica automáticamente las respuestas, este RED ofrece material auditivo que el docente puede integrar en diferentes propuestas didácticas. Por ello, su valor educativo depende, en buena medida, de las actividades que se diseñen alrededor de los audios.",
          featuresAndUses: "En el aula, el recurso puede aprovecharse de varias maneras. Por ejemplo, el docente puede reproducir un audio y pedir a los estudiantes que identifiquen las actividades mencionadas, relacionen cada oración con una imagen o completen los espacios en blanco de una guía. También puede utilizarlo para practicar la pronunciación mediante la repetición de frases.\n\nOtra posibilidad consiste en pedir a los estudiantes que escriban cinco oraciones sobre sus propias rutinas diarias, tomando como modelo las expresiones escuchadas. De esta manera, pasan de reconocer información auditiva a utilizar el vocabulario en situaciones cercanas a su vida cotidiana.\n\nEn instituciones educativas rurales, el recurso puede ser útil para preparar actividades auditivas con anticipación y distribuirlas en guías de trabajo. No obstante, es necesario comprobar las condiciones de descarga y reproducción para determinar si puede utilizarse sin conexión a internet.",
          limitations: "Una de las principales limitaciones es que para realizar la actividad en línea se necesita conexión a internet y un dispositivo compatible. Esto puede dificultar su uso permanente en instituciones educativas rurales. Otra dificultad es la evaluación automática, pues la actividad no presenta un sistema propio de calificación o retroalimentación inmediata para verificar las respuestas de los estudiantes. Además, Es necesario que el docente prepare instrucciones, preguntas y ejercicios que orienten la comprensión, pues el material por sí solo no constituye una secuencia didáctica completa, lo que genera dependencia del acompañamiento docente.",
          standardsVerification: "El recurso puede relacionarse con los Estándares Básicos de Competencias en Lenguas Extranjeras: Inglés, del Ministerio de Educación Nacional de Colombia. Esta relación se establece a partir de las habilidades y contenidos que permite trabajar; no significa que el recurso declare oficialmente su alineación con los estándares colombianos.",
          screenshotUrl: "./images/red2-daily-routines.png",
          screenshotAlt: "Captura de pantalla RED 2: Daily Routines (audios) - Consejería de Educación del Gobierno de Canarias"
        }
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

  // PÁGINA 3: REDISEÑO - MODELO PROPIO PERT-RED
  redesignPage: {
    kicker: "Modelo Propio",
    subHeader: "Título",
    title: "PERT-RED: Pertinencia Educativa, Recursos y Tecnología para la evaluación de Recursos Educativos Digitales.",
    purpose: "El modelo busca evaluar la calidad de los RED desde una perspectiva pedagógica, tecnológica y contextual, para determinar si son pertinentes para los objetivos de aprendizaje, identificar sus fortalezas y limitaciones, proponer mejoras y comprobar su utilidad después de implementarlos en el aula.",
    
    referents: {
      title: "Referentes",
      intro: "Para diseñar PERT-RED se toman como referencia tres modelos de evaluación, cada uno con aportes que permiten construir una propuesta más ajustada a las necesidades de la práctica docente. A estos referentes se suma la necesidad de articular los recursos con los objetivos de aprendizaje y los referentes curriculares colombianos. En el área de inglés, esto implica considerar los Estándares Básicos de Competencias en Lenguas Extranjeras y los demás documentos curriculares pertinentes.",
      items: [
        {
          model: "Modelo LORI (Learning Object Review Instrument).",
          contributions: "Aporta una estructura para valorar aspectos como la calidad del contenido, la relación con los objetivos de aprendizaje, la motivación, el diseño de la presentación, la usabilidad, la accesibilidad y la posibilidad de reutilizar los recursos. Su principal aporte es ofrecer criterios claros que facilitan una revisión organizada del material educativo."
        },
        {
          model: "Modelo COdA (Calidad de los Objetos de Aprendizaje).",
          contributions: "Se toma como referente porque integra criterios didácticos y tecnológicos. Considera aspectos como la coherencia entre objetivos y contenidos, la capacidad de generar reflexión, la interactividad, el diseño, la accesibilidad y la interoperabilidad. Esta combinación permite analizar tanto el valor pedagógico del recurso como las condiciones técnicas que facilitan su utilización."
        },
        {
          model: "Modelo Galvis.",
          contributions: "Se incorpora por su enfoque en la calidad educativa, la calidad computacional y la viabilidad de uso. Este planteamiento permite reconocer que un recurso puede tener buenos contenidos y un diseño adecuado, pero no necesariamente ser viable para todos los grupos de estudiantes o contextos institucionales."
        }
      ]
    },

    problematic: {
      title: "Problemática que motiva el Rediseño del Modelo",
      paragraphs: [
        "En la práctica docente, la selección de un recurso educativo digital generalmente es influenciada por factores como su apariencia, la facilidad para encontrarlo o la posibilidad de realizar actividades interactivas. Sin embargo, estos aspectos no garantizan que el recurso responda a los objetivos de aprendizaje ni a las necesidades particulares de los estudiantes.",
        "Esta situación representa un reto en las instituciones educativas rurales, donde pueden presentarse dificultades de conectividad, disponibilidad limitada de dispositivos, diferencias importantes en los niveles de aprendizaje y poco tiempo para explorar detalladamente cada recurso antes de utilizarlo en clase.",
        "En el caso de la enseñanza del inglés, por ejemplo, una plataforma puede ofrecer videos y ejercicios atractivos, pero sus instrucciones pueden resultar demasiado complejas, las actividades pueden superar el nivel lingüístico de los estudiantes o su funcionamiento puede depender de una conexión estable a Internet.",
        "Aunque los modelos existentes ofrecen criterios valiosos para evaluar los RED, desde la perspectiva de esta propuesta es necesario organizarlos en un instrumento que permita al docente realizar una valoración práctica, sin descuidar aspectos pedagógicos y tecnológicos.",
        "Por esta razón, se plantea el modelo PERT-RED, que busca responder al interrogante, ¿qué tan pertinente, accesible, útil y viable es un recurso educativo digital para favorecer el aprendizaje de los estudiantes en las condiciones reales de mi institución educativa?",
        "El propósito no es reemplazar los modelos existentes, sino aprovechar sus aportes y complementarlos con criterios relacionados con el contexto, la inclusión y la posibilidad real de implementar los recursos en el aula."
      ]
    },

    criteriaSection: {
      title: "Criterios de Evaluación",
      intro: "Este modelo propone ocho criterios de evaluación, organizados para que se puedan revisar los aspectos fundamentales de un recurso sin tener que aplicar un procedimiento demasiado extenso. Estos criterios permiten valorar el recurso de manera integral, sin perder de vista que su calidad depende tanto de sus características como de la forma en que se utiliza pedagógicamente.",
      items: [
        {
          num: 1,
          name: "Pertinencia Pedagógica y Curricular",
          description: "Evalúa si el recurso tiene objetivos claros, presenta contenidos adecuados y contribuye al desarrollo de los aprendizajes esperados. También considera su relación con el plan de área, los DBA y los estándares aplicables."
        },
        {
          num: 2,
          name: "Calidad y Claridad de los Contenidos",
          description: "Revisa la exactitud, actualidad, organización y claridad de la información, así como su adecuación a la edad, los conocimientos previos y el nivel de los estudiantes."
        },
        {
          num: 3,
          name: "Usabilidad e Interactividad",
          description: "Considera la facilidad de navegación, la claridad de las instrucciones, el funcionamiento de los enlaces y las actividades, y la posibilidad de que el estudiante interactúe con el contenido sin dificultades innecesarias."
        },
        {
          num: 4,
          name: "Accesibilidad e Inclusión",
          description: "Examina si el recurso ofrece alternativas para diferentes necesidades de aprendizaje, como subtítulos, transcripciones, textos legibles, instrucciones claras y opciones de interacción accesibles."
        },
        {
          num: 5,
          name: "Viabilidad Tecnológica y Conectividad",
          description: "Valora si el recurso funciona en los dispositivos disponibles y si requiere una conexión estable, consume muchos datos o permite descargar materiales para trabajar sin conexión."
        },
        {
          num: 6,
          name: "Motivación y Contextualización",
          description: "Analiza si el recurso despierta el interés de los estudiantes, propone actividades significativas y establece relaciones con sus experiencias, entorno y realidad sociocultural."
        },
        {
          num: 7,
          name: "Evaluación y Retroalimentación",
          description: "Revisa si incluye ejercicios de comprobación, respuestas orientadoras, retroalimentación útil o posibilidades para que el docente identifique avances y dificultades."
        },
        {
          num: 8,
          name: "Flexibilidad y Reutilización",
          description: "Considera si el material puede adaptarse a distintos grados, niveles, tiempos de clase y estrategias de enseñanza, y si es posible utilizarlo nuevamente en otras actividades."
        }
      ]
    },

    scaleSection: {
      title: "Métrica o Escala de Valoración",
      intro: "Para facilitar su aplicación, PERT-RED propone una escala de cinco niveles, inspirada en las escalas utilizadas por modelos como LORI y COdA. Cada criterio se califica de acuerdo con las características observadas durante la revisión del recurso.",
      levels: [
        { level: "Deficiente (1)", desc: "El criterio no se cumple o presenta dificultades importantes." },
        { level: "Bajo (2)", desc: "Se cumple parcialmente, pero requiere mejoras significativas." },
        { level: "Aceptable (3)", desc: "Cumple lo esencial, aunque presenta aspectos por mejorar." },
        { level: "Bueno (4)", desc: "Cumple adecuadamente con el criterio evaluado." },
        { level: "Excelente (5)", desc: "Cumple ampliamente con el criterio y ofrece condiciones favorables para su uso." },
        { level: "No Aplica", desc: "El criterio no corresponde al recurso o no hay evidencia suficiente para evaluarlo." }
      ],
      calculation: "La puntuación se obtiene sumando los valores de los criterios que efectivamente se hayan evaluado y dividiendo el resultado entre el número de criterios puntuados."
    },

    methodologySection: {
      title: "Metodología de Aplicación",
      steps: [
        {
          number: 1,
          title: "Identificación del Recurso",
          desc: "El docente registra el nombre del RED, su enlace, autoría, área de conocimiento, nivel educativo, propósito y condiciones de acceso. También identifica el aprendizaje que desea fortalecer mediante su utilización."
        },
        {
          number: 2,
          title: "Exploración y Prueba",
          desc: "Se revisa el recurso directamente. El docente navega por sus secciones, desarrolla algunas actividades, comprueba el funcionamiento de los enlaces y observa los requisitos de conexión, los dispositivos necesarios y las opciones de accesibilidad."
        },
        {
          number: 3,
          title: "Aplicación del Instrumento",
          desc: "Se califican los ocho criterios utilizando la escala de uno a cinco. Cada puntuación debe acompañarse de una observación breve que explique la valoración."
        },
        {
          number: 4,
          title: "Interpretación de los Resultados",
          desc: "Se calcula el promedio y se identifican las fortalezas y los aspectos que requieren ajustes. La decisión no depende únicamente de la puntuación, sino también de la importancia de cada criterio para el grupo y el objetivo de aprendizaje."
        },
        {
          number: 5,
          title: "Decisión Pedagógica",
          desc: "El docente determina si utilizará el recurso tal como está, si necesita adaptarlo o si resulta más conveniente buscar otra alternativa. Después de utilizarlo en clase, puede recoger las opiniones de los estudiantes y revisar la evaluación inicial."
        }
      ]
    },

    instrumentSection: {
      title: "Instrumento de Evaluación",
      intro: "El siguiente instrumento constituye una propuesta inicial, diseñada para que se registre tanto la puntuación como las evidencias que justifican sus decisiones.",
      columns: ["Deficiente", "Bajo", "Aceptable", "Bueno", "Excelente", "No aplica"],
      items: [
        {
          num: 1,
          criterion: "Pertinencia pedagógica y curricular",
          question: "¿Se relaciona con los objetivos de aprendizaje, la planeación y los referentes curriculares?"
        },
        {
          num: 2,
          criterion: "Calidad y claridad de los contenidos",
          question: "¿La información es correcta, clara y adecuada al nivel de los estudiantes?"
        },
        {
          num: 3,
          criterion: "Usabilidad e interactividad",
          question: "¿Es fácil navegar, comprender las instrucciones y realizar las actividades?"
        },
        {
          num: 4,
          criterion: "Accesibilidad e inclusión",
          question: "¿Ofrece condiciones y alternativas que faciliten la participación de estudiantes con distintas necesidades?"
        },
        {
          num: 5,
          criterion: "Viabilidad tecnológica y conectividad",
          question: "¿Funciona con los dispositivos disponibles y con las condiciones reales de conexión?"
        },
        {
          num: 6,
          criterion: "Motivación y contextualización",
          question: "¿Despierta interés y conecta los contenidos con las experiencias y el contexto de los estudiantes?"
        },
        {
          num: 7,
          criterion: "Evaluación y retroalimentación",
          question: "¿Permite comprobar los aprendizajes y ofrece información útil para corregir o mejorar?"
        },
        {
          num: 8,
          criterion: "Flexibilidad y reutilización",
          question: "¿Puede adaptarse a diferentes actividades, niveles o momentos de enseñanza?"
        }
      ]
    },

    referencesSection: {
      title: "Referencias Bibliográficas",
      items: [
        {
          author: "Adame Rodríguez, S. I. (2015).",
          work: "Instrumento para evaluar Recursos Educativos Digitales, LORI - AD.",
          publisher: "ResearchGate.",
          url: "https://doi.org/10.13140/RG.2.1.4020.0164"
        },
        {
          author: "Fernández-Pampillón Cesteros, A., Domínguez Romero, E., & de Armas Ranero, I. (2012).",
          work: "Herramienta de evaluación de la calidad de objetos de aprendizaje (herramienta COdA).",
          publisher: "Universidad Complutense de Madrid.",
          url: "https://eprints.ucm.es/id/eprint/12533/"
        },
        {
          author: "Leacock, T. L., & Nesbit, J. C. (2007).",
          work: "A framework for evaluating the quality of multimedia learning resources.",
          publisher: "Educational Technology & Society, 10(2), 44–59.",
          url: "https://www.jstor.org/stable/jeductechsoci.10.2.44"
        },
        {
          author: "Ministerio de Educación Nacional. (2006).",
          work: "Estándares básicos de competencias en lenguas extranjeras: inglés. Formar en lenguas extranjeras: ¡el reto!",
          publisher: "Ministerio de Educación Nacional de Colombia.",
          url: "https://contenidos.mineducacion.gov.co/ntg/men/archivos/Referentes_Calidad/Estandares_basicos_de_competencias/Estandares_Basicos_Competencia_en_Lenguas_Extranjeras_%20Ingles.pdf"
        },
        {
          author: "Ministerio de Educación Nacional. (2022).",
          work: "Materiales: Estándares básicos de competencias.",
          publisher: "Colombia Aprende.",
          url: "https://www.colombiaaprende.edu.co/recurso-coleccion/materiales-estandares-basicos"
        },
        {
          author: "Nesbit, J. C., Belfer, K., & Leacock, T. (2003).",
          work: "Learning Object Review Instrument (LORI), User Manual.",
          publisher: "E-Learning Research and Assessment Network.",
          url: "https://www.transplantedgoose.net/gradstudies/educ892/LORI1.5.pdf"
        },
        {
          author: "OER Commons. (s.f.)",
          work: "OER Commons: Open Educational Resources.",
          publisher: "Institute for the Study of Knowledge Management in Education (ISKME).",
          url: "https://www.oercommons.org/oer"
        },
        {
          author: "OpenAI. (2026)",
          work: "ChatGPT.",
          publisher: "OpenAI fue utilizado como herramienta de corrección ortográfica y de estilo.",
          url: "https://chatgpt.com"
        },
        {
          author: "Prieto Taborda, M. A., Bermón Angarita, L. y Ramírez Castañeda, L. A. (2019).",
          work: "Diseño, desarrollo y evaluación de un recurso educativo digital para la introducción a la Administración de Sistemas Informáticos.",
          publisher: "Revista Virtual Universidad Católica del Norte, (56), 31–51.",
          url: "https://revistavirtual.ucn.edu.co/index.php/RevistaUCN/article/view/1036"
        }
      ]
    }
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

  // PÁGINA 4: APLICACIÓN DE MODELOS DE EVALUACIÓN
  evaluationApplicationPage: {
    kicker: "Página 4",
    title: "Aplicación de Modelos de Evaluación",
    subtitle: "Sustentación del modelo PERT-RED y formato de diseño",
    lead: "En esta sección se presenta la sustentación en diapositivas del modelo PERT-RED y, a continuación, el formato de diseño del modelo de evaluación propuesto para recursos educativos digitales.",
    
    // PRESENTACIÓN PERT-RED
    presentation: {
      title: "PERT-RED: Evaluación de Recursos Educativos Digitales",
      subtitle: "Sustentación del modelo",
      totalSlides: 12,
      authors: "Castellanos De Salvador Angela · Castellanos De Salvador Daniel",
      institution: "Universidad de Santander (UDES) · 2026",
      slides: [
        {
          id: 1,
          type: "cover",
          slideNumber: 1,
          kicker: "Diapositiva 1 · Portada Oficial",
          title: "PERT-RED: Evaluación de Recursos Educativos Digitales",
          subtitle: "Especialización en Aplicación de TIC para la Enseñanza",
          authors: ["Castellanos De Salvador Angela", "Castellanos De Salvador Daniel"],
          institution: "Universidad de Santander (UDES)",
          faculty: "Facultad de Ciencias Sociales",
          year: "2026"
        },
        {
          id: 2,
          type: "cycle",
          slideNumber: 2,
          kicker: "Diapositiva 2 · Fundamento y Enfoque",
          title: "Evaluar para adaptar, no solo para elegir",
          lead: "Los recursos educativos digitales favorecen autonomía y dinamismo cuando responden al contenido, al uso y al acceso reales. PERT-RED integra aportes de LORI, COdA y Galvis con una mirada explícita al contexto rural.",
          badge: "Ciclo de evaluación continua",
          steps: [
            { num: "1", title: "OBSERVAR", desc: "Diagnóstico inicial de las necesidades, saberes previos y condiciones escolares." },
            { num: "2", title: "VALORAR", desc: "Aplicación sistemática con los 8 criterios pedagógicos, técnicos y contextuales." },
            { num: "3", title: "ADAPTAR", desc: "Ajustes didácticos, guías sin conexión continua y apoyos docentes." },
            { num: "4", title: "REAPLICAR", desc: "Puesta en práctica en el aula y comprobación continua del aprendizaje." }
          ]
        },
        {
          id: 3,
          type: "context",
          slideNumber: 3,
          kicker: "Diapositiva 3 · Contexto Escolar",
          title: "El recurso “ideal” no existe fuera del contexto",
          lead: "La diversidad de plataformas amplía las opciones, pero también hace más compleja una elección pertinente.",
          dimensions: [
            {
              label: "NIVEL",
              title: "Nivel de Dominio",
              desc: "Diferencias marcadas en conocimientos previos y ritmos de asimilación en lengua extranjera."
            },
            {
              label: "ACCESO",
              title: "Acceso y Dispositivos",
              desc: "Internet irregular, baja conectividad y equipos móviles o de cómputo compartidos."
            },
            {
              label: "CONTEXTO",
              title: "Realidad Sociocultural",
              desc: "Lenguaje, cultura cotidiana y propósito de aprendizaje situado en la institución educativa."
            }
          ]
        },
        {
          id: 4,
          type: "movements",
          slideNumber: 4,
          kicker: "Diapositiva 4 · Propósito y Objetivos",
          title: "Un propósito, cuatro movimientos",
          lead: "Implementar PERT-RED para evaluar la calidad de recursos digitales desde la pedagogía, la tecnología y la comunicación.",
          movements: [
            {
              num: 1,
              title: "Aplicar a dos recursos de inglés",
              desc: "Valoración diagnóstica a la lección de British Council y a los audios de READ Canarias."
            },
            {
              num: 2,
              title: "Analizar ventajas frente a otros instrumentos",
              desc: "Examinar su sensibilidad a la ruralidad y su orientación a la toma de decisiones prácticas."
            },
            {
              num: 3,
              title: "Identificar ajustes para fortalecerlo",
              desc: "Afinar indicadores de legibilidad, instrucciones y retroalimentación para los estudiantes."
            },
            {
              num: 4,
              title: "Proponer adaptación y validación",
              desc: "Formular planes de rediseño didáctico y ruta de validación cruzada con docentes."
            }
          ]
        },
        {
          id: 5,
          type: "lenses",
          slideNumber: 5,
          kicker: "Diapositiva 5 · Referentes Teóricos",
          title: "Tres lentes construyen PERT-RED",
          lead: "Un RED es contenido, interacción y mediación: su valor depende de cómo conecta propósito, experiencia y contexto.",
          lenses: [
            {
              name: "LORI",
              badge: "Calidad · Alineación · Usabilidad",
              desc: "Estructura organizada para examinar calidad del contenido, alineación curricular y presentación visual."
            },
            {
              name: "COdA",
              badge: "Criterios didácticos · Tecnología",
              desc: "Integración equilibrada de criterios didácticos y atributos tecnológicos de interactividad y accesibilidad."
            },
            {
              name: "GALVIS",
              badge: "Material · Propósito · Contexto",
              desc: "Relación indisoluble entre las características del material computarizado, el propósito formativo y el aula."
            }
          ]
        },
        {
          id: 6,
          type: "criteria",
          slideNumber: 6,
          kicker: "Diapositiva 6 · Criterios de Evaluación",
          title: "Ocho criterios. Una lectura integral.",
          criteriaList: [
            { code: "01", name: "Pertinencia pedagógica y curricular" },
            { code: "02", name: "Calidad y claridad de contenidos" },
            { code: "03", name: "Usabilidad e interactividad" },
            { code: "04", name: "Accesibilidad e inclusión" },
            { code: "05", name: "Viabilidad tecnológica y conectividad" },
            { code: "06", name: "Motivación y contextualización" },
            { code: "07", name: "Evaluación y retroalimentación" },
            { code: "08", name: "Flexibilidad y reutilización" }
          ],
          footer: "La puntuación orienta mejora continua; el contexto rural modifica la lectura y exigencia de cada criterio."
        },
        {
          id: 7,
          type: "roadmap",
          slideNumber: 7,
          kicker: "Diapositiva 7 · Ruta de Aplicación",
          title: "De la selección a la validación",
          subtitle: "Ruta de aplicación en cinco etapas metodológicas",
          stages: [
            { step: "1", title: "Selección", detail: "British Council + READ" },
            { step: "2", title: "Exploración", detail: "Valoración documental" },
            { step: "3", title: "Análisis", detail: "Promedios + fortalezas" },
            { step: "4", title: "Adaptación", detail: "Propuestas pedagógicas" },
            { step: "5", title: "Validación", detail: "Implementación futura" }
          ],
          pipeline: "RECURSOS → CRITERIOS PERT-RED → DATOS DESCRIPTIVOS → ACCIONES → EVIDENCIA DE AULA"
        },
        {
          id: 8,
          type: "results",
          slideNumber: 8,
          kicker: "Diapositiva 8 · Resultados Comparativos",
          title: "Ambos recursos alcanzan nivel Bueno",
          cards: [
            {
              name: "British Council LearnEnglish",
              resource: "Daily routine vocabulary",
              score: "3,88",
              max: "/ 5",
              level: "Bueno",
              desc: "Lección estructurada con vocabulario y práctica interactiva. Requiere alternativas sin conexión."
            },
            {
              name: "READ - Gobierno de Canarias",
              resource: "Daily routines (audios)",
              score: "3,50",
              max: "/ 5",
              level: "Bueno",
              desc: "Audios descargables de oraciones cotidianas. Gran potencial que exige guías didácticas de apoyo."
            }
          ],
          lead: "Las condiciones son favorables, pero esta valoración documental preliminar no mide directamente el aprendizaje."
        },
        {
          id: 9,
          type: "scale",
          slideNumber: 9,
          kicker: "Diapositiva 9 · Escala Cuantitativa",
          title: "Una escala que convierte juicio en acción",
          levels: [
            { num: 1, name: "DEFICIENTE", desc: "No cumple; cambios urgentes requeridos" },
            { num: 2, name: "BAJO", desc: "Mejora significativa necesaria antes de usar" },
            { num: 3, name: "ACEPTABLE", desc: "Cumple lo esencial con ajustes y apoyo" },
            { num: 4, name: "BUENO", desc: "Responde adecuadamente a lo previsto" },
            { num: 5, name: "EXCELENTE", desc: "Cumple ampliamente las condiciones esperadas" }
          ],
          rule: "N/A se utiliza cuando un criterio no puede ser evaluado por falta de evidencia o condiciones de acceso."
        },
        {
          id: 10,
          type: "tuning",
          slideNumber: 10,
          kicker: "Diapositiva 10 · Ajustes del Modelo",
          title: "Fortalecer el instrumento exige más voces",
          axes: [
            {
              verb: "PRECISAR",
              desc: "Indicadores de instrucciones, adecuación de vocabulario y legibilidad contextualizada."
            },
            {
              verb: "CONTRASTAR",
              desc: "Incorporar opinión estudiantil y validación docente cruzada entre pares pedagógicos."
            },
            {
              verb: "EVIDENCIAR",
              desc: "Aplicación directa en aula con registros y diagnósticos previos y posteriores."
            },
            {
              verb: "CALIBRAR",
              desc: "Mayor consistencia metodológica, rúbrica estandarizada y claridad entre valoraciones."
            }
          ]
        },
        {
          id: 11,
          type: "closure",
          slideNumber: 11,
          kicker: "Diapositiva 11 · Síntesis Reflexiva",
          title: "PERT-RED no cierra una evaluación. Abre una conversación.",
          lead: "Es una herramienta integral, contextualizada y práctica. Su valor crece con la evaluación continua, la adaptación pedagógica y la validación con más docentes y estudios comparativos.",
          actions: ["APLICAR", "OBSERVAR", "MEJORAR", "COMPARTIR"]
        },
        {
          id: 12,
          type: "references",
          slideNumber: 12,
          kicker: "Diapositiva 12 · Referencias",
          title: "Referencias Bibliográficas",
          citations: [
            "Adame Rodríguez, S. I. (2015). Instrumento LORI-AD.",
            "Fernández-Pampillón et al. (2012). Herramienta COdA.",
            "Leacock, T. & Nesbit, J. (2007). Framework para calidad multimedia.",
            "Ministerio de Educación Nacional. (2006, 2022). Estándares de inglés.",
            "Nesbit, J., Belfer, K. & Leacock, T. (2003). Manual LORI.",
            "Prieto Taborda et al. (2019). Evaluación de RED en sistemas informáticos."
          ]
        }
      ]
    },

    // FORMATO DE DISEÑO MODELO DE EVALUACIÓN
    formatSection: {
      title: "Formato de diseño modelo de evaluación",
      metadata: {
        authors: [
          "Castellanos De Salvador Angela",
          "Castellanos de Salvador Daniel"
        ],
        institution: "Universidad de Santander (UDES)",
        faculty: "Facultad de Ciencias Sociales",
        program: "Especialización en aplicación de TIC para la Enseñanza",
        city: "Caldas",
        year: "2026"
      },
      sections: {
        introduccion: [
          "La incorporación de recursos educativos digitales en el aula ha abierto nuevas posibilidades para desarrollar actividades más dinámicas, fortalecer la autonomía de los estudiantes y complementar las estrategias de enseñanza. Sin embargo, encontrar un recurso en internet no garantiza que sea adecuado para el aprendizaje. Es necesario revisar sus contenidos, su organización, la facilidad de uso, las condiciones de acceso y, especialmente, su relación con los objetivos educativos, Es por eso que, a partir de esta necesidad, se diseñó el modelo PERT-RED (Pertinencia Educativa, Recursos y Tecnología para la evaluación de Recursos Educativos Digitales), siendo ésta una propuesta que reúne criterios pedagógicos, técnicos y de comunicación para orientar a los docentes en la selección, evaluación y adaptación de estos materiales.",
          "El modelo toma como referentes los aportes de LORI, COdA y Galvis, pero incorpora una preocupación particular por las condiciones reales de implementación en el aula, especialmente en contextos educativos rurales, donde la conectividad, la disponibilidad de dispositivos y las diferencias en los ritmos de aprendizaje pueden influir en el aprovechamiento de un recurso.",
          "Para orientar su aplicación, se retoma la valoración preliminar realizada a dos recursos para la enseñanza del inglés: Daily routine vocabulary, de British Council LearnEnglish, y Daily routines (audios), del repositorio Recursos Educativos Abiertos Digitales (READ) del Gobierno de Canarias. Este informe presenta la implementación metodológica del modelo y sus oportunidades de mejora, sin afirmar que se haya comprobado experimentalmente su impacto en el aprendizaje de los estudiantes."
        ],
        problemaJustificacion: [
          "En la práctica educativa, los docentes nos encontramos frente a una gran variedad de recursos digitales: plataformas interactivas, videos, audios, juegos, lecturas y actividades de evaluación. Aunque esta diversidad representa una oportunidad, también plantea una dificultad: seleccionar materiales que respondan a las necesidades de los estudiantes y que puedan utilizarse de manera efectiva en las condiciones disponibles.",
          "En ocasiones, un recurso puede tener contenidos de buena calidad, pero presentar instrucciones difíciles de comprender, actividades que no corresponden al nivel del grupo o requerimientos tecnológicos que impiden su utilización. También puede ocurrir que el material resulte atractivo, pero no ofrezca suficientes oportunidades para practicar, recibir retroalimentación o comprobar lo aprendido.",
          "Esta situación adquiere especial importancia en la enseñanza del inglés en instituciones educativas rurales. Las diferencias en el dominio del idioma, el acceso irregular a internet y la necesidad de adaptar los materiales al contexto hacen que la evaluación de los RED deba ir más allá de su presentación visual o de la cantidad de actividades que contienen. La valoración preliminar de los recursos seleccionados nos permitió reconocer esta necesidad. La lección de British Council ofrece vocabulario contextualizado y actividades de práctica, mientras que los audios de READ permiten trabajar la comprensión auditiva y pueden descargarse para preparar actividades fuera de línea. Sin embargo, ambos recursos requieren decisiones pedagógicas para aprovecharlos de acuerdo con las características del grupo.",
          "Frente a esta situación, se propone PERT-RED como una herramienta que organiza los criterios de evaluación y permite relacionar los resultados con acciones de mejora. Su propósito no es sustituir los modelos existentes, sino adaptarlos a una aplicación práctica, comprensible y sensible a las condiciones del entorno educativo.",
          "La propuesta se justifica porque puede ayudar al docente a tomar decisiones fundamentadas, identificar barreras, diseñar apoyos complementarios y valorar si un recurso contribuye a los aprendizajes esperados. Asimismo, promueve una cultura de revisión continua, en la que la evaluación no termina con una puntuación, sino que conduce a la adaptación del recurso y a la reflexión sobre su utilización en el aula."
        ],
        objetivos: {
          general: "Implementar el modelo PERT-RED como una propuesta de evaluación de la calidad de los recursos educativos digitales, mediante criterios pedagógicos, técnicos y comunicacionales que permitan identificar fortalezas, reconocer dificultades y establecer oportunidades de mejora acordes con las necesidades de la práctica docente.",
          especificos: [
            "Aplicar los criterios de PERT-RED a los recursos Daily routine vocabulary, de British Council LearnEnglish, y Daily routines (audios), de READ, para reconocer sus características, fortalezas y aspectos por mejorar.",
            "Analizar las ventajas potenciales del modelo frente a otros instrumentos de evaluación de RED, teniendo en cuenta su facilidad de aplicación, su orientación al contexto y su relación con las decisiones pedagógicas.",
            "Identificar los ajustes técnicos, pedagógicos y comunicacionales necesarios para fortalecer el instrumento y mejorar la consistencia de sus valoraciones.",
            "Proponer acciones de adaptación e implementación de los recursos evaluados, acompañadas de evidencias que permitan revisar su utilidad en el proceso de enseñanza y aprendizaje."
          ]
        },
        marcoConceptual: {
          intro: [
            "Los recursos educativos digitales son materiales que utilizan tecnologías digitales para apoyar los procesos de enseñanza y aprendizaje. Pueden incluir textos, imágenes, audios, videos, simulaciones, juegos, actividades interactivas y plataformas educativas.",
            "Su calidad no depende únicamente de que estén disponibles en internet o tengan una presentación atractiva. También es necesario analizar su contenido, su relación con los objetivos de aprendizaje, las oportunidades de participación que ofrecen y las condiciones que necesitan los estudiantes para utilizarlos.",
            "En la enseñanza del inglés, por ejemplo, un recurso puede contribuir al aprendizaje de vocabulario, comprensión lectora, comprensión auditiva, pronunciación y producción oral o escrita. Sin embargo, su utilidad dependerá de cómo se integre en la planeación y de los apoyos que proporcione el docente.",
            "El diseño de PERT-RED retoma tres referentes que ofrecen perspectivas complementarias para valorar los recursos educativos digitales:"
          ],
          referentes: [
            {
              nombre: "Modelo LORI",
              texto: "El Learning Object Review Instrument propone criterios para revisar aspectos como la calidad del contenido, la alineación con los objetivos, la motivación, la presentación, la usabilidad y la accesibilidad. Su aporte a PERT-RED consiste en proporcionar una estructura organizada para examinar la calidad de un recurso."
            },
            {
              nombre: "Modelo COdA",
              texto: "La herramienta de evaluación de la calidad de los objetos de aprendizaje integra criterios didácticos y tecnológicos. Considera, entre otros aspectos, los objetivos, los contenidos, las actividades, la interactividad, el diseño y la accesibilidad. Este enfoque permite reconocer que la calidad de un RED depende tanto de su valor educativo como de sus características técnicas."
            },
            {
              nombre: "Modelo Galvis",
              texto: "Sus planteamientos sobre materiales educativos computarizados sirven como referente para considerar la relación entre las características del material, los propósitos formativos y las condiciones de utilización. Para PERT-RED, este enfoque ayuda a recordar que un recurso debe analizarse en función de su utilidad pedagógica y de la situación en la que se pretende implementar."
            }
          ],
          sintesis: "A partir de estos referentes, PERT-RED organiza ocho criterios que buscan facilitar una valoración integral sin exigir al docente un procedimiento excesivamente complejo.",
          modeloPertRed: {
            definicion: "PERT-RED es una propuesta de evaluación diseñada para orientar la selección, valoración y adaptación de recursos educativos digitales. Su estructura contempla ocho criterios:",
            criterios: [
              "1. Pertinencia pedagógica y curricular.",
              "2. Calidad y claridad de los contenidos.",
              "3. Usabilidad e interactividad.",
              "4. Accesibilidad e inclusión.",
              "5. Viabilidad tecnológica y conectividad.",
              "6. Motivación y contextualización.",
              "7. Evaluación y retroalimentación.",
              "8. Flexibilidad y reutilización."
            ],
            mejoraContinua: "El modelo entiende la evaluación como un proceso de mejora continua. Por eso, después de valorar el recurso, se deberá interpretar los resultados, identificar necesidades, proponer adaptaciones, etc.",
            contextoAtencion: "Una característica importante de esta propuesta es la atención al contexto. Por ejemplo, la posibilidad de descargar un audio, imprimir una guía o preparar instrucciones más sencillas puede ser determinante para que los estudiantes aprovechen el material, aunque estas adaptaciones no formen parte del recurso original."
          },
          deQueManera: [
            "PERT-RED permite realizar una evaluación organizada al establecer criterios comunes, una escala de valoración y la necesidad de justificar las puntuaciones con evidencias. De esta manera, el docente puede identificar qué aspectos del recurso responden a sus necesidades y cuáles necesitan ajustes.",
            "Además, relaciona la valoración con la toma de decisiones. Si un recurso presenta contenidos pertinentes, pero depende de una conexión estable, el docente puede preparar una alternativa descargable o impresa. Si un audio no incluye actividades para comprobar la comprensión, puede diseñar preguntas, ejercicios de secuenciación y tareas de producción oral.",
            "El modelo también invita a distinguir entre la calidad del recurso y sus resultados educativos. Una puntuación alta puede indicar que el material reúne condiciones favorables para su utilización, pero no demuestra automáticamente que los estudiantes aprendan más. Para valorar ese aporte es necesario recoger evidencias durante la práctica pedagógica."
          ],
          ventajasPotenciales: [
            "PERT-RED presenta cuatro ventajas principales como propuesta de aplicación docente: Considera explícitamente la conectividad, los dispositivos disponibles y la posibilidad de utilizar materiales sin conexión permanente, integra dimensiones tales como reunir criterios pedagógicos, técnicos y comunicacionales en un mismo instrumento. La facilidad de aplicación a través de sus ocho criterios y una escala de cinco niveles, lo que permite organizar la evaluación en una matriz sencilla, y por último la orientación al mejoramiento, pues permite relacionar los resultados con acciones concretas de adaptación y con una revisión posterior de su utilización.",
            "Estas características no concluyen que PERT-RED sea superior a LORI o COdA, son que se trata de una propuesta que busca complementar sus aportes con una orientación contextualizada y práctica. Para establecer su efectividad comparativa sería necesario aplicarlo junto con otros instrumentos, contrastar sus resultados y estudiar la consistencia de las valoraciones."
          ]
        },
        metodologia: {
          intro: "La implementación de PERT-RED se organiza en cinco momentos que permiten pasar de la selección del recurso a la identificación de mejoras y la revisión de su utilidad educativa.",
          fases: [
            {
              fase: "1. Selección e identificación de los recursos",
              contenido: "Se seleccionaron dos recursos relacionados con la enseñanza de las rutinas diarias en inglés: British Council LearnEnglish: Daily routine vocabulary, una lección con vocabulario y ejercicios de práctica y READ, Gobierno de Canarias: Daily routines (audios), una colección de archivos de audio con oraciones sobre actividades cotidianas. La selección permite examinar materiales con características diferentes: una lección estructurada con actividades y un conjunto de audios que puede incorporarse a secuencias didácticas diseñadas por el docente."
            },
            {
              fase: "2. Exploración y valoración documental",
              contenido: "Se revisaron las características descritas en las páginas de los recursos, sus posibilidades de uso, las actividades disponibles y las condiciones de acceso conocidas. A partir de esta exploración se aplicaron los ocho criterios de PERT-RED. Las puntuaciones se asignaron utilizando la escala de uno a cinco y se acompañaron de una justificación. Cuando una característica no pudo comprobarse directamente, se consideró una limitación de la valoración documental y no una dificultad confirmada del recurso."
            },
            {
              fase: "3. Análisis de resultados",
              contenido: "Se calcularon los promedios y se identificaron los criterios con mayores fortalezas y aquellos que requieren atención. La valoración preliminar arrojó los siguientes resultados:",
              tablaPromedios: [
                { recurso: "Daily routine (British Council)", promedio: "3,88 / 5", nivel: "Bueno" },
                { recurso: "Daily routines (READ)", promedio: "3,50 / 5", nivel: "Bueno" }
              ],
              conclusion: "Los resultados indican que ambos recursos presentan condiciones favorables para apoyar la enseñanza del inglés, aunque necesitan distintos tipos de acompañamiento docente. Estos promedios no representan mediciones del aprendizaje de los estudiantes. Son resultados de la aplicación documental inicial del instrumento y deben revisarse si una exploración directa permite obtener nuevas evidencias."
            },
            {
              fase: "4. Propuesta de adaptación y mejora",
              contenido: "A partir de la valoración, se establecieron posibles acciones para mejorar el aprovechamiento de los recursos.",
              tablaMejoras: [
                {
                  recurso: "British Council",
                  necesidad: "Prever alternativas ante dificultades de conectividad y apoyar a estudiantes con diferentes niveles de inglés.",
                  accion: "Preparar una guía con vocabulario clave, imágenes, ejemplos y ejercicios que puedan desarrollarse sin conexión continua."
                },
                {
                  recurso: "READ",
                  necesidad: "Complementar la escucha con actividades de comprensión y apoyos para diferentes necesidades.",
                  accion: "Elaborar transcripciones, asociar los audios con imágenes y diseñar preguntas de comprensión y ejercicios de producción oral o escrita."
                }
              ],
              conclusion: "Estas acciones constituyen propuestas de rediseño pedagógico. No implican que los recursos originales hayan sido modificados ni que las mejoras se hayan probado con estudiantes."
            },
            {
              fase: "5. Implementación y validación posterior",
              contenido: "La fase final consiste en utilizar el recurso adaptado en una clase, recoger evidencias y revisar si los ajustes facilitaron el desarrollo de las actividades. Esta fase debe realizarse antes de formular conclusiones definitivas sobre el impacto de los recursos o la efectividad del modelo. La validación del instrumento también requiere la revisión de otros docentes y, de ser posible, la comparación de puntuaciones independientes sobre un mismo RED."
            }
          ]
        },
        metricaEscala: {
          intro: "PERT-RED utiliza una escala de cinco niveles para valorar cada criterio:",
          niveles: [
            { nivel: "Deficiente (1)", desc: "El criterio no se cumple o presenta dificultades importantes." },
            { nivel: "Bajo (2)", desc: "Se cumple parcialmente y requiere mejoras significativas." },
            { nivel: "Aceptable (3)", desc: "Cumple lo esencial, pero necesita algunos ajustes." },
            { nivel: "Bueno (4)", desc: "Responde adecuadamente al criterio evaluado." },
            { nivel: "Excelente (5)", desc: "Cumple ampliamente con las características esperadas." }
          ],
          opcionNA: "También se contempla la opción N/A o pendiente de verificación cuando un criterio no aplica o no existen evidencias suficientes para valorarlo. En este último caso, debe registrarse qué información hace falta obtener.",
          calculo: "El promedio se obtiene al sumar las puntuaciones asignadas y dividirlas entre el número de criterios efectivamente evaluados.",
          interpretacionRangos: [
            { rango: "1,00 a 1,79", interpretacion: "Deficiente", orientacion: "Requiere cambios importantes antes de utilizarse." },
            { rango: "1,80 a 2,59", interpretacion: "Bajo", orientacion: "Necesita adaptaciones significativas." },
            { rango: "2,60 a 3,39", interpretacion: "Aceptable", orientacion: "Puede utilizarse con ajustes y acompañamiento." },
            { rango: "3,40 a 4,19", interpretacion: "Bueno", orientacion: "Es favorable para el uso previsto, con mejoras puntuales." },
            { rango: "4,20 a 5,00", interpretacion: "Excelente", orientacion: "Presenta condiciones muy favorables." }
          ],
          advertencia: "Es importante no interpretar el promedio de manera aislada. Una puntuación alta no compensa necesariamente una barrera crítica de accesibilidad o una condición tecnológica que impida a los estudiantes utilizar el recurso."
        },
        instrumentoRedisenado: {
          intro: "El instrumento PERT-RED reúne los ocho criterios, la escala de valoración y un espacio para registrar evidencias y proponer mejoras. Su finalidad es que la evaluación sea clara, justificable y útil para la toma de decisiones.",
          tablaResumen: [
            { criterio: "1. Pertinencia pedagógica y curricular", bc: "—", read: "4" },
            { criterio: "2. Calidad y claridad de los contenidos", bc: "5", read: "4" },
            { criterio: "3. Usabilidad e interactividad", bc: "—", read: "3" },
            { criterio: "4. Accesibilidad e inclusión", bc: "—", read: "3" },
            { criterio: "5. Viabilidad tecnológica y conectividad", bc: "—", read: "4" },
            { criterio: "6. Motivación y contextualización", bc: "—", read: "3" },
            { criterio: "7. Evaluación y retroalimentación", bc: "—", read: "2" },
            { criterio: "8. Flexibilidad y reutilización", bc: "—", read: "5" },
            { criterio: "TOTAL (Promedio)", bc: "3.8", read: "3.5" },
            { criterio: "NIVEL DE CALIDAD", bc: "Bueno", read: "Bueno" }
          ],
          ajustesModelo: [
            "A partir de su diseño y aplicación preliminar, se identifican dos acciones de mejoras:",
            "El instrumento debe relacionar cada criterio con los objetivos de aprendizaje y establecer indicadores para analizar el aporte del recurso al desempeño de los estudiantes. Para ello, se recomienda incorporar una fase de aplicación en el aula que permita recoger evidencias antes y después de la actividad, sin atribuir automáticamente cualquier cambio al recurso utilizado.",
            "Se deben precisar los indicadores para evaluar la claridad de las instrucciones, la adecuación del vocabulario, la legibilidad de los textos y la relación entre los elementos visuales, auditivos y escritos. También conviene incluir la opinión de los estudiantes, pues ellos pueden identificar dificultades que no siempre son evidentes durante la revisión docente.",
            "Además, el modelo requiere una validación inicial con otros docentes. La revisión de los criterios, la aplicación piloto y la comparación de puntuaciones independientes permitirán detectar ambigüedades y mejorar la consistencia del mismo."
          ]
        },
        referencias: [
          "Adame Rodríguez, S. I. (2015). Instrumento para evaluar Recursos Educativos Digitales, LORI - AD. ResearchGate. https://doi.org/10.13140/RG.2.1.4020.0164",
          "Fernández-Pampillón Cesteros, A., Domínguez Romero, E., & de Armas Ranero, I. (2012). Herramienta de evaluación de la calidad de objetos de aprendizaje (herramienta COdA). Universidad Complutense de Madrid. https://eprints.ucm.es/id/eprint/12533/",
          "Leacock, T. L., & Nesbit, J. C. (2007). A framework for evaluating the quality of multimedia learning resources. Educational Technology & Society, 10(2), 44–59. https://www.jstor.org/stable/jeductechsoci.10.2.44",
          "Ministerio de Educación Nacional. (2006). Estándares básicos de competencias en lenguas extranjeras: inglés. Formar en lenguas extranjeras: ¡el reto! https://contenidos.mineducacion.gov.co/ntg/men/archivos/Referentes_Calidad/Estandares_basicos_de_competencias/Estandares_Basicos_Competencia_en_Lenguas_Extranjeras_%20Ingles.pdf",
          "Ministerio de Educación Nacional. (2022). Materiales: Estándares básicos de competencias. Colombia Aprende. https://www.colombiaaprende.edu.co/recurso-coleccion/materiales-estandares-basicos",
          "Nesbit, J. C., Belfer, K., & Leacock, T. (2003). Learning Object Review Instrument (LORI), User Manual. E-Learning Research and Assessment Network. https://www.transplantedgoose.net/gradstudies/educ892/LORI1.5.pdf",
          "OER Commons. (s.f.) OER Commons: Open Educational Resources. Institute for the Study of Knowledge Management in Education (ISKME). https://www.oercommons.org/oer",
          "OpenAI. (2026) ChatGPT. https://chatgpt.com (OpenAI fue utilizado como herramienta de corrección ortográfica y de estilo.)",
          "Prieto Taborda, M. A., Bermón Angarita, L. y Ramírez Castañeda, L. A. (2019). Diseño, desarrollo y evaluación de un recurso educativo digital para la introducción a la Administración de Sistemas Informáticos. Revista Virtual Universidad Católica del Norte, (56), 31–51. https://revistavirtual.ucn.edu.co/index.php/RevistaUCN/article/view/1036"
        ]
      }
    }
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
      },
      {
        id: 4,
        text: "Estrada, M. S. (2021). Recursos educativos digitales: Intencionalidad didáctica, pedagógica y diseño. Dialnet.",
        url: "https://dialnet.unirioja.es/servlet/articulo?codigo=8578131"
      },
      {
        id: 5,
        text: "OER Commons. (s.f.) OER Commons: Open Educational Resources. Institute for the Study of Knowledge Management in Education (ISKME).",
        url: "https://www.oercommons.org/oer"
      },
      {
        id: 6,
        text: "OpenAI. (2026) ChatGPT. https://chatgpt.com (OpenAI fue utilizado como herramienta de corrección ortográfica y de estilo.)",
        url: "https://chatgpt.com"
      },
      {
        id: 7,
        text: "PBS LearningMedia. (s.f.) PBS LearningMedia. Public Broadcasting Service (PBS).",
        url: "https://www.pbslearningmedia.org/"
      },
      {
        id: 8,
        text: "Salazar Estrada, M. (2021). Recursos educativos digitales. Intencionalidad didáctica, pedagógica y diseño. Luciérnaga Comunicación, 13(25), 87–98.",
        url: "https://doi.org/10.33571/revistaluciernaga.v13n25a6"
      }
    ]
  }
};
