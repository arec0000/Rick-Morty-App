interface SearchProps {
  type: 'search';
  name: string;
  placeholder: string;
  options?: never;
}

interface OptionProps {
  type: 'option';
  name: string;
  placeholder: string;
  options: {
    name: string;
    value: string;
  }[];
}

export type FilterProps = SearchProps | OptionProps;
