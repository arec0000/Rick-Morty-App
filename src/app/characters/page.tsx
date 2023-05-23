import Image from 'next/image';
import { Feed } from '@/widgets/feed';
import { CharacterCard, getCharacters } from '@/entities/Character';

import classes from './style.module.scss';

import banner from './assets/banner.png';

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function CharactersPage({ searchParams: { page } }: Props) {
  const characters = await getCharacters({ page });
  return (
    <div className={classes.characterPage}>
      <div className={classes.characterPage__banner}>
        <Image src={banner} alt="Rick & Morty banner" fill />
      </div>
      <Feed columns={3} className={classes.characterPage__feed} pagination>
        {characters.results.slice(0, 3 * 4).map((character) => (
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
