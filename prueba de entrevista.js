

/*1. Lógica de Programación y Algoritmos Básicos*/
/**
 * 
 * A. El Desafío "FizzBuzz"
 * Es el ejercicio más clásico. Consiste en imprimir números del 1 al 100 con reglas específicas.
    
    Paso 1: Crear un bucle que recorra del 1 al 100.

    Paso 2: Si el número es divisible por 3, imprimir "Fizz".

    Paso 3: Si es divisible por 5, imprimir "Buzz".

    Paso 4: Si es divisible por ambos (3 y 5), imprimir "FizzBuzz".

    Paso 5: Si no es ninguno de los anteriores, imprimir el número.
 * 
 */

let i= 1

while (i <= 100){
    //console.log(i);

    if (i % 3 === 0){
        console.log(`${i}: Fizz`);
    }

    if (i % 5 === 0){
        console.log(`${i}: Buzz`);
    }
    
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(`${i}: FizzBuzz`);
    }
    
    if ((i % 3 !== 0) && (i % 5 !== 0)){
        console.log(i);
    }
   
    i++
}

console.log('*******************************************************************');
/**
 * B. Verificador de Palíndromos.
 * Determinar si una palabra se lee igual al derecho y al revés (ejemplo: "ana" o "radar").

    Paso 1: Recibir una cadena de texto.
    entrada : valor unico
    salida : valor unico
    recipiente : variable
    alerta : ninguna
    patron : ninguno
    filtro ninguno

    Paso 2: Convertir todo a minúsculas para evitar errores.

    Paso 3: Invertir la cadena de texto.

    Paso 4: Comparar la cadena original con la invertida y devolver un valor booleano (true/false).
 */

let palabra = 'AnA';

let palabraMinuscula = palabra.toLowerCase();

let palabraOriginalArreglo = palabraMinuscula.split("");

console.log(palabraOriginalArreglo);

let palabraInvertida = palabraMinuscula.split("").reverse();

console.log(palabraInvertida);

let resultado = true;

palabraOriginalArreglo.forEach((elemento,indice)=>{

    if (elemento !== palabraInvertida[indice]){
        resultado = false
    }
});


console.log();
console.log('<--------------Validar si la palabra es Palíndromo-------------->');
console.log();
console.log(`Palabra original: ${palabra}`);
console.log();
console.log(`Palabra Original convertida en arreglo: ${palabraOriginalArreglo}`);
console.log();
console.log(`Palabra Invertida: ${palabraInvertida}`);
console.log();
console.log(`La palabra es palíndromo: ${resultado}`);
console.log();

console.log('**********************************************************************');

/*2. Manipulación de Arrays (Listas) y Objetos*/

/**
 * A. Encontrar el número más grande en un array
    Paso 1: Definir un array de números genéricos.

    Paso 2: Crear una variable llamada máximo e inicializarla con el primer valor del array.

    Paso 3: Recorrer el array con un bucle.

    Paso 4: En cada posición, comparar si el número actual es mayor que máximo.

    Paso 5: Si es mayor, actualizar máximo con ese valor.
 */

let listaNumeros = [10,105,20,29,84,63,78];

let maximo= listaNumeros[0];

listaNumeros.forEach((elemento,indice)=>{

    if (elemento > maximo){
        maximo = elemento;
    }
});

console.log();
console.log('<-------Manipulación de Arrays (Listas) y Objetos----------->');
console.log();
console.log('arreglo de números: ', listaNumeros);
console.log();
console.log(`el numero mayor del arreglo es: ${maximo}`);
console.log();
console.log('*************************************************************');


/*B. Eliminar duplicados de una lista*/
/**
 *  Paso 1: Tener un array con valores repetidos.

    Paso 2: Crear un nuevo array vacío o usar una estructura de datos tipo Set (que no admite duplicados).

    Paso 3: Recorrer el array original y verificar si el elemento ya existe en el nuevo.

    Paso 4: Si no existe, agregarlo.
 */

let arregloNumeros = [10,25,34,25,85,10,90,85];

let valoresUnicos = new Set(arregloNumeros);

console.log();
console.log('<------Eliminar duplicados de una lista utilizando Set----------');
console.log();
console.log('Arreglo Original: ', arregloNumeros);
console.log();
console.log('Arreglo sin duplicados: ',valoresUnicos);
console.log();

console.log();
console.log('<------Eliminar duplicados de una lista usando otro arreglo----------');
console.log();

console.log('Arreglo Original: ', arregloNumeros);
console.log();

let arregloSinDuplicados = [];

arregloNumeros.forEach((elemento, indice)=>{
    
    if (!arregloSinDuplicados.includes(elemento))

        arregloSinDuplicados.push(elemento);

});

console.log('Arreglo sin duplicados: ', arregloSinDuplicados);
console.log();

console.log('*************************************************************');


/* 3. Consultas de Base de Datos (SQL)
/**
 * Si la entrevista incluye backend, te pedirán consultas básicas sobre tablas genéricas.

    A. Selección con Filtros y Ordenamiento
    Paso 1: Seleccionar todas las columnas de una tabla (ej. tabla_usuarios).

    Paso 2: Filtrar por una condición (ej. donde la edad sea mayor a 18).

    Paso 3: Ordenar los resultados por nombre de forma ascendente.
 */

/**
 * Aun cuando no estoy utilizando SQL voy a dar respuestas a través de este método
 * 
 * Para el Paso 1: Seleccionar todas las columnas de una tabla (ej. tabla_usuarios).
 * Select * From tabla_usuarios;
 * 
 * 
 * Para el Paso 2: Filtrar por una condición (ej. donde la edad sea mayor a 18).
 * Select nombre From tabla_usuarios Where edad>18;
 * 
 * Para el Paso 3: Ordenar los resultados por nombre de forma ascendente.
 * Select nombre From tabla_usuarios ORDER BY nombre ASC;
 * 
 * 
 */