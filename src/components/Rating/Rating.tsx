import { useState } from 'react';
import styles from './styles.module.css';
import { StarIcon } from '../Icons/StarIcon';

interface IRatingProps {
  rating: string;
  totalRatesCount?: number;
  onClick: (event: React.MouseEvent<HTMLInputElement>, rating: number) => void;
}

export const Rating = ({
  rating,
  totalRatesCount = 5,
  onClick,
}: IRatingProps) => {
  const roundedRating = Math.round(Number(rating));
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={styles.rating}>
      {[...Array(totalRatesCount)].map((_, index) => {
        const value = index + 1;

        return (
          <div className={styles.star} key={index}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={(e) => onClick(e, value)}
            />
            <span
              className={styles.star}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
            >
              <StarIcon isActive={value <= (hover || roundedRating)} />
              <span>{value}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
