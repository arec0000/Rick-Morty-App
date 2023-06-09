import { ContentCard } from '@/shared/ui';

interface Props {
  href: string;
  thumbnail: string;
  name: string;
  species: string;
}

export function CharacterCard({
  href,
  name,
  thumbnail,
  species,
}: Props) {
  return (
    <ContentCard
      href={href}
      img={thumbnail}
      title={name}
      description={species}
    />
  );
}
