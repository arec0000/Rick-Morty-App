import Link from 'next/link';

import classes from './ContentCard.module.scss';

interface Props {
  href: string;
  title: string;
  description: string;
  footer?: string;
  img?: string;
}

export function ContentCard({
  href,
  title,
  description,
  footer,
  img,
}: Props) {
  return (
    <Link href={href} className={classes.card}>

      {!img ? null : (
        <div className={classes.card__img}>
          <img src={img} alt={title} />
        </div>
      )}

      <h3 className={classes.card__title}>
        {title}
      </h3>

      <span className={classes.card__description}>
        {description}
      </span>

      {!footer ? null : (
        <span className={classes.card__footer}>
          {footer}
        </span>
      )}

    </Link>
  );
}
