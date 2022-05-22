import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { isMenu } from "../components/dropdown";
import Imagen from "../components/imagen";
import imgPerfil from "../assets/perfil-img.png";
import Users from "./users";
import Options from "./options";

const OptionsUser = () => {
  let options = useRef();

  return (
    <div
      id="options"
      onMouseEnter={(e) => isMenu(e, options, "right")}
      onMouseLeave={(e) => isMenu(e, options, "right")}
    >
      <div className="options" data-dropdown>
        <Imagen location={imgPerfil} clase="border" title="img Perfil" />
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </div>
      <div className="wrapper invisible" ref={options}>
        <Users />
        <Options />
        <Link to="/" className="closet-sesion">
          Cerrar sesión en Netflix
        </Link>
      </div>
    </div>
  );
};

export default OptionsUser;
