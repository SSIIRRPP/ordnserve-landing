import React from "react";
import Link from "../Link";
import styles from "./styles/OrdNServeLogo.module.css";

const OrdNServeLogo = () => {
  return (
    <Link href="/" className={styles["header-logo-wrapper"]}>
      <div className={styles["header-logo-container"]}>
        <span className={styles["header-logo-first"]}>Ord</span>
        <span className={styles["header-logo-second"]}>N</span>
        <span className={styles["header-logo-third"]}>Serve</span>
      </div>
    </Link>
  );
};

export default OrdNServeLogo;
