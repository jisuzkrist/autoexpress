// Libraries
import React from "react";
// (end of) Libraries

// Components
import { Services } from "../../components/Services";
import { Benefits } from "../../components/Benefits";
import { Carousel } from "../../components/Carousel";
import { Contacts } from "../../components/Contacts";
// (end of) Components

// Styles
import styles from "./Home.module.scss";
// (end of) Styles

const Home: React.FC = () => {
  return (
    <div className={styles.root}>
      <Services />
      <Benefits />
      <Carousel />
      <Contacts />
    </div>
  );
};

export default Home;
