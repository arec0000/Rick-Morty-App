import { ContentLine } from '@/features/contentLine';

import { getOneById } from '@/shared/api/RickAndMortyApi';

interface Props {
  id: string;
}

export async function EpisodeLine({ id }: Props) {
  const episode = await getOneById('episodes', id);
  return (
    <ContentLine
      href={`/episodes/${id}`}
      title={episode.episode}
      description={episode.name}
      footer={episode.air_date}
    />
  );
}
