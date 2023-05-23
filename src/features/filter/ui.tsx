'use client';

import { SearchInput, Select } from '@/shared/ui';

import { useDebounce } from '@/shared/hooks';
import { useSetSeachParam } from './useSetSeachParam';

import { FilterProps } from './types';

export function Filter(props: FilterProps) {
  const setSeachParam = useSetSeachParam();
  const debounce = useDebounce();

  const { type, name, placeholder } = props;

  if (type === 'search') {
    return (
      <SearchInput
        placeholder={placeholder}
        onChange={(v) => debounce(() => setSeachParam(name, v))}
      />
    );
  }

  const { options } = props;

  return (
    <Select
      placeholder={placeholder}
      options={options}
      onChange={(v) => debounce(() => setSeachParam(name, v))}
    />
  );
}
