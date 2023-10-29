"use client";

import styles from "@/styles/daedalus.module.css";
import { useEffect, useState } from "react";

export default function Daedalus({ touched }) {
  const [pos, setPos] = useState("right");

  useEffect(() => {
    if (!touched) {
      setPos("center");
    }
  });

  useEffect(() => {
    if (touched) {
      setPos("left");
    }
  }, [touched]);
  return <div className={`${styles.daedalus} ${styles[pos]}`}></div>;
}
