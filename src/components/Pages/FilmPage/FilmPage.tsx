import { useParams } from "react-router-dom";
import { apiSlice } from "../../../api/api";

import styles from "./styles.module.css";
import { ActorCard } from "../../ActorCard/ActorCard";
import { FilmInfoCard } from "../../FilmInfoCard/FilmInfoCard";

export const FilmPage = () => {
	const { filmId } = useParams();
	const { data } = apiSlice.useGetFilmByIdQuery(Number(filmId!));

	if (!data) return null;

	console.log(data);

	return (
		<div className={styles.page}>
			<FilmInfoCard film={data} />
			<div className={styles.actors}>
				{data.actors.map((actor, index) => (
					<ActorCard key={index} actor={actor} />
				))}
			</div>
		</div>
	);
};
