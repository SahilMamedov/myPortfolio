import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Links } from "./Links";
import AppLayout from "../Layouts/AppLayout";
import Home from "../pages";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.app.home} element={<AppLayout />}>
          <Route path={Links.app.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
