# Portafolio — Vanesa · Full Stack Developer

Portafolio personal bilingüe (ES/EN), hecho con **Astro 7**, **Tailwind CSS 4** y **TypeScript**. Sitio 100 % estático, optimizado para SEO y desplegado en **Vercel**.

## Stack

- [Astro](https://astro.build) — sitio estático, cero JS innecesario, i18n integrado
- [Tailwind CSS v4](https://tailwindcss.com) — estilos con tokens de tema claro/oscuro
- TypeScript estricto + `astro check`
- `@astrojs/sitemap`, Open Graph, JSON-LD y `hreflang` para SEO

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build a /dist
npm run preview   # sirve el build localmente
npm run og        # regenera public/og.png (imagen al compartir el link)
```

Requiere Node.js ≥ 22.12.

## ¿Dónde edito el contenido?

Todo el contenido vive en `src/data/`. No hace falta tocar los componentes:

| Archivo | Qué contiene |
| --- | --- |
| `src/data/profile.ts` | Nombre, rol, “sobre mí”, correo, redes, CV |
| `src/data/skills.ts` | Stack tecnológico por categoría |
| `src/data/projects.ts` | Proyectos (descripción ES/EN, tecnologías, links, captura) |
| `src/i18n/ui.ts` | Textos fijos de la interfaz en ambos idiomas |

**Agregar un proyecto:** guarda la captura en `src/assets/projects/` (se optimiza automáticamente a WebP/AVIF), impórtala en `projects.ts` y agrega un objeto al arreglo `projects`.

**CV:** coloca el PDF en `public/` (p. ej. `public/cv-vanesa.pdf`) y pon `cvUrl: '/cv-vanesa.pdf'` en `profile.ts`.

## Estructura

```
src/
  components/   Secciones (Hero, About, Skills, Projects, Contact…)
  data/         ✏️ Contenido editable
  i18n/         Traducciones y helpers
  layouts/      Layout base con SEO y tema
  pages/        /  (español)   /en/  (inglés)   404
  styles/       Tailwind + tokens de color
public/         favicon, og.png, robots.txt
```

## Deploy en Vercel

1. Importa el repo en [vercel.com/new](https://vercel.com/new). Astro se detecta solo.
2. Rama de producción: `main` (cada push a `Dev` genera un preview).
3. Cuando tengas el dominio final, actualízalo en `astro.config.mjs` (`SITE`), `public/robots.txt` y `scripts/generate-og.mjs`.
