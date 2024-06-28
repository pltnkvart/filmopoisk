import { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import styles from "./styles.module.css";

export const Header = () => {
	const { user, login, logout } = useUserContext();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Фильмопоиск</h1>
			{/* {user && <span>{user.name}</span>} - вывести ИКОНКУ!!! */}
			<div className={styles.right}>
				{user ? (
					<Button onClick={logout} transparent={true}>
						Выйти
					</Button>
				) : (
					<Button
						onClick={() => setIsVisible(true)}
						transparent={false}
					>
						Войти
					</Button>
				)}
			</div>

			{isVisible && (
				<Modal onClose={() => setIsVisible(false)}>
					Авторизация
					<label htmlFor="login">Логин</label>
					<input type="text" id="login" />
					<label htmlFor="password">Пароль</label>
					<input type="password" id="password" />
					<Button type="submit" onClick={login} transparent={false}>
						Войти
					</Button>
					<Button
						onClick={() => setIsVisible(false)}
						transparent={true}
					>
						Отменить
					</Button>
				</Modal>
			)}
		</header>
	);
};
