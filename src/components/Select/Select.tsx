import styles from "./styles.module.css";

interface ISelectProps {
	placeholder?: string;
	options: Record<string, string>;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectDropdown = ({
	placeholder,
	options,
	onChange,
}: ISelectProps) => {
	return (
		<select
			className={styles.select}
			defaultValue={"DEFAULT"}
			onChange={onChange}
		>
			<option value="DEFAULT" disabled hidden>
				{placeholder}
			</option>
			{Object.entries(options).map(([value, label]) => {
				return (
					<option className={styles.option} value={value} key={value}>
						{label}
					</option>
				);
			})}
		</select>
	);
};
