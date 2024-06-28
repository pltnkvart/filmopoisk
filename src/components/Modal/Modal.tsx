import { createPortal } from "react-dom";

import styles from "./styles.module.css";
import classNames from "classnames";
import { Button } from "../Button/Button";

export interface IModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

export const Modal = ({ children, onClose }: IModalProps) => {
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
					width: "fit-content",
					position: "absolute",
					top: "200px",
					left: "50%",
					zIndex: 2,
					transform: "translate(-50%, -50%)",
				}}
			>
				<Button onClick={onClose}>Close</Button>
				{/* TODO: Add close button as image */}
				{children}
			</div>
		</>,
		document.body
	);
};
