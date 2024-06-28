import classNames from "classnames";
import styles from "./styles.module.css";

interface IInputAreaProps {
	placeholder: string;
	icon: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputArea = ({ placeholder, icon, onChange }: IInputAreaProps) => {
	return (
		<input
			type="text"
			className={classNames(styles.input, { [styles.search]: icon })}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};
