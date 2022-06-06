import React from "react";
import { ChangeOptions } from "../components/navbar-card";

const Options = () => {
  return (
    <div className="content-users">
      <ChangeOptions descrip="Cuenta" icon="person" />
      <ChangeOptions descrip="Centro de ayuda" icon="help" />
    </div>
  );
};

export default Options;
