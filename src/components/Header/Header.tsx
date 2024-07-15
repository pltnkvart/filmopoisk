import { Button } from '../Button/Button';
import { LoginModal } from '../LoginModal/LoginModal';
import { UserIcon } from '../Icons/UserIcon';

import { useAppDispatch, useAppSelector } from '~/store/store';
import { setToken } from '~/slices/authSlice';
import { setOpen } from '~/slices/modalSlice';

import styles from './styles.module.css';

export const Header = () => {
  const user = useAppSelector((state) => state.userSlice.logged);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setToken(''));
    dispatch(setOpen(false));
    localStorage.clear();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Фильмопоиск</h1>
      <div className={styles.right}>
        {user ? (
          <>
            <UserIcon className={styles.profile} />
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
