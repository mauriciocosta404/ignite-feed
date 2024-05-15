import React from "react";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <strong >Ignite Feed</strong>
    </header>
  );
};
