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

function jugarUnaPartida() {
  let jugadaComputadora = obtenerJugadaComputadora();
  let jugadaUsuario = obtenerJugadaUsuario();
  let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  console.log("La computadora eligio: " + jugadaComputadora);
  console.log("El usuario eligio: " + jugadaUsuario);
  console.log("El resultado es: " + resultado);
}

function jugarVariasPartidas(numeroPartidas) {
  let puntajeUsuario = 0;
  let puntajeComputadora = 0;

  for (let i = 0; i < numeroPartidas; i++) {
    console.log("----- "+ (i + 1) + "° Jugada -----");
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log("La computadora eligio: " + jugadaComputadora);
    console.log("El usuario eligio: " + jugadaUsuario);
    console.log("El resultado es: " + resultado);

    if (resultado === "ganaste ¡Felicitaciones!") {
      puntajeUsuario++;
    } else if (resultado === "gana la computadora.") {
      puntajeComputadora++;
    }
  }

  console.log("----- Resultado Final -----");
  console.log("Puntaje del usuario: " + puntajeUsuario);
  console.log("Puntaje de la computadora: " + puntajeComputadora);

  if (puntajeUsuario > puntajeComputadora) {
    console.log("Ganaste ¡Felicitaciones!");
  } else if (puntajeComputadora > puntajeUsuario) {
    console.log("Gana la computadora.");
  } else {
    console.log("Empate.");
  }
}

const numeroPartidas = parseInt(readlineSync.question("Ingresa el numero de partidas que queres jugar: "));

if (numeroPartidas === 1) {
  jugarUnaPartida();
} else if (numeroPartidas > 1) {
  jugarVariasPartidas(numeroPartidas);
} else {
  console.log("Numero invalido de partidas . El juego se cerrara.");
}
