import styles from "@/styles/stopper.module.css";
import Copyright from "@/components/Stopper/Copyright";
import Spacer from "@/components/Spacer";
import IcarusMode from "@/components/Stopper/IcarusMode";

export default function Stopper() {
  return (
    <div className={styles.stopper}>
      <Spacer></Spacer>
      <IcarusMode />
      <Copyright />
    </div>
  );
}
