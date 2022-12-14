import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCustom from "./components/Navbar/NavbarCustom";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarCustom />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
