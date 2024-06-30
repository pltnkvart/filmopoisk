import { Button } from "../Button/Button";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setToken } from "../../store/authSlice";
import { setOpen } from "../../store/modalSlice";

export const Header = () => {
	const user = useAppSelector((state) => state.userSlice.logged);

	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(setToken(""));
		dispatch(setOpen(false));
	};

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Фильмопоиск</h1>
			<div className={styles.right}>
				{user ? (
					// {/* {user && <span>{user.name}</span>} - вывести ИКОНКУ!!! */}
					<Button onClick={handleLogout} transparent={true}>
						Выйти
					</Button>
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
		</header>
	);
};
