"use client";

import { useState } from "react";

import styles from "../styles/page.module.css";
import Topper from "../components/Topper/Topper";
import Stopper from "../components/Stopper/Stopper";
import Main from "../components/Main";
import Loading from "../components/LoadingScreen/Loading";

export default function Home() {
  const [passedLoad, setPassedLoad] = useState(false);

  return (
    <main className={styles.main}>
      <Topper></Topper>
      <Main />
      <Stopper></Stopper>
      {!passedLoad && <Loading setPassedLoad={setPassedLoad} />}
    </main>
  );
}
