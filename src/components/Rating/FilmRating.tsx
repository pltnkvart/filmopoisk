import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { apiSlice } from '../../api/api';
import { setSingle } from '../../slices/userRatingSlice';
import { Rating } from './Rating';

import styles from './styles.module.css';

interface IFilmRatingProps {
  movieId: string;
  currMovieRating: string;
}

export const FilmRating = ({ movieId, currMovieRating }: IFilmRatingProps) => {
  const user = useAppSelector((state) => state.userSlice.logged);
  const userRating = useAppSelector((state) => state.ratingSlice[movieId]);
  const dispatch = useAppDispatch();

  const [mutate] = apiSlice.usePostRateMovieMutation();

  const handler = async (
    e: React.MouseEvent<HTMLInputElement>,
    rating: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await mutate({
        movieId: movieId,
        user_rate: rating,
      });

      console.log(data);

      if (data.data?.movieId) {
        dispatch(setSingle({ id: movieId, rating: rating }));
      }
    } catch (error) {
      console.error('Failed to rate the movie:', error);
    }
  };

  return user ? (
    <Rating
      id={movieId}
      rating={userRating ?? currMovieRating}
      onClick={handler}
    />
  ) : (
    <div className={styles.login}>Войдите чтобы увидеть рейтинг</div>
  );
};
