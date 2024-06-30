import { GENRES, YEARS } from '../../types/types';
import { SelectDropdown } from '../Select/Select';

import styles from './styles.module.css';

interface IFilterMenuProps {
  selectedGenre?: keyof typeof GENRES;
  selectedYear?: keyof typeof YEARS;
  onChangeGenre?: (genreId: keyof typeof GENRES) => void;
  onChangeYear?: (year: keyof typeof YEARS) => void;
}

export const FilterMenu = ({
  selectedGenre,
  selectedYear,
  onChangeGenre,
  onChangeYear,
}: IFilterMenuProps) => {
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genreId = event.target.value as keyof typeof GENRES;
    onChangeGenre && onChangeGenre(genreId);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value as keyof typeof YEARS;
    onChangeYear && onChangeYear(year);
  };

  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>Фильтр</h1>
      <div>
        <label>Жанр</label>
        <SelectDropdown
          currentValue={selectedGenre}
          options={GENRES}
          placeholder="Выбери жанр"
          onChange={handleGenreChange}
        />
      </div>
      <div>
        <label>Год выпуска</label>
        <SelectDropdown
          currentValue={selectedYear}
          options={YEARS}
          placeholder="Выбери год"
          onChange={handleYearChange}
        />
      </div>
    </div>
  );
};
