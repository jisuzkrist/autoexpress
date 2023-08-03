// Libraries
import React from "react";
import { Outlet } from "react-router-dom";
// (end of) Libraries

// Components
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Carousel } from "../components/Carousel";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";
// (end of) Components

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <Benefits />
      <Carousel />
      <Contacts />
      <Footer />
      <Outlet />
    </div>
  );
};

export default MainLayout;
