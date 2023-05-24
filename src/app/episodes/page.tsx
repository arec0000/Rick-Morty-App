import Image from 'next/image';
import { Metadata } from 'next';
import { Feed } from '@/widgets/feed';
import { EpisodeCard } from '@/entities/Episodes';
import { getMany } from '@/shared/api/RickAndMorty';

import classes from './page.module.scss';

import { filters } from './config';

import banner from './assets/banner.png';

interface Props {
  searchParams: {
    page?: string;
    name?: string;
  }
}

export const metadata: Metadata = {
  title: 'Rick & Morty | episodes',
};

export default async function EpisodesPage({ searchParams: { page, name } }: Props) {
  const locations = await getMany('episode', { page, name });
  return (
    <div className={classes.episodesPage}>
      <div className={classes.episodesPage__banner}>
        <Image src={banner} alt="Rick & Morty banner" fill />
      </div>
      <Feed
        className={classes.episodesPage__feed}
        columns={3}
        pagination
        filters={filters}
      >
        {locations.results?.slice(0, 3 * 4).map((location) => (
          <EpisodeCard
            key={location.id}
            href={`episodes/${location.id}`}
            name={location.name}
            date={location.air_date}
            episode={location.episode}
          />
        ))}
      </Feed>
    </div>
  );
}
