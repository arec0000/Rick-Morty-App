import React from 'react';
import { PaginationButton } from '@/features/pagination';
import { Filter, FilterProps } from '@/features/filter';

import classes from './style.module.scss';

interface Props {
  children: React.ReactNode[];
  columns: number;
  className?: string;
  pagination?: boolean;
  filters?: FilterProps[];
}

export function Feed({
  children,
  columns,
  className,
  pagination,
  filters,
}: Props) {
  return (
    <div className={className}>
      {!filters ? null : (
        <div className={classes.feed__filters}>
          {filters.map((filter) => (
            filter.type === 'search' ? ( // 😩
              <Filter
                type={filter.type}
                name={filter.name}
                placeholder={filter.placeholder}
              />
            ) : (
              <Filter
                type={filter.type}
                name={filter.name}
                placeholder={filter.placeholder}
                options={filter.options}
              />
            )))}
        </div>
      )}
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
