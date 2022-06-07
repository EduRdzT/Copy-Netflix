import React from "react";
import InfoIntro from "./infoIntro";
import MovieApi from "./movieApi";

const AllMovies = ({
  movies,
  setMovies,
  getType,
  limit,
  logo,
  createData,
  db,
}) => {
  return (
    <section className="genres-movie">
      <InfoIntro info={movies} logo={logo} />
      <MovieApi
        allMovies={movies}
        setAllMovies={setMovies}
        getType={getType}
        limit={limit}
        createData={createData}
        db={db}
      />
    </section>
  );
};

export default AllMovies;
