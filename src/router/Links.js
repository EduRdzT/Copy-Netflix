import { Link } from "react-router-dom";
import Imagen from "../components/imagen";
import Logo from "../components/logo";
import imgPerfil from "../assets/perfil-img.png";
import { useEffect, useRef, useState } from "react";
import Search from "../components/search";

const Pages = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isPermiss, setIsPermiss] = useState(true);
  let refLink = useRef(),
    menu_wrapper = useRef(),
    drop_wrapper = useRef(),
    closeTempo,
    breakpoint = matchMedia(`(min-width: 885px)`);

  const responsiveMedia = (e) => {
    if (e.matches) {
      setIsPermiss(true);
      drop_wrapper.current.classList.add("invisible");
      menu_wrapper.current.removeAttribute("style");
    } else {
      setIsPermiss(false);
      drop_wrapper.current.classList.remove("invisible");
    }
  };

  breakpoint.addEventListener("change", responsiveMedia);

  useEffect(() => {
    if (!breakpoint.matches) {
      responsiveMedia(breakpoint);
    }
  }, [breakpoint]);

  function isMenu(closet) {
    if (isPermiss) return;
    if (closet.type === "mouseenter") {
      clearTimeout(closeTempo);
      menu_wrapper.current.removeAttribute("style");
    } else if (closet.type === "mouseleave") {
      closeTempo = setTimeout(() => {
        menu_wrapper.current.style.display = "none";
      }, 300);
    }
  }

  useEffect(() => {
    const detectarScroll = () => setScrollY(window.pageYOffset);
    const refNavBar = document.getElementById("navbar");

    window.addEventListener("scroll", detectarScroll);

    if (scrollY > 50) {
      refNavBar.classList.add("background-bar-pri");
    } else {
      refNavBar.classList.remove("background-bar-pri");
    }
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
      <div>
        <div
          className="drop-btn invisible"
          onMouseEnter={isMenu}
          onMouseLeave={isMenu}
          ref={drop_wrapper}
        >
          <p>Explorar</p>
          <span className="material-symbols-outlined"> arrow_drop_down </span>
        </div>
        <ul
          className="wrapper"
          ref={menu_wrapper}
          onMouseEnter={isMenu}
          onMouseLeave={isMenu}
        >
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
      </div>
      <div className="icons">
        <div>
          <Search refLink={refLink} />
          <Link to="/search" style={{ display: "none" }} ref={refLink}>
            Search
          </Link>
        </div>
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
