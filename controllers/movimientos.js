const botones = document.querySelectorAll('.acciones button');
const formularios = document.querySelectorAll('.formulario-container');

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        formularios.forEach(formulario => formulario.style.display = 'none');
        formularios[index].style.display = 'block';
    });
});

// const nuevoElemento = document.createElement("p");
// nuevoElemento.innerHTML = `Retiro<br>Valor: ${montoARetirar}<br>${fechaActual}`
// document.getElementById("formularioConsultar").appendChild(nuevoElemento)

usuarioActual = JSON.parse(localStorage.getItem("NumeroCuentaActual"))
usuario = JSON.parse(localStorage.getItem(usuarioActual));
function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const tituloPerfil = document.createElement("h2");
tituloPerfil.innerHTML = capitalizarPrimeraLetra(usuario.nombreUsuario);
const numeroCuenta = document.createElement("p");
numeroCuenta.innerHTML = `Numero de cuenta: ${usuario.numeroCuenta}`;
const correoCuenta = document.createElement("p")
correoCuenta.innerHTML = `Correo: ${usuario.correoElectronico}`;

document.getElementById("formularioPerfil").appendChild(tituloPerfil)
document.getElementById("formularioPerfil").appendChild(numeroCuenta)
document.getElementById("formularioPerfil").appendChild(correoCuenta)