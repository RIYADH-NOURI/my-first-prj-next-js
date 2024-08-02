import { useDarkMode } from './Context-dark-mode';
import styles from '/styles/style.module.css';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.Header}>
      <div className={styles.question}>
        Where in the world?
      </div>
      <div className={styles.mode} onClick={toggleDarkMode}>
        <i className={`fa-regular fa-moon ${styles.icon}`}></i>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </div>
    </header>
  );
};

export default Header;
