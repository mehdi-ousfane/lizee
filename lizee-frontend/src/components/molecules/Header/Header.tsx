import HelpIcon from '../../icons/HelpIcon/HelpIcon';
import LizeeIcon from '../../icons/LizeeIcon/LizeeIcon';
import UserIcon from '../../icons/UserIcon/UserIcon';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.lizeeIconContainer}>
        <LizeeIcon />
      </div>
      <div className={styles.navigationIcons}>
        <div className={styles.userIconContainer}>
          <UserIcon />
        </div>
        <div className={styles.helpIconContainer}>
          <HelpIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
