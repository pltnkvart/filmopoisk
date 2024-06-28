import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilmCard } from "../FilmCard/FilmCard";
import { InputArea } from "../Input/InputSearch";
import styles from "./styles.module.css";
import { apiSlice } from "../../store/filmsSlice";

export const FilmsList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, isLoading } = apiSlice.useGetFilmsQuery(currentPage);
	const navigate = useNavigate();
	const queryParams = new URLSearchParams();

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const page = queryParams.get("page");
		if (page) {
			setCurrentPage(Number(page));
		}
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data) {
		return null;
	}

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		queryParams.set("page", page.toString());
		navigate(`/?${queryParams.toString()}`);
	};

	return (
		<div className={styles.list}>
			<InputArea placeholder="Название фильма" icon={true} />
			{data.search_result.map((film) => (
				<FilmCard key={film.id} film={film} />
			))}
			<div className={styles.pagination}>
				<button
					className={styles.prev}
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<img
						className={styles.icon}
						src={
							currentPage === 1
								? "public/images/arrowDisabled.svg"
								: "public/images/arrowActive.svg"
						}
						alt="<"
					/>
				</button>
				<p className={styles.page}>{currentPage}</p>
				<button
					className={styles.next}
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === data.total_pages}
				>
					<img
						className={styles.icon}
						src={
							currentPage === data.total_pages
								? "public/images/arrowDisabled.svg"
								: "public/images/arrowActive.svg"
						}
						alt=">"
					/>
				</button>
			</div>
		</div>
	);
};
