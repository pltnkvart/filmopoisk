import { createBrowserRouter } from 'react-router-dom';
import { FilmsPage } from '~/pages/FilmsPage/FilmsPage';
import { FilmPage } from '~/pages/FilmPage/FilmPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FilmsPage />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: '/movie/:filmId',
    element: <FilmPage />,
    errorElement: <div>Not Found</div>,
  },
]);
