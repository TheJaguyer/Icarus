import styles from "../styles/main.module.css";
import PrimaryText from "../components/PrimaryText";
import Review from "../components/Review";
import Spacer from "../components/Spacer";

export default function Main({ text }) {
  return (
    <div className={styles.main}>
      <Spacer></Spacer>
      <PrimaryText text={"See what critics have to say:"}></PrimaryText>
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <Review quote={"he's okay"} person={"jorb"} />
      <PrimaryText text={"It's time to touch the sun"}></PrimaryText>
    </div>
  );
}
