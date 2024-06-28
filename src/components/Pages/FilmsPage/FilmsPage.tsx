import { FilmsList } from "../../FilmsList/FilmsList";
import { FilterMenu } from "../../FilterMenu/FilterMenu";

import styles from "./styles.module.css";

export const FilmsPage = () => {
	return (
		<div className={styles.page}>
			<FilterMenu />
			<FilmsList />
		</div>
	);
};
