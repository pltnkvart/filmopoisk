import { apiSlice } from "../../../store/filmsSlice";
import { FilmsList } from "../../FilmsList/FilmsList";

import styles from "./styles.module.css";

export const FilmsPage = () => {
	const { data } = apiSlice.useGetFilmsQuery();

	if (!data) {
		return null;
	}

	return (
		<div className={styles.page}>
			Фильтр
			<FilmsList films={data.search_result} />
			Пагинация
		</div>
	);
};
