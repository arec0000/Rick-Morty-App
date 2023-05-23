import { GoBack } from '@/features/goBack';
import { Feed } from '@/widgets/feed';
import { CharacterCardById } from '@/entities/Character';

import { getLocationById } from '@/entities/Location';

import { getIdFormUrl } from '@/shared/helpers';

import classes from './page.module.scss';

interface Props {
  params: {
    id: string
  };
}

export default async function singleLocationPage({ params: { id } }: Props) {
  const location = await getLocationById(id);

  return (
    <div>
      <div className={classes.singleLocationPage__top}>
        <GoBack className={classes.singleLocationPage__link} />
        <div>
          <h1 className={classes.singleLocationPage__title}>
            {location.name}
          </h1>
          <div className={classes.singleLocationPage__subinfo}>
            <div>
              <span className={classes.singleLocationPage__subtitle}>
                Type
              </span>
              <span className={classes.singleLocationPage__text}>
                {location.type}
              </span>
            </div>
            <div>
              <span className={classes.singleLocationPage__subtitle}>
                Dimension
              </span>
              <span className={classes.singleLocationPage__text}>
                {location.dimension}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Feed
        title="Residents"
        columns={3}
        className={classes.singleLocationPage__feed}
      >
        {location.residents.slice(0, 3 * 4).map((characterUrl) => {
          // @ts-expect-error Server Component
          const el = <CharacterCardById id={getIdFormUrl(characterUrl)} />;
          return el;
        })}
      </Feed>
    </div>
  );
}
