/*


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();




*/



/**
 * 1. El Generador de Prefijos (Función que retorna otra función) 
 * Crea una función genérica que reciba una cadena (un prefijo). 
 * 
 * Esta debe retornar una nueva función que, al recibir un nombre, devuelva el prefijo y el 
 * nombre combinados.
 * 
 * Propósito: Entender cómo "configurar" funciones antes de usarlas.
 */
//1. El Generador de Prefijos (Función que retorna otra función)


console.log();
console.log('<----------------------------------------->');
console.log('<----1. El Generador de Prefijos (Función que retorna otra función)----->');

let valorDelPrefijo = ""

const funcionCombinadora = function (nombreUsuario)  {

    console.log();
    console.log(`el nombre + el prefijo: ${valorDelPrefijo} ${nombreUsuario}`);
    console.log();

};



function generadorPrefijo(prefijo){
    
    valorDelPrefijo = prefijo;

    return funcionCombinadora;
}


const generador = generadorPrefijo('Sr');

generador('Mejia');



/**
 * 2. El Volumen de un Prisma (Currying)
 * Implementa una función para calcular el volumen de un prisma rectangular utilizando Currying. 
 * La invocación debe ser estrictamente calcularVolumen(largo)(ancho)(alto).
 * 
 * Propósito: Practicar la descomposición de funciones multi-argumento.
 */
//2. El Volumen de un Prisma (Currying)


console.log();
console.log('<----------------------------------------->');
console.log('<----2. El Volumen de un Prisma (Currying)----->');

// Volumen = Largo × Ancho × Altura 

function volumenPrisma(largo){
    return function(ancho){
        return function(altura){
            return largo*ancho*altura;
        }
    }
}


console.log();
console.log(`el volumen de un prisma es de : ${volumenPrisma(2)(8)(2)}`);
console.log();




/**
 * 3. Contador Regresivo (Recursión)
 * Escribe una función recursiva que reciba un número entero positivo y muestre en consola una 
 * cuenta regresiva hasta llegar a cero, pero que en cada paso devuelva la suma acumulada de los 
 * números restantes.
 * 
 * Propósito: Manejar el flujo de control y el estado en cada llamada recursiva.
 * 
 */
//3. Contador Regresivo (Recursión)


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Contador Regresivo (Recursión)----->');

function contadorRegresivo(numero){

    if (numero === 0){

        console.log("Cuenta: 0");

        return 0;
    }

    console.log("Cuenta: "+ numero);
    
    let sumaRestante = contadorRegresivo(numero-1)
    let sumaTotalPasoActual = numero+sumaRestante;

    console.log("suma acumulada en este paso: ",numero, ")", sumaTotalPasoActual);

    return sumaTotalPasoActual



}

const valorInicial = 4

const valorFinal = contadorRegresivo(valorInicial)

console.log();
console.log(`valor inicial: ${valorFinal}`);
console.log();
console.log(`la suma total acumulada: ${valorFinal}`);
console.log();




/**
 * 4. Gestor de Memoria Privada (Closure)
 * Desarrolla una función que actúe como un "almacén de secretos". Debe devolver un objeto con 
 * dos métodos: guardarDato(valor) y consultarDato(). El valor guardado no debe ser accesible 
 * desde fuera del objeto bajo ninguna circunstancia.
 * 
 * Propósito: Aplicar la privacidad de datos mediante el ámbito léxico.
 */
//4. Gestor de Memoria Privada (Closure)


console.log();
console.log('<----------------------------------------->');
console.log('<----4. Gestor de Memoria Privada (Closure)----->');

function almacenDatos(){    

    let contrasenia = "";

    return {

        guardarDato: function(clave){
            contrasenia = clave
        },

        consultarDato: function(){
            return{
                nombre:'Pedro',
                cuenta:'corriente',
                banco: 'provincial',
                contrasenia: contrasenia
            }
        

        }

    }
}

const cliente = almacenDatos();

cliente.guardarDato('123456');

console.log();
console.log(`el nombre del cliente es: ${cliente.consultarDato().nombre}`);
console.log();
console.log(`la cuenta del cliente es: ${cliente.consultarDato().cuenta}`);
console.log();
console.log(`el banco del cliente es: ${cliente.consultarDato().banco}`);
console.log();
console.log(`la contraseña del cliente es: ${cliente.consultarDato().contrasenia}`);
console.log();



/**
 * 5. El Promediador Flexible (Parámetros Rest)
 * Crea una función que reciba una etiqueta de texto como primer argumento y luego una cantidad 
 * indefinida de calificaciones numéricas. La función debe retornar un mensaje indicando la 
 * etiqueta y el promedio redondeado de las calificaciones.
 * 
 * Propósito: Procesar colecciones de datos de tamaño variable.
 */
//5. El Promediador Flexible (Parámetros Rest)


console.log();
console.log('<----------------------------------------->');
console.log('<----5. El Promediador Flexible (Parámetros Rest)----->');


const promedioMateria = (materia, ...notas) => {

    let acumuladoMateria = 0;
    let i = 0;
    while (i < notas.length){

        acumuladoMateria +=notas[i];
        i++
    }

    return acumuladoMateria/notas.length;
}

let materia = 'Matematica';
let notas = [15,20,10];

console.log();
console.log(`el promedio de la materia: ${materia} es de ${promedioMateria(materia, ...notas)}`);
console.log();



/**
 * 6. El Validador de Procesos (Callback)
 * Escribe una función que reciba un objeto de datos y un callback. La función principal debe 
 * verificar si el objeto tiene información (no está vacío) y, de ser así, pasar el objeto al 
 * callback para que este lo imprima con un formato específico.
 * 
 * Propósito: Aprender a delegar la lógica de salida a una función externa.
 */
