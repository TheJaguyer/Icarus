import styles from "../styles/primarytext.module.css";

export default function PrimaryText({ text }) {
  return <div className={styles.main}>{text}</div>;
}
