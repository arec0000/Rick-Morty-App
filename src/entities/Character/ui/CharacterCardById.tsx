import { getOneById } from '@/shared/api/RickAndMorty';

import { CharacterCard } from './CharacterCard';

interface Props {
  id: string;
}

export async function CharacterCardById({ id }: Props) {
  const character = await getOneById('character', id);
  return (
    <CharacterCard
      href={`/characters/${id}`}
      thumbnail={character.image}
      name={character.name}
      species={character.species}
    />
  );
}
