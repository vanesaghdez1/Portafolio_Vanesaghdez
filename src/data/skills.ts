import type { Localized } from '../i18n/ui';

/**
 * ✏️ Tu stack. TODO: ajusta las tecnologías a las que realmente dominas.
 */
export const skillGroups: { title: Localized; icon: 'layout' | 'server' | 'database' | 'tool'; items: string[] }[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    icon: 'layout',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    icon: 'server',
    items: ['Node.js', 'Express', 'REST APIs', 'C# / .NET', 'Auth (JWT)'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    icon: 'database',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Stored Procedures', 'Prisma'],
  },
  {
    title: { es: 'Herramientas', en: 'Tooling' },
    icon: 'tool',
    items: ['Git & GitHub', 'Vercel', 'Docker', 'Postman', 'VS Code', 'Figma'],
  },
];
