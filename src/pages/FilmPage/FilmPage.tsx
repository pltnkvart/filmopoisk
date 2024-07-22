import { FilmInfoCard } from '~/components/FilmInfoCard/FilmInfoCard';
import { ActorCard } from '~/components/ActorCard/ActorCard';
import { ErrorPage } from '../ErrorPage/ErrorPage';

import styles from './styles.module.css';

import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery as getFilmById } from '~/slices/api';
import { LoadingSpinner } from '~/components/LoadingSpinner/LoadingSpinner';

export const FilmPage = () => {
  const { filmId } = useParams();
  const { data, error, isLoading } = getFilmById(Number(filmId!));

  if (!data) {
    return (
      <div className={styles.spinner}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.page}>
      {isLoading && <LoadingSpinner />}
      <FilmInfoCard film={data} />
      <div className={styles.actorBlock}></div>
      <p className={styles.title}>Актеры:</p>
      <div className={styles.actors}>
        {data.actors.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
};
