import React from "react";
import InfoIntro from "./infoIntro";
import MovieApi from "./movieApi";

const AllMovies = ({ movie }) => {
  return (
    <section className="genres-movie">
      <InfoIntro info={movie} />
      <MovieApi />
    </section>
  );
};

export default AllMovies;
