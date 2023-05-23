import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function useSetSeachParam(): (key: string, value: string) => void {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const params = new URLSearchParams(Array.from(search.entries()));

  return (key, value) => {
    params.set(key, value);
    const nextUrl = `${pathname}?${params.toString()}`;
    router.push(nextUrl);
  };
}
