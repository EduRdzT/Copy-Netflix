import React from "react";
import InfoIntro from "./infoIntro";
import MovieApi from "./movieApi";

const AllMovies = ({ movies, setMovies, getType, limit, logo }) => {
  return (
    <section className="genres-movie">
      <InfoIntro info={movies} logo={logo} />
      <MovieApi
        allMovies={movies}
        setAllMovies={setMovies}
        getType={getType}
        limit={limit}
      />
    </section>
  );
};

export default AllMovies;
