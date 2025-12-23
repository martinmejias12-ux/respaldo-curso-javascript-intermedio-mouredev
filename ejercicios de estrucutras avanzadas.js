/*


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();




*/


/**
 * Utiliza el siguiente array de objetos para obtener el total de ventas de los productos cuyo 
 * precio es mayor a 15, aplicando un recargo del 10% a esos productos seleccionados:

    JavaScript

    const datos_ejercicio_1 = [
    { nombre: "elemento_a", valor: 10 },
    { nombre: "elemento_b", valor: 20 },
    { nombre: "elemento_c", valor: 15 },
    { nombre: "elemento_d", valor: 25 },
    { nombre: "elemento_e", valor: 30 }
    ];
 */
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección


console.log();
console.log('<----------------------------------------->');
console.log('<----1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección----->');

const datos_ejercicio_1 = [
    { nombre: "elemento_a", valor: 10 },
    { nombre: "elemento_b", valor: 20 },
    { nombre: "elemento_c", valor: 15 },
    { nombre: "elemento_d", valor: 25 },
    { nombre: "elemento_e", valor: 30 }
];


console.log('lista de productos: ',datos_ejercicio_1);

let productosSeleccionados = datos_ejercicio_1.filter((seleccion) => {
    if (seleccion.valor>15){

        return seleccion.valor
    }
})


console.log();
console.log('lista de productos seleccionados con un costo mayores a 15: ',productosSeleccionados);
console.log();

let aplicarRecargo = productosSeleccionados.map(recargo => {

    return recargo.valor+(recargo.valor*0.1)


});

console.log();
console.log('lista de productos seleccionados con un costo mayores a 15: ',aplicarRecargo);
console.log();


let totalVentas = aplicarRecargo.reduce((acumulado, valorActual) => acumulado +=valorActual)

console.log();
console.log(`el total de ventas es de: ${totalVentas}`);
console.log();


/**
 * Dado el siguiente array, crea uno nuevo con los números elevados al cubo y filtra solo los 
 * resultados que sean pares:

    JavaScript

    const datos_ejercicio_2 = [1, 2, 3, 4, 5, 6, 7, 8];
 */
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares----->');

const datos_ejercicio_2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log();
console.log(`datos del ejercicio: ${datos_ejercicio_2}`);
console.log();

const listadoAlCubo = datos_ejercicio_2
    .map(valorActual => valorActual ** 3)
    .filter(valorActual => valorActual % 2 === 0)




console.log();
console.log(`listado final: ${listadoAlCubo}`);
console.log();





/**
 * Utiliza flat y flatMap para procesar la siguiente estructura y obtener una lista simple de 
 * todos los elementos:

    JavaScript

    const datos_ejercicio_3_anidados = [1, [2, 3], [4, [5, 6]]];

    const datos_ejercicio_3_objetos = [
    { id: 1, etiquetas: ["etiqueta_1", "etiqueta_2"] },
    { id: 2, etiquetas: ["etiqueta_3", "etiqueta_4"] }
    ];
 */
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección----->');

const datos_ejercicio_3_anidados = [1, [2, 3], [4, [5, 6]]];


console.log();
console.log('lista para utilizar flat: ', datos_ejercicio_3_anidados);
console.log();

const datosSimples = datos_ejercicio_3_anidados.flat(2)

//el aplanado lo podemos colocando la cantidad de niveles o la palabra Infinity
//const datosSimples = datos_ejercicio_3_anidados.flat(Infinity)

console.log();
console.log('lista aplanada: ', datosSimples);
console.log();


console.log('<----------------------------------------------------------->');

const datos_ejercicio_3_objetos = [
{ id: 1, etiquetas: ["etiqueta_1", "etiqueta_2"] },
{ id: 2, etiquetas: ["etiqueta_3", "etiqueta_4"] }
];


console.log();
console.log('lista para utilizar flat: ', datos_ejercicio_3_objetos);
console.log();


const objetoAplanado = datos_ejercicio_3_objetos.flatMap(objetosAnidados => {

    return objetosAnidados.etiquetas
});

console.log();
console.log(objetoAplanado);
console.log();


/**
 * Ordena el siguiente array de números de mayor a menor:

    JavaScript

    const datos_ejercicio_4 = [45, 12, 89, 2, 34, 7, 100];
 */
// 4. Ordena un array de números de mayor a menor

console.log();
console.log('<----------------------------------------->');
console.log('<-----4. Ordena un array de números de mayor a menor---->');

const datos_ejercicio_4 = [45, 12, 89, 2, 34, 7, 100];

const ordenDescendente = datos_ejercicio_4.sort((a,b)=> b+a)


console.log();
console.log('lista para ordenar: ',datos_ejercicio_4);
console.log();
console.log('lista en orden descendente: ',ordenDescendente);
console.log();


/**
 * Ejercicio 5: Operaciones con Conjuntos (Sets)
 * Dados los siguientes dos sets, encuentra y almacena en variables distintas su unión, 
 * intersección y diferencia:

    JavaScript

    const set_a = new Set([10, 20, 30, 40, 50]);
    const set_b = new Set([40, 50, 60, 70, 80]);
 */
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos


console.log();
console.log('<----------------------------------------->');
console.log('<----5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos----->');

const set_a = new Set([10, 20, 30, 40, 50]);
const set_b = new Set([40, 50, 60, 70, 80]);


console.log();
console.log('PARA ENCONTRAR LA UNION');
console.log();
console.log('DE set_a:', set_a);
console.log('DE set_a:', set_b);
console.log();

