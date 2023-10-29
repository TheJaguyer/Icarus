"use client";

import styles from "@/styles/icarus.module.css";
import { useEffect, useState } from "react";

export default function Icarus({ touched }) {
  const [pos, setPos] = useState("bottom");

  useEffect(() => {
    if (!touched) {
      setPos("center");
    }
  });

  useEffect(() => {
    if (touched) {
      setPos("bottom");
    }
  }, [touched]);
  return <div className={`${styles.icarus} ${styles[pos]}`}></div>;
}
