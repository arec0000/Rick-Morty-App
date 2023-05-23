import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function useNextPage(): {
  prefetch: () => void,
  next: () => void
  } {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const params = new URLSearchParams(Array.from(search.entries()));

  const currentPage = params.get('page');

  if (currentPage) {
    params.set('page', (+currentPage + 1).toString());
  } else {
    params.set('page', '2');
  }

  const nextUrl = `${pathname}?${params.toString()}`;

  return {
    prefetch: () => {
      router.prefetch(nextUrl);
    },
    next: () => {
      router.push(nextUrl);
    },
  };
}
