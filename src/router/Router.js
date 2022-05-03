import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Busqueda from "../pages/busqueda";
import Cuenta from "../pages/cuenta";
import Error404 from "../pages/Error404";
import Inicio from "../pages/inicio";
import Populares from "../pages/populares";
import Pages from "./Links";

const Rutas = () => {
  return (
    <Router>
      <Pages />
      <Routes>
        <Route path="browse/*" element={<Inicio />} />
        <Route path="latest" element={<Populares />} />
        <Route path="search" element={<Busqueda />} />
        <Route path="YourAccount" element={<Cuenta />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
