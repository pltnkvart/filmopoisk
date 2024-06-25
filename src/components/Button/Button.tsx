interface IButtonProps {
	children?: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
}

export const Button = ({ children, type, onClick }: IButtonProps) => {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
};
