import { FilmInfoCard } from '~/components/FilmInfoCard/FilmInfoCard';
import { ActorCard } from '~/components/ActorCard/ActorCard';

import { useParams } from 'react-router-dom';
import { apiSlice } from '~/slices/api';

import styles from './styles.module.css';

export const FilmPage = () => {
  const { filmId } = useParams();
  const { data } = apiSlice.useGetFilmByIdQuery(Number(filmId!));

  if (!data) return null;

  return (
    <div className={styles.page}>
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
