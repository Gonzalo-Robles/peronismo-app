export type TimelineItem = {
  year: string;
  date: string;
  title: string;
  text: string;
  emoji: string;
};

export type Achievement = {
  emoji: string;
  title: string;
  year?: string;
  text: string;
};

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
};

export const timeline: TimelineItem[] = [
  {
    year: "1945",
    date: "17 de octubre",
    title: "El día que la plaza se llenó",
    text: "Movilización obrera en Plaza de Mayo que pide la liberación de Perón. Nace el movimiento peronista.",
    emoji: "✊",
  },
  {
    year: "1946",
    date: "24 de febrero",
    title: "Perón presidente",
    text: "Perón gana las elecciones presidenciales con la fórmula Perón–Quijano.",
    emoji: "🗳️",
  },
  {
    year: "1947",
    date: "Ley 13.010",
    title: "La mujer vota",
    text: "Se sanciona el sufragio femenino; Evita encabeza el reclamo. Año del “Discurso a los obreros” y consolidación de los derechos laborales.",
    emoji: "🗳️",
  },
  {
    year: "1949",
    date: "Reforma",
    title: "Derechos en la Constitución",
    text: "La reforma constitucional incorpora los derechos del trabajador, de la familia, de la ancianidad y de la educación.",
    emoji: "⚖️",
  },
  {
    year: "1951",
    date: "Elecciones",
    title: "Reelección histórica",
    text: "Perón es reelecto con más del 60% de los votos, en las primeras elecciones con voto femenino.",
    emoji: "📊",
  },
  {
    year: "1952",
    date: "7 de julio",
    title: "Evita para siempre",
    text: "Fallece Eva Perón, símbolo de los derechos de los trabajadores y las mujeres.",
    emoji: "🕊️",
  },
  {
    year: "1955",
    date: "Golpe",
    title: "Se apaga la voz del pueblo",
    text: "Golpe de Estado: comienza la proscripción del peronismo, que dura 18 años.",
    emoji: "🚫",
  },
  {
    year: "1973",
    date: "Vuelta",
    title: "Perón vuelve a casa",
    text: "Perón regresa al país y gana su tercera presidencia. Muere en 1974.",
    emoji: "🇦🇷",
  },
];

export const achievements: Achievement[] = [
  {
    emoji: "💰",
    title: "Aguinaldo y vacaciones pagas",
    year: "1945",
    text: "Derechos que hoy son universales.",
  },
  {
    emoji: "🗳️",
    title: "Voto femenino",
    year: "1947",
    text: "Argentina iguala los derechos políticos de las mujeres.",
  },
  {
    emoji: "🏥",
    title: "Salud pública",
    text: "Expansión de hospitales públicos, campañas sanitarias y baja de la mortalidad infantil.",
  },
  {
    emoji: "📚",
    title: "Educación gratuita",
    text: "Alfabetización masiva, escuelas y universidades obreras.",
  },
  {
    emoji: "🏠",
    title: "Vivienda y turismo social",
    text: "La Fundación Eva Perón construye viviendas, hospitales y escuelas; hoteles de Chapadmalal y Embalse para que los obreros tengan vacaciones.",
  },
  {
    emoji: "👴",
    title: "Jubilaciones",
    text: "Derechos de la ancianidad.",
  },
  {
    emoji: "🤝",
    title: "Sindicalización y convenios colectivos",
    text: "Los trabajadores organizados pasan de ~500 mil a más de 2 millones.",
  },
  {
    emoji: "⚖️",
    title: "Reforma de 1949",
    text: "Derechos sociales en la Constitución.",
  },
];

export const tech: Achievement[] = [
  {
    emoji: "✈️",
    title: "Pulqui I",
    year: "1947",
    text: "Primer avión a reacción fabricado en América Latina. Con el Pulqui II (1950), Argentina fue pionera mundial en aviación a reacción.",
  },
  {
    emoji: "🏭",
    title: "IAME",
    year: "1951",
    text: "Industrias Aeronáuticas y Mecánicas del Estado: autos Justicialista, motos Puma y aviones de producción nacional.",
  },
  {
    emoji: "🚜",
    title: "Rastrojero",
    year: "1952",
    text: "Primer utilitario y tractor argentino de producción masiva.",
  },
  {
    emoji: "📺",
    title: "Televisión",
    year: "1951",
    text: "Primer país de Latinoamérica con transmisiones de TV abierta (Canal 7).",
  },
  {
    emoji: "⚛️",
    title: "CNEA",
    year: "1950",
    text: "Creación de la Comisión Nacional de Energía Atómica, base del desarrollo nuclear argentino.",
  },
  {
    emoji: "✈️",
    title: "Aerolíneas Argentinas",
    year: "1950",
    text: "Una de las primeras aerolíneas estatales del mundo.",
  },
  {
    emoji: "🏗️",
    title: "SOMISA y la industria pesada",
    text: "Impulso a la siderurgia nacional.",
  },
  {
    emoji: "🔥",
    title: "Gasoducto Comodoro Rivadavia–Buenos Aires",
    year: "1949",
    text: "El más largo del mundo en su momento (~1.600 km).",
  },
];

export const quiz: QuizQuestion[] = [
  {
    q: "¿En qué año se sancionó el voto femenino en Argentina?",
    options: ["1945", "1947", "1951", "1955"],
    answer: 1,
  },
  {
    q: "¿Cómo se llamó el primer avión a reacción fabricado en América Latina?",
    options: ["Cóndor III", "Pulqui I", "Pucará", "Wing II"],
    answer: 1,
  },
  {
    q: "¿Qué derecho laboral nació en 1945?",
    options: [
      "Jubilación a los 50",
      "Aguinaldo y vacaciones pagas",
      "Licencia por mudanza",
      "Semana de 6 días",
    ],
    answer: 1,
  },
  {
    q: "¿Quién encabezó el reclamo por el voto femenino?",
    options: ["Victoria Ocampo", "Eva Perón", "Alicia Moreau", "Evita Duarte"],
    answer: 1,
  },
  {
    q: "¿Qué se creó en 1950 para el desarrollo nuclear?",
    options: [
      "La CNEA",
      "El CONICET",
      "La NASA argentina",
      "El INTI",
    ],
    answer: 0,
  },
  {
    q: "¿Cuántos años duró la proscripción del peronismo después de 1955?",
    options: ["10 años", "12 años", "18 años", "25 años"],
    answer: 2,
  },
];

export const stats = [
  {
    emoji: "💰",
    title: "Aguinaldo y vacaciones pagas",
    year: "desde 1945",
  },
  {
    emoji: "🗳️",
    title: "Voto femenino",
    year: "desde 1947",
  },
  {
    emoji: "✈️",
    title: "Primer avión a reacción de América Latina",
    year: "1947",
  },
];

export const quotes = [
  {
    text: "La doctrina justicialista es esencialmente humana y pone al hombre como fin de toda la economía.",
    author: "Juan D. Perón",
  },
  {
    text: "Donde existe una necesidad, nace un derecho.",
    author: "Eva Perón",
  },
];
