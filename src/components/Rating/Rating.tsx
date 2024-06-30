import { useState } from "react";
import { IStarProps, Star } from "./Star";

import styles from "./styles.module.css";
import { useAppSelector } from "../../store/store";

interface IRatingProps {
	starsSelected: number;
	totalStars?: number;
}

export const Rating = ({ starsSelected, totalStars = 5 }: IRatingProps) => {
	const [rating, setRating] = useState(starsSelected);
	const user = useAppSelector((state) => state.userSlice.logged);

	return user ? (
		<div className={styles.rating}>
			{[...Array(totalStars)].map((_, i) => {
				const currentRating = i + 1;

				const isSelected = currentRating <= rating;

				const starProps: IStarProps = {
					value: currentRating,
					selected: isSelected,
					onClick: () => setRating(currentRating),
				};

				return <Star key={i} {...starProps} />;
			})}
		</div>
	) : (
		<div className={styles.login}>
			<div className={styles.rating}>
				{[...Array(totalStars)].map((_, i) => {
					const currentRating = i + 1;

					const starProps: IStarProps = {
						value: currentRating,
						selected: false,
						onClick: () => {},
					};

					return <Star key={i} {...starProps} />;
				})}
			</div>
			Войдите чтобы увидеть рейтинг
		</div>
	);
};
