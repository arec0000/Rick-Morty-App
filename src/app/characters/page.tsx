import Image from 'next/image';
import { Feed } from '@/widgets/feed';
import { CharacterCard, getCharacters } from '@/entities/Character';

import classes from './style.module.scss';

import { filters } from './consts';

import banner from './assets/banner.png';

interface Props {
  searchParams: {
    page?: string;
    name?: string;
    species?: string;
    gender?: string;
    status?: string;
  }
}

export default async function CharactersPage({
  searchParams: {
    page,
    name,
    species,
    gender,
    status,
  },
}: Props) {
  const characters = await getCharacters({
    page,
    name,
    species,
    gender,
    status,
  });
  return (
    <div className={classes.characterPage}>
      <div className={classes.characterPage__banner}>
        <Image src={banner} alt="Rick & Morty banner" fill />
      </div>
      <Feed
        className={classes.characterPage__feed}
        columns={3}
        pagination
        filters={filters}
      >
        {characters.results?.slice(0, 3 * 4).map((character) => (
          <CharacterCard
            key={character.id}
            url={character.url}
            name={character.name}
            thumbnail={character.image}
            species={character.species}
          />
        ))}
      </Feed>
    </div>
  );
}
