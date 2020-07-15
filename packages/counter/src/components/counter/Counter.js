import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className={styles.container}>
      <p className={styles.number}>{count}</p>
      <div>
        <button className={styles.button} onClick={increment}>
          Increment
        </button>
        <button className={styles.button} onClick={reset}>
          Reset
        </button>
        <button className={styles.button} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export { Counter };
