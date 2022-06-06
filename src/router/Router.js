import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Busqueda from "../pages/busqueda";
import Error404 from "../pages/Error404";
import First from "../pages/first";
import Inicio from "../pages/inicio";
import Login from "../pages/login";
import Populares from "../pages/populares";
import Pages from "./Links";
import logoBatman from "../assets/the_batman_logo.png";
import logoBreakingBad from "../assets/breaking_bad_logo.png";
import logoCruella from "../assets/cruella_logo.png";
import MyList from "../pages/myList";

const initial = {
  intro: null,
  result: [],
};

const initialDb = [
  {
    id: 1,
    movie: 414906,
    type: "movie",
  },
  {
    id: 2,
    movie: 1396,
    type: "tv",
  },
  {
    id: 3,
    movie: 337404,
    type: "movie",
  },
  {
    id: 4,
    movie: 744,
    type: "movie",
  },
  {
    id: 5,
    movie: 92830,
    type: "tv",
  },
  {
    id: 6,
    movie: 338953,
    type: "movie",
  },
];

const Rutas = () => {
  const [visible, setVisible] = useState(true);
  const [movies, setMovies] = useState(initial);
  const [series, setSeries] = useState(initial);
  const [onlyMovies, setOnlyMovies] = useState(initial);
  const [popular, setPopular] = useState([]);
  const [db, setDb] = useState(initialDb);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const deleteData = (id) => {
    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
  };

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
                createData={createData}
              />
            }
          />
          <Route
            path="my-list"
            element={
              <MyList
                setVisible={setVisible}
                visible={visible}
                deleteData={deleteData}
                db={db}
              />
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
                  createData={createData}
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
                  createData={createData}
                />
              }
            />
          </Route>
        </Route>
        <Route
          path="latest"
          element={
            <Populares
              setVisible={setVisible}
              visible={visible}
              movies={popular}
              setMovies={setPopular}
              limit={5}
              createData={createData}
            />
          }
        />
        <Route path="search" element={<Busqueda />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
