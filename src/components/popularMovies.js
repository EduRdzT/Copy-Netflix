import { useEffect, useRef, useState } from "react";
import TMDB_KEYS from "../helpers/stripe-checkout";
import { getHttp } from "../helpers/getHttp";
import GenreMovie from "./genreMovie";
import MovieSlide from "./movieSlide";

const popular = [
  { id: 2021, name: "Lo Nuevo" },
  { id: 2022, name: "Proximos estrenos" },
  { id: 2020, name: "Nuevos estrenos" },
  { id: 2019, name: "Anteriores estrenos" },
  { id: 2018, name: "Antiguos estrenos" },
];

const PopularMovies = ({ setAllMovies, allMovies, limit }) => {
  let refMovies = useRef();
  const [movies, setMovies] = useState([]);
  const [sizeHeight, setSizeHeight] = useState(sizecontainer(refMovies));
  const key = TMDB_KEYS.keyApi;

  setTimeout(() => {
    setSizeHeight(() => sizecontainer(refMovies));
  }, 100);

  window.addEventListener("resize", () =>
    setSizeHeight(() => sizecontainer(refMovies))
  );

  useEffect(() => {
    if (allMovies[limit - 1]) return;

    popular.forEach(async (el) => {
      let url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${el.id}&sort_by=popularity.desc?&api_key=${key}&language=es-ES`;
      await getHttp(url).then((res) => {
        if (res.results.length < 20) return;
        let arrayMovies = {
          [el.name]: res.results,
        };

        setMovies((movies) =>
          !movies[el.name] ? { ...movies, ...arrayMovies } : movies
        );
      });
    });
  }, [key, allMovies, limit]);

  let arrayMovies = Object.entries(movies);

  useEffect(() => {
    if (allMovies[limit - 1]) return;

    setAllMovies(arrayMovies);
  }, [arrayMovies, setAllMovies, limit, allMovies]);

  return (
    <div className="all-movies" style={{ paddingTop: "100px" }}>
      {!allMovies[limit - 1] ? (
        <h3>Cargando...</h3>
      ) : (
        allMovies.map(([genre, value], index) => (
          <div key={index} className="container-genre">
            <h2 className="genre">{genre}</h2>
            <article id={"id" + index} className={"movies"} ref={refMovies}>
              <GenreMovie key={index} value={value} />
            </article>
            <MovieSlide key={index} moviesHeight={sizeHeight} index={index} />
          </div>
        ))
      )}
    </div>
  );
};

export default PopularMovies;

function sizecontainer(refMovies) {
  return refMovies.current ? refMovies.current.clientHeight : 0;
}
