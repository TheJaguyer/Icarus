import styles from "../styles/main.module.css";
import PrimaryText from "../components/PrimaryText";
import Review from "../components/Review";
import Spacer from "../components/Spacer";

export default function Main({ text }) {
  return (
    <div className={styles.main}>
      <Spacer></Spacer>
      <PrimaryText text={"See what critics have to say:"}></PrimaryText>
      <Review
        quote={
          "When I first received my copy of Alex Weatherhead it was working perfectly. It was making respectable choices and had even graduated from a prestigious university. However I believe my copy may be defective as it rapidly became disinterested in anything useful and spent most of its time in debauchery. I am hopeful that my Alex will start working properly again, as it is now engaged to be married to a talented and intelligent woman which may be a sign that this most recent software update has worked out some of the bugs. Overall, I give this produce two stars. I would change this rating to 4 stars if this recent update ends up resolving the aforementioned issues."
        }
        person={"Scott McCormack"}
      />
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
