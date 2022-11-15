import { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  addingClass?: string;
}

function Button({ children, onClick, disabled, addingClass = '' }: Props) {
  const classList = [styles.button, addingClass];
  return (
    <button
      className={classList.join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
