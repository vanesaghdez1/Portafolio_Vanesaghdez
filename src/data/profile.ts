import type { Localized } from '../i18n/ui';

/**
 * ✏️ Tus datos personales. Se usan en el inicio, en /cv y en el SEO.
 */
export const profile = {
  name: 'Vanesa González Hernández',
  /** Versión corta para el inicio y el footer. */
  shortName: 'Vanesa González',
  initials: 'VG',
  role: {
    es: 'Full Stack Software Engineer',
    en: 'Full Stack Software Engineer',
  } satisfies Localized,
  tagline: {
    es: 'Desarrollo aplicaciones web y empresariales con C#, .NET y Vue.js: desde el levantamiento de requerimientos con el cliente hasta la solución funcionando.',
    en: 'I build web and enterprise applications with C#, .NET and Vue.js: from gathering requirements with the client to a working solution.',
  } satisfies Localized,
  location: {
    es: 'Ciudad de México',
    en: 'Mexico City',
  } satisfies Localized,
  /** Muestra el badge "Abierta a nuevas oportunidades". */
  available: true,
  email: 'vanesaghdez@gmail.com',
  /**
   * Teléfono: vacío a propósito para que no quede público (spam/bots).
   * Si lo quieres en /cv, escríbelo aquí, p. ej. '953 156 2166'.
   */
  phone: '',
  socials: {
    github: 'https://github.com/vanesaghdez1',
    linkedin: 'https://www.linkedin.com/in/gonz%C3%A1lez-hern%C3%A1ndez-vanesa-a49451304',
  },
  /** Tecnologías que aparecen en la tarjeta de código del inicio. */
  heroStack: ['C#', '.NET', 'Vue.js', 'AWS'],
  /** Lo que estás aprendiendo ahora (tarjeta de código del inicio). */
  learning: 'AWS Solutions Architect',
  /** Párrafos de "Sobre mí" (también es el Perfil Profesional de /cv). */
  about: [
    {
      es: 'Ingeniera en Computación por el IPN con experiencia en desarrollo de software Full Stack, análisis de requerimientos e implementación de soluciones tecnológicas empresariales.',
      en: 'Computer Engineer from IPN with experience in Full Stack software development, requirements analysis and implementing enterprise technology solutions.',
    },
    {
      es: 'He participado en el desarrollo de aplicaciones web y empresariales con C#, .NET y JavaScript, así como en proyectos con Vue.js e integración de servicios cloud. Tengo experiencia en comunicación directa con clientes, conducción de reuniones y en convertir necesidades de negocio en soluciones técnicas.',
      en: 'I have worked on web and enterprise applications using C#, .NET and JavaScript, as well as projects with Vue.js and cloud service integration. I am experienced in working directly with clients, leading meetings and turning business needs into technical solutions.',
    },
  ] satisfies Localized[],
  /** Datos rápidos junto a "Sobre mí". */
  highlights: [
    { value: '2+', label: { es: 'años de experiencia', en: 'years of experience' } },
    { value: 'IPN', label: { es: 'Ing. en Computación', en: 'Computer Engineering' } },
    { value: 'B2', label: { es: 'nivel de inglés', en: 'English level' } },
  ] satisfies { value: string; label: Localized }[],
};
