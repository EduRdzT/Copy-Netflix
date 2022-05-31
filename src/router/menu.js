import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { isMenu } from "../components/dropdown";

const Menu = () => {
  const [isPermiss, setIsPermiss] = useState(true);
  let menu_wrapper = useRef(),
    drop_wrapper = useRef(),
    breakpoint = matchMedia(`(min-width: 885px)`);

  const responsiveMedia = (e) => {
    if (e.matches) {
      setIsPermiss(true);
      drop_wrapper.current.classList.add("invisible");
      menu_wrapper.current.removeAttribute("class");
      menu_wrapper.current.classList.remove("invisible");
      menu_wrapper.current.removeAttribute("style");
    } else {
      setIsPermiss(false);
      drop_wrapper.current.classList.remove("invisible");
      menu_wrapper.current.classList.add("invisible");
      menu_wrapper.current.classList.add("wrapper");
    }
  };

  breakpoint.addEventListener("change", responsiveMedia);

  useEffect(() => {
    responsiveMedia(breakpoint);
  }, [breakpoint]);

  return (
    <div>
      <div
        data-dropdown
        className="drop-btn invisible"
        onMouseEnter={(e) => isMenu(e, menu_wrapper, "midlle", isPermiss)}
        onMouseLeave={(e) => isMenu(e, menu_wrapper, "midlle", isPermiss)}
        ref={drop_wrapper}
      >
        <p>Explorar</p>
        <span className="material-symbols-outlined"> arrow_drop_down </span>
      </div>
      <ul
        className="wrapper"
        ref={menu_wrapper}
        onMouseEnter={(e) => isMenu(e, menu_wrapper, "midlle", isPermiss)}
        onMouseLeave={(e) => isMenu(e, menu_wrapper, "midlle", isPermiss)}
      >
        <li>
          <NavLink to="/browse">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/browse/genre/454">Series</NavLink>
        </li>
        <li>
          <NavLink to="/browse/genre/45">Peliculas</NavLink>
        </li>
        <li>
          <NavLink to="/latest">Novedades populares</NavLink>
        </li>
        <li>
          <NavLink to="/browse/my-list">Mi lista</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
