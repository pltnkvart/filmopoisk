import styles from './styles.module.css';

export const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Извините, что-то пошло не так!</p>
      <p className={styles.under}>Попробуйте перезагрузить страницу</p>
    </div>
  );
};
