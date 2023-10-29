"use client";

import styles from "@/styles/loading.module.css";
import Sun from "./Sun";
import Icarus from "./Icarus";
import Daedalus from "./Deadalus";
import { useState } from "react";

export default function Loading({ setPassedLoad }) {
  const [touched, setTouched] = useState(false);
  const [change, setChange] = useState("");

  function sunTouched() {
    setTouched(true);
    console.log("sun touched");
    setTimeout(() => {
      setChange("fade");
      console.log("passed load");
    }, 900);
    setTimeout(() => {
      setPassedLoad(true);
    }, 1200);
  }
  return (
    <div className={`${styles.loading} ${styles[change]}`}>
      <Daedalus touched={touched} />
      <Icarus touched={touched} />
      <Sun sunTouched={sunTouched} touched={touched} />
    </div>
  );
}
