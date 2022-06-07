import React, { useRef } from "react";
import Imagen from "./imagen";
import imgAvailable from "../assets/no-image-available.jpg";
import { hiddenCard, visibleCard } from "../helpers/displayCard";

const ListMovie = ({ value, createData, setMovies }) => {
  let refFigcaption = useRef();
  const urlImg = "https://image.tmdb.org/t/p/original";

  const handleClick = (el) => {
    const $button = el.target.matches("button")
      ? el.target
      : el.target.parentElement;
    setMovies([]);
    createData($button);
  };

  return (
    <figure
      className="movie"
      onMouseEnter={visibleCard}
      onMouseLeave={hiddenCard}
    >
      <Imagen
        location={
          value.backdrop_path ? urlImg + value.backdrop_path : imgAvailable
        }
        clase={false}
        title={value.title}
      />
      <figcaption className="invisible" ref={refFigcaption}>
        <Imagen
          location={
            value.backdrop_path ? urlImg + value.backdrop_path : imgAvailable
          }
          clase={false}
          title={value.title}
        />
        <div className="btn-card">
          <button>
            <span className="material-symbols-outlined">play_arrow</span>
          </button>
          <button data-id={value.id} onClick={handleClick}>
            <span className="material-symbols-outlined">done</span>
          </button>
          <button>
            <span className="material-symbols-outlined">thumb_up</span>
          </button>
          <button>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
        <h3>{value.title ? value.title : value.name}</h3>
        <ul>
          {value.genres.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
};

export default ListMovie;
