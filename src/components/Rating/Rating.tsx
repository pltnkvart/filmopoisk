import { Star } from "./Star";

import styles from "./styles.module.css";

interface IRatingProps {
	starsSelected: number;
	totalStars?: number;
	onRate: (starsSelected: number) => void;
}

export const Rating = ({
	starsSelected,
	totalStars = 5,
	onRate,
}: IRatingProps) => {
	return (
		<>
			<div className={styles.rating}>
				{[...Array(totalStars)].map((_, i) => {
					const value = i + 1;

					return (
						<Star
							key={i}
							value={value}
							selected={i < starsSelected}
							onClick={() => onRate(value)}
						/>
					);
				})}
			</div>
		</>
	);
};
