'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ContentContainer } from '@/shared/ui';

import { routes } from './confing';

import classes from './style.module.scss';

import logo from './assets/logo.png';

export function Header() {
  const pathname = usePathname();
  return (
    <header className={classes.header}>
      <ContentContainer className={classes.header__container}>
        <div className={classes.header__img}>
          <Image src={logo} alt="logo" fill />
        </div>
        <nav>
          <ul className={classes.header__links}>
            {routes.map((route) => (
              <li key={route.id}>
                <Link
                  href={route.href}
                  className={clsx(classes.header__link, {
                    [classes.header__link_active]: pathname.startsWith(route.href),
                  })}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ContentContainer>
    </header>
  );
}
