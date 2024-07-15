import { Pagination } from '~/components/Pagination/Pagination';
import { LoadingSpinner } from '~/components/LoadingSpinner/LoadingSpinner';
import { FilterMenu } from '~/components/FilterMenu/FilterMenu';
import { InputArea } from '~/components/Input/InputSearch';
import { FilmsList } from '~/components/FilmsList/FilmsList';
import { GENRES, YEARS } from '~/types/types';

import styles from './styles.module.css';

import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '~/hooks/useDebounce';
import { apiSlice } from '~/slices/api';

export const FilmsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState<keyof typeof GENRES>(
    (searchParams.get('genre') as keyof typeof GENRES) || '0',
  );
  const [selectedYear, setSelectedYear] = useState<keyof typeof YEARS>(
    (searchParams.get('release_year') as keyof typeof YEARS) || '0',
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get('page') || '1'),
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('title') || '',
  );

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, error, isLoading } = apiSlice.useGetFilmsQuery({
    page: currentPage,
    title: debouncedSearchQuery,
    genre: selectedGenre,
    release_year: selectedYear,
  });

  if (!data) {
    return (
      <div className={styles.spinner}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  const handleGenreChange = (genre: keyof typeof GENRES): void => {
    setSelectedGenre(genre);
    setSearchParams({
      genre,
      release_year: selectedYear,
      title: debouncedSearchQuery,
      page: currentPage.toString(),
    });
  };

  const handleYearChange = (year: keyof typeof YEARS): void => {
    setSelectedYear(year);
    setSearchParams({
      genre: selectedGenre,
      release_year: year,
      title: debouncedSearchQuery,
      page: currentPage.toString(),
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.page}>
      <FilterMenu
        selectedGenre={selectedGenre}
        selectedYear={selectedYear}
        onChangeGenre={handleGenreChange}
        onChangeYear={handleYearChange}
      />
      <div className={styles.content}>
        <div className={styles.input}>
          <InputArea
            type="text"
            placeholder="Название фильма"
            icon={true}
            onChange={handleSearchChange}
          />
        </div>
        {isLoading && !data && <LoadingSpinner />}
        {data?.search_result.length === 0 ? (
          <div className={styles.empty}>
            <h1 className={styles.title}>Фильмы не найдены</h1>
            <h3 className={styles.subtitle}>
              Измените запрос и попробуйте снова
            </h3>
          </div>
        ) : (
          <>
            <FilmsList data={data} />
            <Pagination
              currentPage={currentPage}
              total_pages={data.total_pages}
              onChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
