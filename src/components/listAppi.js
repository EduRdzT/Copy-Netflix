import React, { useEffect, useState } from "react";
import { getHttp } from "../helpers/getHttp";
import TMDB_KEYS from "../helpers/stripe-checkout";
import ListMovie from "./listMovie";

const key = TMDB_KEYS.keyApi;

const ListAppi = ({ db }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!db) return;
    db.forEach(async (el) => {
      let url = `https://api.themoviedb.org/3/${el.type}/${el.movie}?api_key=${key}&language=es-ES`;
      await getHttp(url).then((res) => {
        setMovies((el) => [...new Set([...el, res])]);
      });
    });
  }, [db]);

  return (
    <article className="list-movies">
      {movies.map((value, index) => (
        <ListMovie key={index} value={value} />
      ))}
    </article>
  );
};

export default ListAppi;
