import styles from "@/styles/topper.module.css";
import Title from "@/components/Topper/Title";
import Spacer from "@/components/Spacer";
import PrimaryText from "@/components/PrimaryText";

export default function Topper() {
  return (
    <div className={styles.topper}>
      <Title />
      <Spacer></Spacer>
      <PrimaryText
        text={
          "Join us May 3-5 in Glorious Asheville, NC to celebrate 30 years of uncut, unadulterated Alex"
        }
      ></PrimaryText>
      <Spacer></Spacer>
    </div>
  );
}
