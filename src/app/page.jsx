"use client";

import { useState, useEffect } from "react";

import styles from "../styles/page.module.css";
import Topper from "../components/Topper/Topper";
import Stopper from "../components/Stopper/Stopper";
import Main from "../components/Main";
import Loading from "../components/LoadingScreen/Loading";
import Splash from "@/components/Splash";

export default function Home() {
  const [passedLoad, setPassedLoad] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });

  if (loaded) {
    return (
      <main className={styles.main}>
        {!passedLoad && <Loading setPassedLoad={setPassedLoad} />}

        <Topper></Topper>
        <Main />
        <Stopper></Stopper>
      </main>
    );
  } else {
    return <Splash />;
  }
}
