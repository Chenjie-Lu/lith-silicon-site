import { translations } from '../i18n/translations';

export type Locale = 'zh' | 'en';

export function useLocale(): Locale {
  const params = new URLSearchParams(window.location.search);
  const locale = params.get('lang');
  return (locale === 'en' ? 'en' : 'zh') as Locale;
}

export function t(key: string, locale: Locale = 'zh'): string {
  const keys = key.split('.');
  let obj = translations[locale];
  for (const k of keys) {
    if (obj && obj[k] !== undefined) {
      obj = obj[k];
    } else {
      return key;
    }
  }
  return typeof obj === 'string' ? obj : key;
}

export function getLocaleFromURL(): Locale {
  const params = new URLSearchParams(window.location.search);
  const locale = params.get('lang');
  return (locale === 'en' ? 'en' : 'zh') as Locale;
}
