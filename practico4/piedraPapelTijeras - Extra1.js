const readlineSync = require('readline-sync');

const JUGADA_PIEDRA = "piedra";
const JUGADA_PAPEL = "papel";
const JUGADA_TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
  const opciones = [JUGADA_PIEDRA, JUGADA_PAPEL, JUGADA_TIJERAS];
  let indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  const jugada = readlineSync.question("Ingresa tu jugada (piedra, papel o tijeras): ");
  return jugada.toLowerCase();
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (
    (jugadaComputadora === JUGADA_PIEDRA && jugadaUsuario === JUGADA_TIJERAS) ||
    (jugadaComputadora === JUGADA_TIJERAS && jugadaUsuario === JUGADA_PAPEL) ||
    (jugadaComputadora === JUGADA_PAPEL && jugadaUsuario === JUGADA_PIEDRA)
  ) {
    return "gana la computadora.";
  } else if (
    (jugadaUsuario === JUGADA_PIEDRA && jugadaComputadora === JUGADA_TIJERAS) ||
    (jugadaUsuario === JUGADA_TIJERAS && jugadaComputadora === JUGADA_PAPEL) ||
    (jugadaUsuario === JUGADA_PAPEL && jugadaComputadora === JUGADA_PIEDRA)
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
