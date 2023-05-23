import { CharacterCard } from './CharacterCard';

import { getCharacterById } from '../api/getCharacterById';

interface Props {
  id: string;
}

export async function CharacterCardById({ id }: Props) {
  const character = await getCharacterById(id);
  return (
    <CharacterCard
      href={`/characters/${id}`}
      thumbnail={character.image}
      name={character.name}
      species={character.species}
    />
  );
}
