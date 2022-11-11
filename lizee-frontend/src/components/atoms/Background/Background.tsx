import { ReactNode } from 'react';
import styles from './Background.css';

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <div className={styles.background}>
      <div className={styles.filter}>{children}</div>
    </div>
  );
};

export default Background;
