import { useState } from "react";
import styles from './counter.module.css'
function Counter() {
  const [count, setCount] = useState(() => 0);

  function handleIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  function handleDecrement() {
    setCount((previousCount) => previousCount - 1);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
