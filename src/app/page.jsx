import styles from "../styles/page.module.css";
import Topper from "../components/Topper";
import Stopper from "../components/Stopper";
import Main from "../components/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Topper></Topper>
      <Main />
      <Stopper></Stopper>
    </main>
  );
}
