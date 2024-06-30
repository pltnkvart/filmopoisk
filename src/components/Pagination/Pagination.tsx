import { ArrowIcon } from '../Icons/ArrowIcon';
import styles from './styles.module.css';

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
        <ArrowIcon isActive={currentPage === 1} className={styles.icon} />
      </button>
      <p className={styles.page}>{currentPage}</p>
      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === total_pages}
        className={styles.icon}
      >
        <ArrowIcon isActive={currentPage === total_pages} />
      </button>
    </div>
  );
};
