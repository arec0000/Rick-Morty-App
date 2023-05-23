import { Character } from '../types';

const { API_BASE } = process.env;

export async function getCharacterById(id: string): Promise<Character> {
  if (!API_BASE) {
    throw new Error('API_BASE is not defined, look at your .env file');
  }

  const res = await fetch(`${API_BASE}/character/${id}`, { next: { revalidate: 600 } });
  const data = await res.json() as Character;

  return data;
}
