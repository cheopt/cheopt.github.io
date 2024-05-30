function validar(e) {
  e.preventDefault();

  const campoMail = document.getElementById("floatingInput");
  const mailError = document.getElementById("floatingInputError");
  const campoPassWd = document.getElementById("floatingPassword");
  const passWdError = document.getElementById("floatingPasswordError");
  let valido = true;

  campoMail.classList.remove("border-danger");
  mailError.style = "display:none";
  campoPassWd.classList.remove("border-danger");
  passWdError.style = "display:none";

  if (!campoMail.value) {
    mailError.classList.add("alert-danger");
    campoMail.classList.add("border-danger");
    mailError.style = "display:block";
    valido = false;
  }
  if (!campoPassWd.value) {
    passWdError.classList.add("alert-danger");
    campoPassWd.classList.add("border-danger");
    passWdError.style = "display:block";
    valido = false;
  }

  if (valido) {
    window.location.href = "index2.html";
  } else return valido;
}

const enviar = document.getElementById("ingresar");
enviar.addEventListener("click", validar);
