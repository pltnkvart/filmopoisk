import { useState } from "react";
import { GENRES, YEARS } from "../../../types/types";
import { FilmsList } from "../../FilmsList/FilmsList";
import { FilterMenu } from "../../FilterMenu/FilterMenu";

import styles from "./styles.module.css";
import { InputArea } from "../../Input/InputSearch";
import { apiSlice } from "../../../store/filmsSlice";
import { Pagination } from "../../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

export const FilmsPage = () => {
	const queryParams = new URLSearchParams();
	const [selectedGenre, setSelectedGenre] =
		useState<keyof typeof GENRES>("0");
	const [selectedYear, setSelectedYear] = useState<keyof typeof YEARS>("0");
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const { data, error, isLoading } = apiSlice.useGetFilmsQuery({
		page: currentPage,
		title: searchQuery,
		genre: selectedGenre,
		release_year: selectedYear,
	});

	if (!data) {
		return (
			<div className={styles.spinner}>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <div>Error</div>;
	}

	const handleGenreChange = (genre: keyof typeof GENRES): void => {
		setSelectedGenre(genre);
		setCurrentPage(1);
		queryParams.set("genre", genre);
		if (searchQuery !== "") {
			queryParams.set("title", searchQuery);
		}
		queryParams.set("page", currentPage.toString());
		navigate(`/?${queryParams.toString()}`);
	};

	const handleYearChange = (year: keyof typeof YEARS): void => {
		setSelectedYear(year);
		setCurrentPage(1);
		queryParams.set("release_year", year);
		if (searchQuery !== "") {
			queryParams.set("title", searchQuery);
		}
		queryParams.set("page", currentPage.toString());
		navigate(`/?${queryParams.toString()}`);
	};

	return (
		<div className={styles.page}>
			<FilterMenu
				onChangeGenre={handleGenreChange}
				onChangeYear={handleYearChange}
			/>
			<div className={styles.content}>
				<InputArea
					placeholder="Название фильма"
					icon={true}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				{isLoading && !data && <LoadingSpinner />}
				{data.search_result.length === 0 ? (
					<div className={styles.empty}>
						<h1 className={styles.title}>Фильмы не найдены</h1>
						<h3 className={styles.subtitle}>
							Измените запрос и попробуйте снова
						</h3>
					</div>
				) : (
					<>
						<FilmsList data={data} />
						<Pagination
							currentPage={currentPage}
							total_pages={data.total_pages}
							onChange={setCurrentPage}
						/>
					</>
				)}
			</div>
		</div>
	);
};
