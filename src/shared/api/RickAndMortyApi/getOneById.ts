import { Character, Location, Episode } from './types';

const { API_BASE } = process.env;

type Data<T extends 'character' | 'location' | 'episodes'> =
  T extends 'character' ?
    Character
  : T extends 'location' ?
    Location
  : Episode;

export async function getOneById<T extends 'character' | 'location' | 'episodes'>(
  type:T,
  id: string,
): Promise<Data<T>> {
  if (!API_BASE) {
    throw new Error('API_BASE is not defined, look at your .env file');
  }

  const res = await fetch(`${API_BASE}/${type}/${id}`, { next: { revalidate: 600 } });
  const data = await res.json() as Data<T>;

  return data;
}
