import { useRef } from 'react';

export function useDebounce(): (func: () => void) => void {
  const timer = useRef<NodeJS.Timeout | null>(null);
  return (func) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(func, 300);
  };
}
