import { GoBack } from '@/features/goBack';
import { Feed } from '@/widgets/feed';
import { CharacterCardById } from '@/entities/Character';

import { getOneById } from '@/shared/api/RickAndMortyApi';

import { getIdFormUrl } from '@/shared/helpers';

import classes from './page.module.scss';

interface Props {
  params: {
    id: string
  };
}

export default async function singleEpisodePage({ params: { id } }: Props) {
  const episode = await getOneById('episodes', id);

  return (
    <div>
      <div className={classes.singleLocationPage__top}>
        <GoBack className={classes.singleLocationPage__link} />
        <div>
          <h1 className={classes.singleLocationPage__title}>
            {episode.name}
          </h1>
          <div className={classes.singleLocationPage__subinfo}>
            <div>
              <span className={classes.singleLocationPage__subtitle}>
                Episode
              </span>
              <span className={classes.singleLocationPage__text}>
                {episode.episode}
              </span>
            </div>
            <div>
              <span className={classes.singleLocationPage__subtitle}>
                Date
              </span>
              <span className={classes.singleLocationPage__text}>
                {episode.air_date}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Feed
        title="Cast"
        columns={3}
        className={classes.singleLocationPage__feed}
      >
        {episode.characters.slice(0, 3 * 4).map((characterUrl) => {
          // @ts-expect-error Server Component
          const el = <CharacterCardById id={getIdFormUrl(characterUrl)} />;
          return el;
        })}
      </Feed>
    </div>
  );
}
