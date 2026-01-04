function entradaDato(dato){
    
    
    let patronSimbolos = /[\s!¡¿?.,;:]/g;

    // Normalización para eliminar acentos (Ej: á -> a)
    let datoNormalizado = dato.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let datoTransformado = datoNormalizado.toLowerCase().replace(patronSimbolos, "");;

    //let patronPalabrasAcentuadas = /[áÁéÉíÍóÓÚu]/g
    //let patronPalabrasAcentuadas = /[áéíóu]/gi //Con este patrón se contemplan las mayúsculas
    //datoTransformado = datoTransformado.replace(patronSimbolos, "");

    return datoTransformado
}

function invertirDato(dato2){

    let datoInvertido = dato2.split('').reverse().join('');

    return datoInvertido;
}


function comparacionPalabra( dato3, dato4){

    let arregloDato3 = dato3.split(' ')
    let arregloDato4 = dato4.split(' ')

    let resultado = true;

    arregloDato3.forEach((elemento, indice ) => {

        if (elemento !== arregloDato4[indice]){

            resultado = false
        }
        
    });

    return resultado;

}


let palabra = 'Isaac no ronca así.'

let datoTransformado = entradaDato(palabra)

console.log();
console.log('<------------Para validar si una palabra o una frase es palindromo ');
console.log();
console.log('Palabra o expresión a validar : ', palabra);
console.log();
console.log('Palabra o expresión  transformada : ', datoTransformado);

let datoInvertido = invertirDato(datoTransformado);

console.log();
console.log(`Palabra o expresión  Invertida: ${datoInvertido}`);
console.log();

let resultado= comparacionPalabra(datoTransformado,datoInvertido);

console.log();
console.log(`La palabra o expresión es un palíndromo : ${resultado}`);
console.log();