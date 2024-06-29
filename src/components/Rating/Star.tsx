import styles from "./styles.module.css";

interface IStarProps {
	value: number;
	selected: boolean;
	onClick: () => void;
}

export const Star = ({ value, selected = false, onClick }: IStarProps) => (
	<div className={styles.star} onClick={onClick}>
		{selected ? (
			<img src="public/images/starActive.svg" alt="" />
		) : (
			<img src="public/images/starDisabled.svg" alt="" />
		)}
		<span>{value}</span>
	</div>
);
