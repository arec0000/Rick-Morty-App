import Image from 'next/image';
import { Feed } from '@/widgets/feed';
import { CharacterCard, getCharacters } from '@/entities/Character';

import classes from './style.module.scss';

import banner from './assets/banner.png';

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <div className={classes.characterPage}>
      <div className={classes.characterPage__banner}>
        <Image src={banner} alt="Rick & Morty banner" fill />
      </div>
      <Feed columns={3} className={classes.characterPage__feed}>
        {characters.results.slice(0, 3 * 4).map((character) => (
          <CharacterCard
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
