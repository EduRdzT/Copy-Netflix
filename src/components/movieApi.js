import { useEffect, useRef, useState } from "react";
import TMDB_KEYS from "../helpers/stripe-checkout";
import { getHttp } from "../helpers/getHttp";
import GenreMovie from "./genreMovie";
import MovieSlide from "./movieSlide";

const genres = [
  { id: 28, name: "Acción" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animación" },
  { id: 35, name: "Comedia" },
  { id: 80, name: "Crimen" },
  { id: 99, name: "Documental" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Familia" },
  { id: 14, name: "Fantasía" },
  { id: 36, name: "Historia" },
  { id: 27, name: "Terror" },
  { id: 10402, name: "Música" },
  { id: 9648, name: "Misterio" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ciencia ficción" },
  { id: 10770, name: "Película de TV" },
  { id: 53, name: "Suspense" },
  { id: 10752, name: "Bélica" },
  { id: 37, name: "Western" },
];

export default function MovieApi({
  setAllMovies,
  allMovies,
  getType,
  limit,
  createData,
  db,
}) {
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

  // Novedades populares
  // let url = `https://api.themoviedb.org/3/discover/movie?with_genres=${el.id}&primary_release_year=2020,2021&sort_by=popularity.desc?&api_key=${key}&language=es-ES`;

  useEffect(() => {
    if (allMovies.result.length === limit) return;

    genres.forEach(async (el) => {
      let url = `https://api.themoviedb.org/3/discover/${getType}?with_genres=${el.id}&sort_by=popularity.desc?&api_key=${key}&language=es-ES`;
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
  }, [key, getType, allMovies, limit]);

  let arrayMovies = Object.entries(movies);

  useEffect(() => {
    if (allMovies.result.length === limit) return;

    const movies = { result: arrayMovies };
    setAllMovies((el) =>
      el.result.length !== limit ? { ...el, ...movies } : el
    );
  }, [arrayMovies, setAllMovies, limit, allMovies]);

  return (
    <div className="all-movies">
      {allMovies.result.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        allMovies.result.map(([genre, value], index) => (
          <div key={index} className="container-genre">
            <h2 className="genre">{genre}</h2>
            <article
              id={"id" + index}
              className={"movies"}
              ref={refMovies}
              data-position={0}
            >
              <GenreMovie
                key={index}
                value={value}
                createData={createData}
                db={db}
                getType={getType}
              />
            </article>
            <MovieSlide key={index} moviesHeight={sizeHeight} index={index} />
          </div>
        ))
      )}
    </div>
  );
}

function sizecontainer(refMovies) {
  return refMovies.current ? refMovies.current.clientHeight : 0;
}
