import HelpIcon from '../../icons/HelpIcon/HelpIcon';
import LizeeIcon from '../../icons/LizeeIcon/LizeeIcon';
import UserIcon from '../../icons/UserIcon/UserIcon';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.lizeeIconContainer}>
        <LizeeIcon />
      </div>
      <div className={styles.navigationIcons}>
        <div className={styles.userIconContainer}>
          <UserIcon />
          <p>My account</p>
        </div>
        <div className={styles.helpIconContainer}>
          <HelpIcon />
          <p>Help</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
