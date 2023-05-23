import { ContentLine } from '@/features/contentLine';

import { getEpisodeById } from '../api/getEpisodeById';

interface Props {
  id: string;
}

export async function EpisodeLine({ id }: Props) {
  const episode = await getEpisodeById(id);
  return (
    <ContentLine
      href={`/episodes/${id}`}
      title={episode.episode}
      description={episode.name}
      footer={episode.air_date}
    />
  );
}
