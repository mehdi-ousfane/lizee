import { ReactNode, MouseEvent } from 'react';

import styles from './InformationCard.module.css';

interface Props {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const InformationCard = ({ children, onClick }: Props) => {
  return (
    <div className={styles.informationCard} onClick={onClick}>
      {children}
    </div>
  );
};

export default InformationCard;
