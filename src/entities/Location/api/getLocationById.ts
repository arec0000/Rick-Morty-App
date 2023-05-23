import { Location } from '../types';

const { API_BASE } = process.env;

export async function getLocationById(id: string): Promise<Location> {
  if (!API_BASE) {
    throw new Error('API_BASE is not defined, look at your .env file');
  }

  const res = await fetch(`${API_BASE}/location/${id}`, { next: { revalidate: 600 } });
  const data = await res.json() as Location;

  return data;
}
