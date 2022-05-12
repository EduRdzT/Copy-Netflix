import Imagen from "./imagen";
import imgAvailable from "../assets/no-image-available.jpg";

export default function GenreMovie({ genre, value, index }) {
  const urlImg = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <h2 key={index} className="genre">
        {genre}
      </h2>
      <article className="movies">
        {value.map((el) => (
          <figure className="movie" key={el.id}>
            <Imagen
              location={
                el.backdrop_path ? urlImg + el.backdrop_path : imgAvailable
              }
              clase={false}
              title={el.title}
            />
            <figcaption></figcaption>
          </figure>
        ))}
      </article>
    </>
  );
}
