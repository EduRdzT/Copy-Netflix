import { Link } from "react-router-dom";
import Logo from "../components/logo";
import { useEffect, useState } from "react";
import Menu from "./menu";
import SearchLink from "./searchLink";
import News from "./news";
import OptionsUser from "./optionsUser";

const Pages = () => {
  const [scrollY, setScrollY] = useState(0);

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
    <nav id="navbar" className="container-bar">
      <Link to="/browse">
        <Logo logo="Copy-Net" />
      </Link>
      <Menu />
      <div className="icons">
        <SearchLink />
        <News />
        <OptionsUser />
      </div>
    </nav>
  );
};

export default Pages;
