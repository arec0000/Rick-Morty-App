'use client';

import { useNextPage } from './useNextPage';

import classes from './style.module.scss';

interface Props {
  children: string;
}

export function PaginationButton({ children }: Props) {
  const { next, prefetch } = useNextPage();
  return (
    <button
      type="button"
      className={classes.paginationButton}
      onClick={next}
      onMouseEnter={prefetch}
    >
      {children}
    </button>
  );
}
