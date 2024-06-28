import { ShortMovieInfo } from "../../types/types";
import styles from "./styles.module.css";

interface IFilmCardProps {
	film: ShortMovieInfo;
}

export const FilmCard = ({ film }: IFilmCardProps) => {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={film.poster}></img>
			<table>
				<tr>
					<td colSpan={2}>
						<h1>{film.title}</h1>
					</td>
				</tr>
				<tr>
					<td className={styles.type}>Жанр</td>
					<td>{film.genre}</td>
				</tr>
				<tr>
					<td className={styles.type}>Год выпуска</td>
					<td>{film.release_year}</td>
				</tr>
				<tr>
					<td className={styles.type}>Описание</td>
					<td>{film.description}</td>
				</tr>
			</table>
		</div>
	);
};
