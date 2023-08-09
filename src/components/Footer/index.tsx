// Libraries
import React from "react";
import { Link } from "react-router-dom";
// (end of) Libraries

// Blocks
import { LogoBlock } from "../../blocks/LogoBlock";
import { SocialBlock } from "../../blocks/SocialBlock";
// (end of) Blocks

// Styles
import styles from "./Footer.module.scss";
// (end of) Styles

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <LogoBlock />

          <SocialBlock />

          <Link to="/privacy" className={styles.copy} title="Политика конфиденциальности">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};
