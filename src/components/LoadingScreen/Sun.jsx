"use client";

import styles from "@/styles/sun.module.css";
import { useEffect, useState } from "react";

export default function Sun({ touched, sunTouched }) {
  const [pos, setPos] = useState("start");

  useEffect(() => {
    if (!touched) {
      setPos("center");
    }
  });

  useEffect(() => {
    if (touched) {
      setPos("top");
    }
  }, [touched]);
  return (
    <div className={`${styles.sun} ${styles[pos]}`} onClick={sunTouched}></div>
  );
}
