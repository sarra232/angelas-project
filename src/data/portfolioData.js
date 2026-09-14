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
          redName: "Irregular Plural Nouns",
          grade: "6°",
          area: "Inglés",
          objectives: "Emplear recursos y contenidos multimedia y actividades interactivas para incentivar el aprendizaje de un segundo idioma.",
          repositoryName: "PBS LearningMedia",
          redUrl: "https://www.pbslearningmedia.org/resource/564f9dfd-dcb0-4f32-bfad-bcab1313ae37/irregular-plural-nouns-no-nonsense-grammar/?student=true"
        },
        redDescription: "Es un Recurso Educativo Digital que ofrece variedad en su contenido, tanto para estudiantes como para docentes. Sus herramientas son didácticas y llamativas.",
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
            desc: "coherencia entre los objetivos, actividades, evaluaciones y perfil del alumnado.",
            score: 4,
            isNA: false
          },
          {
            num: 3,
            title: "Feedback (retroalimentación) y adaptabilidad",
            desc: "contenido adaptativo o feedback dirigido en función de la respuesta de cada alumno/a y su estilo de aprendizaje.",
            score: 4,
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
            score: 3,
            isNA: false
          },
          {
            num: 8,
            title: "Reusabilidad",
            desc: "capacidad para usarse en distintos escenarios de aprendizaje y con alumno/as de distintos bagajes.",
            score: 4,
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
          totalScoreText: "Puntuación final: 38/45 Puntos",
          conclusions: [
            "El recurso Irregular Plural Nouns presenta una valoración muy buena según el modelo LORI. Sus mayores fortalezas se encuentran en el diseño y presentación, la motivación y la posibilidad de reutilización. Los recursos multimedia y las actividades interactivas permiten complementar las estrategias tradicionales de enseñanza y pueden integrarse fácilmente en diferentes momentos de una clase.",
            "Su principal aspecto por mejorar está relacionado con la contextualización y accesibilidad. Como se señala en el documento, PBS LearningMedia está orientado principalmente al contexto educativo estadounidense, por lo que el docente colombiano debe seleccionar los materiales cuidadosamente y establecer conexiones con la realidad de sus estudiantes."
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
          redName: "Irregular Plural Nouns",
          grade: "6°",
          area: "Inglés",
          objectives: "Fomentar e incentivar el aprendizaje de una segunda lengua",
          repositoryName: "PBS LearningMedia",
          redUrl: "https://www.pbslearningmedia.org/resource/564f9dfd-dcb0-4f32-bfad-bcab1313ae37/irregular-plural-nouns-no-nonsense-grammar/?student=true"
        },
        redDescription: "Es un recurso educativo digital orientado al aprendizaje del inglés, que ofrece contenidos para estudiantes y docentes mediante herramientas didácticas y llamativas. La plataforma dispone de recursos multimedia y actividades interactivas, además de materiales diferenciados por edades, grados y áreas de conocimiento.El recurso puede complementar una secuencia didáctica diseñada por el docente.",
        modelInfo: {
          title: "Modelo: COdA",
          description: "El modelo CODA se enfoca exclusivamente en la calidad de los objetivos de aprendizaje integrados en los RED. Evalúa la claridad, coherencia, pertinencia y alineación curricular de dichos objetivos, siendo útil para analizar su función dentro del diseño instruccional."
        },
        criteria: [
          {
            num: 1,
            title: "Objetivos y coherencia didáctica",
            desc: "",
            notes: "El recurso presenta coherencia con el aprendizaje de los plurales irregulares en inglés. Sin embargo, el docente debe establecer los objetivos específicos y la forma en que el recurso se integrará a la secuencia didáctica.",
            score: 4,
            isNA: false
          },
          {
            num: 2,
            title: "Calidad de los contenidos",
            desc: "",
            notes: "Los contenidos son pertinentes para el aprendizaje del inglés y se presentan mediante recursos educativos multimedia. No obstante, algunos elementos requieren contextualización para estudiantes colombianos debido al contexto educativo en el que fueron desarrollados.",
            score: 4,
            isNA: false
          },
          {
            num: 3,
            title: "Capacidad de generar reflexión, críticas e innovación",
            desc: "",
            notes: "El recurso permite comprender y practicar un contenido lingüístico específico, pero su propósito principal está relacionado con el aprendizaje de una estructura gramatical. Para desarrollar pensamiento crítico o innovación es necesario complementarlo con actividades diseñadas por el docente.",
            score: 3,
            isNA: false
          },
          {
            num: 4,
            title: "Interactividad y adaptabilidad",
            desc: "",
            notes: "Cuenta con actividades interactivas y recursos multimedia. Además, puede incorporarse a diferentes momentos de una secuencia didáctica. Sin embargo, no se dispone de evidencia suficiente para afirmar que el recurso se adapta de manera profunda a las necesidades individuales de cada estudiante.",
            score: 4,
            isNA: false
          },
          {
            num: 5,
            title: "Motivación",
            desc: "",
            notes: "Los recursos multimedia y las actividades interactivas hacen que la presentación del contenido sea más atractiva y dinámica para estudiantes de sexto grado.",
            score: 5,
            isNA: false
          },
          {
            num: 6,
            title: "Formato y diseño",
            desc: "",
            notes: "La plataforma ofrece diferentes formatos y recursos multimedia, lo que permite presentar el contenido de una manera visual y dinámica.",
            score: 5,
            isNA: false
          },
          {
            num: 7,
            title: "Usabilidad",
            desc: "",
            notes: "Puede utilizarse como complemento de una clase y permite acceder a diversos recursos. Sin embargo, la cantidad de materiales disponibles puede hacer que el proceso de búsqueda y selección requiera tiempo del docente.",
            score: 4,
            isNA: false
          },
          {
            num: 8,
            title: "Accesibilidad",
            desc: "",
            notes: "Aunque utiliza diferentes recursos multimedia, la información disponible en el documento no permite verificar completamente las características de accesibilidad para estudiantes con diferentes condiciones de discapacidad. Por esta razón se asigna una valoración aceptable.",
            score: 3,
            isNA: false
          },
          {
            num: 9,
            title: "Reusabilidad",
            desc: "",
            notes: "Puede emplearse como actividad inicial, explicación, práctica o complemento de una secuencia didáctica. También puede combinarse con preguntas, actividades de vocabulario y producción oral o escrita.",
            score: 5,
            isNA: false
          },
          {
            num: 10,
            title: "Interoperabilidad",
            desc: "",
            notes: "Al estar disponible mediante una plataforma digital, ofrece posibilidades de uso en diferentes contextos. Sin embargo, el documento señala que determinados contenidos requieren una buena conexión a Internet y dispositivos capaces de reproducir videos y recursos interactivos.",
            score: 4,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 41/50 Puntos",
          conclusions: [
            "La aplicación del modelo COdA permite identificar que es un RED de muy buena calidad para complementar la enseñanza del inglés. Sus mayores fortalezas se encuentran en la motivación, el formato y diseño y la reusabilidad. La utilización de recursos multimedia facilita que el docente pueda integrar el RED en diferentes momentos de una clase.",
            "Una de sus principales oportunidades de mejora se relaciona con la accesibilidad, ya que con la información disponible no es posible comprobar completamente la adaptación del recurso para estudiantes con diferentes necesidades."
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
          redName: "Irregular Plural Nouns",
          grade: "6°",
          area: "Inglés",
          objectives: "Comprender y aplicar las reglas gramaticales para la formación de sustantivos plurales irregulares en inglés mediante videos explicativos y actividades contextualizadas.",
          repositoryName: "PBS LearningMedia",
          redUrl: "https://www.pbslearningmedia.org/resource/564f9dfd-dcb0-4f32-bfad-bcab1313ae37/irregular-plural-nouns-no-nonsense-grammar/?student=true"
        },
        redDescription: "Es un recurso educativo basado en video interactivo y materiales didácticos diseñado por PBS. Se centra en la enseñanza gramatical (sustantivos plurales irregulares) a través de videos dinámicos y breves, complementados con sugerencias de actividades de comprensión y producción oral o escrita.",
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
            notes: "Adecuado para grado 6°, aunque puede requerir mediación del docente para adaptar referentes culturales.",
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
            notes: "Lenguaje claro, nativo y bien articulado en el video, con explicaciones explícitas.",
            score: 5,
            isNA: false
          },
          {
            num: 9,
            title: "Diseño comunicativo orientado al aprendizaje significativo",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "El uso de situaciones cotidianas en video facilita la comprensión, aunque algunos referentes son muy anglosajones.",
            score: 4,
            isNA: false
          },
          {
            num: 10,
            title: "Coherencia entre los medios utilizados y los objetivos de aprendizaje",
            desc: "",
            notesLabel: "Observaciones:",
            notes: "El recurso audiovisual resulta idóneo para ilustrar ejemplos concretos de la regla gramatical.",
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
            notes: "Sirve como excelente complemento dentro de una secuencia didáctica, pero no reemplaza la guía docente para la evaluación",
            score: 4,
            isNA: false
          }
        ],
        results: {
          totalScoreText: "Puntuación final: 57/65 Puntos",
          conclusions: [
            "Es un recurso dinámico y de altísima calidad audiovisual. Su principal fortaleza radica en la dinamización de conceptos gramaticales, aunque requiere una mediación pedagógica previa para contextualizarlo al entorno colombiano y diseñar las actividades de cierre."
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
          redName: "Irregular Plural Nouns",
          knowledgeArea: "Lengua Extranjera: Inglés.",
          applicationLevel: "6°",
          authorData: "Iniciativa desarrollada por PBS, en colaboración con diferentes organizaciones y productores de contenidos educativos.",
          repositoryUrl: "https://www.pbslearningmedia.org/",
          redUrl: "https://www.pbslearningmedia.org/resource/564f9dfd-dcb0-4f32-bfad-bcab1313ae37/irregular-plural-nouns-no-nonsense-grammar/?student=true",
          description: "Es un Recurso Educativo Digital que ofrece variedad en su contenido, tanto para estudiantes como para docentes. Sus herramientas son didácticas y llamativas Características del RED y posibilidades de uso.",
          featuresAndUses: "Entre las principales características y posibilidades de uso se pueden destacar su amplia variedad de recursos multimedia y actividades interactivas, su gran cantidad de material diferenciado por edades, grados y áreas de conocimiento, la capacidad de complementar una secuencia didáctica elaborada por el docente, entre otros. En una clase de inglés, por ejemplo, un video puede utilizarse como actividad inicial para contextualizar un tema y posteriormente desarrollar preguntas de comprensión, actividades de vocabulario y una producción oral o escrita.",
          limitations: "Una de las principales limitaciones es que la plataforma está diseñada principalmente para el contexto educativo estadounidense, por lo que algunos contenidos, ejemplos y referentes culturales pueden no estar directamente relacionados con la realidad de los estudiantes colombianos. Por esta razón, se deben seleccionar cuidadosamente los materiales y realizar actividades de contextualización. Otra dificultad es la gran cantidad de recursos disponibles. Aunque esto representa una ventaja, también puede hacer que la búsqueda y selección del material adecuado tome tiempo. Además, el acceso a algunos contenidos puede depender de una buena conexión a Internet y de dispositivos que permitan reproducir adecuadamente videos o recursos interactivos.",
          standardsVerification: "Este recurso presenta una fortaleza importante en relación con la organización curricular, ya que permite identificar recursos relacionados con estándares educativos. La plataforma ofrece filtros y herramientas que facilitan la búsqueda de contenidos relacionados con determinados estándares y niveles educativos. Para su utilización en una institución educativa de Colombia es necesario establecer la relación entre el recurso seleccionado y los Estándares Básicos de Competencias en Lenguas Extranjeras, los DBA y los objetivos de aprendizaje definidos por el docente.",
          screenshotUrl: "./images/red2-pbs-learning.png",
          screenshotAlt: "Captura de pantalla RED 2: Irregular Plural Nouns - PBS LearningMedia"
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
