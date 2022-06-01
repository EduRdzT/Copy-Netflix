import Footer from "../components/footer";
import ChooseUser from "../components/chooseUser";
import PopularMovies from "../components/popularMovies";

const Populares = ({ setVisible, visible, movies, setMovies, limit }) => {
  return (
    <main>
      {visible ? (
        <>
          <ChooseUser setVisible={setVisible} />
        </>
      ) : (
        <>
          <PopularMovies
            allMovies={movies}
            setAllMovies={setMovies}
            limit={limit}
          />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Populares;
