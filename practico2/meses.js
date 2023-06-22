const readlineSync = require('readline-sync');
let numMes = readlineSync.question("Ingrese un numero entero del 1 al 12: ");

numMes = Number(numMes);

let cantidadDias = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31 
];

if (numMes >= 1 && numMes <= 12) {
  let nombreMes;

  switch (numMes) {
    case 1:
      nombreMes = "Enero";
      break;
    case 2:
      nombreMes = "Febrero";
      break;
    case 3:
      nombreMes = "Marzo";
      break;
    case 4:
      nombreMes = "Abril";
      break;
    case 5:
      nombreMes = "Mayo";
      break;
    case 6:
      nombreMes = "Junio";
      break;
    case 7:
      nombreMes = "Julio";
      break;
    case 8:
      nombreMes = "Agosto";
      break;
    case 9:
      nombreMes = "Septiembre";
      break;
    case 10:
      nombreMes = "Octubre";
      break;
    case 11:
      nombreMes = "Noviembre";
      break;
    case 12:
      nombreMes = "Diciembre";
      break;
  }

  console.log("La cantidad de dias del mes de %s es %i.", nombreMes, cantidadDias[numMes - 1]);
} else {
  console.log("El numero no es valido.");
}
