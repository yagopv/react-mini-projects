import React from 'react';
import { Header } from './components/header/Header';
import { Counter } from './components/counter/Counter';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header title="React Counter" />
      <div className={styles.counterContainer}>
        <Counter count={0} />
      </div>
    </div>
  );
}

export { App };
