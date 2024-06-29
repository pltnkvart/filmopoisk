import { ShortMovieInfo } from "../../types/types";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";

interface IFilmCardProps {
	film: ShortMovieInfo;
	onClick?: (film: ShortMovieInfo) => void;
}

export const FilmCard = ({ film, onClick }: IFilmCardProps) => {
	const handleClick = () => {
		if (onClick) {
			onClick(film);
		}
	};

	return (
		<div className={styles.card} onClick={handleClick}>
			<img className={styles.image} src={film.poster}></img>
			<table className={styles.table}>
				<tbody>
					<tr>
						<td colSpan={2} padding-bottom="16px">
							<h1 className={styles.title}>{film.title}</h1>
						</td>
					</tr>
					<tr className={styles.line}>
						<td width="100" className={styles.type}>
							Жанр
						</td>
						<td className={styles.text}>{film.genre}</td>
					</tr>
					<tr className={styles.line}>
						<td className={styles.type}>Год выпуска</td>
						<td className={styles.text}>{film.release_year}</td>
					</tr>
					<tr className={styles.line}>
						<td className={styles.type}>Описание</td>
						<td className={styles.text}>{film.description}</td>
					</tr>
				</tbody>
			</table>
			<div className={styles.rating}>
				<Rating
					totalStars={5}
					starsSelected={Math.round(Number(film.rating))}
					onRate={() => {}}
				/>
			</div>
		</div>
	);
};
