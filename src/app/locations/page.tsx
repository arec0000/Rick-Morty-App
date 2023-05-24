import Image from 'next/image';
import { Metadata } from 'next';
import { Feed } from '@/widgets/feed';
import { LocationCard } from '@/entities/Location';
import { getMany } from '@/shared/api/RickAndMorty';

import classes from './page.module.scss';

import { filters } from './config';

import banner from './assets/banner.png';

interface Props {
  searchParams: {
    page?: string;
    name?: string;
    type?: string;
    dimension?: string;
  }
}

export const metadata: Metadata = {
  title: 'Rick & Morty | locations',
};

export default async function LocationsPage({
  searchParams: {
    page,
    name,
    type,
    dimension,
  },
}: Props) {
  const locations = await getMany('location', {
    page,
    name,
    type,
    dimension,
  });
  return (
    <div className={classes.locationPage}>
      <div className={classes.locationPage__banner}>
        <Image src={banner} alt="Rick & Morty banner" fill />
      </div>
      <Feed
        className={classes.locationPage__feed}
        columns={3}
        pagination
        filters={filters}
      >
        {locations.results?.slice(0, 3 * 4).map((location) => (
          <LocationCard
            key={location.id}
            href={`locations/${location.id}`}
            name={location.name}
            type={location.type}
          />
        ))}
      </Feed>
    </div>
  );
}
