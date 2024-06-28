import { useParams } from "react-router-dom";
import { apiSlice } from "../../../store/filmsSlice";

import styles from "./styles.module.css";

export const FilmPage = () => {
	const { filmId } = useParams();
	const { data } = apiSlice.useGetFilmByIdQuery(Number(filmId!)!);

	if (!data) return null;

	console.log(data);

	return (
		<>
			<img className={styles.image} src={data.poster}></img>
			<h1>{data.title}</h1>
			<p>
				<b>Жанр: </b>
				{data.genre}
			</p>
			<p>
				<b>Год выпуска: </b>
				{data.genre}
			</p>
			<p>
				<b>Рейтинг: </b>
				{data.rating}
			</p>
			<p>
				<b>Описание</b>
			</p>
			<p>{data.description}</p>
		</>
	);
};
