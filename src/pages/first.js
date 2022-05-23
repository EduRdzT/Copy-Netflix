import React from "react";

const First = () => {
  return (
    <main className="login">
      <h3>Películas y series ilimitadas y mucho más.</h3>
      <h4>Disfruta donde quieras. Cancela cuando quieras.</h4>
      <p>¿Quieres ver Netflix ya? Ingresa tu email</p>
      <p>para crear una cuenta o reiniciar tu</p>
      <p>membresía de Netflix</p>
      <input type="text" placeholder="Email" />
      <button className="sign">Comenzar</button>
    </main>
  );
};

export default First;
