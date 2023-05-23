import { ContentCard } from '@/shared/ui';

interface Props {
  href: string;
  name: string;
  date: string;
  episode: string;
}

export function EpisodeCard({
  href,
  name,
  date,
  episode,
}: Props) {
  return (
    <ContentCard
      href={href}
      title={name}
      description={date}
      footer={episode}
    />
  );
}
