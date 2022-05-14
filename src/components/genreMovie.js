import Imagen from "./imagen";
import imgAvailable from "../assets/no-image-available.jpg";

export default function GenreMovie({ value }) {
  const urlImg = "https://image.tmdb.org/t/p/original";
  return (
    <>
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
    </>
  );
}
