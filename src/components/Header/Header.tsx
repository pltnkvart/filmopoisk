import { Button } from '../Button/Button';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setToken } from '../../slices/authSlice';
import { setOpen } from '../../slices/modalSlice';
import { LoginModal } from '../LoginModal/LoginModal';

export const Header = () => {
  const user = useAppSelector((state) => state.userSlice.logged);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setToken(''));
    dispatch(setOpen(false));
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Фильмопоиск</h1>
      <div className={styles.right}>
        {user ? (
          <>
            <img
              className={styles.profile}
              src="public/images/person.svg"
              alt="person"
            />
            <Button onClick={handleLogout} transparent={true}>
              Выйти
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              dispatch(setOpen(true));
            }}
            transparent={false}
          >
            Войти
          </Button>
        )}
      </div>
      <LoginModal />
    </header>
  );
};
