import { createPortal } from "react-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export interface IModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

export const Modal = ({ children, onClose }: IModalProps) => {
	console.log(styles);
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
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 2,
				}}
			>
				<button onClick={onClose}>Close</button>
				{children}
			</div>
		</>,
		document.body
	);
};
