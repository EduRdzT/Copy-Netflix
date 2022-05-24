import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="login">
      <form id="form-login">
        <h3>Inicia sesión</h3>
        <label className="form-email">
          <input type="text" name="user" placeholder=" " />
          <p>Email o número de teléfono</p>
        </label>
        {/* <span>{message}</span> */}
        <label className="form-email">
          <input type="password" name="password" placeholder=" " />
          <p>Contraseña</p>
        </label>
        {/* <span>{message}</span> */}
        <Link to="/browse" className="sign">
          Iniciar sesión
        </Link>
        <input type="checkbox" />
        <span>Recuérdame</span>
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
