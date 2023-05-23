import { makeUrl } from '@/shared/helpers';
import { Location } from '../types';

const { API_BASE } = process.env;

interface Data {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  };
  results: Location[];
}

type Options = Partial<Record<'name' | 'type' | 'dimension' | 'page', string>>;

export async function getLocations(options?: Options): Promise<Data> {
  if (!API_BASE) {
    throw new Error('API_BASE is not defined, look at your .env file');
  }

  const url = makeUrl(`${API_BASE}/location`, options);

  const res = await fetch(url, { next: { revalidate: 600 } });
  const data = await res.json() as Data;

  return data;
}
