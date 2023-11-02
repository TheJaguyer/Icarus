import styles from "@/styles/topper.module.css";
import Spacer from "@/components/Spacer";

export default function Topper({ mode }) {
  return (
    <div className={styles.topper}>
      <div className={styles.title}>
        {mode ? "“Everything you have is to give.”" : "Icarus Fest 2k24"}
      </div>
      <Spacer></Spacer>

      <div className={styles.main}>
        {mode
          ? `Thank you Alex, for 30 wonderful years of you, and many more to come.`
          : `Join us May 3-5 in Glorious Asheville, NC to celebrate 30th Anniversary of the release of Alex Weatherhead!`}
      </div>
      <Spacer></Spacer>
    </div>
  );
}
