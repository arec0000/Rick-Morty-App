import { makeUrl } from '@/shared/helpers';
import { Character, Location, Episode } from './types';

const { API_BASE } = process.env;

interface Data<T extends 'character' | 'location' | 'episode'> {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  };
  results:
    T extends 'character' ?
      Character[]
    : T extends 'location' ?
      Location[]
    : Episode[];
}

type CharactersOptions = Record<'name' | 'species' | 'gender' | 'status' | 'page', string>;
type LocationsOptions = Record<'name' | 'type' | 'dimension' | 'page', string>;
type EpisodesOptions = Record<'name' | 'page', string>;

type Options<T extends 'character' | 'location' | 'episode'> = Partial<
  T extends 'character' ?
    CharactersOptions
  : T extends 'location' ?
    LocationsOptions
  : EpisodesOptions
>;

export async function getMany<T extends 'character' | 'location' | 'episode'>(
  type: T,
  options?: Options<T>,
): Promise<Data<T>> {
  if (!API_BASE) {
    throw new Error('API_BASE is not defined, look at your .env file');
  }

  const url = makeUrl(`${API_BASE}/${type}`, options);

  const res = await fetch(url, { next: { revalidate: 600 } });
  const data = await res.json() as Data<T>;

  return data;
}
