const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
  const opciones = ["piedra", "papel", "tijeras"];
  let indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  const jugada = readlineSync.question("Ingresa tu jugada (piedra, papel o tijeras): ");
  return jugada.toLowerCase();
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
  ) {
    return "gana la computadora.";
  } else if (
    (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra")
  ) {
    return "ganaste ¡Felicitaciones!";
  } else {
    return "empate.";
  }
}

let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log("La computadora eligio: " + jugadaComputadora);
console.log("El usuario eligio: " + jugadaUsuario);
console.log("El resultado es: " + resultado);
