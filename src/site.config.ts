// Central place for the handful of values that change per-environment.

export const SITE = {
  title: 'DnR Dispatch Research',
  wordmark: 'DnR',
  subtitle: 'Dispatch Research',
  tagline: 'Independent Market Research — US Equities · Macro · Strategy',
  description: 'Independent Market Research — US Equities · Macro · Strategy',
  url: 'https://dnrdispatch.com',
  buttondownUsername: 'Dnrdispatchresearch',
};

export const SECTIONS = [
  { slug: 'markets', label: 'Markets' },
  { slug: 'macro', label: 'Macro' },
  { slug: 'earnings-watch', label: 'Earnings Watch' },
  { slug: 'strategy-notes', label: 'Strategy Notes' },
] as const;

export type SectionSlug = (typeof SECTIONS)[number]['slug'];

export function sectionLabel(slug: string): string {
  return SECTIONS.find((s) => s.slug === slug)?.label ?? slug;
}
