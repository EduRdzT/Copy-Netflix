import React from "react";

const Imagen = ({ location, clase, title }) => {
  return clase ? (
    <img src={location} alt={title} className={clase} />
  ) : (
    <img src={location} alt={title} />
  );
};

export default Imagen;
