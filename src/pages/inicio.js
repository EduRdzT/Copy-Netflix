import { useState } from "react";
import AllMovies from "../components/allMovies";
import Intro from "../components/intro";

const Inicio = () => {
  const [movie, setMovie] = useState(null);

  return (
    <main>
      <Intro setMovie={setMovie} />
      <AllMovies movie={movie} />
    </main>
  );
};

export default Inicio;
