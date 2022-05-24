import React, { useEffect, useState } from "react";

const initial = {
  ok: false,
  message: "El email es obligatorio",
};

const First = () => {
  const [form, setForm] = useState({});
  const [wrong, setWrong] = useState(initial);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const regex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!form.email) {
      setWrong(initial);
      return;
    }
    if (!regex.test(form.email)) {
      setWrong({ ok: false, message: "Email incorrecto" });
    } else {
      setWrong({ ok: true, message: "" });
    }
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(wrong.message);
    if (wrong.ok) {
      alert("El formulario se ha enviado");
    }
  };

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
              value={form.nombre}
              onBlur={handleChange}
              placeholder=" "
            />
            <p>Email</p>
          </label>
          <button className="sign" onClick={handleSubmit}>
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
