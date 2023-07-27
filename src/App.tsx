import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./Routes/routes";
import FollowPointer from "components/FollowPointer";

function App() {
  return(
    <>
    <FollowPointer />
    <AppRoutes />
  </>
  )
}

export default App;
