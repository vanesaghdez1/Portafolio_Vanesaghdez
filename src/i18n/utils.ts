import { defaultLang, ui, type Lang, type Localized, type UIKey } from './ui';

export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale && currentLocale in ui ? (currentLocale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Devuelve el texto en el idioma actual de un campo `Localized`. */
export function l(value: Localized, lang: Lang): string {
  return value[lang] ?? value[defaultLang];
}
