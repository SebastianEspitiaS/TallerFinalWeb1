console.log("JSON de usuairos (localStorage): ")
console.log(localStorage)
let intentosFallidos = 0;
const maxIntentos = 3;
const loginForm = document.getElementById('login-form');
let usuario

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const accountNumberInput = document.getElementById('account-number');
  const pinInput = document.getElementById('pin');

  const accountNumber = accountNumberInput.value;
  const pin = pinInput.value;
  let usuarioEncontrado
  usuario = JSON.parse(localStorage.getItem(accountNumber)) || null;
  if (usuario !== null && usuario.pin === pin) {
    usuarioEncontrado = true;
  }else {
    usuarioEncontrado = false;
  }

  if (usuarioEncontrado) {
    localStorage.setItem("NumeroCuentaActual", accountNumber);
    intentosFallidos = 0;
    accountNumberInput.value = '';
    pinInput.value = '';
    window.location.href = 'Movimientos.html';
  } else {
    intentosFallidos++;
    Swal.fire('Credenciales inválidas.')

    if (intentosFallidos >= maxIntentos) {
      Swal.fire('Has superado el número máximo de intentos. ¡Inténtalo más tarde!');
      loginForm.style.display = 'none';
    }
  };
});