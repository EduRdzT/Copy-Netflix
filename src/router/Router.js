import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Busqueda from "../pages/busqueda";
import Cuenta from "../pages/cuenta";
import Error404 from "../pages/Error404";
import First from "../pages/first";
import Inicio from "../pages/inicio";
import Login from "../pages/login";
import Populares from "../pages/populares";
import Pages from "./Links";

const Rutas = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Router>
      <Pages visible={visible} setVisible={setVisible} />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="login" element={<Login />} />
        <Route
          path="browse/*"
          element={<Inicio setVisible={setVisible} visible={visible} />}
        />
        <Route path="latest" element={<Populares />} />
        <Route path="search" element={<Busqueda />} />
        <Route path="YourAccount" element={<Cuenta />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
