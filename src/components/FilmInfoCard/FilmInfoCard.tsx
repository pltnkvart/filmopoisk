import { FullMovieInfo } from '../../types/types';
import { FilmRating } from '../Rating/FilmRating';
import styles from './styles.module.css';

interface IFilmInfoCardProps {
  film: FullMovieInfo;
}

export const FilmInfoCard = ({ film }: IFilmInfoCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={film.poster} alt={film.title} />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.title}>{film.title}</p>
          <div className={styles.right}>
            <FilmRating movieId={film.id} currMovieRating={film.rating} />
          </div>
        </div>
        <div className={styles.info}>
          <p>
            <b>Жанр:</b> {film.genre}
          </p>
          <p>
            <b>Год выпуска:</b> {film.release_year}
          </p>
          <p>
            <b>Рейтинг:</b> {film.rating}
          </p>
          <p>
            <b>Описание:</b>
          </p>
          <p className={styles.description}>{film.description}</p>
        </div>
      </div>
    </div>
  );
};
