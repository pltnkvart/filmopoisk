import { useState } from 'react';
import styles from './styles.module.css';
import { StarIcon } from '../Icons/StarIcon';

interface IRatingProps {
  id: string;
  rating: string | number;
  totalRatesCount?: number;
  onClick: (event: React.MouseEvent<HTMLInputElement>, rating: number) => void;
}

export const Rating = ({
  id,
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
            <label
              htmlFor={`rating-${value}-${id}`}
              className={styles.star}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
            >
              <input
                type="radio"
                name="rating"
                id={`rating-${value}-${id}`}
                value={value}
                onClick={(e) => onClick(e, value)}
              />
              <StarIcon
                isActive={value <= (hover || roundedRating)}
                className={styles.star}
                children={<span>{value}</span>}
                value={value}
                id={id}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};
