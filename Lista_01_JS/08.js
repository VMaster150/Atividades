let notas = [5.5, 7.0, 8.2, 4.9, 9.5];
const novasNotas = notas.filter((notas) => notas > 6);
const novasArredondadas = novasNotas.map((Notas) => Math.round(Notas));

console.log(novasArredondadas);