import { useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";

export const Header = () => {
	const { user, login, logout } = useUserContext();
	const [isVisible, setIsVisible] = useState(false);

	return (
		<header>
			Header
			{user && <span>{user.name}</span>}
			{user ? (
				<button onClick={logout}>Logout</button>
			) : (
				<button onClick={() => setIsVisible(true)}>Login</button>
			)}
			{isVisible && (
				<Modal onClose={() => setIsVisible(false)}>
					Модалка
					<input type="text" id="login" />
					<input type="password" id="password" />
					<Button type="submit" onClick={login}>
						Войти
					</Button>
					<Button onClick={() => setIsVisible(false)}>
						Отменить
					</Button>
				</Modal>
			)}
		</header>
	);
};
