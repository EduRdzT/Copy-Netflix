import AllMovies from "../components/allMovies";
import ChooseUser from "../components/chooseUser";
import Footer from "../components/footer";
import Intro from "../components/intro";

const Inicio = ({
  setVisible,
  visible,
  movieID,
  logo,
  movies,
  setMovies,
  getType,
  limit,
}) => {
  return (
    <main>
      {visible ? (
        <>
          <ChooseUser setVisible={setVisible} />
        </>
      ) : (
        <>
          <Intro setMovies={setMovies} movieID={movieID} getType={getType} />
          <AllMovies
            movies={movies}
            setMovies={setMovies}
            getType={getType}
            limit={limit}
            logo={logo}
          />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Inicio;
