import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <nav className="container-bar">
      <ul>
        <li>
          <Link to="/browse">Netflix</Link>
        </li>
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
        <li>
          <Link to="/search">busqueda</Link>
        </li>
        <li>
          <Link to="/YourAccount">Cuenta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pages;
