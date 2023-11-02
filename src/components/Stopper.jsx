import styles from "@/styles/stopper.module.css";
import Spacer from "@/components/Spacer";

export default function Stopper({ toggleMode, mode }) {
  return (
    <div className={styles.stopper}>
      <Spacer></Spacer>
      <div className={styles.icarusmode} onClick={toggleMode}>
        {mode ? "Return to Earth" : "Go Icarus Mode"}
      </div>
      <div className={styles.secondary}>created for Alex</div>
    </div>
  );
}
