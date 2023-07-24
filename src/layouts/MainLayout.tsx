// Libraries
import React from "react";
import { Outlet } from "react-router-dom";
// (end of) Libraries

// Components
import { Header } from "../components/Header";
// (end of) Components

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
