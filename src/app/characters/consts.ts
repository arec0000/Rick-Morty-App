import { FilterProps } from '@/features/filter';

export const filters: FilterProps[] = [
  {
    type: 'search',
    name: 'name',
    placeholder: 'Filter by name...',
  },
  {
    type: 'option',
    name: 'species',
    placeholder: 'Species',
    options: [
      {
        name: 'Human',
        value: 'Human',
      },
      {
        name: 'Alien',
        value: 'Alien',
      },
    ],
  },
  {
    type: 'option',
    name: 'gender',
    placeholder: 'Gender',
    options: [
      {
        name: 'Male',
        value: 'Male',
      },
      {
        name: 'Female',
        value: 'Female',
      },
      {
        name: 'Genderless',
        value: 'Genderless',
      },
      {
        name: 'Unknown',
        value: 'unknown',
      },
    ],
  },
  {
    type: 'option',
    name: 'status',
    placeholder: 'Status',
    options: [
      {
        name: 'Alive',
        value: 'Alive',
      },
      {
        name: 'Dead',
        value: 'Dead',
      },
      {
        name: 'Unknown',
        value: 'unknown',
      },
    ],
  },
];
