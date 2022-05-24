import React, { useState } from "react";
import { handleEmail, handleSubmit } from "../helpers/validaciones";

const initial = {
  ok: false,
  message: "El email es obligatorio",
};

const First = () => {
  const [wrong, setWrong] = useState(initial);
  const [message, setMessage] = useState("");

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
        <form>
          <label className="form-email">
            <input
              type="email"
              name="email"
              onBlur={(e) => handleEmail(e, setWrong, setMessage)}
              placeholder=" "
            />
            <p>Email</p>
          </label>
          <button
            className="sign"
            onClick={(e) => handleSubmit(e, setMessage, wrong)}
          >
            Comenzar
            <span className="material-symbols-outlined">navigate_next</span>
          </button>
          <span>{message}</span>
        </form>
      </div>
    </main>
  );
};

export default First;
