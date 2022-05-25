export function handleEmail(e, setMessage, setWrong) {
  const regex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!e.target.value) {
    setWrong({ ok: false, message: "El email es obligatorio" });
    setMessage("El email es obligatorio");
    return;
  }
  if (!regex.test(e.target.value)) {
    setWrong({ ok: false, message: "Email incorrecto" });
    setMessage("Email incorrecto");
  } else {
    setWrong({ ok: true, message: "" });
    setMessage("");
  }
}

export function handlePassword(e, setMessage) {
  if (!e.target.value) {
    setMessage("La contraseña es obligatoria.");
    return;
  }
  if (e.target.value.length >= 4 && e.target.value.length <= 60) {
    setMessage("");
  } else {
    setMessage("La contraseña debe tener entre 4 y 60 caracteres.");
  }
}

export function EmailPhone(e, setMessage) {
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexNumber = /^(\d{10})$/;

  if (!e.target.value) {
    setMessage("Este campo es obligatorio.");
    return;
  }
  if (
    !(
      (!regexEmail.test(e.target.value) && regexNumber.test(e.target.value)) ||
      (regexEmail.test(e.target.value) && !regexNumber.test(e.target.value))
    )
  ) {
    setMessage("Ingresa un email o un número de teléfono válido.");
  } else {
    setMessage("");
  }
}

export function handleSubmit(e, setMessage, wrong) {
  e.preventDefault();
  setMessage(wrong.message);
  if (wrong.ok) {
    alert("El formulario se ha enviado");
  }
}
