import { createPortal } from "react-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export interface IModalProps {
	title: string;
	children: React.ReactNode;
	onClose: () => void;
}

export const Modal = ({ title, children, onClose }: IModalProps) => {
	return createPortal(
		<>
			<div
				onClick={onClose}
				className={classNames(styles.root, {
					[styles.interactive]: !!onClose,
				})}
			/>
			<div
				style={{
					backgroundColor: "white",
					width: "344px",
					height: "300px",
					position: "absolute",
					top: "200px",
					left: "50%",
					zIndex: 2,
					transform: "translate(-50%, -50%)",
					padding: "24px",
					borderRadius: "8px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div className={styles.top}>
					<h1 className={styles.title}>{title}</h1>
					<img
						className={styles.closeBtn}
						src="public/images/close.svg"
						onClick={onClose}
					/>
				</div>
				<div>{children}</div>
			</div>
		</>,
		document.body
	);
};
