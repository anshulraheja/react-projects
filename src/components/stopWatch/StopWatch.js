//learning to use 'useRef' hook in react
import { useRef, useState, useEffect } from "react";
import styles from'./stopWatch.module.css';

export default function StopWatch() {
  var timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    var newCount = count + 1;
    setCount(newCount);
    timerIdRef.current = count;
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  function stopHandler() {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  }
  function resetHandler() {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  }
  //cleanup to stop watch if components unmount with the watch active
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div className={styles.containerStyling}>
      <div className={styles.timerStyling}>{count}</div>
      <div>
        <button onClick={startHandler} className={`${styles.ButtonStyling} ${styles.startButton}`}>
          Start
        </button>
        <button onClick={stopHandler} className={`${styles.ButtonStyling} ${styles.stopButton}`}>
          Stop
        </button>
        <button onClick={resetHandler} className={`${styles.ButtonStyling} ${styles.resetButton}`}>
          Reset
        </button>
      </div>
    </div>
  );
}
