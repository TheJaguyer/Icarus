"use client";

import styles from "@/styles/loading.module.css";
import Sun from "./Sun";
import Icarus from "./Icarus";
import Daedalus from "./Deadalus";
import { useState } from "react";

export default function Loading() {
  const [touched, setTouched] = useState(false);

  function sunTouched() {
    setTouched(true);
    console.log("sun touched");
  }
  return (
    <div className={styles.loading}>
      <Daedalus touched={touched} />
      <Icarus touched={touched} />
      <Sun sunTouched={sunTouched} touched={touched} />
    </div>
  );
}
