import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FullMovieInfo, IQueryParams, ShortMovieInfo } from "../types/types";

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
		getFilms: builder.query<IGetFilmsProps, IQueryParams>({
			query: (params) => {
				console.log("PARAMS", params);
				const queryParams = new URLSearchParams();
				if (params.genre !== "0" && params.genre !== undefined)
					queryParams.append("genre", params.genre);
				if (
					params.release_year !== "0" &&
					params.release_year !== undefined
				)
					queryParams.append("release_year", params.release_year);
				if (params.title !== "" && params.title !== undefined)
					queryParams.append("title", params.title);
				return `search?${queryParams.toString()}&page=${params.page}`;
			},
		}),
		getFilmById: builder.query<FullMovieInfo, number>({
			query: (id) => `/movie/${id}`,
		}),
	}),
});
