import React from 'react';
import { PaginationButton } from '@/features/pagination';

import classes from './style.module.scss';

interface Props {
  children: React.ReactNode[];
  columns: number;
  className?: string;
  pagination?: boolean;
}

export function Feed({
  children,
  columns,
  className,
  pagination,
}: Props) {
  return (
    <div className={className}>
      <div className={classes.feed__content} style={{ gridTemplateRows: `{repeat(${columns}, 1fr)}` }}>
        {children}
      </div>
      {!pagination ? null : (
        <div className={classes.feed__pagination}>
          <PaginationButton>LOAD MORE</PaginationButton>
        </div>
      )}
    </div>
  );
}
