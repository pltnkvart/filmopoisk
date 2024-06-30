import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  RootState,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  FullMovieInfo,
  IGetFilmsProps,
  ILogin,
  IQueryParams,
  RateResult,
} from '../types/types';
import { setToken } from '../slices/authSlice';
import { setOpen } from '../slices/modalSlice';

export const BASE_URL = 'http://localhost:3030/api/v1';

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const user = (api.getState() as RootState).userSlice;

  const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (user.logged) {
        headers.set('Authorization', `Bearer ${user.token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(setToken(''));
    api.dispatch(setOpen(true));

    return result;
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  keepUnusedDataFor: 1,
  endpoints: (builder) => ({
    getFilms: builder.query<IGetFilmsProps, IQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params.genre !== '0' && params.genre !== undefined)
          queryParams.append('genre', params.genre);
        if (params.release_year !== '0' && params.release_year !== undefined)
          queryParams.append('release_year', params.release_year);
        if (params.title !== '' && params.title !== undefined)
          queryParams.append('title', params.title);
        return `search?${queryParams.toString()}&page=${params.page}`;
      },
    }),
    getFilmById: builder.query<FullMovieInfo, number>({
      query: (id) => `/movie/${id}`,
    }),
    postLogin: builder.mutation<{ token: string }, ILogin>({
      query: (body) => ({
        body: body,
        url: '/login',
        method: 'POST',
      }),
    }),
    postRateMovie: builder.mutation<{ token: string }, RateResult>({
      query: (body) => ({
        body: body,
        url: '/rateMovie',
        method: 'POST',
      }),
    }),
  }),
});
