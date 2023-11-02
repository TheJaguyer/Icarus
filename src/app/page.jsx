"use client";

import { useState, useEffect } from "react";

import styles from "../styles/page.module.css";
import Topper from "../components/Topper";
import Stopper from "../components/Stopper";
import Main from "../components/Main";
import Loading from "../components/LoadingScreen/Loading";

export default function Home() {
  const [mode, setMode] = useState(false);

  function toggleMode() {
    setMode((prev) => !prev);
  }

  return (
    <main className={styles.main}>
      <Topper mode={mode}></Topper>
      <Main mode={mode} />
      <Stopper toggleMode={toggleMode} mode={mode}></Stopper>
      <Loading />
    </main>
  );
}
