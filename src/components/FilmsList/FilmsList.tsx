import { FilmCard } from '../FilmCard/FilmCard';
import { useNavigate } from 'react-router-dom';
import type { IGetFilmsProps } from '~/types/types';

import styles from './styles.module.css';

interface IFilmsListProps {
  data: IGetFilmsProps;
}

export const FilmsList = ({ data }: IFilmsListProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.list}>
      {data.search_result.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onClick={() => handleClick(film.id)}
        />
      ))}
    </div>
  );
};
