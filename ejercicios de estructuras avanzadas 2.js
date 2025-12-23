/*


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();




*/

/**
 * 1. Gestión de Inventario con Map
    Enunciado: Actualiza el stock en el almacén basándote en el arreglo ventas. 
    Si el stock llega a 0, elimina el producto del Map.

    JavaScript

    const almacen = new Map([
    [1, { nombre: "Monitor", stock: 5 }],
    [2, { nombre: "Teclado", stock: 10 }],
    [3, { nombre: "Ratón", stock: 3 }]
    ]);

    const ventas = [
    { id: 1, cantidad: 5 },
    { id: 3, cantidad: 2 }
    ];
*/

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Gestión de Inventario con Map----->');



const almacen = new Map([
    [1, { nombre: "Monitor", stock: 5 }],
    [2, { nombre: "Teclado", stock: 10 }],
    [3, { nombre: "Ratón", stock: 3 }]
]);

const ventas = [
{ id: 1, cantidad: 5 },
{ id: 3, cantidad: 2 }
];


console.log();
console.log('Estado inicial del almacén', almacen);
console.log();
console.log();
console.log('Ventas realizadas', ventas);
console.log();


ventas.forEach(elemento => {

    // primero valido por cada elemento de ventas si el elemento se encuentra en el Map de almacen
    if (almacen.has(elemento.id)){

        let objetoHallado = almacen.get(elemento.id)
        
        let stockActualizado = objetoHallado.stock-elemento.cantidad
        
        if (stockActualizado > 0){
            objetoHallado.stock = stockActualizado
            almacen.set(elemento.id, objetoHallado)
        }else{
            almacen.delete(elemento.id)
        }

        //console.log();
        //console.log(stockActualizado);
        //console.log();
    }
    
    
});




console.log();
console.log('Estado final del almacén', almacen);
console.log();


/**
 * 2. Filtrado de Usuarios Únicos con Set
    
    Enunciado: Crea una lista de correos electrónicos sin duplicados a partir del arreglo registros y conviértela nuevamente en un arreglo.

    JavaScript

    const registros = [
    "usuario1@correo.com",
    "usuario2@correo.com",
    "usuario1@correo.com",
    "usuario3@correo.com",
    "usuario2@correo.com"
    ];
*/


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Filtrado de Usuarios Únicos con Set----->');

const registros = [
"usuario1@correo.com",
"usuario2@correo.com",
"usuario1@correo.com",
"usuario3@correo.com",
"usuario2@correo.com"
];


let listaCorreosUnicos = [...new Set(registros)]




console.log();
console.log(listaCorreosUnicos);
console.log();




/** 
 * 3. Desestructuración Profunda y Valores por Defecto
    Enunciado: Extrae en variables independientes los valores de calle, ciudad y pais. Si pais no existe en el objeto, debe tomar el valor "Desconocido".

    JavaScript

    const cliente = {
    id: 501,
    contacto: {
        nombre: "Persona Generica",
        ubicacion: {
        calle: "Avenida Principal 123",
        ciudad: "Ciudad Central"
        }
    }
    };
*/


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Desestructuración Profunda y Valores por Defecto----->');

const cliente = {
    id: 501,
    contacto: {
        nombre: "Persona Genérica",
        ubicacion: {
            calle: "Avenida Principal 123",
            ciudad: "Ciudad Central"
        }
    }
};

console.log();
console.log('datos del cliente: ', cliente);
console.log();

const {id, contacto} = cliente

let datosIdentificacion = id
let datosContacto = contacto

const {ubicacion} = datosContacto

let datosDeUbicacion = ubicacion

let datosDeUbicacionNuevo = {...datosDeUbicacion, pais: 'Desconocido'}

const {calle : calleObjeto,ciudad : ciudadObjeto, pais : paisObjeto} = datosDeUbicacionNuevo



console.log();
console.log(datosIdentificacion);
console.log();
console.log(datosContacto);
console.log();
console.log(datosDeUbicacion);
console.log();
console.log('calle del objeto: ',calleObjeto);
console.log();
console.log('ciudad del objeto: ',ciudadObjeto);
console.log();
console.log('país del objeto: ',paisObjeto);


/**
 * 4. Agrupación con Reduce
    Enunciado: Agrupa los objetos del arreglo productos por su propiedad categoria, devolviendo un objeto donde cada llave sea la categoría y su valor un arreglo de productos asociados.

    JavaScript

    const productos = [
    { nombre: "Manzana", categoria: "Frutas" },
    { nombre: "Lechuga", categoria: "Verduras" },
    { nombre: "Pera", categoria: "Frutas" },
    { nombre: "Zanahoria", categoria: "Verduras" }
    ];
*/

/** 
 * 5. Fusión de Objetos (Deep Merge)
    Enunciado: Combina ajustesBase con ajustesUsuario de tal manera que las propiedades de usuario sobrescriban las base, incluyendo los objetos anidados.

    JavaScript

    const ajustesBase = {
    tema: "claro",
    notificaciones: { email: true, sms: false },
    idioma: "es"
    };

    const ajustesUsuario = {
    tema: "oscuro",
    notificaciones: { sms: true }
    };
*/


/** 
 * 6. Transformación de Matrices a Objetos
    Enunciado: Transforma la matriz matrizDatos en un arreglo de objetos, utilizando los elementos del primer arreglo como nombres de propiedades.

    JavaScript

    const matrizDatos = [
    ["nombre", "puesto", "nivel"],
    ["Empleado A", "Desarrollador", "Senior"],
    ["Empleado B", "Diseñador", "Junior"],
    ["Empleado C", "Analista", "Mid"]
    ];
*/

/** 
 * 7. Contador de Frecuencia con Map
    Enunciado: Cuenta la frecuencia de aparición de cada palabra en el string párrafo y almacena los resultados en un Map donde la palabra es la llave y el conteo el valor.

    JavaScript

    const párrafo = "javascript es un lenguaje y javascript es versátil";
*/

/** 
 * 8. Búsqueda en Estructuras Anidadas
    Enunciado: Crea una función que busque y retorne el objeto que coincida con un id específico dentro de una estructura de árbol.

    JavaScript

    const estructuraEmpresa = {
    id: 1,
    nombre: "Director",
    subordinados: [
        {
        id: 2,
        nombre: "Gerente A",
        subordinados: [{ id: 4, nombre: "Asistente A", subordinados: [] }]
        },
        {
        id: 3,
        nombre: "Gerente B",
        subordinados: []
        }
    ]
    };
 
*/

/** 
 * 9. Intersección de Conjuntos
    Enunciado: Encuentra los elementos comunes entre los arreglos grupoA y grupoB utilizando la estructura Set para optimizar la búsqueda.

    JavaScript

    const grupoA = [10, 20, 30, 40, 50];
    const grupoB = [30, 50, 70, 90];
*/



/** 
 * 10. Aplanado de Arreglos Multinivel (Flat)
    Enunciado: Dado un arreglo con múltiples niveles de anidación, transfórmalo en un solo arreglo plano de un solo nivel sin utilizar el método .flat() nativo.

    JavaScript

    const datosAnidados = [1, [2, [3, [4, 5]]], 6, [7, 8]];
*/