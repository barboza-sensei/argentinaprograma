let cita = "Tres tristes tigres comen trigo en un trigal";

let substring = "tigres comen trigo";

let tamanoDeCita = cita.length;
console.log("El tama�o de la cita es: " + tamanoDeCita);

let indice = cita.indexOf(substring);
console.log("El �ndice del substring es: " + indice);

let citaRevisada = cita.slice(0,indice)+ substring;
console.log(citaRevisada);