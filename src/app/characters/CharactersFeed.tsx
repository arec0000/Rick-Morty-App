import { Feed } from '@/widgets/feed';
import { CharacterCard, getCharacters } from '@/entities/Character';

interface Props {
  className?: string;
  page?: string;
}

export async function CharactersFeed({ className, page }: Props) {
  const characters = await getCharacters({ page });
  return (
    <Feed columns={3} className={className} pagination>
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
  );
}
