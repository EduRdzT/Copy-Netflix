import { useEffect, useState } from "react";
import TMDB_KEYS from "../helpers/TMDb-key";
import { getHttp } from "../helpers/getHttp";
import GenreMovie from "./genreMovie";

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

export default function MovieApi() {
  const [movies, setMovies] = useState([]);
  let key = TMDB_KEYS.keyApi;
  // let url = `https://api.themoviedb.org/3/movie/76341?api_key=${key}`;
  // let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=es-ES`;
  // let url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=es-ES`;
  // let url = `https://api.themoviedb.org/3/list/99?api_key=${key}&language=es-ES`;
  // let url = `https://api.themoviedb.org/3/configuration?api_key=${key}&language=es-ES`;
  // let url = `https://api.themoviedb.org/3/discover/movie?with_genres=9648&sort_by=popularity.desc?&api_key=${key}&language=es-ES`;
  // let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?&api_key=${key}&language=es-ES`;

  useEffect(() => {
    genres.forEach(async (el) => {
      let url = `https://api.themoviedb.org/3/discover/movie?with_genres=${el.id}&sort_by=popularity.desc?&api_key=${key}&language=es-ES`;
      await getHttp(url).then((res) => {
        let arrayMovies = {
          [el.name]: res.results,
        };

        setMovies((movies) =>
          !movies[el.name] ? { ...movies, ...arrayMovies } : movies
        );
      });
    });
    //setDb(() => JSON.parse(JSON.stringify(movies)));
  }, [key]);

  const arrayMovies = Object.entries(movies);

  return (
    <div className="container-genre">
      {arrayMovies.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        arrayMovies.map(([genre, value], index) => (
          <GenreMovie key={index} genre={genre} value={value} />
        ))
      )}
    </div>
  );
}
