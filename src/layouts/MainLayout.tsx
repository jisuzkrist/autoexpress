// Libraries
import React from "react";
import { Outlet } from "react-router-dom";
// (end of) Libraries

// Components
import { Header } from "../components/Header";
import { Services } from "../components/Services";
// (end of) Components

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <Outlet />
    </div>
  );
};

export default MainLayout;
