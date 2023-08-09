// Libraries
import React from "react";
import { Outlet } from "react-router-dom";
// (end of) Libraries

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// (end of) Components

// Styles
import styles from "./MainLayout.module.scss";
// (end of) Styles

const MainLayout: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />

      <div className={styles.main}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
