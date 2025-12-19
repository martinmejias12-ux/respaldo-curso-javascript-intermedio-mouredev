
/*


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();




*/

/**
 * Define una función genérica que no reciba parámetros inicialmente y cuyo único propósito sea 
 * retornar una segunda función. 
 * La función retornada debe mostrar un mensaje simple en consola al ser ejecutada.
 */
// 1. Crea una función que retorne a otra función
console.log();
console.log('<----------------------------------------->');
console.log('<----1. Crea una función que retorne a otra función----->');


const mensaje = function (){
    console.log();
    console.log('Saludos desde una función que esta retornando');
    console.log();
}
function funcionRetorno(){

    return mensaje();
}

const recibiendoMensaje = funcionRetorno();



/**
 * Desarrolla una función que permita multiplicar tres números utilizando la técnica de Currying. 
 * La estructura debe permitir que la función sea invocada de la forma fn(a)(b)(c) para obtener 
 * el producto final.
 */
// 2. Implementa una función currying que multiplique 3 números


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Implementa una función currying que multiplique 3 números----->');

function multiplicar(dato1){
    return function (dato2){
        return function (dato3){
            return dato1*dato2*dato3
        }
    }
}

const resultadoMultiplicacion = multiplicar(2)(3)(4);

console.log();
console.log(`el resultado de la funcion currying es de: ${resultadoMultiplicacion}`);
console.log();

/**
 * Escribe una función recursiva que calcule la potencia de un número base elevado a 
 * un exponente dado (base exponente). Debes establecer un caso base para detener la 
 * recursión cuando el exponente sea igual a cero.
 */
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente----->');

function calculoPotencia(base,exponente){

    if (exponente === 0){
        return 1;
    }

    return base * calculoPotencia(base,exponente-1);
}

const base = 2;
const exponente = 8;

console.log();
console.log(`la potencia de ${base} con el exponente ${exponente} es de: ${calculoPotencia(base,exponente)}`);
console.log();





/**
 * Crea una función llamada createCounter que acepte un número como valor inicial. 
 * Esta debe retornar un objeto con tres métodos: increment (aumenta el valor en 1), 
 * decrement (disminuye el valor en 1) y getValue (retorna el valor actual). 
 * La variable del contador debe ser privada y solo accesible a través de estos métodos.
 */
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado


console.log();
console.log('<----------------------------------------->');
console.log('<----Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado----->');

function createCounter (valorInicial){
    
    let valor = valorInicial;

    return {
        incremento: function(){
            valor +=1
            return valor
            
        },
        decremento: function(){
            valor -=1
            return valor
        },
        getValue : function(){
            return valor;
        }

    }
        

}


const modificarValor = createCounter(10);

console.log();
//console.log(`el valor inicial es de: ${modificarValor.getValue()}`);
console.log();
modificarValor.incremento();
modificarValor.incremento();
modificarValor.incremento();
console.log();
console.log(`el valor después de los incrementos: ${modificarValor.getValue()}`);
modificarValor.decremento();
modificarValor.decremento();
modificarValor.decremento();
modificarValor.decremento();
modificarValor.decremento();
console.log();
console.log();
console.log(`el valor después de los decrementos: ${modificarValor.getValue()}`);
console.log();
console.log();
console.log(`el valor inicial es de: ${modificarValor.valor}`);
console.log();





/**
 * Implementa una función llamada sumManyTimes que reciba dos argumentos: un multiplicador 
 * y una cantidad indefinida de números mediante el operador Rest. La función debe sumar 
 * todos los números recibidos y, finalmente, multiplicar ese total por el valor del primer argumento.
 */
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier




/**
 * Desarrolla una función que reciba una lista de números y una función de tipo callback. 
 * La función principal debe sumar todos los elementos de la lista y, una vez obtenida la suma total, 
 * invocar al callback pasando dicho resultado como argumento.
 */
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función


/**
 * Crea una función base que reciba dos parámetros. A partir de ella, genera una función parcial (utilizando el método .
 * bind o una clausura) que fije el primer parámetro con un valor constante, permitiendo que la nueva función solo 
 * requiera el segundo parámetro para ejecutarse.
 */
// 7. Desarrolla una función parcial


/**
 * Crea dos arreglos de elementos genéricos. Utiliza el operador Spread (...) 
 * para crear un tercer arreglo que combine los elementos de ambos arreglos 
 * originales en una sola estructura.
 */
// 8. Implementa un ejemplo que haga uso de Spread


/**
 * Escribe una función de flecha (arrow function) de una sola línea que reciba un valor numérico y 
 * devuelva su cuadrado (multiplicado por sí mismo) haciendo uso de la sintaxis de retorno 
 * implícito (sin el uso de llaves {} ni la palabra return).
 */
// 9. Implementa un retorno implícito


/**
 * Crea un objeto que contenga una propiedad numérica y un método. Dentro de ese método, 
 * utiliza una función de flecha para acceder a la propiedad del objeto mediante this, 
 * demostrando cómo la función de flecha captura el contexto léxico de su entorno padre.
 */
// 10. Haz uso del this léxico