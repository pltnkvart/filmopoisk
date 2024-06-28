import { useParams } from "react-router-dom";
import { apiSlice } from "../../../store/filmsSlice";

export const FilmPage = () => {
	const { filmId } = useParams();
	const { data } = apiSlice.useGetFilmByIdQuery(Number(filmId!)!);

	if (!data) return null;

	console.log(data);

	return <div>{data.title}</div>;
};
