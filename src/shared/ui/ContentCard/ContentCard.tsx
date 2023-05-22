import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import classes from './ContentCard.module.scss';

interface Props {
  href: string;
  title: string;
  description: string;
  footer?: string;
  img?: StaticImageData;
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
          <Image src={img} alt={title} fill />
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
