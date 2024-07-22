import { createBrowserRouter } from 'react-router-dom';
import { FilmsPage } from '~/pages/FilmsPage/FilmsPage';
import { FilmPage } from '~/pages/FilmPage/FilmPage';
import { ErrorPage } from './ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FilmsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:filmId',
    element: <FilmPage />,
    errorElement: <ErrorPage />,
  },
]);
