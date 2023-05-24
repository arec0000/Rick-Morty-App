import { GoBack } from '@/features/goBack';
import { ContentLine } from '@/features/contentLine';

import { getOneById } from '@/shared/api/RickAndMortyApi';
import { EpisodeLine } from '@/entities/Episodes';

import { getIdFormUrl } from '@/shared/helpers';

import classes from './page.module.scss';

interface Props {
  params: {
    id: string
  };
}

export default async function singleCharacterPage({ params: { id } }: Props) {
  const character = await getOneById('character', id);

  return (
    <div>
      <div className={classes.singleCharacterPage__top}>
        <GoBack className={classes.singleCharacterPage__link} />
        <div className={classes.singleCharacterPage__thumbnail}>
          <img src={character.image} alt="thumbnail" />
          <h1>{character.name}</h1>
        </div>
      </div>
      <div className={classes.singleCharacterPage__info}>
        <div>
          <h2 className={classes.singleCharacterPage__title}>
            Informations
          </h2>
          <ContentLine
            title="Gender"
            description={character.gender}
          />
          <ContentLine
            title="Status"
            description={character.status}
          />
          <ContentLine
            title="Specie"
            description={character.species}
          />
          <ContentLine
            title="Origin"
            description={character.origin.name}
          />
          <ContentLine
            title="Type"
            description={character.type}
          />
          <ContentLine
            title="Location"
            description={character.location.name}
            href={`/locations/${getIdFormUrl(character.location.url)}`}
          />
        </div>
        <div>
          <h2 className={classes.singleCharacterPage__title}>
            Episodes
          </h2>
          {character.episode.slice(0, 4).map((episode) => {
            // @ts-expect-error Server Component
            const el = <EpisodeLine id={getIdFormUrl(episode)} />;
            return el;
          })}
        </div>
      </div>
    </div>
  );
}
