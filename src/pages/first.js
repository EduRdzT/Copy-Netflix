import React from "react";

const First = () => {
  return (
    <main className="login">
      <div className="first-page">
        <h3>Películas y series</h3>
        <h3>ilimitadas y mucho más.</h3>
        <h4>Disfruta donde quieras. Cancela cuando quieras.</h4>
        <p>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix
        </p>
        <div>
          <div className="form-email">
            {/* <label className="label"> */}
            <input type="email" placeholder=" " />
            <p>Email</p>
            {/* </label> */}
          </div>
          <button className="sign">
            Comenzar
            <span className="material-symbols-outlined">navigate_next</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default First;
