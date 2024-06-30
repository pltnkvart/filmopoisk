import classNames from 'classnames';
import styles from './styles.module.css';

interface IInputAreaProps {
  type: string;
  placeholder: string;
  icon: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export const InputArea = ({
  type,
  placeholder,
  icon,
  onChange,
  border,
  name,
  value,
}: IInputAreaProps) => {
  return (
    <input
      required
      type={type}
      className={classNames(styles.input, {
        [styles.search]: icon,
        [styles.border]: border,
      })}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};
