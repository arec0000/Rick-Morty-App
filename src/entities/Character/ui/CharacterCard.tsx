import { ContentCard } from '@/shared/ui';

interface Props {
  url: string;
  thumbnail: string;
  name: string;
  species: string;
}

export function CharacterCard({
  url,
  name,
  thumbnail,
  species,
}: Props) {
  return (
    <ContentCard
      href={url}
      img={thumbnail}
      title={name}
      description={species}
    />
  );
}
