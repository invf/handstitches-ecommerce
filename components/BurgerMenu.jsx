import { useState } from 'react';
import Link from 'next/link';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen && styles.line1}`}></div>
        <div className={`${styles.line} ${isOpen && styles.line2}`}></div>
        <div className={`${styles.line} ${isOpen && styles.line3}`}></div>
      </div>

      {isOpen && (
        <div className={styles.menu}>

          <Link href="/privacy-policy">
            <a className={styles.link} onClick={toggleMenu}>Privacy Policy</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
