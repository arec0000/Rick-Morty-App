import React from 'react';
import clsx from 'clsx';

import classes from './ContentContainer.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ContentContainer({ children, className }: Props) {
  return (
    <div className={clsx(classes.contentContainer, className)}>
      {children}
    </div>
  );
}
