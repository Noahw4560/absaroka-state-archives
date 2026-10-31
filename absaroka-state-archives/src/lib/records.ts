import { getCollection } from 'astro:content';

export const SECTIONS = ['people','organizations','publications','legislation','events'] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_TITLES: Record<Section,string> = {
  people: 'Public figures',
  organizations: 'Parties & associations',
  publications: 'Statements & press',
  legislation: 'Laws & proposals',
  events: 'Historic events',
};

export const STATUS_LABELS: Record<string,string> = {
  official: 'Official record',
  documented: 'Source document',
  attributed: 'Attributed statement',
  unverified: 'Disputed / unverified',
  proposed: 'Proposal / draft',
};

export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function recordLink(section: Section, id: string) {
  return withBase(`/records/${section}/${id}/`);
}

export async function allRecords() {
  const groups = await Promise.all(SECTIONS.map(async section => {
    const entries = await getCollection(section);
    return entries.filter(e => e.data.published).map(entry => ({ section, entry }));
  }));
  return groups.flat().sort((a,b) => (b.entry.data.sortDate || '').localeCompare(a.entry.data.sortDate || '') || a.entry.data.title.localeCompare(b.entry.data.title));
}

export async function recordsFor(section: Section) {
  const entries = await getCollection(section);
  return entries.filter(e => e.data.published).sort((a,b) => (b.data.sortDate || '').localeCompare(a.data.sortDate || '') || a.data.title.localeCompare(b.data.title));
}

export function allKeywords(item: {title:string,summary:string,tags:string[],affiliation?:string,location?:string}) {
  return [item.title,item.summary,item.affiliation,item.location,...item.tags].filter(Boolean).join(' ').toLowerCase();
}
