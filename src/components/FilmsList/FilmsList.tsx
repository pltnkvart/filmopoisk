import { ShortMovieInfo } from "../../types/types";
import { FilmCard } from "../FilmCard/FilmCard";

import styles from "./styles.module.css";

interface IFilmsListProps {
	films: ShortMovieInfo[];
}

export const FilmsList = ({ films }: IFilmsListProps) => {
	return (
		<div className={styles.list}>
			{films.map((film) => (
				<FilmCard key={film.id} film={film} />
			))}
		</div>
	);
};
