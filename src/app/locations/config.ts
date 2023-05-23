import { FilterProps } from '@/features/filter';

export const filters: FilterProps[] = [
  {
    type: 'search',
    name: 'name',
    placeholder: 'Filter by name...',
  },
  {
    type: 'option',
    name: 'type',
    placeholder: 'Type',
    options: [
      {
        name: 'Planet',
        value: 'Planet',
      },
      {
        name: 'Cluster',
        value: 'Cluster',
      },
      {
        name: 'Microverse',
        value: 'Microverse',
      },
      {
        name: 'TV',
        value: 'TV',
      },
      {
        name: 'Game',
        value: 'Game',
      },
      {
        name: 'Menagerie',
        value: 'Menagerie',
      },
      {
        name: 'Unknown',
        value: 'unknown',
      },
    ],
  },
  {
    type: 'option',
    name: 'dimension',
    placeholder: 'Dimension',
    options: [
      {
        name: 'C-137',
        value: 'Dimension C-137',
      },
      {
        name: 'Post-Apocalyptic',
        value: 'Post-Apocalyptic Dimension',
      },
      {
        name: 'Replacement',
        value: 'Replacement Dimension',
      },
      {
        name: 'Cronenberg',
        value: 'Cronenberg Dimension',
      },
      {
        name: 'Unknown',
        value: 'unknown',
      },
    ],
  },
];
