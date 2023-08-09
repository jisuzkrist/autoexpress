// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
// (end of) Libraries

// Components
import MainLayout from "./layouts/MainLayout";
// (end of) Components

// Pages
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
// (end of) Pages

// Styles
import "./scss/app.scss";
// (end of) Styles

export const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </div>
  );
};
