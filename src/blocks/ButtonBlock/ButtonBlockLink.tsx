// Libraries
import React from "react";
import { Link } from "react-router-dom";
// (end of) Libraries

// Types
import { ButtonParams } from "./types";
// (end of) Types

// Styles
import styles from "./ButtonBlock.module.scss";
// (end of) Styles

export const ButtonBlockLink: React.FC<ButtonParams> = ({ className, link, text, title }) => {
  return (
    <div className={`button buttonBlock ${className} ${styles.root}`} title={title}>
      <div className={styles.inner}>
        <Link to={link} className={styles.btn}>
          {text}
        </Link>
      </div>
    </div>
  );
};
