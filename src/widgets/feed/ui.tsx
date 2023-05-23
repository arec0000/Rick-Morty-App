import React from 'react';

import classes from './style.module.scss';

interface Props {
  children: React.ReactNode[];
  columns: number;
  className?: string;
}

export function Feed({ children, columns, className }: Props) {
  return (
    <div className={className}>
      <div className={classes.feed__content} style={{ gridTemplateRows: `{repeat(${columns}, 1fr)}` }}>
        {children}
      </div>
    </div>
  );
}
