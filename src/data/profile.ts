import type { Localized } from '../i18n/ui';

/**
 * ✏️ Tus datos personales. Todo lo marcado con TODO es un placeholder.
 */
export const profile = {
  name: 'Vanesa', // TODO: nombre como quieres que aparezca (p. ej. "Vanesa González")
  initials: 'VG', // TODO: se usa en el logo del header
  role: {
    es: 'Full Stack Developer',
    en: 'Full Stack Developer',
  } satisfies Localized,
  tagline: {
    es: 'Construyo aplicaciones web completas: interfaces cuidadas, APIs sólidas y bases de datos bien diseñadas.',
    en: 'I build complete web applications: polished interfaces, solid APIs and well-designed databases.',
  } satisfies Localized,
  location: {
    es: 'México', // TODO
    en: 'Mexico',
  } satisfies Localized,
  available: true, // muestra el badge "Disponible para nuevos proyectos"
  email: 'tu-correo@ejemplo.com', // TODO
  /** Ruta a tu CV dentro de /public (p. ej. '/cv-vanesa.pdf'). Vacío = se oculta el botón. */
  cvUrl: '',
  socials: {
    github: 'https://github.com/vanesaghdez1',
    linkedin: '', // TODO: 'https://www.linkedin.com/in/tu-usuario'
  },
  /** Párrafos de "Sobre mí". */
  about: [
    {
      es: 'Soy desarrolladora Full Stack. Disfruto llevar una idea desde el diseño de la base de datos hasta una interfaz que la gente quiera usar.',
      en: 'I am a Full Stack developer. I enjoy taking an idea all the way from database design to an interface people actually want to use.',
    },
    {
      es: 'Me importa el código limpio, el rendimiento y los detalles de experiencia de usuario. Siempre estoy aprendiendo algo nuevo y aplicándolo en proyectos reales.',
      en: 'I care about clean code, performance and the small UX details. I am always learning something new and applying it to real projects.',
    },
  ] satisfies Localized[],
  /** Datos rápidos que aparecen junto a "Sobre mí". */
  highlights: [
    { value: '+3', label: { es: 'años programando', en: 'years coding' } }, // TODO
    { value: 'Full', label: { es: 'stack, de la BD a la UI', en: 'stack, DB to UI' } },
    { value: 'ES/EN', label: { es: 'idiomas', en: 'languages' } },
  ] satisfies { value: string; label: Localized }[],
};
