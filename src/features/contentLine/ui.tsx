import Link from 'next/link';

import classes from './style.module.scss';

import { Arrow } from './Arrow';

interface Props {
  title: string;
  description: string;
  footer?: string;
  href?: string;
}

export function ContentLine({
  title,
  description,
  footer,
  href,
}: Props) {
  if (!title || !description) {
    return null;
  }
  if (!href) {
    return (
      <div className={classes.contentLine}>
        <div>
          <span className={classes.contentLine__header}>
            {title}
          </span>
          <span className={classes.contentLine__description}>
            {description}
          </span>
          {!footer ? null : (
            <span className={classes.contentLine__footer}>
              {footer}
            </span>
          )}
        </div>
      </div>
    );
  }
  return (
    <Link href={href} className={classes.contentLine}>
      <div>
        <span className={classes.contentLine__header}>
          {title}
        </span>
        <span className={classes.contentLine__description}>
          {description}
        </span>
        {!footer ? null : (
          <span className={classes.contentLine__footer}>
            {footer}
          </span>
        )}
      </div>
      <Arrow />
    </Link>
  );
}
