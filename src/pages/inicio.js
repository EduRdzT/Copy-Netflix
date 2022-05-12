import { useState } from "react";
import AllMovies from "../components/allMovies";
import Footer from "../components/footer";
import Intro from "../components/intro";

const Inicio = () => {
  const [movie, setMovie] = useState(null);

  return (
    <main>
      <Intro setMovie={setMovie} />
      <AllMovies movie={movie} />
      <Footer />
    </main>
  );
};

export default Inicio;
