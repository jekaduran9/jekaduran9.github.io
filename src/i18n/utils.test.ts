import { describe, it, expect } from 'vitest';
import {
  getLangFromUrl,
  useTranslations,
  useTranslatedPath,
  getCleanPathname,
} from './utils';

const url = (path: string) => new URL(`http://localhost${path}`);

describe('getLangFromUrl', () => {
  it('returns default lang (es) for the site root', () => {
    expect(getLangFromUrl(url('/'))).toBe('es');
  });

  it('returns default lang for ES inner pages', () => {
    expect(getLangFromUrl(url('/about'))).toBe('es');
    expect(getLangFromUrl(url('/projects/salonomi'))).toBe('es');
  });

  it('returns en when path is prefixed with /en', () => {
    expect(getLangFromUrl(url('/en/'))).toBe('en');
    expect(getLangFromUrl(url('/en/about'))).toBe('en');
    expect(getLangFromUrl(url('/en/projects/salonomi-en'))).toBe('en');
  });

  it('falls back to default lang for unknown locale prefixes', () => {
    expect(getLangFromUrl(url('/fr/about'))).toBe('es');
  });
});

describe('useTranslations', () => {
  it('returns ES strings for ES lang', () => {
    const t = useTranslations('es');
    expect(t('hero.title')).toBe('Hola, soy Jessica Durán');
    expect(t('nav.about')).toBe('Sobre mí');
  });

  it('returns EN strings for EN lang', () => {
    const t = useTranslations('en');
    expect(t('hero.title')).toBe("Hello, I'm Jessica Durán");
    expect(t('nav.about')).toBe('About');
  });

  it('falls back to default lang when a key is missing', () => {
    const t = useTranslations('en');
    // Cast to bypass the strict key type — we want to test the runtime fallback
    expect(t('does.not.exist' as Parameters<typeof t>[0])).toBe(undefined);
  });
});

describe('useTranslatedPath', () => {
  it('returns ES paths without a locale prefix', () => {
    const tp = useTranslatedPath('es');
    expect(tp('/')).toBe('/');
    expect(tp('/about')).toBe('/about');
  });

  it('prefixes EN paths with /en', () => {
    const tp = useTranslatedPath('en');
    expect(tp('/about')).toBe('/en/about');
    expect(tp('/contact')).toBe('/en/contact');
  });

  it('appends -en to project slugs when translating to EN', () => {
    const tp = useTranslatedPath('en');
    expect(tp('/projects/salonomi')).toBe('/en/projects/salonomi-en');
  });

  it('strips -en from project slugs when translating to ES', () => {
    const tp = useTranslatedPath('es');
    expect(tp('/projects/salonomi-en')).toBe('/projects/salonomi');
  });

  it('does not double-suffix a slug that already ends with -en', () => {
    const tp = useTranslatedPath('en');
    expect(tp('/projects/salonomi-en')).toBe('/en/projects/salonomi-en');
  });

  it('respects an explicit override language', () => {
    const tp = useTranslatedPath('es');
    expect(tp('/about', 'en')).toBe('/en/about');
  });

  it('does not modify the bare /projects/ path', () => {
    const tp = useTranslatedPath('en');
    expect(tp('/projects/')).toBe('/en/projects/');
  });
});

describe('getCleanPathname', () => {
  it('returns / for the site root', () => {
    expect(getCleanPathname(url('/'))).toBe('/');
    expect(getCleanPathname(url(''))).toBe('/');
  });

  it('returns the path unchanged for ES pages', () => {
    expect(getCleanPathname(url('/about'))).toBe('/about');
    expect(getCleanPathname(url('/contact'))).toBe('/contact');
  });

  it('strips the locale prefix for EN pages', () => {
    expect(getCleanPathname(url('/en/about'))).toBe('/about');
    expect(getCleanPathname(url('/en/'))).toBe('/');
  });

  it('strips the -en suffix from project slugs', () => {
    expect(getCleanPathname(url('/projects/salonomi-en'))).toBe('/projects/salonomi');
    expect(getCleanPathname(url('/en/projects/salonomi-en'))).toBe('/projects/salonomi');
  });

  it('leaves ES project slugs untouched', () => {
    expect(getCleanPathname(url('/projects/salonomi'))).toBe('/projects/salonomi');
  });
});
