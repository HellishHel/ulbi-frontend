import {useState} from "react";
import styles from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div className={styles.container}>
            <div>{count}</div>
            <button onClick={() => setCount((prevState) => prevState + 1)}>increment</button>
        </div>
    );
};