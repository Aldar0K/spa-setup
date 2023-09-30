import { FC, useState } from "react";

import styles from "./Counter.module.scss";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div className={styles.container}>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
