import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FullMovieInfo, ShortMovieInfo } from "../types/types";

const URL = "http://localhost:3030/api/v1";

export interface IGetFilmsProps {
	search_result: ShortMovieInfo[];
	total_pages: number;
}

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: URL }),
	keepUnusedDataFor: 100,
	endpoints: (builder) => ({
		getFilms: builder.query<IGetFilmsProps, number>({
			query: (page = 1) => `search?page=${page}`,
		}),
		getFilmById: builder.query<FullMovieInfo, number>({
			query: (id) => `/movie/${id}`,
		}),
	}),
});
