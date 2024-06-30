import { StarIcon } from '../Icons/StarIcon';
import styles from './styles.module.css';

export interface IStarProps {
  value: number;
  selected: boolean;
  onClick: (value: number) => void;
}

export const Star = ({ value, selected = false, onClick }: IStarProps) => {
  const hovered = false;

  return (
    <div className={styles.star} onClick={() => onClick(value)}>
      <span key={value} className={styles.star}>
        {hovered ? (
          <img src="public/images/starHover.svg"></img>
        ) : (
          <StarIcon isActive={selected} />
        )}
      </span>
      <span>{value}</span>
    </div>
  );
};
