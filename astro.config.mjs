// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: cuando Vercel te asigne el dominio (o compres uno propio), actualízalo aquí.
const SITE = 'https://vanesaghdez.vercel.app';

export default defineConfig({
  site: SITE,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX', en: 'en-US' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