//6. El Validador de Procesos (Callback)


console.log();
console.log('<----------------------------------------->');
console.log('<----El Validador de Procesos (Callback)----->');


function validadorProceso(datosProcesados){

    console.log("Se verificaron los datos procesados y están completos");
    console.log(datosProcesados);

}


function procesarDatos(datos, callback){

    let propiedades = Object.keys(datos)
    let valores = Object.values(datos)

    if (propiedades.length === 0){
        console.log('El objeto esta vacío y no hay nada que procesar');
        return;
    }

    let datosCompletos = true
    for( let i = 0; i < valores.length; i++){        

        if (valores[i] === "" || valores[i] === null || valores[i] === undefined){
            console.log("hay un parámetro del objeto que esta vació");
            datosCompletos = false;
            break;
        }

    }

    if (datosCompletos){
        callback(datos);
    }else{
        console.log('No se pudo procesar por datos incompletos');
    }
}


let miObjeto = {
    nombre: 'luis',
    cargo: 'supervisor',
    aniosServicios: 5

}

let objetoVacio = {   

}


let faltaUnDato = {
    nombre: 'luis',
    cargo: '',
    aniosServicios: 5

}


procesarDatos(miObjeto,validadorProceso);
//procesarDatos(objetoVacio,validadorProceso);
//procesarDatos(faltaUnDato,validadorProceso);


/**
 * 7. El Configurador de Descuentos (Función Parcial)
 * Define una función base que reciba dos parámetros: un porcentajeDescuento y un montoTotal. A 
 * partir de ella, utiliza .bind() o un closure para crear una función parcial que tenga siempre 
 * un descuento del 15% fijo, de modo que solo necesites pasarle el monto.
 * 
 * Propósito: Cumplir con la técnica de fijar argumentos en una firma predefinida.
 */
//7. El Configurador de Descuentos (Función Parcial)


console.log();
console.log('<----------------------------------------->');
console.log('<----El Configurador de Descuentos (Función Parcial)----->');

function calculoDescuento(porcentajeDescuento){

    let descuento = porcentajeDescuento/100

    return{
        resultado: function(montoTotal){

            let resultadoDescuento = montoTotal-(descuento*montoTotal);

            return resultadoDescuento;
        }
    }
}

const valorDescuento = calculoDescuento(50);

let costoInicial = 100;

console.log();
console.log(`el costo inicial del producto es de: ${costoInicial}`);
console.log();
console.log(`costo aplicando el descuento: ${valorDescuento.resultado(costoInicial)}`);
console.log();
console.log('intentando de accesar al % de descuento: ',valorDescuento.descuento);
console.log();



/**
 * 8. El Fusionador de Configuraciones (Spread Operator)
 * Crea dos objetos: uno con configuraciones por defecto (ej. brillo: 50, volumen: 70) y otro con 
 * configuraciones del usuario. Utiliza el operador Spread para fusionarlos en un tercer objeto 
 * donde prevalezcan los valores del usuario.
 * 
 * Propósito: Manipulación eficiente de estructuras de datos (objetos).
 */
//8. El Fusionador de Configuraciones (Spread Operator)


console.log();
console.log('<----------------------------------------->');
console.log('<----8. El Fusionador de Configuraciones (Spread Operator)----->');


let configuracionDefecto = {
    brillo : 50,
    volumen: 70
}


const configuracionUsuario = {
    ...configuracionDefecto,
    contraste: 100,
    brillo: 80,
    volumen: 100
}


let configuracionFinal = configuracionUsuario;

console.log();
console.log('la configuración del usuario es: ', configuracionFinal);
console.log();




/**
 * 9. El Conversor de Temperatura (Retorno Implícito)
 * Implementa una Arrow Function de una sola línea que convierta grados Celsius a Fahrenheit. La 
 * fórmula es (C * 9/5) + 32. Recuerda no usar la palabra return ni llaves.
 * 
 * Propósito: Refinar la sintaxis concisa de ES6.
 */
//9. El Conversor de Temperatura (Retorno Implícito)


console.log();
console.log('<----------------------------------------->');
console.log('<----El Conversor de Temperatura (Retorno Implícito)----->');

let conversionTemperaturaFatenhait = (gradosCelcius) => (gradosCelcius*9/5)+32

let valorTemperaturaCelcuis = 140

console.log();
console.log(`los grados ${valorTemperaturaCelcuis}ºC equivalen a: ${conversionTemperaturaFatenhait(valorTemperaturaCelcuis)}ºF`);
console.log();




/**
 * 10. El Rastreador de Eventos (This Léxico)
 * Crea un objeto que represente un temporizador. Este debe tener una propiedad segundos y un 
 * método que, al ejecutarse, use un setInterval con una Arrow Function para incrementar this.
 * segundos cada segundo y mostrarlo en consola.
 * 
 * Propósito: Demostrar que las funciones de flecha no crean su propio contexto de this.
 */
//10. El Rastreador de Eventos (This Léxico)



console.log();
console.log('<----------------------------------------->');
console.log('<----10. El Rastreador de Eventos (This Léxico)----->');

class Temporizador{

    constructor(segundos){

        this.segundos = segundos

    }
    intervalo(){

        setInterval(() => {
            this.segundos ++

            console.log('tiempo transcurrido: ', this.segundos);
            
        }, 1000);

        
    }
}

let incrementoSegundo = new Temporizador(0);

incrementoSegundo.intervalo();




