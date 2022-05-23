import { Link, useLocation } from "react-router-dom";
import Logo from "../components/logo";
import { useEffect, useState } from "react";
import Menu from "./menu";
import SearchLink from "./searchLink";
import News from "./news";
import OptionsUser from "./optionsUser";

const w = window;

const Pages = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hash, setHash] = useState(true);
  const [sign, setSign] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (w.location.pathname === "/" || w.location.pathname === "/login") {
      setHash(true);
    } else {
      setHash(false);
    }
    if (w.location.pathname === "/login") {
      setSign(false);
    } else {
      setSign(true);
    }
  }, [location]);

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

  return (
    <>
      {hash ? (
        <nav id="navbar" className="container-bar-first">
          {sign ? (
            <Logo logo="Copy-Net" size={30} />
          ) : (
            <Link to="/">
              <Logo logo="Copy-Net" size={40} />
            </Link>
          )}
          {sign && (
            <Link to="/login" className="sign">
              Iniciar sesión
            </Link>
          )}
        </nav>
      ) : (
        <nav id="navbar" className="container-bar">
          <Link to="/browse">
            <Logo logo="Copy-Net" size={22} />
          </Link>
          <Menu />
          <div className="icons">
            <SearchLink />
            <News />
            <OptionsUser />
          </div>
        </nav>
      )}
    </>
  );
};

export default Pages;
