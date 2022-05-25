import { useState } from "react";
import AllMovies from "../components/allMovies";
import ChooseUser from "../components/chooseUser";
import Footer from "../components/footer";
import Intro from "../components/intro";

const Inicio = ({ setVisible, visible }) => {
  const [movie, setMovie] = useState(null);

  return (
    <main>
      {visible ? (
        <>
          <ChooseUser setVisible={setVisible} />
        </>
      ) : (
        <>
          <Intro setMovie={setMovie} />
          <AllMovies movie={movie} />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Inicio;
