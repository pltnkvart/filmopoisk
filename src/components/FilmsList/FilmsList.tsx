import { FilmCard } from "../FilmCard/FilmCard";
import styles from "./styles.module.css";
import { IGetFilmsProps } from "../../store/filmsSlice";
import { useNavigate } from "react-router-dom";

interface IFilmsListProps {
	data: IGetFilmsProps;
}

export const FilmsList = ({ data }: IFilmsListProps) => {
	const navigate = useNavigate();

	const handleClick = (id: string) => {
		navigate(`/movie/${id}`);
	};

	return (
		<div className={styles.list}>
			{data.search_result.map((film) => (
				<FilmCard
					key={film.id}
					film={film}
					onClick={() => handleClick(film.id)}
				/>
			))}
		</div>
	);
};
