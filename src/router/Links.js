import { Link } from "react-router-dom";
import Imagen from "../components/imagen";
import Logo from "../components/logo";
import imgPerfil from "../assets/perfil-img.png";
import { useEffect, useState } from "react";

const Pages = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    const refNavBar = document.getElementById("navbar");

    if (scrollY > 50) {
      refNavBar.classList.add("background-bar-pri");
    } else {
      refNavBar.classList.remove("background-bar-pri");
    }
    //return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  const handleToggelMenu = (e) => {
    const $active = document.querySelector(".active");
    $active.classList.remove("active");
    e.target.classList.add("active");
  };

  return (
    <nav id="navbar" className="container-bar">
      <Link to="/browse">
        <Logo logo="Copy-Net" />
      </Link>
      <ul>
        <li>
          <Link to="/browse" onClick={handleToggelMenu} className="active">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/browse/genre/454" onClick={handleToggelMenu}>
            Series
          </Link>
        </li>
        <li>
          <Link to="/browse/genre/45" onClick={handleToggelMenu}>
            Peliculas
          </Link>
        </li>
        <li>
          <Link to="/latest" onClick={handleToggelMenu}>
            Novedades populares
          </Link>
        </li>
        <li>
          <Link to="/browse/my-list" onClick={handleToggelMenu}>
            Mi lista
          </Link>
        </li>
      </ul>
      <div className="icons">
        <Link to="/search">
          <span className="material-symbols-outlined">search</span>
        </Link>
        <span className="material-symbols-outlined">notifications</span>
        <Link to="/YourAccount">
          <Imagen location={imgPerfil} clase="border" title="img Perfil" />
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </Link>
      </div>
    </nav>
  );
};

export default Pages;
