// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
// (end of) Libraries

// Components
import MainLayout from "./layouts/MainLayout";
// (end of) Components

// Styles
import "./scss/app.scss";
// (end of) Styles

export const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </div>
  );
};
