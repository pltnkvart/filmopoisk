import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../Button/Button";
import { InputArea } from "../Input/InputSearch";
import styles from "./styles.module.css";
import { apiSlice } from "../../store/api";
import { setToken } from "../../store/authSlice";
import { Modal } from "../Modal/Modal";
import { setOpen } from "../../store/modalSlice";

export const LoginModal = () => {
	const open = useAppSelector((state) => state.modalSlice);
	const dispatch = useAppDispatch();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [mutate, { data, status, error }] = apiSlice.usePostLoginMutation();

	useEffect(() => {
		if (data) {
			dispatch(setToken(data.token));
			dispatch(setOpen(false));
		}
	}, [data, status, error, dispatch]);

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		mutate({ username: username, password: password });
	};

	return (
		<Modal
			title={"Авторизация"}
			isOpen={open}
			onClose={() => dispatch(setOpen(false))}
		>
			<form
				method="post"
				className={styles.form}
				onSubmit={submitHandler}
			>
				<span>Логин</span>
				<InputArea
					border={true}
					type="text"
					placeholder="Введите логин"
					icon={false}
					name="username"
					onChange={(e) => setUsername(e.target.value)}
					required={true}
				/>
				<span>Пароль</span>
				<InputArea
					border={true}
					type="password"
					placeholder="Введите пароль"
					icon={false}
					name="password"
					onChange={(e) => setPassword(e.target.value)}
					required={true}
				/>
				<div className={styles.controls}>
					<Button type="submit" transparent={false}>
						Войти
					</Button>
					<Button
						type="reset"
						transparent={true}
						onClick={() => {
							dispatch(setOpen(false));
							setPassword("");
							setUsername("");
						}}
					>
						Отменить
					</Button>
				</div>
			</form>
		</Modal>
	);
};
