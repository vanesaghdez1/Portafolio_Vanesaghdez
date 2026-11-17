import type { Localized } from '../i18n/ui';

/**
 * ✏️ Experiencia, formación, certificaciones, idiomas y competencias.
 * Se muestran en el inicio y en la página /cv.
 */

export interface Experience {
  role: Localized;
  company: string;
  location?: Localized;
  period: Localized;
  current?: boolean;
  /** Logros/responsabilidades. En el inicio se muestran los primeros `homeBullets`. */
  bullets: Localized[];
  tech: string[];
}

/** Cuántos puntos de cada experiencia se ven en el inicio (en /cv se ven todos). */
export const homeBullets = 3;

export const experience: Experience[] = [
  {
    role: { es: 'Desarrolladora de Software', en: 'Software Developer' },
    company: 'Refactory Software',
    location: { es: 'Ciudad de México', en: 'Mexico City' },
    period: { es: 'Ene 2026 — Actualidad', en: 'Jan 2026 — Present' },
    current: true,
    bullets: [
      {
        es: 'Desarrollo Full Stack de aplicaciones empresariales con C#, .NET y tecnologías JavaScript, incluyendo desarrollo web con Vue.js.',
        en: 'Full Stack development of enterprise applications with C#, .NET and JavaScript technologies, including web development with Vue.js.',
      },
      {
        es: 'Conducción de reuniones con clientes para el levantamiento y análisis de requerimientos y la comprensión de procesos de negocio.',
        en: 'Leading client meetings to gather and analyze requirements and understand business processes.',
      },
      {
        es: 'Traducción de requerimientos funcionales en soluciones técnicas y funcionalidades de software.',
        en: 'Translating functional requirements into technical solutions and software features.',
      },
      {
        es: 'Implementación, integración y mantenimiento de funcionalidades para aplicaciones empresariales.',
        en: 'Implementing, integrating and maintaining features for enterprise applications.',
      },
      {
        es: 'Análisis y resolución de incidencias, y mejora continua de aplicaciones existentes.',
        en: 'Troubleshooting and resolving incidents, and continuously improving existing applications.',
      },
      {
        es: 'Gestión y seguimiento del desarrollo con Azure DevOps y Git, en equipos multidisciplinarios bajo metodologías ágiles.',
        en: 'Managing and tracking development with Azure DevOps and Git, in cross-functional teams using agile methodologies.',
      },
    ],
    tech: ['C#', '.NET', 'Vue.js', 'JavaScript', 'Azure DevOps', 'Git', 'Scrum'],
  },
  {
    role: {
      es: 'Desarrolladora de Software (Servicio Social y Trabajo Técnico)',
      en: 'Software Developer (Social Service & Technical Work)',
    },
    company: 'SEDPCSA',
    period: { es: 'Sep 2024 — Jun 2025', en: 'Sep 2024 — Jun 2025' },
    bullets: [
      {
        es: 'Desarrollo de funcionalidades y lógica de negocio para sistemas internos con C# y .NET.',
        en: 'Developed features and business logic for internal systems using C# and .NET.',
      },
      {
        es: 'Diseño, desarrollo y mantenimiento de interfaces para aplicaciones de escritorio con XAML.',
        en: 'Designed, built and maintained desktop application interfaces with XAML.',
      },
      {
        es: 'Implementación de interfaces adaptables y funcionalidades de acuerdo con los requerimientos de los sistemas.',
        en: 'Implemented responsive interfaces and features according to system requirements.',
      },
    ],
    tech: ['C#', '.NET', 'XAML'],
  },
];

export const education = [
  {
    degree: { es: 'Ingeniería en Computación', en: 'B.Eng. in Computer Engineering' },
    school: 'Instituto Politécnico Nacional — ESIME Culhuacán',
    period: { es: 'Ago 2021 — Jul 2025', en: 'Aug 2021 — Jul 2025' },
    note: {
      es: 'Examen profesional aprobado; título en trámite.',
      en: 'Professional exam passed; degree being issued.',
    },
  },
] satisfies { degree: Localized; school: string; period: Localized; note?: Localized }[];

export const certifications: { name: Localized; status?: Localized }[] = [
  {
    name: { es: 'AWS Certified Solutions Architect — Associate', en: 'AWS Certified Solutions Architect — Associate' },
    status: { es: 'En preparación', en: 'In progress' },
  },
  { name: { es: 'Microsoft Azure AI Fundamentals (AI-900)', en: 'Microsoft Azure AI Fundamentals (AI-900)' } },
  { name: { es: 'Python Essentials — Coursera', en: 'Python Essentials — Coursera' } },
  { name: { es: 'Taller de Liderazgo y Trabajo en Equipo — IPN', en: 'Leadership & Teamwork Workshop — IPN' } },
];

export const languagesSpoken: { name: Localized; level: Localized }[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2', en: 'B2 (Upper-intermediate)' } },
];

export const softSkills: Localized[] = [
  { es: 'Análisis y pensamiento crítico', en: 'Analytical & critical thinking' },
  { es: 'Comunicación efectiva', en: 'Effective communication' },
  { es: 'Resolución de problemas', en: 'Problem solving' },
  { es: 'Trabajo colaborativo', en: 'Teamwork' },
  { es: 'Adaptabilidad', en: 'Adaptability' },
  { es: 'Organización y seguimiento', en: 'Organization & follow-through' },
];
