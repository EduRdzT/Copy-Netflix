import { Link } from "react-router-dom";
import Imagen from "../components/imagen";
import Logo from "../components/logo";

const Pages = () => {
  return (
    <nav className="container-bar">
      <Link to="/browse">
        <Logo logo="Copy-Net" />
      </Link>
      <ul>
        <li>
          <Link to="/browse">Inicio</Link>
        </li>
        <li>
          <Link to="/browse/genre/454">Series</Link>
        </li>
        <li>
          <Link to="/browse/genre/45">Peliculas</Link>
        </li>
        <li>
          <Link to="/latest">Novedades populares</Link>
        </li>
        <li>
          <Link to="/browse/my-list">Mi lista</Link>
        </li>
      </ul>
      <div className="icons">
        <Link to="/search">
          <span className="material-symbols-outlined">search</span>
        </Link>
        <span className="material-symbols-outlined">notifications</span>
        <Link to="/YourAccount">
          <Imagen
            location="./assets/perfil-img.png"
            clase="border"
            title="img Perfil"
          />
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </Link>
      </div>
    </nav>
  );
};

export default Pages;
