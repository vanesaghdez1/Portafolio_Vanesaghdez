import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';

export interface Project {
  /** Identificador único, en minúsculas y sin espacios. */
  slug: string;
  title: string;
  description: Localized;
  /** Tecnologías principales (se muestran como etiquetas). */
  tech: string[];
  status: 'live' | 'wip';
  /** URL del demo en vivo (p. ej. Vercel). Vacío = sin botón "Demo". */
  demoUrl?: string;
  /** URL del repositorio. Vacío = sin botón "Código" (útil si el repo es privado). */
  repoUrl?: string;
  /**
   * Captura del proyecto. Ponla en src/assets/projects/ e impórtala arriba, p. ej.:
   *   import citasImg from '../assets/projects/citas-app.png';
   * Sin imagen se genera una portada con degradado automáticamente.
   */
  image?: ImageMetadata;
  /** Destacado = tarjeta más grande. */
  featured?: boolean;
}

/**
 * ✏️ Tus proyectos, en el orden en que quieres que aparezcan.
 */
export const projects: Project[] = [
  {
    slug: 'citas-app',
    title: 'Citas App',
    description: {
      // TODO: descripción real del proyecto
      es: 'Aplicación para agendar y administrar citas: calendario de disponibilidad, reservas y gestión de clientes.',
      en: 'App to schedule and manage appointments: availability calendar, bookings and client management.',
    },
    tech: ['TODO', 'Stack', 'Real'], // TODO: p. ej. ['Next.js', 'TypeScript', 'PostgreSQL']
    status: 'wip',
    demoUrl: '', // TODO: 'https://citas-app.vercel.app'
    repoUrl: 'https://github.com/vanesaghdez1', // TODO: URL exacta del repo
    featured: true,
  },
];
