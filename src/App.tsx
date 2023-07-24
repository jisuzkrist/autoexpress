// Libraries
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};
