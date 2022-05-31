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
import logoBatman from "../assets/the_batman_logo.png";
import logoBreakingBad from "../assets/breaking_bad_logo.png";
import logoCruella from "../assets/cruella_logo.png";

const initial = {
  intro: null,
  result: [],
};

const Rutas = () => {
  const [visible, setVisible] = useState(true);
  const [movies, setMovies] = useState(initial);
  const [series, setSeries] = useState(initial);
  const [onlyMovies, setOnlyMovies] = useState(initial);

  return (
    <Router>
      <Pages visible={visible} setVisible={setVisible} />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="login" element={<Login />} />
        <Route path="browse">
          <Route
            index
            element={
              <Inicio
                setVisible={setVisible}
                visible={visible}
                movieID={"414906"}
                logo={logoBatman}
                movies={movies}
                setMovies={setMovies}
                getType={"movie"}
                limit={19}
              />
            }
          />
          <Route
            path="my-list"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Series</p>
              </main>
            }
          />
          <Route path="genre">
            <Route
              path="454"
              element={
                <Inicio
                  setVisible={setVisible}
                  visible={visible}
                  movieID={"1396"}
                  logo={logoBreakingBad}
                  movies={series}
                  setMovies={setSeries}
                  getType={"tv"}
                  limit={11}
                />
              }
            />
            <Route
              path="45"
              element={
                <Inicio
                  setVisible={setVisible}
                  visible={visible}
                  movieID={"337404"}
                  logo={logoCruella}
                  movies={onlyMovies}
                  setMovies={setOnlyMovies}
                  getType={"movie"}
                  limit={19}
                />
              }
            />
          </Route>
        </Route>
        <Route path="latest" element={<Populares />} />
        <Route path="search" element={<Busqueda />} />
        <Route path="YourAccount" element={<Cuenta />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
