import { CloseIcon } from '../Icons/CloseIcon';
import { createPortal } from 'react-dom';

import styles from './styles.module.css';
import classNames from 'classnames';

export interface IModalProps {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, isOpen, onClose }: IModalProps) => {
  return createPortal(
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div
        onClick={onClose}
        className={classNames(styles.root, {
          [styles.interactive]: isOpen,
        })}
      />
      <div
        style={{
          backgroundColor: 'white',
          width: '344px',
          height: 'fit-content',
          position: 'absolute',
          top: '200px',
          left: '50%',
          zIndex: 2,
          transform: 'translate(-50%, -50%)',
          padding: '24px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h1 className={styles.title}>{title}</h1>
            <CloseIcon className={styles.closeBtn} onClick={onClose} />
          </div>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
