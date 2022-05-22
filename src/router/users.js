import React from "react";
import { ChangeOptions, ChangeUser } from "../components/navbar-card";
import imgPerfil from "../assets/perfil-img.png";

const Users = () => {
  return (
    <div className="content-users">
      <ChangeUser user="User-1" imgPerfil={imgPerfil} />
      <ChangeUser user="User-2" imgPerfil={imgPerfil} />
      <ChangeUser user="User-3" imgPerfil={imgPerfil} />
      <ChangeOptions descrip="Administrar perfiles" icon="edit" />
    </div>
  );
};

export default Users;
