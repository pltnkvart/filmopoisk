import { FilmCard } from "../FilmCard/FilmCard";
import styles from "./styles.module.css";
import { IGetFilmsProps } from "../../store/filmsSlice";

interface IFilmsListProps {
	data: IGetFilmsProps;
}

export const FilmsList = ({ data }: IFilmsListProps) => {
	return (
		<div className={styles.list}>
			{data.search_result.map((film) => (
				<FilmCard key={film.id} film={film} />
			))}
		</div>
	);
};
