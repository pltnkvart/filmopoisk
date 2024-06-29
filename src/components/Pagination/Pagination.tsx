import styles from "./styles.module.css";

interface IPaginationProps {
	currentPage: number;
	total_pages: number;
	onChange: (page: number) => void;
}

export const Pagination = ({
	currentPage,
	total_pages,
	onChange,
}: IPaginationProps) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.prev}
				onClick={() => onChange(currentPage - 1)}
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
				onClick={() => onChange(currentPage + 1)}
				disabled={currentPage === total_pages}
			>
				<img
					className={styles.icon}
					src={
						currentPage === total_pages
							? "public/images/arrowDisabled.svg"
							: "public/images/arrowActive.svg"
					}
					alt=">"
				/>
			</button>
		</div>
	);
};
