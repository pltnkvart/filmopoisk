import { Rating } from './Rating';

import { useAppDispatch, useAppSelector } from '~/store/store';
import { apiSlice } from '~/slices/api';
import { setSingle } from '~/slices/userRatingSlice';

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
      if (!data) return null;

      if (data.data?.movieId) {
        dispatch(setSingle({ id: movieId, rating: rating }));
      }

      dispatch(
        apiSlice.util.updateQueryData(
          'getFilmById',
          Number(movieId),
          (draft) => {
            if (draft && data.data) {
              draft.rating = data.data?.newAverageRate;
            }
          },
        ),
      );
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
