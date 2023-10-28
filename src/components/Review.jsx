import styles from "../styles/review.module.css";

export default function Review({ quote, person }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.primary}>"{quote}"</div>
      <div className={styles.secondary}>-{person}</div>
    </div>
  );
}
