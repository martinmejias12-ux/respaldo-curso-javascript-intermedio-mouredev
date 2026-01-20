const biblioteca = [
  { titulo: "El Quijote", disponible: true },
  { titulo: "Cien años de soledad", disponible: false },
  { titulo: "El principito", disponible: true }
];


let resultadoDisponible = biblioteca.filter((elemento,indice)=>{

    return elemento.disponible===true;

});

console.log('resultado de los libros disponibles: ');
console.log(resultadoDisponible);

console.log();

let resultadoNombreMayuscula = biblioteca.map((elemento,indice)=>{

    return elemento.titulo.toUpperCase();

});

console.log('resultado de los nombre de los libros en mayuscula: ');
console.log(resultadoNombreMayuscula);

console.log();