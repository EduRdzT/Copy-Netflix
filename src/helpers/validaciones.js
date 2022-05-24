export function handleEmail(e, setWrong, setMessage) {
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

export function handleSubmit(e, setMessage, wrong) {
  e.preventDefault();
  setMessage(wrong.message);
  if (wrong.ok) {
    alert("El formulario se ha enviado");
  }
}
