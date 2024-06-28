import { GENRES, YEARS } from "../../types/types";
import { SelectDropdown } from "../Select/Select";

import styles from "./styles.module.css";

export const FilterMenu = () => {
	return (
		<div className={styles.menu}>
			<h1 className={styles.title}>Фильтр</h1>
			<div>
				<label>Жанр</label>
				<SelectDropdown options={GENRES} placeholder="Выбери жанр" />
			</div>
			<div>
				<label>Год выпуска</label>
				<SelectDropdown options={YEARS} placeholder="Выбери год" />
			</div>
		</div>
	);
};
