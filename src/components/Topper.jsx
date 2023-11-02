import styles from "@/styles/topper.module.css";
import Spacer from "@/components/Spacer";

export default function Topper({ mode }) {
  return (
    <div className={styles.topper}>
      <div className={styles.title}>
        {mode ? "We love you Alex!" : "Icarus Fest 2k24"}
      </div>
      <Spacer></Spacer>

      <div className={styles.main}>
        Join us May 3-5 in Glorious Asheville, NC to celebrate 30 years of
        uncut, unadulterated Alex
      </div>
      <Spacer></Spacer>
    </div>
  );
}
