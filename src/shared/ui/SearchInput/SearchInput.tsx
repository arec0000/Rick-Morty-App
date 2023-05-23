import classes from './SearchInput.module.scss';

interface Props {
  onChange: (value: string) => void;
  placeholder: string;
}

export function SearchInput({ onChange, placeholder }: Props) {
  return (
    <div className={classes.input}>
      <img src="./search.svg" alt="search icon" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
