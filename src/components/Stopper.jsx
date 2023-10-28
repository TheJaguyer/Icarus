import styles from "../styles/stopper.module.css";
import Copyright from "../components/Copyright";
import Spacer from "../components/Spacer";

export default function Stopper() {
  return (
    <div className={styles.stopper}>
      <Spacer></Spacer>
      <Copyright />
    </div>
  );
}
