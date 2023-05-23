'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import classes from './Select.module.scss';

interface Props {
  placeholder: string;
  options: {
    name: string,
    value: string
  }[];
  onChange: (value: string) => void;
}

export function Select({ placeholder, options, onChange }: Props) {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <label className={clsx(classes.select, { [classes.select_selected]: value })}>
      <select onChange={handleChange}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </label>
  );
}
