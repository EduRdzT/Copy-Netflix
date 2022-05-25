import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EmailPhone, handlePassword } from "../helpers/validaciones";

const Login = () => {
  const [messageText, setMessageText] = useState("");
  const [messagePass, setMessagePass] = useState("");

  return (
    <main className="login">
      <form id="form-login">
        <h3>Inicia sesión</h3>
        <label className="form-email">
          <input
            type="text"
            name="user"
            placeholder=" "
            onBlur={(e) => EmailPhone(e, setMessageText)}
          />
          <p>Email o número de teléfono</p>
        </label>
        <span>{messageText}</span>
        <label className="form-email">
          <input
            type="password"
            name="password"
            placeholder=" "
            onBlur={(e) => handlePassword(e, setMessagePass)}
          />
          <p>Contraseña</p>
        </label>
        <span>{messagePass}</span>
        <Link to="/browse" className="sign">
          Iniciar sesión
        </Link>
        <input type="checkbox" id="recordar" />
        <label htmlFor="recordar">Recuérdame</label>
        <p>¿Necesitas ayuda?</p>
        <h4>
          ¿Primera vez en Netflix?
          <Link to="/">Suscribete ahora</Link>
        </h4>
        <h6>
          No se necesita rellenar el formulario para acceder a la prueba de esta
          Pagina, solo haga click en <span>Iniciar Seción</span>.
        </h6>
      </form>
    </main>
  );
};

export default Login;
