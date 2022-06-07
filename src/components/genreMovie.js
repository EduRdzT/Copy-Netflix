import Imagen from "./imagen";
import imgAvailable from "../assets/no-image-available.jpg";
import { hiddenCard, visibleCard } from "../helpers/displayCard";
import { useRef } from "react";

const genres = {
  28: "Acción",
  12: "Aventura",
  16: "Animación",
  35: "Comedia",
  80: "Crimen",
  99: "Documental",
  18: "Drama",
  10751: "Familia",
  14: "Fantasía",
  36: "Historia",
  27: "Terror",
  10402: "Música",
  9648: "Misterio",
  10749: "Romance",
  878: "Ciencia ficción",
  10770: "Película de TV",
  53: "Suspense",
  10752: "Bélica",
  37: "Western",
};

export default function GenreMovie({ value, createData, db, getType }) {
  let refFigcaption = useRef();
  const urlImg = "https://image.tmdb.org/t/p/original";

  const iconSave = (el) => {
    for (let e of db) {
      if (parseInt(e.movie) === parseInt(el.id)) {
        return "done";
      }
    }
  };

  const handleClick = (el, type) => {
    const $button = el.target.matches("button")
      ? el.target
      : el.target.parentElement;
    const data = {
      movie: $button.getAttribute("data-id"),
      type,
    };
    createData($button, data);
  };

  return (
    <>
      {value.map((el) => (
        <figure
          className="movie"
          onMouseEnter={visibleCard}
          onMouseLeave={hiddenCard}
          key={el.id}
        >
          <Imagen
            location={
              el.backdrop_path ? urlImg + el.backdrop_path : imgAvailable
            }
            clase={false}
            title={el.title}
          />
          <figcaption className="invisible" ref={refFigcaption}>
            <Imagen
              location={
                el.backdrop_path ? urlImg + el.backdrop_path : imgAvailable
              }
              clase={false}
              title={el.title}
            />
            <div className="btn-card">
              <button>
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
              <button
                data-id={el.id}
                onClick={(el) => handleClick(el, getType)}
              >
                <span className="material-symbols-outlined">
                  {iconSave(el) ?? "add"}
                </span>
              </button>
              <button>
                <span className="material-symbols-outlined">thumb_up</span>
              </button>
              <button>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
            <h3>{el.title ? el.title : el.name}</h3>
            <ul>
              {el.genre_ids.map((el) => (
                <li key={el}>{genres[el]}</li>
              ))}
            </ul>
          </figcaption>
        </figure>
      ))}
    </>
  );
}
