
/*
FORMA DE HACERLO MAS RÁPIDO Y SENCILLO
function palabraAnagrama (dato1, dato2) {

    if (dato1.length !== dato2.length){

        return false    
    }


    let conversionDato1 = dato1.split("").sort().join("")
    let conversionDato2 = dato2.split("").sort().join("")

    if (conversionDato1 === conversionDato2){

        return true;
    }

    
}

let palabra1 = 'amor';
let palabra2 = 'roma';
console.log(`la palabra 1: ${palabra1} y la palabra 2: ${palabra2} son anagramas: ${palabraAnagrama(palabra1.toLowerCase(),palabra2.toLowerCase())}`);
*/

/*FORMA DE HACERLO UN POCO MAS COMPLEJA*/

/**
 * Funcion para:
 * primeo verificar los datos, colocar todos los datos en minúsculas y luego validar su longitud
 * @param {*} dato1 es un string
 * @param {*} dato2 es un string
 * @returns dos arreglos 
 */
function verificarDatos (dato1,dato2){

    let dato1Transformado = dato1.toLowerCase().split("") 
    let dato2Transformado = dato2.toLowerCase().split("") 

    
    if ( dato1Transformado.length !== dato2Transformado.length){
                
        return null;

    }else if ( dato1Transformado.length === dato2Transformado.length){
        return {dato1Transformado,dato2Transformado};
    }

}

/**
 * Recibes un arreglo para sacar la cantidad de caracteres hay por cada dato
 * @param {*} arreglo 
 * @returns 
 */
function cantidadLetras (arreglo){
    let cargarArreglo = {};

    let revisionArreglo = arreglo.forEach(elemento => {

        if (elemento in cargarArreglo){

            cargarArreglo[elemento] += 1

            
        }else{
            cargarArreglo[elemento] = 1
            

        }
            
    });

    return cargarArreglo
}

/**
 * Esta función recibe los datos en forma de objetos para comparar la cantidad de caracteres que tiene cada objeto
 * @param {*} cantidad1 
 * @param {*} cantidad2 
 * @returns 
 */
function compararDatosCantidad(cantidad1, cantidad2) {

    let resultado = true;

    for (const letra in cantidad1) {
        if (cantidad1[letra] !== cantidad2[letra]){
            resultado = false;
            break;
        }
        
        
    }   

    return resultado;
}


let datoPalabra1 = 'AMOR';
let datoPalabra2 = 'ROMA';

let resultadoVerificacion = verificarDatos(datoPalabra1,datoPalabra2)

console.log();
console.log('<-------------Palabras a validar si son Anagramas');
console.log();
console.log('Palabra1: ', datoPalabra1);
console.log('Palabra2: ', datoPalabra2);
console.log();

if( resultadoVerificacion === null){
    console.log();
    console.log('\n[ERROR]: Las palabras tienen longitudes diferentes. No pueden ser anagramas.');
    console.log();
}else{

    let {dato1Transformado, dato2Transformado} = verificarDatos (datoPalabra1,datoPalabra2);
    
    console.log();
    console.log('<------DATOS TRANSFORMADOS EN ARREGLOS------------>');
    console.log('dato1: ',dato1Transformado);
    console.log('dato2: ',dato2Transformado);
    console.log(); 

    console.log('<------CANTIDAD DE LETRAS POR ARREGLO------------>');
    console.log();
    console.log('PARA EL DATO 1 TENGO: ',cantidadLetras(dato1Transformado));
    console.log();
    console.log('PARA EL DATO 2 TENGO: ',cantidadLetras(dato2Transformado));

    let cantidad1 = cantidadLetras(dato1Transformado);
    let cantidad2 = cantidadLetras(dato2Transformado);

    console.log();
    console.log('<------LAS DOS PALABRAS SON ANAGRAMAS------------>');
    console.log();
    console.log(`Estas palabras son anagramas: ${compararDatosCantidad(cantidad1,cantidad2)}`);
        
}

