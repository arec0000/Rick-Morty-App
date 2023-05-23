'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { BackIcon } from './BackIcon';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export function GoBack({ className }: Props) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    router.back();
  }

  return (
    <a
      href=".."
      className={clsx(classes.back, className)}
      onClick={handleClick}
    >
      <BackIcon />
      <span>GO BACK</span>
    </a>
  );
}
