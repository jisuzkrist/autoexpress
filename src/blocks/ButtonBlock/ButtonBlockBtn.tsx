// Libraries
import React from "react";
// (end of) Libraries

// Types
import { ButtonParams } from "./types";
// (end of) Types

// Styles
import styles from "./ButtonBlock.module.scss";
// (end of) Styles

export const ButtonBlockBtn: React.FC<ButtonParams> = ({ text, type, title }) => {
  return (
    <div className={`button buttonBlock ${styles.root}`} title={title}>
      <div className={styles.inner}>
        <button className={styles.btn} type={type}>
          {text}
        </button>
      </div>
    </div>
  );
};
