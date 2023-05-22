interface Route {
  id: string;
  label: string;
  href: string;
}

export const routes: Route[] = [
  {
    id: 'characters',
    label: 'Characters',
    href: '/characters',
  },
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations',
  },
  {
    id: 'episodes',
    label: 'Episodes',
    href: '/episodes',
  },
];
