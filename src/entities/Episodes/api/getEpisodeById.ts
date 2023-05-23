import { Episode } from '../types';

const { API_BASE } = process.env;

export async function getEpisodeById(id: string): Promise<Episode> {
  if (!API_BASE) {
    throw new Error('API_BASE is not defined, look at your .env file');
  }

  const res = await fetch(`${API_BASE}/episode/${id}`, { next: { revalidate: 600 } });
  const data = await res.json() as Episode;

  return data;
}