const unionSets = new Set([...set_a],[...set_b])


console.log();
console.log('valores únicos: ',unionSets);
console.log();
console.log('mostrando los valores unicos en un arreglo: ',[...unionSets]);
console.log();


const interseccion = new Set([...set_a].filter(elemento => set_b.has(elemento)))

console.log();
console.log('la intersección de los dos Set: ',interseccion);
console.log();
console.log('mostrando la intersección en un arreglo: ',[...interseccion]);
console.log();


const diferencia = new Set([...set_a].filter(elemento => !set_b.has(elemento)))

console.log();
console.log('la diferencia de los dos Set: ',diferencia);
console.log();
console.log('mostrando la diferencia en un arreglo: ',[...diferencia]);
console.log();




/**
 * Toma los resultados obtenidos en el Ejercicio 5 e itera sobre cada uno de ellos para mostrar 
 * sus elementos por consola.
 */
// 6. Itera los resultados del ejercicio anterior

const iteracionUnicos = [...unionSets].forEach( elemento => console.log('elemento único dentro del arreglo: ', elemento));

console.log();

const iteracionInterseccion = [...interseccion].forEach(elemento => console.log('elementos presente en ambos set (interseeción): ',elemento));

console.log();

const iteracionDiferencia = [...diferencia].forEach( elemento => console.log('los elementos diferentes en los set: ',elemento))


/**
 * Ejercicio 7: Estructura de Diccionario (Map)
 * Crea un Map llamado mapa_usuarios e inserta los siguientes datos (usa el ID como clave y el 
 * objeto como valor). Luego, itera el mapa para mostrar la información:

    ID: 101 -> { nombre: "usuario_1", edad: 25, email: "user1@generico.com" }

    ID: 102 -> { nombre: "usuario_2", edad: 17, email: "user2@generico.com" }

    ID: 103 -> { nombre: "usuario_3", edad: 30, email: "user3@generico.com" }

    ID: 104 -> { nombre: "usuario_4", edad: 15, email: "user4@generico.com" }
 */
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos



console.log();
console.log('<----------------------------------------->');
console.log('<----7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos----->');


const mapaUsuarios = new Map([

    [101, {nombre:"usuario_1", edad:25, email:"user1@generico.com"}],
    [102, {nombre:"usuario_2", edad:17, email:"user2@generico.com"}],
    [103, {nombre:"usuario_3", edad:30, email:"user3@generico.com"}],
    [104, {nombre:"usuario_4", edad:15, email:"user4@generico.com"}] 

]);


const obteniendoDatos = [...mapaUsuarios.values()].flatMap( elemento => {

    return elemento

    
});

console.log();
console.log(obteniendoDatos); 
console.log();

const iteracionDeDatos = [...obteniendoDatos].forEach( elemento => {

    console.log();
    console.log('nombre: ', elemento.nombre);
    console.log('edad: ',elemento.edad);
    console.log('email: ',elemento.email);
    console.log();
});



/**
 * Utilizando el mapa_usuarios del ejercicio anterior, crea un array que contenga únicamente los 
 * nombres de los usuarios.
 */
// 8. Dado el mapa anterior, crea un array con los nombres


console.log();
console.log('<----------------------------------------->');
console.log('<----8. Dado el mapa anterior, crea un array con los nombres----->');


const obtencionNombres = obteniendoDatos.map(elemento => elemento.nombre)


console.log();
console.log(obtencionNombres);
console.log();





/**
 * Utilizando el mapa_usuarios, obtén un array con los emails de los usuarios que sean mayores de 
 * edad (18 años o más) y transforma ese array resultante en un Set.
 */
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set


const mayoresEdad = obteniendoDatos.filter(elemento => {

    if (elemento.edad >= 18){

        return elemento.email
    }
});

const correos = mayoresEdad.map(elemento => elemento.email)

const correoSet = new Set(correos)
console.log();
console.log(correos);
console.log();
console.log(correoSet);
console.log();



/**
 * Transforma el mapa_usuarios en un objeto literal.
 * 
 * A continuación, transforma ese objeto en un nuevo Map donde la clave sea el email de cada 
 * usuario y el valor sea el objeto con todos sus datos.
 */
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

console.log('<--- 10. INICIO DE TRANSFORMACIONES --->');

// PASO A: Transformar el mapa en un objeto literal
// Las claves del objeto serán los IDs (101, 102, etc.)
const objetoUsuarios = Object.fromEntries(mapaUsuarios);

console.log("A. Objeto literal obtenido (Clave es el ID):");
console.log(objetoUsuarios);

// PASO B: Transformar el objeto en un nuevo Mapa usando el EMAIL como clave
// Primero extraemos los valores (los objetos de usuario)
const listaDeUsuarios = Object.values(objetoUsuarios);

// Creamos los pares [email, datos_del_usuario]
const paresEmailUsuario = listaDeUsuarios.map(usuario => {
    return [usuario.email, usuario];
});

// Inicializamos el nuevo Mapa
const mapaPorEmail = new Map(paresEmailUsuario);

console.log("\nB. Nuevo Mapa creado (Clave es el Email):");
console.log(mapaPorEmail);

// PRUEBA DE FUNCIONAMIENTO
console.log("\n--- Verificación ---");
const emailABuscar = "user3@generico.com";
const datosEncontrados = mapaPorEmail.get(emailABuscar);

console.log(`Buscando datos para: ${emailABuscar}`);
console.log(`Resultado: Nombre = ${datosEncontrados.nombre}, Edad = ${datosEncontrados.edad}`);
