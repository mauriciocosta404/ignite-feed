import React from "react";
import styles from "./index.module.css";

const igniteLogo = "/Ignite-logo.png";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="logo ignite" />
    </header>
  );
};
