import type { Localized } from '../i18n/ui';
import type { IconName } from '../components/Icon.astro';

/**
 * ✏️ Tu stack tecnológico (inicio y /cv).
 */
export const skillGroups: { title: Localized; icon: IconName; items: string[] }[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    icon: 'code',
    items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    title: { es: 'Frontend', en: 'Frontend' },
    icon: 'layout',
    items: ['Vue.js', 'React', 'Blazor', 'HTML5', 'CSS3', 'Bootstrap', 'XAML'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    icon: 'server',
    items: ['.NET', 'Node.js', 'Flask', 'APIs REST'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    icon: 'database',
    items: ['SQL Server', 'PostgreSQL', 'Oracle', 'MySQL', 'SQLite'],
  },
  {
    title: { es: 'Cloud', en: 'Cloud' },
    icon: 'cloud',
    items: ['AWS', 'Microsoft Azure', 'Lambda', 'API Gateway', 'S3', 'Amazon SES'],
  },
  {
    title: { es: 'Herramientas y metodologías', en: 'Tools & methodologies' },
    icon: 'tool',
    items: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Scrum', 'Kanban'],
  },
];

/** Fundamentos (se muestran en /cv). */
export const fundamentals: Localized = {
  es: 'Programación orientada a objetos, estructuras de datos, lógica de negocio y diseño de APIs.',
  en: 'Object-oriented programming, data structures, business logic and API design.',
};
