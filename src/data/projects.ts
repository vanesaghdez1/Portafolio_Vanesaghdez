import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';

export interface Project {
  /** Identificador único, en minúsculas y sin espacios. */
  slug: string;
  title: Localized;
  description: Localized;
  /** Tecnologías principales (se muestran como etiquetas). */
  tech: string[];
  status: 'live' | 'wip' | 'academic';
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
  /** Destacado = tarjeta a lo ancho. */
  featured?: boolean;
  /** Puntos detallados. Solo los proyectos con `highlights` aparecen en /cv. */
  highlights?: Localized[];
}

/**
 * ✏️ Tus proyectos, en el orden en que quieres que aparezcan.
 */
export const projects: Project[] = [
  {
    slug: 'order-management-aws',
    title: { es: 'Order Management System en AWS', en: 'Order Management System on AWS' },
    description: {
      es: 'Sistema empresarial distribuido construido por seis equipos integrados, con servicios serverless en AWS y endpoints REST para la comunicación entre módulos.',
      en: 'Distributed enterprise system built by six integrated teams, using serverless AWS services and REST endpoints for inter-module communication.',
    },
    tech: ['AWS Lambda', 'API Gateway', 'Amazon S3', 'Amazon SES'],
    status: 'academic',
    featured: true,
    highlights: [
      {
        es: 'Colaboración en un sistema empresarial distribuido mediante la integración de seis equipos de trabajo.',
        en: 'Collaborated on a distributed enterprise system integrating the work of six teams.',
      },
      {
        es: 'Implementación de servicios y endpoints REST para la comunicación e integración entre módulos.',
        en: 'Implemented services and REST endpoints for communication and integration between modules.',
      },
      {
        es: 'Integración de servicios cloud para el procesamiento y gestión de operaciones del sistema.',
        en: 'Integrated cloud services to process and manage system operations.',
      },
    ],
  },
  {
    slug: 'prnu-retina',
    title: {
      es: 'Estandarización de imágenes médicas con PRNU',
      en: 'Medical image standardization with PRNU',
    },
    description: {
      es: 'Herramientas de análisis de imágenes de retina que agrupan fotografías según el patrón de ruido de su sensor (PRNU), para mejorar la comparabilidad de mediciones de oximetría retiniana.',
      en: 'Retinal image analysis tools that cluster photos by their sensor noise pattern (PRNU) to improve the comparability of retinal oximetry measurements.',
    },
    tech: ['Python', 'Computer Vision', 'Clustering'],
    status: 'academic',
    highlights: [
      {
        es: 'Desarrollo de herramientas para el procesamiento y análisis computacional de imágenes de retina.',
        en: 'Built tools for processing and computational analysis of retinal images.',
      },
      {
        es: 'Aplicación de análisis forense de sensores (PRNU) y agrupamiento no supervisado para organizar imágenes por similitud de su patrón de ruido.',
        en: 'Applied sensor forensics (PRNU) and unsupervised clustering to group images by noise-pattern similarity.',
      },
      {
        es: 'Evaluación del efecto de la agrupación en la comparabilidad de mediciones de oximetría retiniana.',
        en: 'Evaluated how clustering affects the comparability of retinal oximetry measurements.',
      },
    ],
  },
  {
    slug: 'crud-empresarial',
    title: { es: 'Sistema CRUD empresarial', en: 'Enterprise CRUD system' },
    description: {
      es: 'Aplicación empresarial con operaciones CRUD, lógica de negocio, validaciones y consultas SQL sobre Oracle Database.',
      en: 'Enterprise application with CRUD operations, business logic, validations and SQL queries on Oracle Database.',
    },
    tech: ['C#', 'Oracle Database', 'SQL'],
    status: 'academic',
    highlights: [
      {
        es: 'Desarrollo de una aplicación empresarial con operaciones CRUD, lógica de negocio y validaciones.',
        en: 'Developed an enterprise application with CRUD operations, business logic and validations.',
      },
      {
        es: 'Implementación de consultas SQL para la gestión y manipulación de información.',
        en: 'Implemented SQL queries to manage and manipulate data.',
      },
    ],
  },
  {
    slug: 'citas-app',
    title: { es: 'Citas App', en: 'Appointments App' },
    description: {
      // TODO: descripción real cuando el proyecto esté listo
      es: 'Aplicación para agendar y administrar citas: calendario de disponibilidad, reservas y gestión de clientes.',
      en: 'App to schedule and manage appointments: availability calendar, bookings and client management.',
    },
    tech: [], // TODO: p. ej. ['Vue.js', '.NET', 'PostgreSQL']
    status: 'wip',
    demoUrl: '', // TODO: 'https://citas-app.vercel.app'
    repoUrl: '', // TODO: URL del repo (si es público)
    featured: true,
  },
];
