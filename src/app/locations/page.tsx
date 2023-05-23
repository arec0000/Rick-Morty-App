import Image from 'next/image';
import { Feed } from '@/widgets/feed';
import { LocationCard, getLocations } from '@/entities/Location';

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

export default async function CharactersPage({
  searchParams: {
    page,
    name,
    type,
    dimension,
  },
}: Props) {
  const locations = await getLocations({
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
