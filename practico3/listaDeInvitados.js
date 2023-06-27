let invitados = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

for (let i = 0; i < invitados.length; i++) {
  if (invitados[i] === "Jose" || invitados[i] === "Sofia") {
    rechazados.push(invitados[i]);
  } else {
    admitidos.push(invitados[i]);
  }
}

console.log("La lista de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
  console.log('- ' + admitidos[i]);
}

console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log('- ' + rechazados[i]);
}
