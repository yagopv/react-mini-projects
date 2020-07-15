import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.text}>Counter App</h1>
    </header>
  );
}

export { Header }