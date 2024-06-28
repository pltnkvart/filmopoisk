import classNames from "classnames";

import styles from "./styles.module.css";

interface IButtonProps {
	children?: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
	transparent: boolean;
}

export const Button = ({
	children,
	type,
	onClick,
	transparent,
}: IButtonProps) => {
	return (
		<button
			className={classNames(
				styles.btn,
				transparent ? styles.transparent : styles.notTransparent
			)}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
